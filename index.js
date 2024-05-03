const inputElement = document.getElementById("myInput");
const buttonElement = document.getElementById("myButton");

    // Add event listener to the button
    buttonElement.addEventListener("click", function() {
        // Retrieve the value that was typed in
        const inputValue = inputElement.value;

        // Store the value in a variable
        const storedValue = inputValue;

        // Now, you can use the "storedValue" variable in your code
        alert("Welcome to Quillow! " + storedValue);
    })