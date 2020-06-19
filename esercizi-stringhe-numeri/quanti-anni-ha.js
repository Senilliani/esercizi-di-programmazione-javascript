/*
  Quanti anni ha?
  Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
    - l'età della persona,
    - quanti anni sono necessari per raggiungere i 100
  Restituisca in output entrambi i risultati.

  Esempio:
    Input: anno corrente = 2018, anno di nascita = 1991
    Ouput: età = 27, anni mancanti = 73

  http://www.imparareaprogrammare.it
*/

var Year = 2020;
var Birth = 1983;
var Future = 100;

var Age = Year - Birth;
var Missing = Future - Age;

console.log(`La persona tiene ${Age} años y dentro de ${Missing} años llegará a los 100.`);