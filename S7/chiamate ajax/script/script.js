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
            cancella.setAttribute("data-id", elemento.id)//vai a prendere l'id dell'emento che stai ciclando

            let modifica = document.createElement("a")
            modifica.innerText = "Modifica"
            modifica.classList.add("modifica")
            modifica.href = "/form.html?id=" + elemento.id


            let aggiungi = document.createElement("a")
            aggiungi.innerText = "Aggungi"
            aggiungi.classList.add("aggiungi")
            aggiungi.href = "/formAggiungi.html" 

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
                    riga.append(aggiungi)


                }
            }
            let elimina = riga.querySelector(".delete")
            elimina.addEventListener("click", function () {
                var attributo = this.getAttribute("data-id")
                fetch('https://sofin.wp-admin.it/public/api/v1/user/' + attributo, {
                    method: "DELETE",
                })
                    .then(response => response.json())
                    .then(data => {
                        alert("hai cancellato l'utente")
                        riga.remove()
                    })

            })
        })
    })
