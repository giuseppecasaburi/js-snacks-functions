/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
/**
 * Funzione che salva l'ora attuale al momento dell'esecuzione e stampa un messaggio di saluto in base a che ora è.
 * @param {string} name
 * @returns {string} salutoFinale
 */
function saluto (name) {
    const oraAttuale = new Date().getHours();   
    let salutoFinale = "";
   
    if (oraAttuale <= 13) {
        salutoFinale = `Buongiorno ${name}!`;
    } else if (oraAttuale > 13 && oraAttuale <= 17) {
        salutoFinale = `Buon pomeriggio ${name}!`;
    } else {
        salutoFinale = `Buonasera ${name}!`;
    }
    return salutoFinale;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(saluto(name));


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.