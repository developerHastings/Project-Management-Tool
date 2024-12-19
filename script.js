document.addEventListener('DOMContentLoaded', () => {
    // Check if the user is logged in
    const isLoggedIn = checkLoginStatus();

    // Display the appropriate section based on login status
    if (isLoggedIn) {
        showProjects();
    } else {
        showLoginForm();
    }

    // Handle login form submission
    const loginForm = document.getElementById('login');
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission
        
        // Get user credentials
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Validate credentials
        if (validateLogin(username, password)) {
            saveLoginStatus();
            showProjects();
        } else {
            alert('Invalid login credentials. Please try again.');
        }
    });
});

function checkLoginStatus() {
    // Check if the user is logged in (e.g., check localStorage or sessionStorage)
    return localStorage.getItem('isLoggedIn') === 'true';
}

function saveLoginStatus() {
    // Save login status to localStorage
    localStorage.setItem('isLoggedIn', 'true');
}

function showLoginForm() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('projectList').style.display = 'none';
}

function showProjects() {
    // Hide the login form
    document.getElementById('loginForm').style.display = 'none';

    // Fetch and display user projects
    const projects = fetchProjects();
    const projectsList = document.getElementById('projects');
    projectsList.innerHTML = ''; // Clear any existing projects

    projects.forEach(project => {
        const listItem = document.createElement('li');
        listItem.textContent = project;
        projectsList.appendChild(listItem);
    });

    document.getElementById('projectList').style.display = 'block';
}

function validateLogin(username, password) {
    // Simple validation (replace this with actual validation logic)
    return username === 'admin' && password === 'password123';
}

function fetchProjects() {
    // Simulate fetching projects from a server or database
    return ['Project 1', 'Project 2', 'Project 3'];
}