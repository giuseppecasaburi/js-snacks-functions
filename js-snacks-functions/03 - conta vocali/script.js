/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
/**
 * Questa funzione prende la stringa in entrata, la trasforma in un array di caratteri con .split. Poi con .includes verifica se il carattere char è incluso nella stringa "aei...." e alla fine otterremo un array contenente solo le vocali presenti nella stringa passata.
 * @param {string} word
 * @returns {string}
 */
const returnVocal = (word) => word.split("").filter(char => "aeiouAEIOU".includes(char));

// Invoca la funzione qui e stampa il risultato in console
console.log(returnVocal(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)