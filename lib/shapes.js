// This module implements our Shape classes and dictates how they are rendered

/*
    Base shape class. Constructor accepts a color (color of the shape), The
    text to be rendered inside the shape, and the color of the interior text. A
    render method that raises an error is added due to the fact that each Shape
    subclass NEEDS to implement a render method.

    Each of the three property setter methods:
        'setColor' / 'setText' / 'setTextColor'
    handle setting their corresponding property for all of the Shape child
    classes.
    
    Default values are provided for faster testing but these values are
    entirely overriden when selecting a shape and its properties from the CLI
*/
class Shape {
    constructor(color, text, textColor) {
        this.setColor(color || "black");
        this.setText(text || "abc");
        this.setTextColor(textColor || "white");
    }
    setColor(color) {
        this.color = color;
    }
    /*
        Of the three property setter methods, setText, is special because it
        needs to escape the double quote symbol. An unchecked double quote in
        HTML/XML/SVG can wreak havoc. I chose to do this over forbidding the
        double quote from appearing since a users' logo could very well use
        the symbol and I wouldn't want to prevent that.
    */
    setText(text) {
        this.text = text.replace('"', "&quot");
    }
    setTextColor(color) {
        this.textColor = color;
    }
    render() {
        throw new Error("Shape class should be subclassed");
    }
    // Method for placing the logo text in the middle of our shape
    renderText(x="50%", y="50%") {
        return `<text x="${x}" y="${y}" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
}

// Circle child class of Shape. Circle is a basic shape in SVG and thus I used
// the prebuilt circle tag to render it
class Circle extends Shape {
    render() {
        return `\
<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="100" fill="${this.color}"/>
    ${this.renderText()}
</svg>`;
    }
}

/*
    Triangle child class of Shape. Triangle is NOT a basic shape in SVG. We
    can, however, render a triangle with ease using the polygon tag. Refer
    to the comments on the render method for more information on how
    rendering this non-basic shape is handled,
*/
class Triangle extends Shape {
    /*
        The Triangle render method requires us create a polygon. The special
        x/y values for each point in the polygon were calculated with the
        considerations:
            1.) The triangle is equilateral (each side length is equal and each
                internal angle is 60°)
            2.) The triangle is not rotated and is symmetric with respect to a
                vertical line of the form x=<value>(bisects the triangle)
            3.) The x value of the vertical line that bisects the triangle
                equally should be the x value of the center of our bounding box
        
        The y value for the text is adjusted to 67% because this places the text
        near the centroid of the shape which for a triangle is 1/3 of the way up
        from the base.
    */
    render() {
        return `\
<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="35,200 150,0, 266,200" fill="${this.color}" />
    ${this.renderText("50%", "67%")}
</svg>`;
    }
}

/*
    Just like the Circle class, Squares are a basic shape in SVG. Using
    the <rect> tag we simply render a rectangle with equal width and height
*/
class Square extends Shape {
    render() {
        return `\
<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="0" width="200" height="200" fill="${this.color}"/>
    ${this.renderText()}
</svg>`;
    }
}

// Export our three shape classes (for CLI use and testing). The Shape class
// is also exported so it can be tested
module.exports = {Shape, Circle, Square, Triangle};