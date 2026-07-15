// JavaScript Level 2 Module 1 Project //

console.log("JavaScript is Connected")

let message = document.getElementById("message");
let output = document.getElementById("output");
let birthDayInput = document.getElementById("birthYear");
let button = document.getElementById("calculateBtn");
button.addEventListener("click", function(){
    let birthYear = birthDayInput.value;
    if (birthYear === ""){
        output.textContent = "Please enter your birth date.";
        return;
    }
    let age = 2026 - birthYear;
    output.textContent = "Your age is: " + age;

    if (age > 120 || age < 3){
        output.textContent = "Please enter a valid year.";
        return;
    }

// message for different age //
    if (age <= 20){
        message.textContent = "Wow! You're at the perfect age to discover yourself and experience everything new!⚡🚀";
    } else if (age > 20 && age <= 40){
        message.textContent = "You're at a great age to focus on your career and personal growth!💼🌱";
    } else{
        message.textContent = "You're at a wonderful age to enjoy life and share your wisdom with others!📚☕";
    }
    console.log(age);
})