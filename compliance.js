// compliance.js

// Function to track compliance with regulations
function trackCompliance(projectData) {
    if (!projectData.projectName) {
        alert("Please enter the project name.");
        return;
    }

    console.log("Tracking compliance for project:", projectData);

    // Add compliance data to the displayed list
    addComplianceToDisplay(projectData);

    // Save compliance data to local storage (can replace with API calls for backend storage)
    saveComplianceData(projectData);
}

// Function to display compliance data
function addComplianceToDisplay(projectData) {
    const complianceList = document.getElementById('complianceList');
    const listItem = document.createElement('li');

    const statusText = projectData.regulationsFollowed ? "Compliant" : "Non-compliant";
    listItem.textContent = `${projectData.projectName}: ${statusText}`;
    complianceList.appendChild(listItem);
}

// Function to save compliance data to local storage
function saveComplianceData(projectData) {
    let complianceData = JSON.parse(localStorage.getItem('complianceData')) || [];
    complianceData.push(projectData);
    localStorage.setItem('complianceData', JSON.stringify(complianceData));
}

// Function to load saved compliance data from local storage
function loadComplianceData() {
    const complianceData = JSON.parse(localStorage.getItem('complianceData')) || [];
    complianceData.forEach(project => addComplianceToDisplay(project));
}

// Event listener for adding compliance tracking
document.addEventListener('DOMContentLoaded', () => {
    // Load existing compliance data on page load
    loadComplianceData();

    // Add event listener for tracking compliance
    const trackComplianceBtn = document.getElementById('trackComplianceBtn');
    trackComplianceBtn.addEventListener('click', function () {
        const projectData = {
            projectName: document.getElementById('projectName').value,
            regulationsFollowed: document.getElementById('regulationsFollowed').checked
        };
        trackCompliance(projectData);
    });
});
