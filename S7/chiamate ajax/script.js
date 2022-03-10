

//ciclo for in
fetch('https://sofin.wp-admin.it/public/api/v1/user')
    .then(response => response.json())
    .then(data => {
        var campi = ["name", "lastname", "email", "role"]

        data.forEach(function (elemento) {

            var select = document.querySelector('#tab')

            let cancella = document.createElement("button")
            cancella.innerText = "Cancella"
            cancella.classList.add("delete")

            let modifica = document.createElement("button")
            modifica.innerText = "Modifica"
            modifica.classList.add("modifica")

            let riga = document.createElement('tr');


            select.append(riga)


            for (let prop in elemento) {
                if (campi.includes(prop)) {
                    let contenuto = typeof elemento[prop] == "object" ? elemento[prop].nicename : elemento[prop]
                    let cella = document.createElement('td')
                    cella.innerText = contenuto
                    riga.append(cella)
                    riga.append(cancella)
                    riga.append(modifica)
                }
            }
            let elimina = riga.querySelector(".delete")
            elimina.addEventListener("click", function () {
                riga.remove()

            })


        })
    })
          