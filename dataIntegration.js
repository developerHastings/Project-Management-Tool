// dataIntegration.js

// Function to fetch data from a financial API
async function fetchFinancialData(stockSymbol) {
    try {
        const response = await fetch(`https://api.example.com/stocks/${stockSymbol}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch stock data: ${response.statusText}`);
        }

        const data = await response.json();

        // Validate data structure
        if (!data || !data.price) {
            throw new Error("Invalid data format from API.");
        }

        console.log("Fetched stock data:", data);
        displayStockData(data, stockSymbol);

    } catch (error) {
        console.error("Error fetching stock data:", error);
        document.getElementById('stockData').innerText = "Error fetching stock data. Please try again.";
    }
}

// Function to display stock data
function displayStockData(data, stockSymbol) {
    const stockDataDiv = document.getElementById('stockData');
    stockDataDiv.innerHTML = `
        <h3>Stock Data for ${stockSymbol}</h3>
        <p>Price: $${data.price}</p>
        <p>Open: $${data.open}</p>
        <p>Close: $${data.close}</p>
        <p>Volume: ${data.volume}</p>
    `;
}

// Function to clear the stock data display
function clearStockData() {
    const stockDataDiv = document.getElementById('stockData');
    stockDataDiv.innerHTML = '<p>No stock data available.</p>';
}

// Event listener for fetching stock data
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('fetchStockBtn').addEventListener('click', function () {
        const stockSymbol = document.getElementById('stockSymbol').value.trim();
        if (stockSymbol) {
            fetchFinancialData(stockSymbol);
        } else {
            alert("Please enter a valid stock symbol.");
        }
    });

    // Clear stock data when the input field is cleared
    document.getElementById('stockSymbol').addEventListener('input', function () {
        if (!this.value.trim()) {
            clearStockData();
        }
    });
});
