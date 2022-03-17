const testValues = new Array(19).fill(2).map((value,ind) => value+ind);
console.log(testValues);

// Let's break it down

console.log('##########');
const a = new Array(19);
console.log(`First step. We create an array with 19 empty slots\n`, a);

const b = a.fill(2);
console.log(`Second step. We populate each slot with 2s\n`,b);

const c = b.map((value, ind) => value +ind);
console.log(`Third step. We add to each value the index of that value so it gradually increases by one\n`,c);