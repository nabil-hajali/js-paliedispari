//chiedere all'utente di inserire una parola

const parola = prompt('inserisci una parola');
const text = parola;

//creare una funzione per capire se la parola inserita è palindroma

function isPalindroma(text) {
    
    // rendo tutto minuscolo
    text = text.toLowerCase();

    // inverto la stringa
    const textReverse = text.split('').reverse().join('');

    // confronto se sono uguali
    return text === textReverse;
}
// condizione per sapere se è palindroma o meno

if (isPalindroma(parola)) {
    console.log("La parola è palindroma");
} else {
    console.log("La parola non è palindroma");
}




 
