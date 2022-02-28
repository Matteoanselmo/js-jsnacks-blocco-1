/**
 *
    Chiedi un numero di 7 cifre all'utente
    e calcola la somma di tutte le cifre che compongono il numero.
 *
 */

const userNumber = prompt('Inserisci un numero di 7 crifre');
let somma = 0;

for( let i = 0; i < userNumber.length; i++){
    somma += parseInt(userNumber.charAt(i));
};

console.log(somma);