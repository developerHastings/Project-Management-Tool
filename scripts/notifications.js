// notifications.js

// Function to show notifications dynamically
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.classList.add('notification', `notification-${type}`);
    notification.innerText = message;

    // Add notification to the page
    const notificationContainer = document.getElementById('notificationContainer') || createNotificationContainer();
    notificationContainer.appendChild(notification);

    // Automatically hide the notification after 5 seconds
    setTimeout(() => {
        notification.classList.add('hide');
        setTimeout(() => notification.remove(), 500); // Wait for fade-out animation
    }, 5000);
}

// Helper function to create a notification container if it doesn't exist
function createNotificationContainer() {
    const container = document.createElement('div');
    container.id = 'notificationContainer';
    container.style.position = 'fixed';
    container.style.top = '10px';
    container.style.right = '10px';
    container.style.width = '300px';
    container.style.zIndex = '1000';
    document.body.appendChild(container);
    return container;
}

// Example usage with different types of notifications
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('triggerInfoNotification').addEventListener('click', () => {
        showNotification('Market Alert: AAPL price is rising!', 'info');
    });

    document.getElementById('triggerWarningNotification').addEventListener('click', () => {
        showNotification('Warning: Portfolio risk levels are high.', 'warning');
    });

    document.getElementById('triggerErrorNotification').addEventListener('click', () => {
        showNotification('Error: Failed to fetch stock data.', 'error');
    });
});
