/**
 * 
    Crea un array vuoto.
    Chiedi per 6 volte all'utente di inserire un numero,
    se è dispari inseriscilo nell'array.
 * 
 */


let dispariList = [];

for(let i = 0; i < 6; i++){
    let userNumber = parseInt(prompt('Inserisci un numero'));
    if(!(userNumber % 2 == 0) ){
        dispariList.push(userNumber);
    }else{
        console.log('il numero è pari');
    }
}
console.log(dispariList);