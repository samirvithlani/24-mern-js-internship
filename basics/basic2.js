var age = 18 //global variable
console.log("age is outside block.. " ,age)
let pers = 90
console.log("pers is outside block.. " ,pers)

{
    var age = 21
    let pers = 80
    //block scope
    console.log("this is block")
    console.log("age is inside block.. " ,age)
    console.log("pers is inside block.. " ,pers)
}

console.log("age is outside block.. after block.. " ,age)
console.log("per is outside block.. after block.. " ,pers)

