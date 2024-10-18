
const textarea = document.getElementById('message');
const counter = document.getElementById('counter');
const warning = document.getElementById('warning');
const maxChars = 100;

textarea.addEventListener('input', function () {
    const currentLength = textarea.value.length;
    counter.textContent = `${currentLength}/${maxChars} characters`;

    if (currentLength > maxChars) {
        warning.style.display = 'block';
        textarea.value = textarea.value.substring(0, maxChars); // Prevent further typing
        counter.textContent = `${maxChars}/${maxChars} characters`; // Update counter
    } else {
        warning.style.display = 'none';
    }
});