let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let date = new Date();

let day = date.getDay();

const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

const formattedHours = hours > 12 ? hours - 12 : hours;
const amPm = hours >= 12 ? 'PM' : 'AM';
const formattedTime = `Current time is: ${formattedHours} ${amPm} : ${minutes} : ${seconds}`;

console.log(`Today is: ${days[day]}.`);
console.log(formattedTime);
// =================================================
let length = 10;
let area = `area(${length}) -> the area is : ${Math.pow(length, 2)} cm².`;

console.log(area);
// ==================================================
let degrees = [55, 77, 15, 54, 90]
for (i = 0; i < degrees.length; i++) {
  if (degrees[i] < 50) {
    console.log(`your degree is ${degrees[i]}, you are failed`)
  } else if (50 < degrees[i] && degrees[i] <= 65) {
    console.log(`your degree is ${degrees[i]}, you are succed`)
  } else if (65 < degrees[i] && degrees[i] <= 75) {
    console.log(`your degree is ${degrees[i]}, you are good`)
  } else if (75 < degrees[i] && degrees[i] <= 85) {
    console.log(`your degree is ${degrees[i]}, you are very good`)
  } else if (85 < degrees[i]) {
    console.log(`your degree is ${degrees[i]}, you are excellent`)
  }
}
// ================================================
console.log(Math.max(25, 45))

// ------------------------------------------

console.log(Math.max(Math.abs(Math.round((Math.random() * 100)), (Math.random() * 100))));