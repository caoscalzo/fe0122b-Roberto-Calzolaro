function creaTabella() {
    var select = document.querySelector('#tab')
    var listaUtenti = JSON.parse(localStorage.getItem('utenti'))
    listaUtenti.forEach(function (elemento) {
        var riga = document.createElement('tr');
        select.append(riga)
        for (let prop in elemento) {
            if (prop != 'id' && prop !='password') {
                var cella = document.createElement('td')
                cella.innerText = elemento[prop]
                riga.append(cella)
                
            }
        }
    })
}
creaTabella()