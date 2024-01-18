
const inputField = document.getElementById('input');

let currentInput = "";
for (let i = 0; i <= 9; i++) {
    document.getElementById(`block${i}`).onclick=()=> {
        currentInput += i; 
        inputField.value = currentInput;
    }
}
// console.log(currentInput)


document.getElementById('plus').onclick=()=> {
    currentInput += "+";
    inputField.value = currentInput;
}

document.getElementById('minus').onclick=()=> {
    currentInput += "-";
    inputField.value = currentInput;
}


document.getElementById('multiply').onclick=()=> {
    currentInput += "*";
    inputField.value = currentInput;
}


document.getElementById('divide').onclick=()=> {
    currentInput += "/";
    inputField.value = currentInput;
}


document.getElementById('dot').onclick=()=> {
    currentInput += ".";
    inputField.value = currentInput
}


document.getElementById('ans').onclick=()=> {
    currentInput = eval(currentInput);
    inputField.value =currentInput
}


document.getElementById('clear').onclick=()=> {
    currentInput = "";
    inputField.value = "";
}


