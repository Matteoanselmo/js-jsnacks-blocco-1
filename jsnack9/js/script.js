/**
 * Creiamo un array con dieci numeri randomici
 * calcoliamo la somma di tutti gli elementi
 * e calcoliamo anche il valore medio
 */


const randomArray = [];
let somma = 0;

for(let i = 0; i <10; i++){
    randomArray.push(Math.floor(Math.random() * 100));
    somma += randomArray[i]; 
}

console.log(randomArray);

let media = parseInt(somma / randomArray.length);

console.log('La somma dei mìnumeri presenti nell \'array è: ' + somma);
console.log('La media dei mìnumeri presenti nell \'array è: ' + media);