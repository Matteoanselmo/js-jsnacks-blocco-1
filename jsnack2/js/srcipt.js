/**
 * 
    L'utente inserisce due parole in successione, con due prompt.
    Il software stampa prima la parola più corta, poi la parola più lunga.
 */

let firstParola = prompt('Dimmi la prima parola').trim();

let secondParola = prompt('Dimmi la seconda parola').trim();

if(firstParola.length > secondParola.length){
    console.log('E più lunga la parola \xa0' + firstParola);
    document.getElementById('my-parola').innerHTML = `E'più lunga la parola è ${firstParola}`;
}else if(secondParola.length > firstParola.length){
    console.log('E più lunga la parola \xa0' + secondParola);
    document.getElementById('my-parola').innerHTML = `E'più lunga la parola è ${secondParola}`;
}else{
    console.log('Le due parole sono ugualmente lunghe!')
    document.getElementById('my-parola').innerHTML = `Le due parole sono ugualmente lunghe!`;
}