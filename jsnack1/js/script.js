/**
 * L'utente inserisce due numeri in successione, con due prompt.
    Il software stampa il maggiore.
 */


const firstUserNumber = parseInt(prompt('Dammi il primo numero').trim());
console.log(firstUserNumber);

const secondUserNumber = parseInt(prompt('Dammi il secondo numero').trim());
console.log(secondUserNumber);

if(firstUserNumber > secondUserNumber){
    console.log(`${firstUserNumber} è il maggiore`);
}else if (secondUserNumber > firstUserNumber){
    console.log(`${secondUserNumber} è il maggiore`);
}else{
    console.log('I numeri sono uguali!');
};