document.querySelector('#accedi').addEventListener('click', function(e){
    e.preventDefault()


    var nome1 = document.querySelector('#nome1').value
    var password1 = document.querySelector('#passw1').value
    var listaUtenti = localStorage.getItem('utenti') == null ? [] : JSON.parse(localStorage.getItem('utenti'))

    let checkUser = listaUtenti.find(o => o.username == nome1 || o.password == password1)

    if ( checkUser == undefined){
        alert('Dati inseriti non validi')

    }else{
            alert('Ti sei loggato!')
            setTimeout(function () {
                window.location = "index2.html";
            }, 1000)
    }
});