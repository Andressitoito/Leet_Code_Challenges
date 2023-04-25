/*  function camino() {
 this.nombre = 'Jhon'
 return 8;
}

camino();

console.log(camino());

let res = new camino();

// call the function inside
console.log(res);
console.log(res.__proto__.constructor());
 */

///////////////////////////////////////
// CONSTRUCTOR FUNCTION
///////////////////////////////////////
function Student(name, age, value) {
 (this.name = name), (this.age = age), (this.value = value);
}
// Instances of the constructor function
let Andy = new Student("Andy", 36, 10)
let Jhon = new Student("Jhon", 33, 5)

///////////////////////////////////////
// SIMPLE LINKED LISTS
///////////////////////////////////////

