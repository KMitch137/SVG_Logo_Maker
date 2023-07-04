const {Svg} = require("./shapes")
const shape = new Svg("KDM", "white", "Triangle", "blue");
shape.text = "KDM"
shape.textColor = "white"
shape.shape = "Triangle"
shape.shapeColor = "blue"
console.log(shape)
const Triangle = shape.render();
expect(Triangle).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
<polygon points="150, 18 244, 182 56, 182" fill="blue"></polygon>
<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">KDM</text>
</svg>`);

"KDM", "white", "Triangle", "blue"