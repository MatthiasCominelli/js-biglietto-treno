
const prezzototale = document.getElementById("prezzo-tratta");
const kmdapercorrere = prompt('Quanti chilometri devi percorrere?');
// console.log(kmdapercorrere);
const etapasseggero = prompt('Quanti anni hai?');
// console.log(etapasseggero);
let prezzotratta = kmdapercorrere * 0.21;


if(etapasseggero < 18){
    let prezzoscontato20 = parseFloat ((prezzotratta * 0.8).toFixed(2));
    console.log(prezzoscontato20);  
    prezzototale.innerHTML = prezzoscontato20; 
    
}else if(etapasseggero > 65){
    let prezzoscontato40 = Number((prezzotratta * 0.6).toFixed(2));
    console.log(prezzoscontato40);
    prezzototale.innerHTML = prezzoscontato40;
}else{
    console.log(prezzotratta);
    prezzototale.innerHTML = prezzotratta;
}







 

