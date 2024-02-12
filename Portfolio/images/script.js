


        function navigateToProjectPage(projectId) {
    // Define the mapping of project IDs to their respective pages
    const projectPageMapping = {
        'web-development': 'web-development-projects.html',
        'Machine-Learning': 'machine-learning-projects.html',
        'iot': 'iot-projects.html'
        // Add more mappings for other projects if needed
    };

    // Get the page URL based on the project ID
    const projectPageUrl = projectPageMapping[projectId];

    // Check if a valid URL is found
    if (projectPageUrl) {
        // Navigate to the project page
        window.location.href = projectPageUrl;
    } else {
        console.error(`No URL found for project ID: ${projectId}`);
    }
}
function showButton(element) {
    var button = element.querySelector('button');
    button.classList.remove('hidden');
}

function hideButton(element) {
    var button = element.querySelector('button');
    button.classList.add('hidden');
}
function showButton(id) {
    var button = document.getElementById(id);
    button.classList.remove('hidden');
}

function hideButton(id) {
    var button = document.getElementById(id);
    button.classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', function() {
    const certificationButton = document.getElementById('webdesign');
    certificationButton.addEventListener('click', function() {
        
        window.location.href = 'https://freecodecamp.org/certification/eshwar1059/responsive-web-design';
    });
});
document.addEventListener('DOMContentLoaded', function(){
    const certificationButton = document.getElementById('JS');
    certificationButton.addEventListener('click', function () {
        window.location.href = 'https://freecodecamp.org/certification/eshwar1059/javascript-algorithms-and-data-structures';
});
});
document.addEventListener('DOMContentLoaded', function(){
    const certificationButton = document.getElementById('front-end') ;
    certificationButton.addEventListener('click', function() {
        window.location.href = 'https://freecodecamp.org/certification/eshwar1059/front-end-development-libraries';
    
    });
});
document.addEventListener('DOMContentLoaded', function(){
    const certificationButton = document.getElementById('data-visualization') ;
    certificationButton.addEventListener('click', function() {
        window.location.href = 'https://freecodecamp.org/certification/eshwar1059/data-visualization';
    
    });
});
document.addEventListener('DOMContentLoaded', function(){
    const certificationButton = document.getElementById('python') ;
    certificationButton.addEventListener('click', function() {
        window.location.href = 'https://freecodecamp.org/certification/eshwar1059/scientific-computing-with-python-v7';
    
    });
});
document.addEventListener('DOMContentLoaded', function(){
    const certificationButton = document.getElementById('data-analysis') ;
    certificationButton.addEventListener('click', function() {
        window.location.href = 'https://freecodecamp.org/certification/eshwar1059/data-analysis-with-python-v7';
    
    });
});
document.addEventListener('DOMContentLoaded', function(){
    const certificationButton = document.getElementById('c#') ;
    certificationButton.addEventListener('click', function() {
        window.location.href = 'https://freecodecamp.org/certification/eshwar1059/foundational-c-sharp-with-microsoft';
    
    });
});
// Animation for project cards
document.addEventListener('DOMContentLoaded', function() {
    const certificatesContainer = document.querySelector('.certificates-section .certificates-container');
    const certificateItems = certificatesContainer.querySelectorAll('div');

    // Function to trigger animation when elements are in viewport
    function animateElements() {
        certificateItems.forEach(function(item) {
            if (isElementInViewport(item)) {
                item.style.opacity = 1;
            }
        });
    }

    // Check if element is in viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Trigger animation on initial load
    animateElements();

    // Trigger animation on scroll
    window.addEventListener('scroll', animateElements);
});
// Get the contact form and inputs
const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// Add event listeners for input focus and form submit
nameInput.addEventListener('focus', () => {
    contactForm.style.backgroundColor = '#f0f0f0';
});

emailInput.addEventListener('focus', () => {
    contactForm.style.backgroundColor = '#e0e0e0';
});

messageInput.addEventListener('focus', () => {
    contactForm.style.backgroundColor = '#d0d0d0';
});

contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission for demonstration purposes
    contactForm.style.backgroundColor = '#ffffff'; // Reset background color after form submission
    // Add code here to handle form submission (e.g., sending data to server)
});

