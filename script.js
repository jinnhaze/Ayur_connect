document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // You can add further validation or processing here

    // Example: Display a confirmation message
    alert('Thank you, ' + name + '! Your message has been sent.');
});
