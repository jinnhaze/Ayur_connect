document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('appointment-form').addEventListener('submit', function (e) {
        e.preventDefault();

        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let phone = document.getElementById('phone').value;
        let doctor = document.getElementById('doctor').value;
        let date = document.getElementById('date').value;
        let time = document.getElementById('time').value;
        let message = document.getElementById('message').value;

        // Example validation (you can add more specific validation as needed)
        if (name.trim() === '' || email.trim() === '' || phone.trim() === '' || doctor === '' || date === '' || time === '') {
            document.getElementById('success-message').innerText = '';
            document.getElementById('error-message').innerText = 'Please fill out all required fields.';
            return;
        }

        // Example AJAX request (you would need a backend to handle this)
        // Replace this with your actual form submission logic
        setTimeout(() => {
            document.getElementById('error-message').innerText = 'Error';
            document.getElementById('success-message').innerText = 'Appointment booked successfully!';
            document.getElementById('appointment-form').reset();
        }, 1000);
    });
});
