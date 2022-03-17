var FirstUser = /** @class */ (function () {
    function FirstUser(marca, modello, numeroCell, carica, numeroChiamate) {
        this.marca = marca;
        this.modello = modello;
        this.numeroCell = numeroCell;
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }
    FirstUser.prototype.ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
    };
    FirstUser.prototype.chiamata = function (minutiDurata) {
        this.carica -= (0.20 * minutiDurata);
        this.numeroChiamate++;
    };
    FirstUser.prototype.numero404 = function () {
        return this.carica;
    };
    FirstUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    FirstUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return FirstUser;
}());
var numberCarica = new FirstUser("Samsung", "S21", 3386235444, 20, 10);
//numberCarica.ricarica(20)
numberCarica.ricarica(20);
numberCarica.chiamata(10);
numberCarica.chiamata(20);
console.log(numberCarica);
var SecondUser = /** @class */ (function () {
    function SecondUser(marca, modello, numeroCell, carica, numeroChiamate) {
        this.marca = marca;
        this.modello = modello;
        this.numeroCell = numeroCell;
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }
    SecondUser.prototype.ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
    };
    SecondUser.prototype.chiamata = function (minutiDurata) {
        this.carica -= (0.20 * minutiDurata);
        this.numeroChiamate++;
    };
    SecondUser.prototype.numero404 = function () {
        return this.carica;
    };
    SecondUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    SecondUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return SecondUser;
}());
var numberCarica2 = new SecondUser("Nokia", "6630", 3386222244, 40, 20);
//numberCarica.ricarica(20)
numberCarica2.ricarica(20);
numberCarica2.chiamata(15);
numberCarica2.chiamata(15);
console.log(numberCarica2);
var ThirdUser = /** @class */ (function () {
    function ThirdUser(marca, modello, numeroCell, carica, numeroChiamate) {
        this.marca = marca;
        this.modello = modello;
        this.numeroCell = numeroCell;
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }
    ThirdUser.prototype.ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
    };
    ThirdUser.prototype.chiamata = function (minutiDurata) {
        this.carica -= (0.20 * minutiDurata);
        this.numeroChiamate++;
    };
    ThirdUser.prototype.numero404 = function () {
        return this.carica;
    };
    ThirdUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    ThirdUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return ThirdUser;
}());
var numberCarica3 = new ThirdUser("Iphone", "13", 33862354244, 50, 10);
//numberCarica.ricarica(20)
numberCarica3.ricarica(20);
numberCarica3.chiamata(23);
numberCarica3.chiamata(35);
console.log(numberCarica3);
