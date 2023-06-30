//  code to genertate shapes based on user input
class Svg {
   constructor (text, textColor,) {

   }
render() {
    // look up svg file
}
}


class Shape {
    constructor(shapeColor) {
        this.shapeColor = shapeColor
    }
}




{/* <circle cx="25" cy="75" r="20"/> */ }
class Circle extends Shape {
render() {
    return `<circle cx="25" cy="75" r="20" fill=${this.shapeColor}/>`
}
}



{/* <rect x="10" y="10" width="30" height="30" stroke="black" fill=${color} stroke-width="5"/> */ }
class Square extends Shape {
    constructor() {

    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="200,10 250,190 160,210" style="fill:lime;stroke:purple;stroke-width:1" />`
    }
}
