const utente = document.getElementById("nome-utente");
const biglietto = document.getElementById("sfondo-biglietto");
const prezzototale = document.getElementById("prezzo-tratta");
const nomeutente = prompt('Come ti chiami? (nome e cognome)');
const kmdapercorrere = prompt('Quanti chilometri devi percorrere?');
// console.log(kmdapercorrere);
const etapasseggero = prompt('Quanti anni hai?');
// console.log(etapasseggero);
let prezzotratta = kmdapercorrere * 0.21;


if(etapasseggero < 18){
    let prezzoscontato20 = parseFloat ((prezzotratta * 0.8).toFixed(2));
    console.log(prezzoscontato20); 
    utente.innerHTML = nomeutente;
    prezzototale.innerHTML = prezzoscontato20 + '€';
    biglietto.style.cssText = 'background-color: #E64848;'
    
     
    
}else if(etapasseggero > 65){
    let prezzoscontato40 = Number((prezzotratta * 0.6).toFixed(2));
    console.log(prezzoscontato40);
    utente.innerHTML = nomeutente;
    prezzototale.innerHTML = prezzoscontato40 + '€';
    biglietto.style.cssText = 'background-color: aqua;'
}else{
    console.log(prezzotratta);
    utente.innerHTML = nomeutente;
    prezzototale.innerHTML = prezzotratta + '€';
    biglietto.style.cssText = 'background-color: lightgreen;'
}







 

