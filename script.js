// Wait for the entire HTML document to be loaded before running the script.
document.addEventListener('DOMContentLoaded', () => { // Using an arrow function here

    // Select the form and the feedback div from the DOM.
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // Add an event listener for the form's 'submit' event.
    form.addEventListener('submit', (event) => { // Using an arrow function here
        
        // Prevent the form's default submission behavior (reloading the page).
        event.preventDefault();

        // Get the values from the input fields and trim any whitespace.
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Initialize validation state.
        let isValid = true;
        const messages = [];

        // --- Validation Logic ---

        // 1. Username Validation
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        // 2. Email Validation (basic check)
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Please enter a valid email address.');
        }

        // 3. Password Validation
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }

        // --- Displaying Feedback ---

        // Make the feedback div visible.
        feedbackDiv.style.display = 'block';

        if (isValid) {
            // If all validations pass, show a success message.
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745'; // Green color for success
            feedbackDiv.style.backgroundColor = '#d4edda'; // Light green background
        } else {
            // If there are errors, join the messages and display them.
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = '#d8000c'; // Red color for errors
            feedbackDiv.style.backgroundColor = '#ffbaba'; // Light red background
        }
    });
});
