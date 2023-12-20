// Import our dependencies
const inquirer = require("inquirer");

const validHexString = new RegExp("^(0x)?[a-fA-F0-9]{1,6}");

const validNamedColors = [
    "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet",
    "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue",
    "darkblue", "darkcyan", "darkgray","darkgrey","darkgreen", "darkkhaki","darkmagenta", "darkolivegreen", "darkorange", "darkorchid",
    "darkred","darksalmon","darkseagreen", "darkslateblue", "darkslategray", "darkslategrey", "darkturqoise", "darkviolet","deeppink",
    "deepskyblue", "dimgray", "dimgrey", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold",
    "goldenrod", "gray", "grey", "green", "greenyellow", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush",
    "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgrey", "lightgreen",
    "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightslategrey", "lightsteelblue", "lightyellow", "lime",
    "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumblue", "mediumpurple", "mediumseagreen",
    "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite",
    "navy", "oldlace", "olive","olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred",
    "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown",
    "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "slategrey", "snow", "springgreen", "steelblue",
    "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"
]
function validateColorInput(color) {
    //
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
            "message": "Enter a color you would like to render your logo as? Please enter a valid color name or hex color code",
            "type": "input",
            "name": "logoColor",
            "validate": (x) => validateColorInput(x)
        }
    ]
    inquirer
        .prompt(questions)
        .then((answers => {
            console.log(answers);
        }))
}

//  Global entry point function
function init() {
    startPrompt();
}

//init()

console.log(validNamedColors.length);