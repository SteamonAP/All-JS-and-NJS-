//call stack and call back queue(aka Task Queue). call stack (sigle thread)is a space where simeple non async instructions are stored and exicuted . Where as the Async inst are first 
// put in Node APIs and then in Callback queue. once call back queue verified that call stack is empty then it pushes the function in the Call stack for execution


//promises are handeled Microtask Queue(Higher proirity to come in call stack compared to Task Queue)

// let myPromise = new Promise(function(resolve, reject) {
//     const a = 6;
//     const b = 9;

//     setTimeout(() => {
//         if (a > b) {
//             resolve("a is greater than b");
//         } else {
//             reject("a is not greater than b");
//         }
//     }, 2000);
// });

// myPromise
//     .then(function(res) {
//         console.log(res);
//     })
//     .catch(function(err) {
//         console.log(err);
//     });

// function placeOrder(drink){
//     return new Promise (function(resolve,reject){
//         if(drink==='coffee'){
//             resolve("Order for coffee is placed")
//         }
//         else{
//             reject("Order rejected")
//         }
//     })
// }


// function processOrder(order){
//     return new Promise (function(resolve){
//         console.log("Order is being processed")
//         resolve(`${order} and is Served`)
//     })
// }

//async await

// async function serveOrder() {
//     try {
//         let orderPlaced = await placeOrder('Mojito')
//         console.log(orderPlaced)
//         let orderProcessed = await processOrder(orderPlaced)
//         console.log(orderProcessed)
//     } catch (error) {
//         console.log(error)
        
//     }
    
// }
// serveOrder()
