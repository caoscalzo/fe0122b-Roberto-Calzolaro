let bottoneInvia = document.querySelector('.btn'); //creare variabile bottone

bottoneInvia.addEventListener('click', function (e) { //assegnazione evento al click del bottone (e)è il parametro
    e.preventDefault();//evita che il form invii in automatico
    var arrayy = document.querySelectorAll('.form-control') //array di tutti i campi input con classe form
    var pippo = document.getElementById('username').value
    var psw = document.querySelector('#psw').value;
    var psw1 = document.querySelector('#psw1').value;
    var email = document.querySelector('#email').value;
    var email1 = document.querySelector('#email1').value;
    var controllo = true

    arrayy.forEach(elemento => {
        var valore = elemento.value;//elemento.value si riferisce al valore di ogni elemento dell' arrayy


        if (valore == '') {
            elemento.style.border = '1px solid red'
            controllo = false
        } else {
            elemento.style.border = ''

        }
    });


    if (email != email1) {
        document.getElementById('spanEmail').innerHTML = 'ricontrolla email'

    } else {
        document.getElementById('spanEmail').innerHTML = ''

    }
    if (psw1 != psw) {
        document.getElementById('spanPsw').innerHTML = 'ricontrolla password'

    } else {
        document.getElementById('spanPsw').innerHTML = ''

    }
    if (controllo) {
        var nuovoUtente = new User(pippo, email, psw);

        var utenteSalvato = memorizzaDati(nuovoUtente)

        if (utenteSalvato) {
            setTimeout(function () {
                window.location.href = "login.html";
            }, 1000)
        }
    }

})

class User {
    constructor(username, email, password) {
        /*this.id = (() =>{//creo una proprietà
            let newId = localStorage.getItem('id') == null ? 1: Number(localStorage.getItem('id'))+1 
            localStorage.setItem('id', newId)
            return newId //serve per generare un id nuovo ogni volta che inseriamo un nuovo utente
        })()*/
        this.id = this.getId()
        this.username = username
        this.email = email
        this.password = password

    }
    getId() {
        let newId = localStorage.getItem('id') == null ? 1 : Number(localStorage.getItem('id')) + 1
        localStorage.setItem('id', newId)
        return newId //serve per generare un id nuovo ogni volta che inseriamo un nuovo utente
    }
}
function memorizzaDati(newUser) {
    let elementiSalvati = localStorage.getItem('utenti');// è la chaive del local storage 

    let dataBase = elementiSalvati == null ? [] : JSON.parse(elementiSalvati);

    var target = dataBase.find(oldUser => oldUser.email == newUser.email || oldUser.username == newUser.username);

    if (target == undefined) {
        dataBase.push(newUser);
        localStorage.setItem('utenti', JSON.stringify(dataBase))
        return true
    } else {
        document.getElementById('spanEmail').innerHTML = 'email già registrata'
        return false
    }
}

