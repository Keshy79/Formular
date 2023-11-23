function Triangle(){
    var a = 1/2
    var b = Number(prompt("base"))
    var h = Number(prompt("heigth"))
    var answer = a*(b*h)
    var convert = answer.toFixed(4)
    console.log(convert + "cm²");
}

function Cricle(){
    var pi = 22/7
    var radius = Number(prompt("radius"))
    var answer = pi*(radius**2)
    var convert = answer.toFixed(4)
    console.log(convert + "m²");
}

function Square(){
    var l = Number(prompt("Length"))
    var answer = (l**2)
    var convert = answer.toFixed(4)
    console.log(convert + "cm²");
}

function Trapezium(){
    var n = 1/2
    var a = Number(prompt("Length"))
    var b = Number(prompt("base"))
    var h = Number(prompt("heigth"))
    var answer = n*(a+b)*h
    var convert = answer.toFixed(4)
    console.log(convert + "cm²");
}

function Parallelogram(){
    var b = Number(prompt("base"))
    var h = Number(prompt("heigth"))
    var answer = (b*h)
    var convert = answer.toFixed(4)
    console.log(convert + "cm²");
}

function Rhombus(){
    var a = 1/2
    var D = Number(prompt("Diagonal1"))
    var d = Number(prompt("Diagonal2"))
    var answer = a*(D*d)
    var convert = answer.toFixed(4)
    console.log(convert + "cm²");
}

function Quadrilateral(){
    var b = Number(prompt("base"))
    var h = Number(prompt("heigth"))
    var answer = (b*h)
    var convert = answer.toFixed(4)
    console.log(convert + "cm²");
}

function Index(){
    var w = Number(prompt("weight(kilogram)"))
    var h = Number(prompt("heigth(meter)"))
    var answer = w/(h**2)
    var convert = answer.toFixed(4)
    console.log(convert + "kg/m²");
}