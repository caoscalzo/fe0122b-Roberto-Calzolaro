interface Smartphone {
    marca: string;
    modello: string;
    numeroCell: number;
    carica: number;
    numeroChiamate: number;

    ricarica(unaRicarica): void;
    chiamata(minutiDurata): void;
    numero404(): number;
    getNumeroChiamate(): number;
    azzeraChiamate(): void;


}

class FirstUser implements Smartphone {
    public marca: string;
    public modello: string;
    public numeroCell: number;
    public carica: number;
    public numeroChiamate: number;



    constructor(marca: string, modello: string, numeroCell: number, carica: number, numeroChiamate: number) {
        this.marca = marca;
        this.modello = modello;
        this.numeroCell = numeroCell;
        this.carica = carica;
        this.numeroChiamate = numeroChiamate
    }
    ricarica(unaRicarica: any): void {
        this.carica += unaRicarica

    }
    chiamata(minutiDurata: any): void {
        this.carica -= (0.20 * minutiDurata)
        this.numeroChiamate++

    }
    numero404(): number {
        return this.carica
    }
    getNumeroChiamate(): number {
        return this.numeroChiamate
    }
    azzeraChiamate(): void {
        this.numeroChiamate = 0
    }



}

let numberCarica = new FirstUser("Samsung", "S21", 3386235444, 20, 10)

numberCarica.ricarica(20)
numberCarica.chiamata(10)
numberCarica.chiamata(20)

console.log(numberCarica);


class SecondUser implements Smartphone {
    public marca: string;
    public modello: string;
    public numeroCell: number;
    public carica: number;
    public numeroChiamate: number;



    constructor(marca: string, modello: string, numeroCell: number, carica: number, numeroChiamate: number) {
        this.marca = marca;
        this.modello = modello;
        this.numeroCell = numeroCell;
        this.carica = carica;
        this.numeroChiamate = numeroChiamate
    }
    ricarica(unaRicarica: any): void {
        this.carica += unaRicarica

    }
    chiamata(minutiDurata: any): void {
        this.carica -= (0.20 * minutiDurata)
        this.numeroChiamate++

    }
    numero404(): number {
        return this.carica
    }
    getNumeroChiamate(): number {
        return this.numeroChiamate
    }
    azzeraChiamate(): void {
        this.numeroChiamate = 0
    }



}

let numberCarica2 = new SecondUser("Nokia", "6630", 3386222244, 40, 20)

numberCarica2.ricarica(20)
numberCarica2.chiamata(15)
numberCarica2.chiamata(15)

console.log(numberCarica2);


class ThirdUser implements Smartphone {
    public marca: string;
    public modello: string;
    public numeroCell: number;
    public carica: number;
    public numeroChiamate: number;



    constructor(marca: string, modello: string, numeroCell: number, carica: number, numeroChiamate: number) {
        this.marca = marca;
        this.modello = modello;
        this.numeroCell = numeroCell;
        this.carica = carica;
        this.numeroChiamate = numeroChiamate
    }
    ricarica(unaRicarica: any): void {
        this.carica += unaRicarica

    }
    chiamata(minutiDurata: any): void {
        this.carica -= (0.20 * minutiDurata)
        this.numeroChiamate++

    }
    numero404(): number {
        return this.carica
    }
    getNumeroChiamate(): number {
        return this.numeroChiamate
    }
    azzeraChiamate(): void {
        this.numeroChiamate = 0
    }



}

let numberCarica3 = new ThirdUser("Iphone", "13", 33862354244, 50, 10)

numberCarica3.ricarica(20)
numberCarica3.chiamata(23)
numberCarica3.chiamata(35)

console.log(numberCarica3);

