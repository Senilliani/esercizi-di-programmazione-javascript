/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it

*/
var totalSec = 12560;
var hours = Math.floor(totalSec/3600);
var min = Math.floor((totalSec-(hours*3600))/60);
var sec = (totalSec-hours*3600)-(min*60);

console.log(`${totalSec} segundos son iguales a ${hours} horas, ${min} minutos y ${sec} segundos.`);


