document.addEventListener("DOMContentLoaded", function() {
    
    var numbers = [1, 2, 3, 4, 5];

    
    updateNumbersOutput();

    
    document.getElementById("addNumber").addEventListener("click", function() {
        var newNumber = prompt("Enter a number:");
        if (!isNaN(newNumber)) {
            numbers.push(parseFloat(newNumber));
            updateNumbersOutput();
        } else {
            alert("Please enter a valid number.");
        }
    });

    
    document.getElementById("removeNumber").addEventListener("click", function() {
        var indexToRemove = prompt("Enter the index to remove:");
        if (!isNaN(indexToRemove) && indexToRemove >= 0 && indexToRemove < numbers.length) {
            numbers.splice(indexToRemove, 1);
            updateNumbersOutput();
        } else {
            alert("Please enter a valid index.");
        }
    });

    
    document.getElementById("findIndex").addEventListener("click", function() {
        var numberToFind = prompt("Enter the number to find:");
        var foundIndex = numbers.indexOf(parseFloat(numberToFind));
        if (foundIndex !== -1) {
            alert(`The number ${numberToFind} is at index ${foundIndex}.`);
        } else {
            alert(`Number ${numberToFind} not found in the array.`);
        }
    });

    
    function updateNumbersOutput() {
        var numbersOutput = document.getElementById("numbers-output");
        numbersOutput.textContent = "Numbers: " + numbers.join(", ");
    }
});
