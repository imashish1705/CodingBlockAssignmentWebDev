const btn = document.getElementById("btn");
const inputSection = document.getElementById("inputSection");
const list = document.getElementById("list");
list.style.backgroundColor= "blue"
list.style.margin="40px"

btn.onclick = (e) => {
    let todoText = inputSection.value;
    let listItem = document.createElement("li");
    listItem.innerText = todoText;
    if(document.querySelector('input').value.length == 0) {
        alert("Please write your Skill");

    } else {
   
       list.append(listItem);
    }
    listItem.onclick = (e) => {
        e.target.remove();
    }
   
    inputSection.value = "";
   if(inputSection.value = "") {
       
   }
}