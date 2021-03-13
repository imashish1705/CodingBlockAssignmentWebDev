const buttons = document.querySelectorAll("button");
const inputKiValue = document.getElementById("inputKiValue");
for(let btn of buttons) {
    btn.addEventListener("click", function(e) {
        let buttonText = e.target.innerText;
        
        if(buttonText == 'X') {
            inputKiValue.value += '*';
        } else if(buttonText == '=') {
            inputKiValue.value = eval(inputKiValue.value);
        } else if(buttonText == 'C') {
            inputKiValue.value = "";
        }
         else {
            inputKiValue.value += buttonText;
        }
    });
}