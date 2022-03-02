const myPariArray = [];
const myDispariArray = []; 

let userNumber = parseInt( prompt('Inserisci un umero '));
let contatore = 0; 

while(contatore < 200){
    userNumber = parseInt( prompt('Inserisci un umero '));
    contatore += userNumber;
    if(userNumber % 2 == 0){
        myPariArray.push(userNumber);
    }else
    myDispariArray.push(userNumber);
}

console.log(myPariArray);
console.log(myDispariArray);
console.log(userNumber);