'use strict';

/* Ejercicio #1 SUMA de dos numeros */
const $ejercicio1 = document.getElementById('ejercicio1');
const $sumar = document.getElementById('ejercicio1')


$ejercicio1.addEventListener('submit', (addEventListener)=>{
    event.preventDefault();
    
    const ejerc1num1 = parseInt($ejercicio1.ejerc1num1.value)
    const ejerc1num2 = parseInt($ejercicio1.ejerc1num2.value)

    resultado1.placeholder = ejerc1num1 + ejerc1num2;
});


/* Ejercicio #2 RESTA de dos numeros */
const $ejercicio2 = document.getElementById('ejercicio2');
const $restar = document.getElementById('ejercicio2')

$ejercicio2.addEventListener('submit', (addEventListener)=>{
    event.preventDefault();

    const ejerc2num1 = $ejercicio2.ejerc2num1.value;
    const ejerc2num2 = $ejercicio2.ejerc2num2.value;
    
    resultado2.placeholder = ejerc2num1 - ejerc2num2;

});


/* Ejercicio #3 MULTIPLICACIÓN de dos numeros */
const $ejercicio3 = document.getElementById('ejercicio3');
const $multiplicacion = document.getElementById('ejercicio3')

$ejercicio3.addEventListener('submit', (addEventListener)=>{
    event.preventDefault();

    const ejerc3num1 = $ejercicio3.ejerc3num1.value
    const ejerc3num2 = $ejercicio3.ejerc3num2.value
    
    resultado3.placeholder = ejerc3num1 * ejerc3num2;
    
  });

/* Ejercicio #4 DIVISIÓN de dos numeros */
const $ejercicio4 = document.getElementById('ejercicio4');
const $division = document.getElementById('ejercicio4')

$ejercicio4.addEventListener('submit', (addEventListener)=>{
    event.preventDefault();
    const ejerc4num1 = $ejercicio4.ejerc4num1.value
    const ejerc4num2 = $ejercicio4.ejerc4num2.value
    resultado4.placeholder = ejerc4num1 / ejerc4num2;
  });