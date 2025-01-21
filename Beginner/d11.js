//Call apply and Bind
// used to not repeat any method,function or value definations for multiple object creation(and not class or constructor)

// let person1 = {
//     fname : "Amogh",
//     lname : "Pitale",
//     age : 20,
//     printDetails : function(){
//         console.log(`Hi im ${this.fname} ${this.lname} and my age is ${this.age} years old`)
//     }
// }


// let person2 = {
//     fname : "Arjun",
//     lname : "Pradhan",
//     age : 21,
// }

// person1.printDetails.call(person2);

// person1.printDetails()
// person2.printDetails()

// let printDetails = function(){
//     console.log(`Hi im ${this.fname} ${this.lname} and my age is ${this.age} years old`)
// }

// let person1 = {
//     fname : "Amogh",
//     lname : "Pitale",
//     age : 20,  
// }


// let person2 = {
//     fname : "Arjun",
//     lname : "Pradhan",
//     age : 21,
// }

// console.log(printDetails.call(person1));
// console.log(printDetails.call(person2));

//in apply, we put parameter(for function in use) argument in an array, olny difference;
//Bind: method to store a function and later call , can be stored in perticular variable and later be called, object method bound to a variable;

// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }
//     const lydia = new Person('Lydia', 'Hallie');
//     const sarah = Person('Sarah', 'Smith');
//     console.log(lydia);
//     console.log(sarah);
const shape = {
    radius: 10,
    diameter() {
    return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius,
   };
   
   console.log(shape.diameter());
   console.log(shape.perimeter());