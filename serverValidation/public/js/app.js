import { login } from "./api/login";

const submitbtn = document.getElementById("submit");

submitbtn.addEventListener("submit", ()=>{

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value; 

    login(username, password);

});



