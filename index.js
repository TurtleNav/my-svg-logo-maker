// Import our dependencies
const inquirer = require("inquirer");
const fs = require("fs");

// Import our shape classes then map their string representations to the actual class
const {Circle, Square, Triangle} = require("./lib/shapes");
const shapeMap = new Map([["Circle", Circle], ["Square", Square], ["Triangle", Triangle]]);

const validHexString = new RegExp("^(0x|#)?[a-fA-F0-9]{6}");

// The complete set of all 140 supported HTML named colors (includes seven alternate spellings of each occurence of grey/gray).
// This set object is used to check if a user has provided an accurate color name
const validNamedColors = new Set([
    "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure",
    "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood",
    "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan",

    "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgrey","darkgreen", "darkkhaki","darkmagenta", "darkolivegreen", "darkorange", "darkorchid",
    "darkred","darksalmon","darkseagreen", "darkslateblue", "darkslategray", "darkslategrey", "darkturqoise", "darkviolet","deeppink",
    "deepskyblue", "dimgray", "dimgrey", "dodgerblue",

    "firebrick", "floralwhite", "forestgreen", "fuchsia",
    "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "grey", "green", "greenyellow",
    "honeydew", "hotpink",
    "indianred", "indigo", "ivory",
    "khaki",
    "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgrey", "lightgreen",
    "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightslategrey", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen",

    "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen",
    "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin",

    "navajowhite", "navy",
    "oldlace", "olive","olivedrab", "orange", "orangered", "orchid",
    "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple",
    "red", "rosybrown", "royalblue",

    "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "slategrey", "snow", "springgreen", "steelblue",
    "tan", "teal", "thistle", "tomato", "turquoise",
    "violet",
    "wheat", "white", "whitesmoke",
    "yellow", "yellowgreen"
]);

function isHexColor(color) {
    return !!color.match(validHexString);
}

function validateColorInput(color) {
    return validNamedColors.has(color.trim().toLowerCase()) || !!color.match(validHexString);
}

function writeSVG(svgText) {
    fs.writeFile("logo.svg", svgText, 'utf8', (error) => {});
}

// Begin prompting the user 
function startPrompt() {
    const questions = [
        {
            "message": "Enter the text you wish to place in your logo SVG (max 3 characters long)",
            "type": "input",
            "name": "logoText",
            "validate": (x) => x.length < 4
        },
        {
            "message": "Enter the color the text should be in your logo (hex color code or color name)",
            "type": "input",
            "name": "textColor",
            "validate": (x) => validateColorInput(x)
        },
        {
            "message": "Choose the shape you would like your logo to be",
            "type": "list",
            "name": "shape",
            "choices": ["Circle", "Triangle", "Square"]
        },
        {
            "message": "Enter the color your logo should be (hex color code or color name)",
            "type": "input",
            "name": "logoColor",
            "validate": (x) => validateColorInput(x)
        }
    ]
    inquirer
        .prompt(questions)
        .then((answers) => {
            let {logoText, textColor, shape, logoColor} = answers;

            // Quick check to see if color is a hex code so we can prepend a '#' which
            // is necessary for hex codes in svg files
            console.log("textcolor -> ", textColor.match(validHexString));
            console.log("logoColor -> ", logoColor.match(validHexString));

            if (isHexColor(textColor) && !textColor.startsWith('#')) {
                textColor = '#' + textColor.replace('0x', '');
            }

            if (isHexColor(logoColor) && !logoColor.startsWith('#')) {
                logoColor = '#' + logoColor.replace('0x', '');
            }

            // Get the shape class from a string of its name
            const shapeClass = shapeMap.get(shape);

            // Create our shape
            const createdShape = new shapeClass(logoColor, logoText, textColor);

            // render and write the text output to a SVG file: logo.svg
            writeSVG(createdShape.render());
            return [logoText, textColor, shape, logoColor];
        })
        .then((data) => {
            const [logoText, textColor, shape, logoColor] = data;
            console.log(`logoText -> ${logoText}\ntextColor -> ${textColor}\nshape -> ${shape}\nlogoColor -> ${logoColor}`);
            let logoString = isHexColor(logoColor) ? `${shape} with color hex code: ${logoColor}` : `${logoColor} ${shape}`;
            let textString = isHexColor(textColor) ? `hex color code: ${textColor} text` : `${textColor} colored text`;
            console.log(`Successfully created a ${logoString} with ${textString} and saved it to logo.svg`);
        })
}

//  Global entry point function
function init() {
    startPrompt();
}

init()
