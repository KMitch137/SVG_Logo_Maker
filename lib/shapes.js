//  code to genertate shapes based on user input
class Svg {
    constructor({ text, textColor, shape, shapeColor }) {
        this.text = text
        this.textColor = textColor
        this.shape = shape
        this.shapeColor = shapeColor
    }
    render() {
        const detail = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
        // generate svg code to be send to index and create the logo
        switch (this.shape) {
            case "Circle":
                return (
                    `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
                <circle cx="150" cy="100" r="80" fill="${this.shapeColor}"></circle>
                ${detail}
                </svg>`);

            case "Square":
                return (
                    `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
                <rect x="75" y="30" width="150" height="150" fill="${this.shapeColor}"></rect>
                ${detail}
                </svg>`
                );

            case "Triangle":
                return (
                    `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
                <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"></polygon>
                ${detail}
                </svg>`
                );

        }
    };

}


function generateShape(answers) {
    //create new SVG based on answers
    const logo = new Svg(answers);
    return logo.render()
}



module.exports = generateShape