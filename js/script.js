// alert("Hello World!");

//esercizio 1: MAIL 
    //  1) Chiedi all’utente la sua email
    //  2) Controlla che sia nella lista di chi può accedere
    //  3) Stampa un messaggio appropriato sull’esito del controllo.

// 1) Chiedo all'utente la sua mail
const email = prompt("Inserisci la tua email");
console.log(email);

// 2) Controllo che sia nella lista 

// Creo un array
const emailValid = ["pippo@email.it", "pluto@email.it", "paperino@email.it", "topolino@email.it", "paperina@email.it", "topolina@email.it", "paperone@email.it"];

// // Combino array con un ciclo for per controllare email
// for (let i = 0; i < emailValid.length; i++) {
//     console.log(emailValid[i]);
//     //inserisco condizioni per creare un controllo delle mail
//     if (email == emailValid[i]) {
//         console.log("L'email inserita è valida!");
//     } else {
//         console.log("L'email inserita non è valida");
//     }
// }

// così però non esce dal ciclo !!!!!!!!!!!!!

// Combino ciclo + array + sentinella da mettere !!! FUORI !!! dal ciclo

// Crea sentinella con valore booleano
let sentinella = false; 

for (let i = 0; i < emailValid.length; i++) {
    // console.log(emailValid[i]);
    //inserisco condizioni per creare un controllo delle mail
    if (email == emailValid[i]) {
        sentinella = true;
        // console.log("L'email inserita è valida!");
    } 
} // devo stampare fuori dal ciclo però!!

if (sentinella) {
    console.log("L'email inserita è valida");
} else {
    console.log("L'email inserita non è valida")
}


// esercizio 2: GIOCO DEI DADI
    //  1) Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. 
    //  2) Stabilire il vincitore, in base a chi fa il punteggio più alto.

// 1) Genero numero random dell'utente

// // dichiaro e assegno variabile
// const numeroRandom = document.getElementById("genera");
// //numeroRandom.innerHTML = Math.floor(Math.random() * 6) + 1; // 

// numeroRandom.addEventListener("click", function() {
//     return Math.floor(Math.random * 6) + 1;
//    });

//prova NON funziona
