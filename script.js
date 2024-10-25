document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const passwordInput = document.getElementById('password');


    const phoneRegex = /^\d{10}$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;


    function showError(input, message) {
        const formControl = input.parentElement;
        let errorElement = formControl.querySelector('.error-message');

        if (!errorElement) {
            errorElement = document.createElement('small');
            errorElement.className = 'error-message text-danger';
            formControl.appendChild(errorElement);
        }

        errorElement.innerText = message;
    }


    function clearError(input) {
        const formControl = input.parentElement;
        const errorElement = formControl.querySelector('.error-message');

        if (errorElement) {
            errorElement.remove();
        }
    }

    form.addEventListener('submit', function(event) {
        let valid = true;


        if (firstNameInput.value.trim() === '') {
            showError(firstNameInput, 'First Name is required.');
            valid = false;
        } else {
            clearError(firstNameInput);
        }


        if (lastNameInput.value.trim() === '') {
            showError(lastNameInput, 'Last Name is required.');
            valid = false;
        } else {
            clearError(lastNameInput);
        }


        if (!emailRegex.test(emailInput.value)) {
            showError(emailInput, 'Please enter a valid email address.');
            valid = false;
        } else {
            clearError(emailInput);
        }


        if (!phoneRegex.test(phoneInput.value)) {
            showError(phoneInput, 'Please enter a valid phone number (10 digits).');
            valid = false;
        } else {
            clearError(phoneInput);
        }

        if (passwordInput.value.length < 8) {
            showError(passwordInput, 'Password must be at least 8 characters long.');
            valid = false;
        } else {
            clearError(passwordInput);
        }

        if (valid) {

            const formData = {
                first_name: firstNameInput.value,
                last_name: lastNameInput.value,
                phone_number: phoneInput.value,
                email: emailInput.value,
                password: passwordInput.value
            };


            console.log(formData);

            alert('Registered successfully!');
        } else {

            event.preventDefault();
        }
    });
});
