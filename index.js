// Grab the welcome-el paragraph and store it in a variable called welcomeEl

let welcomeEl = document.getElementById("welcome-el");

let name = "Farhad Yousefe";
let greeting = "Welcome back ";

welcomeEl.innerText = greeting + name;

// Add an emoji to the end! 👋
// WRITE YOUR CODE BELOW HERE
// HINT: count = count + 1

welcomeEl.innerText += " 👋";
