// algorithmicTrading.js

// Function to manage trading strategies
function manageTradingStrategy(strategyData) {
    if (!strategyData.name || !strategyData.parameters) {
        alert("Please fill in all the fields.");
        return;
    }

    console.log("Managing trading strategy:", strategyData);

    // Add strategy to the list of displayed strategies
    addStrategyToDisplay(strategyData);

    // Save strategy to local storage (can replace with API call for backend storage)
    saveStrategy(strategyData);
}

// Function to display a trading strategy
function addStrategyToDisplay(strategyData) {
    const strategyList = document.getElementById('strategyList');
    const listItem = document.createElement('li');
    listItem.textContent = `${strategyData.name}: ${strategyData.parameters}`;
    strategyList.appendChild(listItem);
}

// Function to save a strategy to local storage
function saveStrategy(strategyData) {
    let strategies = JSON.parse(localStorage.getItem('tradingStrategies')) || [];
    strategies.push(strategyData);
    localStorage.setItem('tradingStrategies', JSON.stringify(strategies));
}

// Function to load saved strategies from local storage
function loadStrategies() {
    const strategies = JSON.parse(localStorage.getItem('tradingStrategies')) || [];
    strategies.forEach(strategy => addStrategyToDisplay(strategy));
}

// Event listener for adding a new trading strategy
document.addEventListener('DOMContentLoaded', () => {
    // Load existing strategies on page load
    loadStrategies();

    // Add event listener for adding a new strategy
    const addTradingStrategyBtn = document.getElementById('addTradingStrategyBtn');
    addTradingStrategyBtn.addEventListener('click', function () {
        const strategyData = {
            name: document.getElementById('strategyName').value,
            parameters: document.getElementById('strategyParameters').value
        };
        manageTradingStrategy(strategyData);
    });
});
