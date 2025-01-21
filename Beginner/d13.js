// function fun1(){
//     return 2
// }

// function fun2(){
//     return 4
// }

// let a = (fun2(),fun1());
// console.log(a);

// (function(){
//     if((-100 && 100 && "0") || [] === true || 0){
//         console.log(1);

//         if([] || (0 && false)){
//             console.log(2);
//         }
//         if(Infinity && NaN && "false"){
//             console.log(3);
//             if(""){
//                 console.log(4);
//             }
            
//         }else{
//             console.log(5);
//             if(({} || false === "")&& !(null && undefined)){
//                 console.log(6);
//             }
//         }
//     }
// })();

//output: 
1
2
5
6

//shalow copy creates a different copy of obj in heap but just a noral ones, not he nested once(...fun1()). So to noit affect changes in all obj val
//Deep Copy
// JSON.parse(JSON.stringify(func_name))
//does not effect the original obj and makes changes in second obj


//Closures

//lexical scope:= a nested func having access to the main func it is in