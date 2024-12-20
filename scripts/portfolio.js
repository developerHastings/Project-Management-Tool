// portfolioAnalysis.js

// Function to calculate portfolio performance and risk
function analyzePortfolio(portfolioData) {
    if (portfolioData.length === 0) {
        alert("No portfolio data provided.");
        return;
    }

    console.log("Analyzing portfolio:", portfolioData);

    // Calculate performance and risk
    const performance = portfolioData.reduce((acc, asset) => acc + asset.value, 0).toFixed(2);
    const risk = calculateRisk(portfolioData).toFixed(2);

    // Display the results
    displayPortfolioAnalysis(performance, risk);
}

function calculateRisk(portfolioData) {
    // Example risk calculation based on portfolio variance
    const meanValue = portfolioData.reduce((acc, asset) => acc + asset.value, 0) / portfolioData.length;
    const variance = portfolioData.reduce((acc, asset) => acc + Math.pow(asset.value - meanValue, 2), 0) / portfolioData.length;
    return Math.sqrt(variance); // Standard deviation as risk
}

function displayPortfolioAnalysis(performance, risk) {
    const performanceDiv = document.getElementById('portfolioPerformance');
    const riskDiv = document.getElementById('portfolioRisk');

    performanceDiv.innerHTML = `Performance: $${performance}`;
    riskDiv.innerHTML = `Risk: ${risk}`;
}

// Event listener for adding and analyzing portfolio data
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('analyzePortfolioBtn').addEventListener('click', function () {
        const portfolioInput = document.getElementById('portfolioInput').value.trim();
        if (!portfolioInput) {
            alert("Please enter portfolio data.");
            return;
        }

        try {
            const portfolioData = JSON.parse(portfolioInput); // Parse JSON input
            if (!Array.isArray(portfolioData)) {
                throw new Error("Portfolio data must be an array of assets.");
            }
            analyzePortfolio(portfolioData);
        } catch (error) {
            console.error("Invalid portfolio data:", error);
            alert("Invalid portfolio data. Please enter a valid JSON array of assets.");
        }
    });
});
