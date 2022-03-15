class SonAccount {

    balanceInit: number;
    firsDeposti: number = 0;
    secondDeposit: number = 0;
    listaVersamenti: object[] = [];
    listaPrelievi: object[]=[];

    constructor(balanceInit: number) {

        this.balanceInit = balanceInit;
    
    }


    oneDeposit(num: number): number {
        this.firsDeposti = num//così dentro firts deposit ho il valore del primo deposito fatto
        this.listaVersamenti.push({Date: new Date(), numero: num})

        return this.balanceInit += num
        
    }

    mostraVersamenti(){
        this.listaVersamenti.forEach((e)=>{
            console.log(e)

        })
    }
    mostraPrelievi(){
        this.listaPrelievi.forEach((e)=>{
            console.log(e)

        })
    }

    oneWithDraw(num: number): number {
        this.listaPrelievi.push({Date: new Date(), numero: num})

        return this.balanceInit -= num
    }

    twoDeposit(num: number): number {
        this.secondDeposit = num//così dentro secon deposit ho il valoredel primo deposito fatto

        return this.balanceInit += num
    }

    twoWithDraw(num: number): number {
        return this.balanceInit -= num
    }




   
    //addInterest()
}

class MotherAccount extends SonAccount {

    constructor(balanceInit: number) {
        super(balanceInit)
    }
    addInterest(num: number): number {
        return (num * 10 / 100);
    }
    oneDeposit(num: number): number {
        num = this.addInterest(num)
        this.firsDeposti = num//così dentro firts deposit ho il valore del primo deposito fatto
        return this.balanceInit += num
    }

}


let contoutente1 = new SonAccount(0)
console.log(contoutente1)


console.log(contoutente1.oneDeposit(200))
console.log(contoutente1.oneDeposit(100))
console.log(contoutente1.oneDeposit(300))
console.log(contoutente1.oneDeposit(50))

console.log(contoutente1.oneWithDraw(30))
console.log(contoutente1.oneWithDraw(40))
console.log(contoutente1.oneWithDraw(70))
console.log(contoutente1.oneWithDraw(90))

console.log(contoutente1.twoDeposit(90))
console.log(contoutente1.twoWithDraw(90))



let contoutente2 = new MotherAccount(0)
console.log(contoutente2)

console.log(contoutente2.oneDeposit(110))
console.log(contoutente2.oneDeposit(11))
console.log(contoutente2.oneDeposit(10))
console.log(contoutente2.oneDeposit(120))

console.log(contoutente2.oneWithDraw(10))
console.log(contoutente2.oneWithDraw(20))
console.log(contoutente2.oneWithDraw(40))
console.log(contoutente2.oneWithDraw(50))

console.log(contoutente2.twoDeposit(90))
console.log(contoutente2.twoWithDraw(70))



console.log("lista versamenti: "+ contoutente1.listaVersamenti)
console.log("lista prelievi: "+ contoutente1.listaPrelievi)



console.log("lista versamenti: " + contoutente2.listaVersamenti)
console.log("lista prelievi: " + contoutente2.listaPrelievi)

contoutente1.mostraVersamenti()
contoutente1.mostraPrelievi()


contoutente2.mostraVersamenti()
contoutente2.mostraPrelievi()
