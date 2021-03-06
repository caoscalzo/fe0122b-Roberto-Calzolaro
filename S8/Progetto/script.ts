fetch("Abbigliamento.json")
    .then(response => response.json())
    .then(vestiti => {
        vestiti.forEach((e: Vestiti) => {

            let vestiti = new Vestiti(e.id, e.codprod, e.collezione, e.capo, e.modello, e.quantita, e.colore, e.prezzoivaesclusa, e.prezzoivainclusa, e.disponibile, e.saldo)

            //console.log(vestiti)
            console.log("saldo - " + vestiti.getsaldocapo() + "€")
            console.log("prezzo finale = " + vestiti.getacquistocapo() + "€")


            var select = document.querySelector('#tab');
            var riga = document.createElement("tr");
            select.append(riga);
            for (var prop in e) {
                if (prop != "id" && prop != "codprod" && prop != "capo" && prop != "modello" && prop != "quantita" && prop != "disponibile" && prop != "saldo") {
                    var campi = document.createElement("td");
                    campi.innerText = vestiti[prop];
                    riga.append(campi);
                }
            }
        })
    })


class Vestiti {
    id: number
    codprod: number
    collezione: string
    capo: string
    modello: number
    quantita: number
    colore: string
    prezzoivaesclusa: number
    prezzoivainclusa: number
    disponibile: string
    saldo: number

    constructor(id: number, codprod: number, collezione: string, capo: string, modello: number, quantita: number, colore: string, prezzoivaesclusa: number, prezzoivainclusa: number, disponibile: string, saldo: number) {
        this.id = id
        this.codprod = codprod
        this.collezione = collezione
        this.capo = capo
        this.modello = modello
        this.quantita = quantita
        this.colore = colore
        this.prezzoivaesclusa = prezzoivaesclusa
        this.prezzoivainclusa = prezzoivainclusa
        this.disponibile = disponibile
        this.saldo = saldo
    }

    getsaldocapo(): number {
        return Math.ceil(this.prezzoivainclusa * (this.saldo / 100))
    }
    getacquistocapo(): number {        //prezzo - sconto
        return Math.ceil(this.prezzoivainclusa - this.getsaldocapo())
    }
}

let armani = new Vestiti(6, 1234, "inverno", "felpa", 2342, 12, "nero", 90.5, 109.80, "on-line", 20)
console.log(armani)
console.log("saldo - " + armani.getsaldocapo() + "€")
console.log("prezzo finale = " + armani.getacquistocapo() + "€")

let nike = new Vestiti(7, 1784, "primavera", "T-shirt", 2782, 25, "nero", 66, 80.5, "negozio", 30)
console.log(nike)
console.log("saldo - " + nike.getsaldocapo() + "€")
console.log("prezzo finale = " + nike.getacquistocapo() + "€")

let adidas = new Vestiti(8, 1334, "estate", "pantalone", 2112, 16, "nero", 38, 46.3, "on-line", 50)
console.log(adidas)
console.log("saldo - " + adidas.getsaldocapo() + "€")
console.log("prezzo finale = " + adidas.getacquistocapo() + "€")









