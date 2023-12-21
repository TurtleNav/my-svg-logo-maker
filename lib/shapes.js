class Shape {
    constructor(color, text, textColor) {
        this.setColor(color || "black");
        this.setText(text || "abc");
        this.setTextColor(textColor || "white");
    }
    setColor(color) {
        this.color = color;
    }
    setText(text) {
        this.text = text.replace('"', "&quot");
    }
    setTextColor(color) {
        this.textColor = color;
    }
    render() {
        throw new Error("Shape class should be subclassed");
    }
    renderText(x="50%", y="50%") {
        return `<text x="${x}" y="${y}" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
}

class Circle extends Shape {
    render() {
        return `\
<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="100" fill="${this.color}"/>
    ${this.renderText()}
</svg>`;
    }
}

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
        near the centroid of the shape which lies at y(centroid) = (1/3) * <side length>
    */
    render() {
        return `\
<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="35,200 150,0, 266,200" fill="${this.color}" />
    ${this.renderText("50%", "67%")}
</svg>`;
    }
}

class Square extends Shape {
    render() {
        return `\
<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="0" width="200" height="200" fill="${this.color}"/>
    ${this.renderText()}
</svg>`;
    }
}

module.exports = {Circle, Square, Triangle};