// document.getElementById("count").innerText = 5;

// initialize count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

// let count = 5
// count = count + 1
// console.log(count)

// intialize the count as 0

let countEl = document.getElementById("count");
let count = 0;
function increment() {
  console.log("The button was clicked");
  count += 1;
  countEl.innerText = count;
}

lap = 0;

function save() {
  lap = count;
  console.log("Saved " + count);
}

let name = "Farhad";
let greeting = "Hi, my name is ";

let myGreeting = greeting + name;

console.log(myGreeting);
