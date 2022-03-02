const userNumber = parseInt(prompt('inserisci un numero'));
while(isNaN(userNumber)){
    userNumber = parseInt(prompt('inserisci un numero'));
};

// const arrayWrapper = [];

for( let i = 0; i < userNumber; i++){
    const myArray = [];
    while ( myArray.length < 10){
        myArray.push(Math.floor(Math.random() * 4528) + 4);
    }
    console.log(myArray);
}

