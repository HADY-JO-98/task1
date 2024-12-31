console.log("task 3");

alert("Welcome to my site");

const userName = prompt("Enter your name:");

const colorChoice = prompt("Choose a color (red, green, or blue):").toLowerCase();

const validColors = ["red", "green", "blue"];
const color = validColors.includes(colorChoice) ? colorChoice : "black";

document.body.innerHTML = `<p style="color: ${color}">Welcome, ${userName}!</p>`;

console.log("task 4");

const message = prompt("Enter a message:");
for (let i = 1; i <= 6; i++) {
    const heading = document.createElement(`h${i}`);
    heading.textContent = message;
    document.body.appendChild(heading);
}