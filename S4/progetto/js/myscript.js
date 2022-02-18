
//funzione per disattivare ripetizione operatori

var operazioneClick = false;

function tasti(valore){

    if (valore == "+" || valore == "-" || valore == "*" || valore == "/"){
        if (operazioneClick == false) {
            document.getElementById("display").value += valore;
            operazioneClick = true;
        }
    }
    if (Number.isInteger(valore)){
        document.getElementById("display").value += valore;
    }
}




//funzione calcolatrice
function prendiDato(elemento){
    let display=document.getElementById("display")
    let numero = elemento.id

    let attualeValore=display.value;


    display.value += numero

}

function resetCalcolatrice(){
    document.getElementById("display").value=""
}

function totale(){
    let display = document.getElementById("display")
    display.value = eval(display.value)
}




//alert("CIao! Benvenuto sulla mia calcolatrice!");
