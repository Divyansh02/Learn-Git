export {}
class Calculation{
    firstName: string;
    lastName: string;
    getFullName(){
        this.firstName="Promod",
        this.lastName="Pandey";
        return this.firstName + " " + this.lastName;
    }

//     addMarks( a:number ,b:number ) :number{
//         return a+b ;
//     }
};
var Calc= new Calculation();
console.log(Calc.getFullName());