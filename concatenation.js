const firstName = 'Jason';
const lastName = 'Tapar';
const age = 28;
const str = 'Hi my name is Jason';
const tags = 'Web Develepment';

let val;

val = firstName + lastName;

// Concatenation
val = firstName +' '+ lastName;

// Append
val = 'iya ';
val += 'tapar';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping
// val = 'That's awesome, I can't wait';
val = "That's awesome, I can't wait";

// Lenght
val = firstName.length;

// concat()
val = firstName.concat(' ', lastName);

//Change
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[3];

// IndexOf()

val = firstName.indexOf('n');
val = firstName.lastIndexOf('n');

// charArt()
val = firstName.charAt('5');

// substring ()
val = firstName.substring(0, 4);

// Slice()
val = firstName.slice(0, 4);

val = firstName.slice(-3);

// Split()
val = str.split(' ');
val = str.split(',');

// Replace
val = str.replace('jason', 'iya');

//Includes ()
val = str.includes('Hi');

console.log(val);