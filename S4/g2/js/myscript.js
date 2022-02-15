var nome = "Roberto";
var cognome = "Calzolaro";
var eta = 28;
var luogonascita = "San Giovanni Rotondo";

document.write("<p id='para'> il mio nome è " + nome + ", il mio cognome invece è " + cognome + " e sono nato a " + luogonascita + " il 23-05-1993, quindi ad oggi ho " + eta + "</p>")



function changeColor(newColor) {
    var elem = document.getElementById("para");
    elem.style.color = newColor;
}

var booleano = false;
console.log(booleano);

console.log(nome + cognome + booleano)

var booleano = true;
console.log(booleano);

console.log(cognome + booleano)

var nome = "ROB";
console.log("valore di var: " + nome);

{
    let nome = "ROB";
    console.log("valore di let: " + nome);
    let nome2 = "CALZOLARO";
    console.log("valore di let nome2: " + nome);
}

console.log("valore di let nome2 fuori: " + nome);
//console.log("valore di let fuori: " + nome2);


var gun = "Desert Eagle";
console.log(gun); {
    const gun = "ak-47";
    console.log(gun);
    const gun2 = "M-16";
    console.log(gun2)
}
console.log(gun);
//console.log(gun2) inserendo gun2 nomn funziomna


var numero = 20;
var numero2 = 15;
console.log(numero += numero2)
console.log(numero *= numero2)
console.log(numero -= numero2)
console.log(numero /= numero2)

//

var nome = "Roberto";
var anni = 12;
var importo = 34.56;
var patente = false;
console.log(patente);

var patente = "A";
console.log(patente);

console.log(anni * importo); //risultato
console.log(anni * patente); //non definito

function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}


let name = 'roberto';

function showMessage() {
  let message = 'Hello, ' + name;
  alert(message);
}

showMessage(); 

function checkAge(age) {
    if (age >= 18) {
      return true;
    } else {
      return confirm('Do you have permission from your parents?');
    }
  }
  
  let age = prompt('How old are you?', 18);
  
  if ( checkAge(age) ) {
    alert( 'Access granted' );
  } else {
    alert( 'Access denied' );
  }


  function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }
 
