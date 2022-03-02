const myPariArray = [];
const myDispariArray = []; 

let contatore = 0; 

while(contatore < 200){
    let userNumber = parseInt( prompt('Inserisci un umero '));
    contatore += userNumber;
    if(userNumber % 2 == 0){
        myPariArray.push(userNumber);
    }else{
        myDispariArray.push(userNumber);
    };
    console.log('la somma è: ' + contatore);
};

console.log(myPariArray);
console.log(myDispariArray);
