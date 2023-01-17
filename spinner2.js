const spinObj = {
  1: '\r|   ',
  2: '\r/   ',
  3: '\r-   ',
  4: '\r\\   ',
  5: '\r|   ',
  6: '\r/   ',
  7: '\r-   ',
  8: '\r\\  ',
  9: '\r|  '
};
let count = 0;
for (let i in spinObj) {
  let nextVal = spinObj[i];
  setTimeout(() => { process.stdout.write(nextVal); }, 100 + count);
  count += 200;
}

// process stdout the correct spin value

// call timeout agin with 200 added to time

// process.stdout.write();
// process.stdout.write();
// process.stdout.write();
// process.stdout.write();
// process.stdout.write;
// process.stdout.write;
// process.stdout.write();
// process.stdout.write();





// setTimeout(() => {

// }, 300);

// setTimeout(() => {

// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.

// }, 700);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.

// }, 900);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.

// }, 1100);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.

// }, 1300);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.

// }, 1300);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.

// }, 1500);