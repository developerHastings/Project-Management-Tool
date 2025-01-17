// quantitativeResearch.js

// Function to manage research projects
function manageResearchProject(projectData) {
    if (!projectData.title || !projectData.description) {
        alert("Please fill in both the title and description.");
        return;
    }

    console.log("Managing research project:", projectData);

    // Add the research project to the list
    addResearchProjectToDisplay(projectData);

    // Save the research project to local storage (can replace with API calls for backend storage)
    saveResearchProject(projectData);
}

// Function to display research projects dynamically
function addResearchProjectToDisplay(projectData) {
    const projectList = document.getElementById('researchProjectList');
    const listItem = document.createElement('li');

    listItem.innerHTML = `
        <h4>${projectData.title}</h4>
        <p>${projectData.description}</p>
    `;

    projectList.appendChild(listItem);
}

// Function to save research projects to local storage
function saveResearchProject(projectData) {
    let projects = JSON.parse(localStorage.getItem('researchProjects')) || [];
    projects.push(projectData);
    localStorage.setItem('researchProjects', JSON.stringify(projects));
}

// Function to load saved research projects
function loadResearchProjects() {
    const projects = JSON.parse(localStorage.getItem('researchProjects')) || [];
    projects.forEach(project => addResearchProjectToDisplay(project));
}

// Event listener for adding a new research project
document.addEventListener('DOMContentLoaded', () => {
    // Load existing research projects on page load
    loadResearchProjects();

    // Handle the "Start Research Project" button click
    const startResearchProjectBtn = document.getElementById('startResearchProjectBtn');
    startResearchProjectBtn.addEventListener('click', function () {
        const projectData = {
            title: document.getElementById('researchTitle').value.trim(),
            description: document.getElementById('researchDescription').value.trim()
        };
        manageResearchProject(projectData);
    });
});
