/*
Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati.
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
*/

// genero bombe casuali
var bombe = [];

var numeriMassimi = 20;
var NumeroBombe = 5;

// evito ci siano numeri a doppio
while(bombe.length < NumeroBombe) {

    var numeroGenerato = generaBomba(numeriMassimi);

    if (bombe.includes(numeroGenerato) == false) {

        bombe.push(numeroGenerato);
    }
}

//con un prompt chiedo all'utente di inserire 84=(100-16) numeri
//se non sono presenti li pusho in un arrey, 
//se già è un numero che ha inserito chiedo di metterne un altro,
//se invece è presente nel primo array ha perso
//se il secondo array.lenght è = 84 ha vinto

var numeriUtente = [];
var bombaTrovata = false;
var condizioniPossibili = (numeriMassimi - NumeroBombe);

while(numeriUtente.length < condizioniPossibili && bombaTrovata == false) {

    var numero = parseInt(prompt('Inserisci numero'));

    var isNumeroBomba = isBombaTrovata(numero, bombe);

    //se resta falso continuo a chiedergli i numeri
    //se diventa vero esce dal ciclo e gli comunico il punteggio

    if (isNumeroBomba == false) {

        if (numeriUtente.includes(numero) == false) {

            numeriUtente.push(numero);

        } else {

            alert('il numero è già presente');
        }

    } else {

        alert('Hai trovato una bomba');
        bombaTrovata = true;
    }

    console.log('numeri inseriti', numeriUtente);
}


//alla fine comunicare all'utente quanti numeri ha inserito correttamente
//prima di trovare la bomba, ovverro lunghezza secondo array secondo array.lenght


var totaleNumeriInseriti = numeriUtente.length;

var messaggio = '';

if (bombaTrovata) {

    messaggio = 'perso';

} else {

    messaggio = 'vinto';
}

alert('Abbiamo ' + messaggio + '!! Punteggio ottenuto : ' + totaleNumeriInseriti);



//---------------  Funzioni


//genera numeri casuali
function generaBomba(max) {

    return Math.floor(Math.random() * max) + 1;
}


//controlla se il numero inserito dall'utente esiste già nel mio array iniziale delle bombe
function isBombaTrovata(numeroInserito, listaBombe) {

    var found = false;

    var i = 0;

    while(i < listaBombe.length && found == false) {

        var numeroArray = listaBombe[i];

        if (numeroInserito == numeroArray) {

            found = true;
        }  
        
        i++;

        console.log('ho controllato indice', i);
    }

    return found;
}
