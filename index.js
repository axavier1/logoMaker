const {Circle, Square, Triangle} = require("./lib/shapes")
const inquirer = require ("inquirer")
const fs = require("fs")

inquirer.prompt([
    {
        message: "Enter three characters", 
        name: "text"
    },
    {
        message: "Enter shape color", 
        name: "shapecolor"
    },
    {
        message: "Enter shape", 
        name: "shape",
        type: "list",
        choices: ["Circle", "Square", "Triangle"]
    },
    {
        message: "Enter text color", 
        name: "textcolor"
    },
])
.then(response => {
    if (response.shape == "Circle"){
        let shape = new Circle (response.shapecolor, response.text, response.textcolor)
        fs.writeFileSync("logo.svg", shape.render())
    }
})