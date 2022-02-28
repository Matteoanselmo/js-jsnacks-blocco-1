/**
 * 
    Il software deve chiedere per 10 volte all'utente di inserire un numero.
    Il programma stampa la somma di tutti i numeri inseriti.
 */

let sommaNumeri = 0;

for (i = 0; i < 10; i++ ){
    let userNumber = parseInt(prompt('inserisci un numero'));
    sommaNumeri = sommaNumeri + userNumber;
}

console.log(sommaNumeri);
document.getElementById('my-total-function').innerHTML = `La somma dei numeri inseriti è ${sommaNumeri}`;