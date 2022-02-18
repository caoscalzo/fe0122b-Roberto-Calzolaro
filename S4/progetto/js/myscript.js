function prendiDato(elemento){
    let display=document.getElementById("display");
    let numero = elemento.id;

    let attualeValore=display.value;


    display.value += numero

}

function resetCalcolatrice(){
    document.getElementById("display").value=""
}

function totale(){
    let display = document.getElementById("display");
    display.value = eval(display.value);
}




alert("CIao! Benvenuto sulla mia calcolatrice!");
