'use sctrict'

console.log(5 + 5);

console.log(5 + '5');

console.log(5 + +'5');

console.log('arr' + ' - object');

console.log(5 * 5);
console.log(incr++); // prefix means that, firstly paste and after add 1
console.log(decr--); // prefix means that, firstly paste and after add 1
console.log(5 / 5);


let incr = 10,
    decr = 10;

incr++; // postfix  
decr--; // postfix
      
++incr; // prefix   
--decr; // prefix

console.log(++incr); // postfix means that, firstly add 1 and after paste 
console.log(--decr); // postfix means that, firstly add 1 and after paste

console.log(5 & 2);


const name = 'text'; 
const midname = 'Mirzaahmedov';

console.log(5 + 3 == 8); // '==' means equally(equally/равно)
console.log(5 + 3 == '8'); // '==' means equally
console.log(5 + 3 === '8'); // '===' strictly equal to(strictly/строго)
console.log(2 + 2 * 2 != 6); // '!=' not equally 
console.log(2 + 2 * 2 !== '6'); // '!==' not equally strictly equal to(strictly/строго)

const isClose = true,
    isChecked = false;

console.log(isChecked && isClose); // "&&" it is 'and'
console.log(isChecked || isClose); // "||" it is 'or'
console.log(isChecked && !isClose); // "!" it is 'not equally'