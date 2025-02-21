const A = document.querySelector('.display');

function onload() {
    A.value = "";
}


function press(event) {
    const buttonValue = event.target.value; 

    if (buttonValue === "C") {
        A.value = "";
    } else if (buttonValue === "=") {
        try {
            A.value = eval(A.value); 
        } catch (error) {
            A.value = "Error"; 
        }
    } else {
        A.value += buttonValue;
    }
}

const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => {
    btn.addEventListener('click', press); 
});