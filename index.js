function palindrome(str) {
    /* remove special characters, spaces and make lowercase*/
    var removeChar = str.replace(/[^A-Z0-9]/ig, "").toLowerCase();

    /* reverse removeChar for comparison*/
    var checkPalindrome = removeChar.split('').reverse().join('');

    /* Check to see if str is a Palindrome*/
    return (removeChar === checkPalindrome);
}


palindrome("eye");

function
convertToRoman(num) {
    var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
    for ( i in lookup ) {
        while ( num >= lookup[i] ) {
            roman += i;
            num -= lookup[i];
        }
    }
    return roman;
}

convertToRoman(36);

function rot13(str) {
    let result = '';
    let regex = /^[^A-Z0-9]/g
    for (let i=0; i<str.length; i++){
        if(regex.test(str[i])){
            result += str[i];
        }if(str.charCodeAt(i) > 77 && str.charCodeAt(i) < 91){
            result += String.fromCharCode(str.charCodeAt(i) - 13);
        }if(str.charCodeAt(i) <= 77 && str.charCodeAt(i) > 64) {
            result += String.fromCharCode(str.charCodeAt(i) + 13);
        }
    }
    return result;
}

rot13("SERR PBQR PNZC");

function telephoneCheck(str) {
    let regExp = /^1?\s?(\([0-9]{3}\)[- ]?|[0-9]{3}[- ]?)[0-9]{3}[- ]?[0-9]{4}$/
    ;
    var phone = str.match(regExp);
    if (phone) {
        return true;
    }

    return false;
}

telephoneCheck("555-555-5555");

function checkCashRegister(price, cash, cid) {
    var change = {status:'', change: []};
    var changeDue = cash - price;
    var drawerTotal = 0;
    var mult = 0;
    var penny = 0;
    var arr = [];
    for (var i in cid) {
        drawerTotal += cid[i][1];
    }
    if (changeDue > drawerTotal) {
        return change = {status: "INSUFFICIENT_FUNDS", change:[]};
    } else if (changeDue === drawerTotal) {
        change.status = 'CLOSED';
        let newArr = [];
        for (let i = 0; i<cid.length; i++){
            newArr.push(cid[i]);

        }change.change = newArr;

        return change;
    } else{
        countChange();

    }


    function countChange() {
        change.status = 'OPEN';
        if (changeDue >= 100) {
            while (changeDue >= 100 && cid[8][1] >= 100){
                changeDue -= 100;
                cid[8][1] -=100;
                mult += 1;
            }
            arr.push(["ONE HUNDRED", (100 * mult)]);

            mult = 0;

        }

        if (changeDue >= 20) {
            while (changeDue >= 20 && cid[7][1] >= 20){
                changeDue -= 20;
                cid[7][1] -= 20;
                mult += 1;
            }
            arr.push(["TWENTY", (20 * mult)]);
            mult = 0;

        }

        if (changeDue >= 10) {
            while (changeDue >= 10 && cid[6][1] >= 10){
                changeDue -= 10;
                cid[6][1] -= 10;
                mult += 1;
            }
            arr.push(["TEN", (10 * mult)]);
            mult = 0;
        }

        if (changeDue >= 5) {
            while (changeDue >= 5 && cid[5][1] >= 5){
                changeDue -= 5;
                cid[5][1] -= 5;
                mult += 1;
            }
            arr.push((["FIVE", (5 * mult)]));
            mult = 0;
        }

        if (changeDue >= 1) {
            while (changeDue >= 1 && cid[4][1] >= 1){
                changeDue -= 1;
                cid[4][1] -= 1;
                mult += 1;
            }
            arr.push((["ONE", ( mult)]));
            mult = 0;
        }

        if (changeDue >= 0.25) {
            while (changeDue >= 0.25 && cid[3][1] >= 0.25){
                changeDue -= 0.25;
                cid[3][1] -= 0.25;
                mult += 1;
            }

            arr.push(["QUARTER", (0.25 *mult)]);
            mult = 0;
        }

        if (changeDue >= 0.1) {
            while (changeDue >= 0.1 && cid[2][1] >= 0.1){
                changeDue -= 0.1;
                cid[2][1] -= 0.1;
                mult += 1;
            }
            arr.push(["DIME", (0.1 * mult)]);
            mult = 0;
        }

        if (changeDue >= 0.5) {
            while (changeDue >= 0.5 && cid[1][1] >= 0.5){
                changeDue -= 0.5;
                cid[1][1] -= 0.5;
                mult += 1;
            }
            arr.push(["NICKEL", (0.5 * mult)]);
            mult = 0;
        }

        if (changeDue >= 0.01) {
            while (changeDue >= 0.01 && cid[0][1] >= 0.01){
                changeDue -= 0.01;
                cid[0][1] -= 0.01;
                mult += 1;
            }

            if (0 < changeDue && changeDue <= 0.01  && cid[0][1] >= 0.01){
                penny = 0.01;
                console.log(penny);
            }



            arr.push(["PENNY", ((0.01 * mult) + penny)]);
            mult = 0;
        }

        if (changeDue >= 0.01){
            change.status =  "INSUFFICIENT_FUNDS";
            change.change = [];
            return change;
        }

        change.change = arr;


    }





    return change;



}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));