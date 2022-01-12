console.log('JS OK')

/* 
Il programma dovrà mostrare una form da compilare con cui chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- Il prezzo del biglietto è definito in base ai km (0.21 € al km)
- Va applicato uno sconto del 20% per i minorenni
- Va applicato uno sconto del 40% per gli over 65.
- Il recap dei dati e l'output del prezzo finale va stampato in pagina (formattato con massimo due decimali, per indicare centesimi sul prezzo).
*/


// Recuperiamo i dati in pagina

const age = document.getElementById('age');
const km = document.getElementById('km');
const name = document.getElementById('name');

// Recuperiamo i dati dell'utente

const inputAge = age.value;
console.log(inputAge);
const inputKm = km.value;
console.log(inputKm);
const inputName = name.value;
console.log(inputName);

// Recuperiamo i dati inseriti con il bottone conferma

const confirmButton = document.getElementById('confirm');
console.log(confirmButton);

const denyButton = document.getElementById('deny');
console.log(denyButton);


let ticketPrice = km * 0.21;
console.log(ticketPrice);

if (age === 'Minorenne') {
    ticketPrice = ticketPrice * 0.8;
} else if (age === 'Superiore a 65') {
    ticketPrice = ticketPrice * 0.6;
}

console.log(ticketPrice);

ticketPrice = ticketPrice.toFixed(2); // Per indicare i numeri decimali, in questo caso 2 decimali dopo la virgola.
console.log(ticketPrice);