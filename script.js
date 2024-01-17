document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Validate form fields (you can add more complex validation)
        if (!name || !email || !message) {
            alert('Please fill in all the fields.');
            return;
        }

        // You can send the form data to a server or perform other actions here
        // For now, we'll just log the data to the console
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);

        // Optional: Clear form fields after submission
        contactForm.reset();
    });
});
