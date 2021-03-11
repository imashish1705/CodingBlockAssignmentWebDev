const img = document.querySelector("img");
const h1 = document.querySelector("h1");
const inputSection = document.getElementById("inputSection");
const btn = document.getElementById("btn");
const list = document.getElementById("list");
let istrue = false;
 h1.style.fontSize = '3rem';
 h1.style.transition = '1s linear';

 setInterval(() => {
     if(istrue) {
         h1.style.color = 'red';
         img.setAttribute('src', 'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=815&q=80');
         
        } else {
            h1.style.color = 'Green';
            img.setAttribute('src', 'https://images.unsplash.com/photo-1534375971785-5c1826f739d8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80');  
        }
        
        istrue = !istrue;
        
 },2000);

 
 btn.onclick = (e) => {
     let todoText = inputSection.value;
     let listItem = document.createElement("li");
     listItem.innerText = todoText;
     if(document.querySelector('textarea').value.length == 0) {
         alert("Please write your Skill");

     } else {
    
        list.append(listItem);
     }
    //  if(document.querySelectorAll('#newTask textarea').value.length == 0){
    //      alert("Please enter a task");
    //  } else {
    //     listItem.innerText = todoText;
    //  }
     // for remove text
     listItem.onclick = (e) => {
         e.target.remove();
     }
    
     inputSection.value = "";
    if(inputSection.value = "") {
        
    }
 }