/*const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))
module.exports = { sum };*/

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromDollarToYen(dollars) {
    let yen = dollars * oneEuroIs["JPY"] / oneEuroIs["USD"];
    return yen;
}

function fromEuroToDollar(euros) {
    let dollars = euros * oneEuroIs["USD"];
    return dollars;
}
console.log(sum(7,3))
module.exports = {fromEuroToDollar};

function fromYenToPound(yen) {
    let pounds = yen * oneEuroIs["GBP"] / oneEuroIs["JPY"];
    return pounds;
}
 
console.log(sum(7,3))
module.exports = {fromEuroToDollar};