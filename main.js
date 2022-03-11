/**
 * this is a function which returns A if number
 * is greater than 89
 * if not, it returns F
 * @param val
 * @returns A or F
 */

function checkNum (val) {
    if (val >= 89) {
        return 'A';
    }
    else {
        return 'F';
    }
}

console.log(checkNum(90));
console.log(checkNum(0));
console.log(checkNum(89));
console.log(checkNum(11));