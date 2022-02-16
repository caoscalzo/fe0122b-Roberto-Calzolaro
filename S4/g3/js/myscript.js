
function pensione(anni,eta)
{
    return anni - eta;
    
}

console.log(pensione(65,30))

var numero1 = 10;
var numero2 = 20;

 //pensionato = () =>  "andrò in pesione tra" + (numero1 + numero2) + "anni";
 //alert(pensionato());

function ciao(){
    var num = 2;

    function somma()
    {
        console.log(numero1 + numero2 + num);
    }
    return somma ();
}

ciao();


var anni = 20;
var ingresso = (anni < 18) ? "non puoi entrare" : "puoi entrare";
console.log(ingresso);

var anni = 15;
var ingresso = (anni < 18) ? "non puoi entrare" : "puoi entrare";
console.log(ingresso);


var nome = "rob";
var nome2 = "mirko" 
var nome3 = "rob"

nome == nome2;
console.log(nome==nome2);//false

nome === nome3;
console.log(nome===nome3); //true

nome != nome3;
console.log(nome!=nome3); //false

nome !== nome3;
console.log(nome!==nome2); //true




