// function displayThis(){
//     console.log(this);
// }

// displayThis();
// let myObj = {
//     name: "Amogh",
//     age:20,

//     myFn: function(){
//         console.log(this)

//     }
// }

// myObj.myFn();

// function createCar(_name,_color,_speed){
//     this.name = _name;
//     this.color = _color;
//     this.speed = _speed;

//     this.drive = function(){
//         console.log(`${this.name} is driving at ${this.speed} km/h in ${this.color} is awesome`);
//     }

// }

// let car1 = new createCar("Toyota","Red","40kmph");
// let car2 = new createCar("Audi","Green","90kmph");
// console.log(car1);
// console.log(car2);

// car1.drive();
// car2.drive();

// class Person{
//     constructor(name,age,gender){
//         this.name=name;
//         this.age=age;
//         this.gender=gender;

//     }
//     welcome(){
//         console.log(`Hello, Welcome ${this.name}, your gender is ${this.gender}! and age is ${this.age}`);
//     }
// }

// class Teacher extends Person{
//     constructor(name,age,gender,degree){
//         super(name,age,gender);
//         this.degree=degree;
//     }

//     text(){
        
//         super.welcome()+console.log(`and your degree = ${this.degree}`)
//     }

// }
// class Student extends Person{

//     constructor(name,age,gender,section){
//         super(name,age,gender);
//         this.section=section;
//     }

// }

// let student1 = new Student("Amogh",20,"Male","AC2");
// let teacher1 = new Teacher("Divya",35,"Female","M.Tech");

// console.log(student1); 
// console.log(teacher1); 
// teacher1.text();



