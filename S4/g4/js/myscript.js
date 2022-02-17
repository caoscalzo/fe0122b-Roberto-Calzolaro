let lettera = "Caro Mirko, è un piacere aver fatto la tua conoscenza durante questo corso. Spero di Rivederti presto"
console.log(lettera.toUpperCase());
console.log(lettera.toLowerCase());

console.log(lettera.slice(5, 12));

console.log(lettera.substr(5, 20));

var concatenata = lettera.concat(" appena sarò più libero");
console.log(concatenata);

var persone = [
    "Ciccio",
    "Matteo",
    "Giovanni",
    "Mirko",
    "Alessio"
];
console.log(persone);
console.log(persone[2]); //prende giovanni

console.log(persone.length);

var casa = {
    via: "Padre Cassiano",
    civico: "2",
    tipo: "appartamento",
    dotazioni: "piscina"
};
console.log(casa);

let variabilePop = persone.pop();
console.log(variabilePop);
console.log(persone);

let variabilePush = persone.push("leone");
console.log(variabilePush);
console.log(persone);

let variabileUnshift = persone.unshift("Paki");
console.log(persone);
console.log(variabileUnshift);

let variabileShift = persone.shift();
console.log(persone);
console.log(variabileShift);


var persone = [
  1,
  2,
  3,
  4,
    
];



