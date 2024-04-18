// Function to calculate the sum of an array
function calculateSum(arr) {
    return arr.reduce((sum, value) => sum + value, 0);
}

// Function to round a float value to four decimal places
function roundToFourDecimalPlaces(value) {
    return parseFloat(value.toFixed(4));
}

// Function to handle form submission and equalize the array
function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the input values from the form
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);
    const num4 = parseFloat(document.getElementById('num4').value);

    // Create an array with the input values
    const arr = [num1, num2, num3, num4];

    // Calculate the total sum of the array
    const totalSum = calculateSum(arr);

    // Calculate the target value to maintain the sum
    const targetValue = roundToFourDecimalPlaces(totalSum / arr.length);

    // Equalize the array with the rounded target value
    for (let i = 0; i < arr.length; i++) {
        arr[i] = targetValue;
    }

    // Display the equalized array in the output div
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = 'Array after equalization:<br>' + arr.map(value => {
        const valueStr = value.toString();
        // Return the value string without trailing zeros if it has a decimal point
        return valueStr.includes('.') ? valueStr.replace(/0+$/, '').replace(/\.$/, '') : valueStr;
    }).join(', ');
}

// Add an event listener to the form submit event
document.getElementById('floatForm').addEventListener('submit', handleSubmit);
