// setTimeout(()=>{
//     console.log("Hello World");
// },4000);

// function sum(a,b){
//     console.log(a + b);
// }

// function calc(a,b,sum){
//     sum(a,b);
// }
// calc(20,30,sum);

// calc(70,69,(a,b)=>{
//     console.log(a + b);
// });

// let hello = () =>{
//     console.log("Hello Amogh");
// };

// setTimeout(hello,3000);

// function getData(data,nextData){
//     setTimeout(()=>{
//         console.log("Data = ",data);
//         nextData();
//     },2000);
    

// }
// getData(1,()=>{
//     getData(2,()=>{
//         getData(3)
//     });
// });
// for(let i = 0;i<5;i++){
    
//     getData(i,()=>{
//         console.log("Next Data");

//     });
// }
//Promises

// let promise = new Promise((resolve,reject)=>{
//     console.log("I had made a Promise");
//     reject("error");

// });

// function getData(data,nextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Data = ",data);
//             resolve("success");
//             nextData();
//         },5000);
//     })
    
// }
// const getPromise = () =>{
//     return new Promise((resolve,reject)=>{
//         console.log("I made a promise");
//         resolve("success");
//         //reject("network error");
//     });

// };

// let promise = getPromise();
// promise.then((res)=>{
//     console.log("promise fulfilled,",res);
// });
// promise.catch((err)=>{
//     console.log("promise rejected",err);
// });

//promise CHain

// function asyncFunc1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data1");
//             resolve("success");
//         },4000);

//     });

// }
// function asyncFunc2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data2");
//             resolve("success");
//         },4000);

//     });

// }
// console.log("fetching data1....");
// asyncFunc1().then((res)=>{
//     console.log("data1 fetched",res);
//     console.log("fetching data2....");
//     asyncFunc2().then((res)=>{
//         console.log("data2 fetched",res);
//     });
// });
//Async-Await

// async function hello(){
//     console.log("hello");
// };

// function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("aaj ke samachar");
//             resolve(200);
//         },2000);
//     });
// };
// async function getNewsData(){
//     await api();
//     await api();
// }

// function getData(getData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data =",getData);
//             resolve("success");
//         },2000);
//     });



// };

// (async function (){
//     console.log("Getting data 1");
//     await getData(1);
//     console.log("Getting data 2");
//     await getData(2);
//     console.log("Getting data 3");
//     await getData(3);
//     console.log("Over");
    
// })();