 //  JavaScript Fundamentals Assignment

// Part 1: Variables, Conditionals
function checkAge() {
  let age = document.getElementById("userAge").value;
  let result = document.getElementById("ageResult");

  if (age >= 18) {
    result.textContent = "✅ You are an adult!";
  } else if (age > 0) {
    result.textContent = "👶 You are underage!";
  } else {
    result.textContent = "❌ Please enter a valid age.";
  }
}

// Part 2: Functions
function showGreeting(name) {
  let message = "Hello, " + name + "! 👋 Welcome to JavaScript!";
  document.getElementById("greeting").textContent = message;
  return message; // demonstrates returning values
}

// Example function: Calculate total
function calculateTotal(price, quantity) {
  return price * quantity;
}
console.log("Total = " + calculateTotal(100, 3)); // Example usage

//  Part 3: Loops
function countDown() {
  let list = document.getElementById("countdownList");
  list.innerHTML = ""; // clear previous

  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }
}

// Example with while loop
let numbers = [1, 2, 3];
let i = 0;
while (i < numbers.length) {
  console.log("Number: " + numbers[i]);
  i++;
}

// 🌐 Part 4: DOM Manipulation
document.getElementById("colorBtn").addEventListener("click", function() {
  document.getElementById("title").style.color = "purple";
});

document.getElementById("toggleBtn").addEventListener("click", function() {
  let text = document.getElementById("toggleText");
  text.classList.toggle("hidden");
});

// Extra DOM interaction: Create element dynamically
let newPara = document.createElement("p");
newPara.textContent = "This paragraph was added with JavaScript!";
document.body.appendChild(newPara);
