// function myfun(){
//     console.log("Kendi hundi si");
//     console.log("King Shit ni");
// }

// myfun();

// function fun(x){
//     console.log(x);
// }
// fun("I am Kira");

// function sum(x,y){
//     //local varaible 
//     s = x + y;
//     return s;
// }
// let val = sum(121,80);
// console.log(val);

//Arrow

// let mul = (a,b) =>{
//     return a*b;
// }

//pq

// function countVowels(str){
//     let count = 0;
//     for(const char of str){
//         if(char === "a" || char === "e" || char ==="i" || char ==="o" || char ==="u" ||char === "A" || char ==="E" || char ==="I"||char ==="O"||char ==="U"){
//             count++;
//         }
        
//     }
//     return count;
// }

// const countVow =(str) =>{
//     let count = 0;
//     for(const char of str){
//         if(char === "a" || char === "e" || char ==="i" || char ==="o" || char ==="u" ||char === "A" || char ==="E" || char ==="I"||char ==="O"||char ==="U"){
//             count++;
//         }
        
//     }
//     return count;

// }

// let nums = [22,13,44,35,66];

// let calcsq = (num)=>{
//     console.log(num*num);
// };

// nums.forEach(calcsq);

//map

// let nums = [34,67,12,56];

// let sum = nums.map((val) =>{
//     return val * val;
// });
// console.log(sum);

// let arr = [1,2,3,4,5,6,7,8,9];

// let fArr= arr.filter((val)=>{
//     return val % 2 !== 0;
// });
// console.log(fArr);

// let arr = [1,2,3,4,5,6,7,8,9];

// let result  = arr.reduce((prev,curr) =>{
//     return prev < curr ? prev : curr;

// });

// console.log(result);

//PQ

// let marks = [97,64,32,49,99,96,72,37];

// let topper = marks.filter((val) =>{
//     return val > 90;
// });

// console.log(topper);

// let n = prompt("enter val n :");

// let arr = [];

// for(i=1;i<=n;i++){
//     arr[i-1] = i;
// }
// console.log(arr);

// let sum = arr.reduce((res,curr) => {
//     return res + curr;

// });
// console.log("sum = ",sum);

// let product = arr.reduce((res,curr) =>{
//     return res * curr;
// });
// console.log("factorial = ",product);