//Consegna:

//1. chiedi all’utente il cognome.

var cognome = prompt("Inserisci il tuo cognome");
cognome = cognome[0].toUpperCase() + cognome.substring(1).toLocaleLowerCase();

//2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’

var listaCognomi = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
listaCognomi.push(cognome);
console.log(listaCognomi);

//3. stampa la lista ordinata alfabeticamente
listaCognomi.sort()
console.log(listaCognomi);
//4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova

var posizioneCognomeAggiunto = (listaCognomi.indexOf(cognome) +1);
console.log(posizioneCognomeAggiunto);
