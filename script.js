// Get the display element
const result = document.getElementById('result');

// Function to append value to the display
function appendValue(value) {
    result.value += value;
}

// Function to clear the display
function clearDisplay() {
    result.value = '';
}

// Function to delete the last character
function deleteLast() {
    result.value = result.value.slice(0, -1);
}

// Function to evaluate the expression
function calculate() {
    try {
        result.value = eval(result.value.replace('x', '*'));
    } catch (error) {
        alert('Invalid Expression');
        result.value = '';
    }
}
