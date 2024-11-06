/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = 'Mario';


// Dichiara la funzione qui.
/**
 * Funzione che prende la variabile nella quale è salvato il nome dell'utente e stampa un saluto.
 * @param {string} name
 * @returns {string}
 */
const saluto = (name) => `Ciao ${name}!`

// Invoca la funzione qui e stampa il risultato in console
console.log(saluto("Mario"));


//Risultato atteso se si passa 'Mario': // ciao Mario