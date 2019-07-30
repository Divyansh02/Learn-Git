var Calculation = /** @class */ (function () {
    function Calculation() {
    }
    Calculation.prototype.getFullName = function () {
        this.firstName = "Promod",
            this.lastName = "Pandey";
        return this.firstName + " " + this.lastName+ this.lastName;
    };
    return Calculation;
}());
;
var Calc = new Calculation();
console.log(Calc.getFullName());
