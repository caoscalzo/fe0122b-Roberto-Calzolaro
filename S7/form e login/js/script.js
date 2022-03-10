/* REGISTER */

class datiUtente {
    constructor(username,email,password){
        this.id = (() =>{
            let newId = localStorage.getItem('id') == null ? 1: Number(localStorage.getItem('id'))+1
            localStorage.setItem('id', newId)
            return newId //serve per valorizzare l'id altrimenti non lo trova
        })()
        this.username = username;
        this.email = email;
        this.password = password;
    }
}


document.querySelector('#bottone').addEventListener('click', function(){

let username = document.querySelector('#form3Example1c').value;
let email = document.querySelector('#form3Example3c').value;
let password = document.querySelector('#form3Example4c').value;
let password2 = document.querySelector('#form3Example4cd').value;
var controllo = true;

var campi = [username, email, password]

campi.forEach(mioFunzione)

function mioFunzione (campo){
    if(campo == ""){
        controllo = false
    }else{
        console.log(campo.id + "  valido" )
       
    }
}

if (password2 != password){
    controllo = false;
}else{
    console.log('Password combacia')
}


var listaUtenti = localStorage.getItem('utenti') == null ? [] : JSON.parse(localStorage.getItem('utenti'))

var checkUser = listaUtenti.find(o => o.username == username)
    console.log(checkUser)

var checkEmail = listaUtenti.find(o => o.email == email)
    console.log(checkEmail)


if(checkEmail == null && checkUser == null){
    console.log('dati validi')
}else{
    controllo = false
}

if(controllo == true){
    

    let utentiSalvati = localStorage.getItem('utenti') == null ? [] : JSON.parse(localStorage.getItem('utenti'))
    let dati = new datiUtente(username,email,password)
    utentiSalvati.push(dati)
    console.log(utentiSalvati)
    localStorage.setItem('utenti', JSON.stringify(utentiSalvati))

    swal("Ottimo!", "Registrazione andata a buon fine!", "success");
    setTimeout(function(){
    window.location = "login.html";

    }, 2000); 
    
}else{
    swal("Attenzione!", "Compila tutti i campi correttamente!", "warning");
}

})
