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
const names = document.getElementById('name');

// Dettagli biglietto

const dName = document.getElementById('d-name');
const dOffer = document.getElementById('d-offer');
const dCarriage = document.getElementById('d-carriage');
const dCode = document.getElementById('d-code');
const dPrice = document.getElementById('d-price');
// Recuperiamo i dati inseriti con il bottone conferma

const confirmButton = document.getElementById('confirm');

confirmButton.addEventListener('click', function () {
    // Recuperiamo i dati dell'utente

    const inputAge = age.value;
    console.log(inputAge);
    const inputKm = km.value;
    console.log(inputKm);
    const inputName = names.value;
    console.log(inputName);

    let ticketPrice = inputKm * 0.21;
    console.log(ticketPrice);

    if (inputAge == 'underage') {
        ticketPrice = ticketPrice * 0.8;
    } else if (inputAge == 'overage') {
        ticketPrice = ticketPrice * 0.6;
    } else {
        ticketPrice = ticketPrice;
    }

    console.log(ticketPrice);

    ticketPrice = ticketPrice.toFixed(2); // Per indicare i numeri decimali, in questo caso 2 decimali dopo la virgola.
    console.log(ticketPrice);

    // Completiamo i dettagli del biglietto

    dName.innerText = inputName;

    if (inputAge == 'adult') {
        dOffer.innerText = `Standard`;
    } else if (inputAge == 'underage') {
        dOffer.innerText = `Sconto Minorenni`;
    } else {
        dOffer.innerText = `Sconto Senile`;
    }

    dCarriage.innerText = Math.floor(Math.random() * 25) + 1;
    dCode.innerText = Math.floor(Math.random() * 9000) + 1;
    dPrice.innerText = ticketPrice
})

// Togliamo i dati dell'utente

const denyButton = document.getElementById('deny');

denyButton.addEventListener('click', function () {

    if (age && km && names) {
        age.value = '';
        km.value = '';
        names.value = '';
    }
})