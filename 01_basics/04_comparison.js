// console.log(2>1);
// console.log(1!=1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// console.log(undefined > 0);
// console.log(undefined == 0);
// console.log(undefined >= 0);

// // === => "strict check also check datatype"

// console.log("2" === 2);


/*****************************SUMMARY**************************/
//  data types
//  primitive and non-primitive
  
//   primitive 
//   7 types : String, number,boolean ,null,undefined,symbol,Bigint

// Reference(Non primitive)

//Array, Object,Functions
  
const id = Symbol("234")
const anotherId =Symbol("234")

console.log(id === anotherId); //false

const heros = ["Rishabh","heroos","pikachu"];

let myObj = {
    name: "Rishabh",
    age: 20,
}

const myFunction = function(){
    console.log("hello Rishabh");
}
 
console.log(heros);