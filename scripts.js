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


// Animation for project cards
function animateProject(projectId) {
    const projectCard = document.getElementById(projectId);
    projectCard.classList.add("animate__animated", "animate__bounce", "animate");

    setTimeout(() => {
        projectCard.classList.remove("animate__animated", "animate__bounce", "animate");
    }, 1000);
}
