// realTimeData.js

// Initialize WebSocket connection for real-time data
const ws = new WebSocket('wss://example.com/real-time-data');

ws.addEventListener('open', function () {
    console.log("Connected to WebSocket for real-time data");

    // Example: Sending real-time data requests (optional, based on server design)
    setInterval(() => {
        ws.send(JSON.stringify({ requestType: 'subscribe', stock: 'AAPL' }));
    }, 5000); // every 5 seconds
});

ws.addEventListener('message', function (event) {
    try {
        const data = JSON.parse(event.data);
        updateStockPriceDisplay(data);
    } catch (error) {
        console.error("Error processing WebSocket message:", error);
    }
});

ws.addEventListener('error', function (error) {
    console.error("WebSocket error:", error);
    document.getElementById('stockPrice').innerText = "Error connecting to real-time data feed.";
});

ws.addEventListener('close', function () {
    console.warn("WebSocket connection closed.");
    document.getElementById('stockPrice').innerText = "Connection closed. Reconnecting...";
    reconnectWebSocket();
});

// Function to update stock price display
function updateStockPriceDisplay(data) {
    const stockPriceDiv = document.getElementById('stockPrice');
    if (data && data.stock && data.price) {
        stockPriceDiv.innerHTML = `Stock Price: ${data.stock} - $${data.price.toFixed(2)}`;
    } else {
        stockPriceDiv.innerHTML = "Invalid data received.";
    }
}

// Function to reconnect WebSocket on disconnection
function reconnectWebSocket() {
    setTimeout(() => {
        console.log("Reconnecting WebSocket...");
        window.location.reload(); // Refresh the page to reconnect (or reinitialize WebSocket)
    }, 5000); // Retry after 5 seconds
}
