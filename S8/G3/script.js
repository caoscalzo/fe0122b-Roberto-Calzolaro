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
var Lavoratori = /** @class */ (function () {
    function Lavoratori(redditoannuolordo, tasseinps, tasseirpef) {
        this.redditoannuolordo = redditoannuolordo;
        this.tasseinps = tasseinps;
        this.tasseirpef = tasseirpef;
    }
    return Lavoratori;
}());
var LiberoProfessionista = /** @class */ (function (_super) {
    __extends(LiberoProfessionista, _super);
    function LiberoProfessionista(redditoannuolordo, tasseinps, tasseirpef) {
        return _super.call(this, redditoannuolordo, tasseinps, tasseirpef) || this;
    }
    LiberoProfessionista.prototype.getUtileTasse = function () {
        return this.getTasseInps() + this.getTasseIrpef();
    };
    LiberoProfessionista.prototype.getTasseInps = function () {
        return (this.redditoannuolordo * this.tasseinps) / 100;
    };
    LiberoProfessionista.prototype.getTasseIrpef = function () {
        return (this.redditoannuolordo * this.tasseirpef) / 100;
    };
    LiberoProfessionista.prototype.getRedditoAnnuoNetto = function () {
        return this.redditoannuolordo - this.getUtileTasse();
    };
    return LiberoProfessionista;
}(Lavoratori));
var lavoratore1 = new LiberoProfessionista(300000, 20, 30);
console.log(lavoratore1.getTasseInps());
console.log(lavoratore1.getTasseIrpef());
console.log("reddito annuo netto: " + lavoratore1.getRedditoAnnuoNetto());
console.log("utile anno netto: " + lavoratore1.getUtileTasse());
console.table(lavoratore1);
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(redditoannuolordo, tasseinps, tasseirpef) {
        return _super.call(this, redditoannuolordo, tasseinps, tasseirpef) || this;
    }
    Developer.prototype.getUtileTasse = function () {
        return this.getTasseInps() + this.getTasseIrpef();
    };
    Developer.prototype.getTasseInps = function () {
        return (this.redditoannuolordo * this.tasseinps) / 100;
    };
    Developer.prototype.getTasseIrpef = function () {
        return (this.redditoannuolordo * this.tasseirpef) / 100;
    };
    Developer.prototype.getRedditoAnnuoNetto = function () {
        return this.redditoannuolordo - this.getUtileTasse();
    };
    return Developer;
}(Lavoratori));
var dev = new Developer(18000, 10, 15);
console.log("tasse inps :" + dev.getTasseInps());
console.log("tasse irpef :" + dev.getTasseIrpef());
console.log("reddito annuo netto: " + dev.getRedditoAnnuoNetto());
console.log("utile anno netto: " + dev.getUtileTasse());
console.table(dev);
