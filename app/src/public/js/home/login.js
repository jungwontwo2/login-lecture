"use strict";

const id = document.querySelector("#id");
const psword = document.querySelector("#psword");
const loginBtn = document.querySelector("button");

console.log(id);
console.log("Hello");

loginBtn.addEventListener("click",login);

function login(){
    const req={
        id : id.value,
        psword:psword.value,
    };
    console.log(req);
    console.log(JSON.stringify(req))
    fetch("/login",{
        method: "POST",
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify(req)
    });
}