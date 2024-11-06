/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
/**
 * Funzione che accoglie l'array names e ne crea un altro dentro il quale inserisce solo le parole che iniziano per la lettera passata come parametro.
 * @param {array} names
 * @param {string} letter
 * @returns {array} namesLetter
 */ 
function nameWithLetter(names, letter) {
    const namesLetter = [];
    for (let i = 0; i < names.length; i++) {
        if (names[i][0] === letter) {
            namesLetter.push(names[i]);
        }
    }
    return namesLetter;
}



// Invoca la funzione qui e stampa il risultato in console
console.log(nameWithLetter(names, "A"));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]