let str = "";
let num1 = "";
let num2 = "";
let ope = "";
let result = 0;

function getValue(value) {
    str += value;
    document.getElementById("input").value = str;
}

function calculate() {
    let index = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === '+' || str.charAt(i) === '-' || str.charAt(i) === '*' || str.charAt(i) === '/' || str.charAt(i) === '%') {
            index = i;
            ope = str.charAt(i);
            break;
        }
        num1 += str.charAt(i);
    }

    for (let i = index + 1; i < str.length; i++) {
        num2 += str.charAt(i);
    }
    console.log(ope);


    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    console.log(typeof(num2));

    switch(ope){
        case "+":result = num1+num2;break;
        case "-":result = num1-num2;break;
        case "*":result = num1*num2;break;
        case "/":result = num1/num2;break;
        case "%":result = num1%num2;break;
    }

    document.getElementById("input").value = result;
}

function clearInputs() {
    str = "";
    num1 = "";
    num2 = "";
    result = 0;
    document.getElementById("input").value = "";
}
