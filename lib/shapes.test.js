const {Circle, Square, Triangle} = require ("./shapes")

test("Testing circle", ()=>{
    let shape = new Circle ("blue", "SVG", "white")
    expect (shape.shapecolor).toBe("blue")
})

test("Testing square", ()=>{
    let shape = new Square ("blue", "SVG", "white")
    expect (shape.textcolor).toBe("white")
})

test("Testing triangle", ()=>{
    let shape = new Triangle ("blue", "SVG", "white")
    expect (shape.text).toBe("SVG")
})