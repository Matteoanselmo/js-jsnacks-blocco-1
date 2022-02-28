/**
 *
    In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.
 *
 */

const participantsList = ['matteo' , 'riccardo', 'andrea' , 'luca' , 'giovanni' , 'aristotele']
let userName = prompt('Dimmi il tuo nome').toLocaleLowerCase().trim();

let checkValidate = false;

for(let i = 0; i < participantsList.length; i++ ){
    if( userName == participantsList[i]){
        checkValidate = true;
    }
};

if(checkValidate){
    console.log('Sei in lista!');
    document.getElementById('my-list'). innerHTML = `Grande ${userName} sei in lista!`
} else {
    console.log('Non sei in lista!');
    document.getElementById('my-list'). innerHTML = `Mi dispiace ${userName} non sei in lista!`
};