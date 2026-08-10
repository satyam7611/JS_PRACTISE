// write a function to convert str to snakeCase
const toSnake=(str)=>{
   return str.split(" ").join("_")

}

console.log(toSnake("hello world"))  // hello_world
console.log(toSnake("hello world singh"))  // hello_world

