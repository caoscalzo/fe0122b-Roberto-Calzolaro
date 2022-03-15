var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SonAccount = /** @class */ (function () {
    function SonAccount(balanceInit) {
        this.firsDeposti = 0;
        this.secondDeposit = 0;
        this.listaVersamenti = [];
        this.listaPrelievi = [];
        this.balanceInit = balanceInit;
    }
    SonAccount.prototype.oneDeposit = function (num) {
        this.firsDeposti = num; //così dentro firts deposit ho il valore del primo deposito fatto
        this.listaVersamenti.push({ Date: new Date(), numero: num });
        return this.balanceInit += num;
    };
    SonAccount.prototype.mostraVersamenti = function () {
        this.listaVersamenti.forEach(function (e) {
            console.log(e);
        });
    };
    SonAccount.prototype.mostraPrelievi = function () {
        this.listaPrelievi.forEach(function (e) {
            console.log(e);
        });
    };
    SonAccount.prototype.oneWithDraw = function (num) {
        this.listaPrelievi.push({ Date: new Date(), numero: num });
        return this.balanceInit -= num;
    };
    SonAccount.prototype.twoDeposit = function (num) {
        this.secondDeposit = num; //così dentro secon deposit ho il valoredel primo deposito fatto
        return this.balanceInit += num;
    };
    SonAccount.prototype.twoWithDraw = function (num) {
        return this.balanceInit -= num;
    };
    return SonAccount;
}());
var MotherAccount = /** @class */ (function (_super) {
    __extends(MotherAccount, _super);
    function MotherAccount(balanceInit) {
        return _super.call(this, balanceInit) || this;
    }
    MotherAccount.prototype.addInterest = function (num) {
        return (num * 10 / 100);
    };
    MotherAccount.prototype.oneDeposit = function (num) {
        num = this.addInterest(num);
        this.firsDeposti = num; //così dentro firts deposit ho il valore del primo deposito fatto
        return this.balanceInit += num;
    };
    return MotherAccount;
}(SonAccount));
var contoutente1 = new SonAccount(0);
console.log(contoutente1);
console.log(contoutente1.oneDeposit(200));
console.log(contoutente1.oneDeposit(100));
console.log(contoutente1.oneDeposit(300));
console.log(contoutente1.oneDeposit(50));
console.log(contoutente1.oneWithDraw(30));
console.log(contoutente1.oneWithDraw(40));
console.log(contoutente1.oneWithDraw(70));
console.log(contoutente1.oneWithDraw(90));
console.log(contoutente1.twoDeposit(90));
console.log(contoutente1.twoWithDraw(90));
var contoutente2 = new MotherAccount(0);
console.log(contoutente2);
console.log(contoutente2.oneDeposit(110));
console.log(contoutente2.oneDeposit(11));
console.log(contoutente2.oneDeposit(10));
console.log(contoutente2.oneDeposit(120));
console.log(contoutente2.oneWithDraw(10));
console.log(contoutente2.oneWithDraw(20));
console.log(contoutente2.oneWithDraw(40));
console.log(contoutente2.oneWithDraw(50));
console.log(contoutente2.twoDeposit(90));
console.log(contoutente2.twoWithDraw(70));
console.log("lista versamenti: " + contoutente1.listaVersamenti);
console.log("lista prelievi: " + contoutente1.listaPrelievi);
console.log("lista versamenti: " + contoutente2.listaVersamenti);
console.log("lista prelievi: " + contoutente2.listaPrelievi);
contoutente1.mostraVersamenti();
contoutente1.mostraPrelievi();
contoutente2.mostraVersamenti();
contoutente2.mostraPrelievi();
