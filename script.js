function getNum(){
    let num1 = parseFloat(document.getElementById("number1").value);
    let num2 = parseFloat(document.getElementById("number2").value);

    return {num1, num2};
}

function add(){
    let numbers = getNum();
    let sum = numbers.num1 + numbers.num2;
    return document.getElementById("res").textContent = sum;
}

function sub(){
    let numbers = getNum();
    let diff = numbers.num1 - numbers.num2;
    return document.getElementById("res").textContent = diff;
}

function mul(){
    let numbers = getNum();
    let product = numbers.num1 * numbers.num2;
    return document.getElementById("res").textContent = product;
}

function divi(){
    let numbers = getNum();
    let quotient = numbers.num1 / numbers.num2;
    return document.getElementById("res").textContent = quotient;
}

