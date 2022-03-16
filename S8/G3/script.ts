abstract class Lavoratori {

    redditoannuolordo: number
    tasseinps: number;
    tasseirpef: number;

    constructor(redditoannuolordo: number, tasseinps: number, tasseirpef: number) {
        this.redditoannuolordo = redditoannuolordo;
        this.tasseinps = tasseinps;
        this.tasseirpef = tasseirpef
    }

    abstract getUtileTasse(): number

    abstract getTasseInps(): number

    abstract getTasseIrpef(): number

    abstract getRedditoAnnuoNetto(): number

}

class LiberoProfessionista extends Lavoratori {


    constructor(redditoannuolordo: number, tasseinps: number, tasseirpef: number) {

        super(redditoannuolordo, tasseinps, tasseirpef)
    }

    getUtileTasse(): number {
        return this.getTasseInps() + this.getTasseIrpef()

    }

    getTasseInps(): number {
        return (this.redditoannuolordo * this.tasseinps)/100
    }

    getTasseIrpef(): number {
        return (this.redditoannuolordo*this.tasseirpef)/100
    }

    getRedditoAnnuoNetto(): number {
        return   this.redditoannuolordo - this.getUtileTasse()  
    }


}

let lavoratore1 = new LiberoProfessionista(300000, 20, 30)

console.log(lavoratore1.getTasseInps())
console.log(lavoratore1.getTasseIrpef())
console.log("reddito annuo netto: " + lavoratore1.getRedditoAnnuoNetto())

console.log("utile anno netto: " + lavoratore1.getUtileTasse())

console.table(lavoratore1)

class Developer extends Lavoratori {
    constructor(redditoannuolordo: number, tasseinps: number, tasseirpef: number) {

        super(redditoannuolordo, tasseinps, tasseirpef)
    }

    getUtileTasse(): number {
        
        return this.getTasseInps() + this.getTasseIrpef()

    }

    getTasseInps(): number {
        return (this.redditoannuolordo * this.tasseinps)/100
    }

    getTasseIrpef(): number {
        return (this.redditoannuolordo*this.tasseirpef)/100
    }

    getRedditoAnnuoNetto(): number {
        return   this.redditoannuolordo - this.getUtileTasse() 
    }
 
}

let dev = new Developer(18000, 10, 15)


console.log("tasse inps :" + dev.getTasseInps())
console.log("tasse irpef :" + dev.getTasseIrpef())
console.log("reddito annuo netto: " + dev.getRedditoAnnuoNetto())
console.log("utile anno netto: " + dev.getUtileTasse())

console.table(dev)