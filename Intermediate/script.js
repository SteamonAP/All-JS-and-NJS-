// // let h2 = document.querySelector("h2");
// // console.dir(h2.innerText);

// // h2.innerText = h2.innerText + " from amogh's college";
// let divs = document.querySelectorAll(".box");
// let idx = 1;
// for( div of divs){
//     div.innerText = ` new levelup boss ${idx} `;
//     idx++;
// }

// let newbtn = document.createElement("button");
// newbtn.innerText = "click me";
// newbtn.style.color = "white";
// newbtn.style.backgroundColor = "red";

// document.querySelector("body").prepend(newbtn);

// let para = document.querySelector("p");
// const handler3 = () =>{
//     console.log("this button was clicked - handler3");
// }
// btn1.addEventListener("click",(evt)=>{
//     console.log("this button was clicked - handler1");

// });
// btn1.addEventListener("click",()=>{
//     console.log("this button was clicked - handler2");
// });
// btn1.addEventListener("click",(handler3));
// btn1.addEventListener("click",()=>{
//     console.log("this button was clicked - handler4");
// });

// btn1.removeEventListener("click",handler3);

let chMode = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "Light Mode!";

chMode.addEventListener("click",() =>{
    if(chMode.checked){
        body.classList.add("dark");
        body.classList.remove("light");
        currMode = "Dark Mode!";
    } else {
        body.classList.add("light");
        body.classList.remove("dark");
        currMode = "Light Mode!";
    }

    console.log(currMode);
});