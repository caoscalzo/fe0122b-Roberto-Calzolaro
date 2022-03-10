/* LOGIN */

document.querySelector('#login1').addEventListener('click', function(){

    var nome1 = document.querySelector('#nome1').value
    var password1 = document.querySelector('#password1').value

    console.log(nome1)
    console.log(password1)

    var listaUtenti = localStorage.getItem('utenti') == null ? [] : JSON.parse(localStorage.getItem('utenti'))

    console.log(listaUtenti)

    let checkUser = listaUtenti.find(o => o.username == nome1)
    console.log(checkUser)

    let checkPW = listaUtenti.find(o => o.password == password1)
    console.log(checkPW)
    
    if (checkPW == null || checkUser == null){
        Swal.fire({
            icon: 'error',
            title: 'opss..',
            text: 'Dati inseriti non validi'
        })
    }else{
        if(checkPW.id == checkUser.id){
            Swal.fire({
                icon: 'success',
                title: 'Ottimo!',
                text: 'Ti sei loggato!'
            })
            setTimeout(function(){
                window.location = "cartella/profile.html";
            
                }, 2000); 
        }else{
            Swal.fire({
                icon: 'error',
                title: 'opss..',
                text: 'Dati inseriti non validi'
            })
        }
    }
    
});
