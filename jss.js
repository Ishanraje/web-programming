async function locked(){
    let request = new Request("./jss.json");
    let response = await fetch(request);
    let obj = await response.json();
loadregister(obj);
creat();
}
locked();
function loadregister(obj){
    let form = document. querySelector(".form-box");
    let f=document.createElement("form");
    let i1=document.createElement("button");
    let i2=document.createElement("input");
    let i3=document.createElement("input");
    let i4=document.createElement("input");
    let i5=document.createElement("input");
    i5.type = "text";
    i5.className = "input-field";
    i5.placeholder = "User Id";
    i5.setAttribute('required','');
    i4.type = "email";
    i4.className = "input-field";
    i4.placeholder = "Email Id"
    i4.setAttribute('required','');
    i3.type = "text";
    i3.className = "input-field";
    i3.placeholder="enter password required"
    i3.setAttribute('required','');
    i2.type = "checkbox";
    i2.className = "chech-box";
    let s=document.createElement("span");
    s.textContent = "I agree to the terms & conditions";
    i2.setAttribute('required','');
    f.id = "register";
    f.className = "input-group";
    i1.type = "submit";
    i1.textContent = "register";
    i1.className = "submit-btn";
    f.appendChild(s);
    f.appendChild(i5);
    f.appendChild(i4);
    f.appendChild(i3);
    f.appendChild(i2);
    f.appendChild(i1);
    form.appendChild(f);

}
let x;
let y;
let z;

function creat()
{
     x= document.getElementById("login");
y= document.getElementById("register");
z= document.getElementById("btn");
}
function register(){
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}
function login(){
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
}