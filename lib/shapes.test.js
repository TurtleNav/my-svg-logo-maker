const {Shape, Circle, Square, Triangle} = require('./shapes');

// Test the functionality of the shape base class: 'Shape'
describe('Shape', () => {
  test("render method should raise an error when not properly implemented in a child class", () => {
    expect (() => {
      const shape = new Shape();
      shape.render().toThrow(Error);
    })
  }),

  it("setColor method should properly set the color of the shape", () => {
    const shape = new Shape();
    shape.setColor("chartreuse");
    expect(shape.color).toBe("chartreuse");
  }),

  it("setText method should properly set the text inside of the shape", () => {
    const shape = new Shape();
    shape.setText("hey");
    expect(shape.text).toBe("hey");
  }),

  it("setTextColor method should properly set the logo's text color", () => {
    const shape = new Shape();
    shape.setTextColor("deeppink");
    expect(shape.textColor).toBe("deeppink");
  })
});

describe('Circle', () => {
    it("Circle class should properly render SVG formatted text", () => {
        // Create a red circle with "wheat" colored text: abc
        const circle = new Circle("red", "abc", "wheat");
        expect(circle.render()).toBe(`\
<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="100" fill="red"/>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="wheat">abc</text>
</svg>`);
      })
});


describe('Square', () => {
    it("Square class should properly render SVG formatted text", () => {
        // Create an indigo square with gold colored text '123'
        const square = new Square("indigo", "123", "gold");
        expect(square.render()).toBe(`\
<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="0" width="200" height="200" fill="indigo"/>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="gold">123</text>
</svg>`);
      })
});

describe('Triangle', () => {
    it("Triangle class should properly render SVG formatted text", () => {
        // Create a triangle with hex color #00ffff and grey text '456
        const triangle = new Triangle("#00ffff", "456", "grey");
        expect(triangle.render()).toBe(`\
<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="35,200 150,0, 266,200" fill="#00ffff" />
    <text x="50%" y="67%" dominant-baseline="middle" text-anchor="middle" fill="grey">456</text>
</svg>`);
      })
});