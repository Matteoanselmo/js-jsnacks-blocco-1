/**
 * Creiamo un array con dieci numeri randomici
 * calcoliamo la somma di tutti gli elementi
 * e calcoliamo anche il valore medio
 */


const randomArray = [Math.floor(Math.random() * 100) , Math.floor(Math.random() * 100) , Math.floor(Math.random() * 100)];
console.log(randomArray);

let somma = 0;


for(let i = 0; i < randomArray.length; i++){
    somma += randomArray[i]; 
};

let media = parseInt(somma / randomArray.length);

console.log('La somma dei mìnumeri presenti nell \'array è: ' + somma);
console.log('La media dei mìnumeri presenti nell \'array è: ' + media);