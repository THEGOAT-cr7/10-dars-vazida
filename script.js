let a = parseInt(prompt("FOR 1: a ni kiriting:"));
let b = parseInt(prompt("FOR 1: b ni kiriting (a < b):"));
let count = 0;
for (let i = a; i <= b; i++) {
    console.log(i);
    count++;
}
console.log("FOR 1: Chiqarilgan sonlar soni:", count);

let c = parseInt(prompt("FOR 2: a ni kiriting:"));
let d = parseInt(prompt("FOR 2: b ni kiriting (a < b):"));
let count2 = 0;
for (let i = d - 1; i > c; i--) {
    console.log(i);
    count2++;
}
console.log("FOR 2: Chiqarilgan sonlar soni:", count2);

let price = parseFloat(prompt("FOR 3: Konfet narxi:"));
for (let i = 1; i <= 10; i++) {
    console.log(i + " kg = " + (price * i));
}

let price2 = parseFloat(prompt("FOR 4: Konfet narxi:"));
for (let i = 1.2; i <= 2; i += 0.2) {
    console.log(i.toFixed(1) + " kg = " + (price2 * i).toFixed(2));
}

let e = parseInt(prompt("FOR 5: a:"));
let f = parseInt(prompt("FOR 5: b:"));
let sum = 0;
for (let i = e; i <= f; i++) {
    sum += i;
}
console.log("FOR 5: Yig'indi:", sum);

let g = parseInt(prompt("FOR 6: a:"));
let h = parseInt(prompt("FOR 6: b:"));
let prod = 1;
for (let i = g; i <= h; i++) {
    prod *= i;
}
console.log("FOR 6: Ko'paytma:", prod);

let k = parseInt(prompt("FOR 7: a:"));
let l = parseInt(prompt("FOR 7: b:"));
let sum2 = 0;
for (let i = k; i <= l; i++) {
    sum2 += i * i;
}
console.log("FOR 7: Kvadratlar yig'indisi:", sum2);

let m = parseInt(prompt("FOR 8: n:"));
let sum3 = 0;
for (let i = 1; i <= m; i++) {
    sum3 += 1 / i;
}
console.log("FOR 8: Natija:", sum3.toFixed(2));

let n = parseInt(prompt("FOR 9: n:"));
let prod2 = 1;
for (let i = 1; i <= n; i++) {
    prod2 *= 1 + i / 10;
}
console.log("FOR 9: Ko'paytma:", prod2.toFixed(3));

let o = parseInt(prompt("FOR 10: n:"));
let sum4 = 0;
for (let i = 1; i <= 2 * o - 1; i += 2) {
    sum4 += i;
}
console.log("FOR 10: n^2 =", sum4);

let p = parseInt(prompt("FOR 11: n:"));
let q = parseFloat(prompt("FOR 11: a:"));
let result = 1;
for (let i = 1; i <= p; i++) {
    result *= q;
}
console.log("FOR 11: a^n =", result);

let r = parseInt(prompt("FOR 12: n:"));
let s = parseFloat(prompt("FOR 12: a:"));
let pow2 = 1;
for (let i = 1; i <= r; i++) {
    pow2 *= s;
    console.log("a^" + i + " =", pow2);
}

let t = parseInt(prompt("FOR 13: n:"));
let u = parseFloat(prompt("FOR 13: a:"));
let pow3 = 1, sum5 = 1;
for (let i = 1; i <= t; i++) {
    pow3 *= u;
    sum5 += pow3;
}
console.log("FOR 13: Yig'indi:", sum5);

let v = parseInt(prompt("FOR 14: n:"));
let sum6 = 0, fact = 1;
for (let i = 1; i <= v; i++) {
    fact *= i;
    sum6 += fact;
}
console.log("FOR 14: Faktoriallar yig'indisi:", sum6);

let w = parseInt(prompt("FOR 15: n:"));
let x = parseInt(prompt("FOR 15: k:"));
let sum7 = 0;
for (let i = 1; i <= w; i++) {
    sum7 += Math.pow(i, x);
}
console.log("FOR 15: Yig'indi:", sum7);

let y = parseInt(prompt("FOR 16: n:"));
let sum8 = 0;
for (let i = 1; i <= y; i++) {
    sum8 += Math.pow(i, i);
}
console.log("FOR 16: Yig'indi:", sum8);

let z = parseInt(prompt("FOR 17: a:"));
let aa = parseInt(prompt("FOR 17: b:"));
for (let i = z; i <= aa; i++) {
    console.log((i + " ").repeat(i));
}

let ab = parseInt(prompt("FOR 18: n:"));
let sum9 = 0, count3 = 0;
console.log("FOR 18: Bo'luvchilar:");
for (let i = 1; i <= ab; i++) {
    if (ab % i === 0) {
        console.log(i);
        sum9 += i;
        count3++;
    }
}
console.log("Soni:", count3, "Yig'indisi:", sum9);

let ac = parseInt(prompt("FOR 19: n:"));
let isPrime = true;
for (let i = 2; i <= Math.sqrt(ac); i++) {
    if (ac % i === 0) {
        isPrime = false;
        break;
    }
}
console.log("FOR 19: Tub sonmi?", isPrime);

let ad = parseInt(prompt("FOR 20: n:"));
for (let i = 1; i <= ad; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += j + ' ';
    }
    console.log(row);
}

let ae = parseInt(prompt("WHILE1: A ni kiriting:"));
let af = parseInt(prompt("WHILE1: B ni kiriting (A > B):"));
let temp = ae;
while (temp >= af) temp -= af;
console.log("WHILE1: Qoldiq qismi: " + temp);

let ag = parseInt(prompt("WHILE2: A ni kiriting:"));
let ah = parseInt(prompt("WHILE2: B ni kiriting:"));
let count4 = 0;
let temp2 = ag;
while (temp2 >= ah) {
    temp2 -= ah;
    count4++;
}
console.log("WHILE2: Kesma soni: " + count4);

let ai = parseInt(prompt("WHILE3: n ni kiriting:"));
let temp3 = 1;
while (temp3 < ai) temp3 *= 3;
console.log(temp3 === ai ? "WHILE3: 3 ning darajasi" : "WHILE3: 3 ning darajasi emas");

let aj = parseInt(prompt("WHILE4: n ni kiriting:"));
let ak = parseInt(prompt("WHILE4: m ni kiriting:"));
let aq = 0;
let temp4 = aj;
while (temp4 >= ak) {
    temp4 -= ak;
    aq++;
}
console.log("WHILE4: Bo'linma: " + aq + ", Qoldiq: " + temp4);

let al = parseInt(prompt("WHILE5: n ni kiriting:"));
let rev = "";
let temp5 = al;
while (temp5 > 0) {
    rev += temp5 % 10;
    temp5 = Math.floor(temp5 / 10);
}
console.log("WHILE5: Teskari: " + rev);

let am = parseInt(prompt("WHILE6: n ni kiriting:"));
let sum10 = 0, count5 = 0;
let temp6 = am;
while (temp6 > 0) {
    sum10 += temp6 % 10;
    count5++;
    temp6 = Math.floor(temp6 / 10);
}
console.log("WHILE6: Yig'indi: " + sum10 + ", Raqamlar soni: " + count5);

let an = parseInt(prompt("WHILE7: n ni kiriting:"));
let hasTwo = false;
let temp7 = an;
while (temp7 > 0) {
    if (temp7 % 10 === 2) {
        hasTwo = true;
        break;
    }
    temp7 = Math.floor(temp7 / 10);
}
console.log("WHILE7: 2 raqami mavjud: " + hasTwo);

let ao = parseInt(prompt("WHILE8: n ni kiriting:"));
let temp8 = ao;
let hasOdd = false;
while (temp8 > 0) {
    let digit = temp8 % 10;
    if (digit % 2 === 1) {
        hasOdd = true;
        break;
    }
    temp8 = Math.floor(temp8 / 10);
}
console.log("WHILE8: Toq raqam mavjud: " + hasOdd);

let ap = parseInt(prompt("WHILE9: n ni kiriting:"));
let temp9 = ap;
let rev2 = "";
while (temp9 > 0) {
    rev2 += temp9 % 10;
    temp9 = Math.floor(temp9 / 10);
}
console.log("WHILE9: Palindromik son: " + (parseInt(rev2) === ap));