let select = document.querySelector("#regione")
let provincia= document.querySelector("#provincia")


fetch("regioni.json")
    .then(response => response.json())
    .then(regioni => {
        regioni.forEach(element => {
            let region = element
            let section = document.createElement("option")
            select.append(section)
            for (var prop in region) {
                var campo = document.createElement("option")
                campo.innerText = region[prop];
                section.append(campo)
            }
        });
    })
select.addEventListener("click", function () {

    let valore = select.value
    let prov = document.querySelector("#provincia")


    fetch("province.json")
        .then(response => response.json())

        .then(province => {

            /*campi.querySelectorAll("option").forEach((a)=>{
                a.remove()
            })*/


            for (var i = 0; i < province.length; i++) {

                if (province[i].prov_reg == valore) {

                    var campi = document.createElement("option")
                    campi.innerText = province[i].prov_nome;
                    prov.append(campi)

                    document.querySelector("#stampa").setAttribute("src", province[i].prov_url)

                }

            }

            provincia.addEventListener("click", function () {

                let provSelezionata = provincia.value
                console.log(provSelezionata)
                

                    document.querySelector("#stampa2").setAttribute("src","assets/img/province/"+ provSelezionata+".png")
                    });
            


        });



})










