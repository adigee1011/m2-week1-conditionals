/**
 * this function 
 * 90 or greater is A
 * 80 > B
 * 70 > C
 * Everything else is an F
 */


function grade(num) {
    if (num >= 90) {
        return 'A';
    }

    else if (num >=80) {
        return 'B';
    }

    else if (num>=70) {
        return 'C';
    }

    else {
        return 'F';
    }  

}

console.log(grade(90));
console.log(grade(92));
console.log(grade(82));
console.log(grade(70));
console.log(grade(0));

function check(value) {
    switch (true) {
        case (value>=90):
        console.log('A');
        break;
        case (value>=80):
        console.log('B');
        break;
        case (value>=70):
        console.log('C');
        break;
        default:
        console.log('F');
        break;
    }
}

console.log(check(9));
console.log(check(90));
console.log(check(80));
console.log(check(85));
console.log(check(72));