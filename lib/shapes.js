//  code to genertate shapes based on user input

class Shape {
    constructor(text, textColor, shape, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }
    render() {

    }
}




{/* <circle cx="25" cy="75" r="20"/> */}
class Circle extends Shape {
    constructor(cx, cy, r) {
        super(text, textColor, shape, shapeColor)
        this.cx = cx
        this.cy = cy
        this.r = r
    }
} 
const circle = new Circle ("hello")
console.log(circle)

{/* <rect x="10" y="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/> */}
class Square {
    constructor(x, y, width, height, rx, ry) {
        this.x = 
        this.y =
        this.width = 
        this.heigh = 
        this.rx = 
        this.ry =
    }
} 

// <polygon points="200,10 250,190 160,210" style="fill:lime;stroke:purple;stroke-width:1" />
class Triangle {
    constructor(polygon points) {
        
    }
} 