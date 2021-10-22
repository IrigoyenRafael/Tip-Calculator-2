// Variables 
const bill = document.getElementById('bill');

const numero = document.getElementById('numero');

const reset = document.getElementById('reset');

const total = document.getElementById('total');

const tip = document.getElementById('tip');

const mult5 = document.getElementById('mult5');
const mult10 = document.getElementById('mult10');
const mult15 = document.getElementById('mult15');
const mult20 = document.getElementById('mult20');
const mult50 = document.getElementById('mult50');
const porc = document.getElementById('porc');
let calculo;
// Eventos 

mult5.addEventListener('click', () => {
    calculo =  bill.value * 0.05;
    total.textContent = " $ " + calculo;
    console.log(bill.value);
});
mult10.addEventListener('click', () => {
    calculo =  bill.value * 0.10;
    total.textContent = " $ " + calculo;
});
mult15.addEventListener('click', () => {
    calculo =  bill.value * 0.15;
    total.textContent = " $ " + calculo;
});
mult25.addEventListener('click', () => {
    calculo = bill.value * 0.25;
    total.textContent = " $ " + calculo;
});
mult50.addEventListener('click', () => {
    calculo = bill.value * 0.50;
    total.textContent = " $ " + calculo;
});
porc.addEventListener('change', () => {
    calculo =  bill.value * porc.value / 100;
    total.textContent = " $ " + calculo;
});

numero.addEventListener('change', () => {
    tip.textContent = "$ " + calculo / numero.value 
});

reset.addEventListener('click', () => {
    total.textContent = '$0.000';
    tip.textContent = '$0.000';
    bill.value = "";
    numero.value = "";
});


// document.querySelector('.bill')
console.log(total)

//document.querySelecter()
//document.querySelector('div')

// mult.addEventListener(“click”, () => {