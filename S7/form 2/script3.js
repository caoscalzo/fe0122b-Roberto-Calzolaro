
var elementiSalvati = localStorage.getItem('utenti');
var dataBase = elementiSalvati == null ? [] : JSON.parse(elementiSalvati);
console.log(dataBase)


dataBase.forEach(function (e) {

    var tabella = document.querySelector("#tab")
    var tr = document.createElement("tr")
    var td = document.createElement("td")
    var td1 = document.createElement("td")
    var td2 = document.createElement("td")
    var td3 = document.createElement("button")



    tabella.append(tr)
    tr.append(td, td1, td2, td3)
    td.innerHTML = e.username
    td1.innerHTML = e.email
    td2.innerHTML = e.password
    td3.innerHTML = ("elimina")
    td3.style.backgroundColor = "red"
    td3.setAttribute("data-email", e.email)


    td3.addEventListener("click",function() {
        var deleteEmail = this.getAttribute("data-email")
        tr.remove()
        elimina(deleteEmail)
    })
});

function elimina(email) {
    var indice = dataBase.findIndex(u =>u.email == email)
    dataBase.splice(indice, 1)
    localStorage.setItem("utenti", JSON.stringify(dataBase))
}


























/*function creaTabella() {
    var select = document.querySelector('#tab')
    var listaUtenti = JSON.parse(localStorage.getItem('utenti'))
    listaUtenti.forEach(function (elemento) {

        var riga = document.createElement('tr');
        var bottone = document.createElement("button")
        select.append(riga)

        for (let prop in elemento) {
            if (prop != 'id' && prop != 'password') {
                var cella = document.createElement('td')
                cella.innerText = elemento[prop]
                riga.append(cella)

            }
            
        }
        var cellaElimina = document.createElement("td")
        cellaElimina.append(bottone)
        riga.append(cellaElimina)

    })
}
creaTabella() */