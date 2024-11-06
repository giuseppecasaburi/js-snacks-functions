/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
/**
 * Description
 * @param {any} names
 * @returns {any}
 */
function onlyInitial(names) {
    const initialArray = [];
    for (let i = 0; i < names.length; i++) {
        initialArray.push(names[i][0]);
    }
    return initialArray;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(onlyInitial(names));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]