
// Typing and Deleting effect
document.addEventListener("DOMContentLoaded", () => {
    const typedText = ["Web Developer", "Web Designer", "Machine Learning Enthusiast","IoT Developer","Problem Solver"];
    let typingIndex = 0;
    let currentIndex = 0;
    let isDeleting = false;
    const typingSpeed = 150; 
    const deletingSpeed = 100; 
    const delayBetweenWords = 2000; 

    const typingElement = document.querySelector(".typing");

    function type() {
        const currentText = typedText[typingIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentText.slice(0, currentIndex - 1);
            currentIndex--;

            if (currentIndex === 0) {
                isDeleting = false;
                typingIndex = (typingIndex + 1) % typedText.length;
                setTimeout(type, typingSpeed);
            } else {
                setTimeout(type, deletingSpeed);
            }
        } else {
            typingElement.textContent = currentText.slice(0, currentIndex + 1);
            currentIndex++;

            if (currentIndex === currentText.length) {
                isDeleting = true;
                setTimeout(type, delayBetweenWords);
            } else {
                setTimeout(type, typingSpeed);
            }
        }
    }

    type();

    // Hamburger Menu Toggle
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
       
    });

    // Close menu when a link is clicked (for better UX)
    const navItems = document.querySelectorAll(".nav-links a");
    navItems.forEach(item => {
        item.addEventListener("click", () => {
            navLinks.classList.remove("active");
            hamburger.classList.remove("toggle");
        });
    });
});
// Typing and Deleting effect
document.addEventListener("DOMContentLoaded", () => {
    const typedText = ["Web Developer", "Web Designer", "Machine Learning Enthusiast","IoT Developer","Problem Solver"];
    let typingIndex = 0;
    let currentIndex = 0;
    let isDeleting = false;
    const typingSpeed = 150; 
    const deletingSpeed = 100; 
    const delayBetweenWords = 2000; 

    const typingElement = document.querySelector(".typing");

    function type() {
        const currentText = typedText[typingIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentText.slice(0, currentIndex - 1);
            currentIndex--;

            if (currentIndex === 0) {
                isDeleting = false;
                typingIndex = (typingIndex + 1) % typedText.length;
                setTimeout(type, typingSpeed);
            } else {
                setTimeout(type, deletingSpeed);
            }
        } else {
            typingElement.textContent = currentText.slice(0, currentIndex + 1);
            currentIndex++;

            if (currentIndex === currentText.length) {
                isDeleting = true;
                setTimeout(type, delayBetweenWords);
            } else {
                setTimeout(type, typingSpeed);
            }
        }
    }

    type();

    // Hamburger Menu Toggle
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("toggle");
    });

    // Close menu when a link is clicked (for better UX)
    const navItems = document.querySelectorAll(".nav-links a");
    navItems.forEach(item => {
        item.addEventListener("click", () => {
            navLinks.classList.remove("active");
            hamburger.classList.remove("toggle");
        });
    });
});

