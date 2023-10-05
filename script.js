function displaySumOfNumbers() {
    var num1 = parseFloat(prompt("Enter the first number:"));
    var num2 = parseFloat(prompt("Enter the second number:"));

    if (!isNaN(num1) && !isNaN(num2)) {
        var sum = num1 + num2;
        alert("The sum is: " + sum);
        document.getElementById('q5Output').textContent = "The sum is: " + sum;
    } else {
        alert("Please enter valid numbers.");
        document.getElementById('q5Output').textContent = "Please enter valid numbers.";
    }
} 