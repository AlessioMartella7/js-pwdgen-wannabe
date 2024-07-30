console.log('JS OK');

/*
Traccia: Chiedi all’utente il suo nome,poi chiedi il suo cognome,poi chiedi il suo colore preferito
Infine stampa in console nomecognomecolorepreferito21 */

/* 
1-recuperare elementi di interesse dal DOM
2-preparare variabile "21"
3-chiedere all'utente il suo nome
4-chiedere all'utente il suo cognome
5-chiedere all'utente il suo colore preferito
6-unisco tutte le informazioni recuperate
7-stampo il messaggio in pagina

*/

//recupero elementi dal DOM

const passwordGen = document.getElementById('password');
console.log(passwordGen);

//preparare variabile 21

const passNumb = '21';
console.log(passNumb, typeof passNumb );

//chiedo all'utente il nome

const firstName = prompt('Dimmi il tuo nome', 'alessio');
console.log(firstName, typeof firstName);

//chiedo all'utente il cognome

const lastName = prompt('Dimmi il tuo cognome', 'martella');
console.log(lastName, typeof lastName);


//chiedo all'utente il colore preferito

const favColor = prompt('Dimmi il tuo colore preferito', 'nero');
console.log(favColor, typeof favColor);

//unisco  le informazioni recuperate

const fullPassword = firstName + lastName + favColor + passNumb ;
console.log(fullPassword, typeof fullPassword);

//