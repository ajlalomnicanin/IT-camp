// Domaci:
// 1.
// Napraviti funkciju koja izracunava povrsinu kruga, gde
//  precnik predstavlja argument funkcije. P = r2 * PI

const PKruga = (r) => (Math.pow(r, 2) * Math.PI).toFixed(2);
console.log(PKruga(1));
// 2.
// Napraviti funkciju za pretvaranje radijana u stepene.
// stepeni = radiani * (180 / PI)

const RadijaniUstepene = (radiani) => (radiani * (180 / Math.PI)).toFixed(2);
console.log(RadijaniUstepene(5));
