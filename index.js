import suma from './includes/suma.js';
import resta from './includes/resta.js';

window.onload = function() {
    const inputA = document.getElementById('inputA');
    const inputB = document.getElementById('inputB');
    const resultat = document.getElementById('resultatSuma');
    const buttonSuma = document.getElementById('buttonSuma');

    const inputC = document.getElementById('inputC');
    const inputD = document.getElementById('inputD');
    const resultatResta = document.getElementById('resultatResta');
    const buttonResta = document.getElementById('buttonResta');

    buttonSuma.onclick = function() {
        resultat.value = suma(parseInt(inputA.value), parseInt(inputB.value));
    }

    buttonResta.onclick = function() {
        resultatResta.value = resta(parseInt(inputC.value), parseInt(inputD.value));
    }
}