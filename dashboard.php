<?php
session_start();

if (!isset($_SESSION['user_id'])) {
    // Redirect to login if not logged in
    header("Location: login.php");
    exit();
}
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Financial Project Management Tools Platform</title>

    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">


    <link rel="stylesheet" href="style.css">

</head>
<body>
    <header>
        <h1>Welcome, <?php echo htmlspecialchars($_SESSION['username']); ?>!</h1>
    </header>

    <div class="sidebar">
        <div class="toggle-btn" onclick="toggleSidebar()">
            <span>&#9776;</span>
        </div>
        <ul>
            <li>
                <i class="icon">&#128200;</i>
                <span class="menu-text">Dashboard</span>
            </li>
            <li>
                <i class="icon">&#128203;</i>
                <span class="menu-text">Reports</span>
            </li>
            <li>
                <i class="icon">&#128187;</i>
                <span class="menu-text">Settings</span>
            </li>
            <li>
            <a href="logout.php">
                <i class="fas fa-power-off"></i>
                <span class="menu-text">Logout</span>
            </a>
            </li>
        </ul>
    </div>
    <div class="content">
        <!-- Main dashboard content -->
        <h1>Welcome to your Dashboard</h1>
    </div>
    
    <!-- Algorithmic Trading Section -->
    <section id="algorithmicTrading">
        <h3>Algorithmic Trading</h3>
        <form id="tradingForm">
            <label for="strategyName">Trading Strategy:</label>
            <input type="text" id="strategyName" name="strategyName" required>
            <label for="riskTolerance">Risk Tolerance (1-10):</label>
            <input type="number" id="riskTolerance" name="riskTolerance" min="1" max="10" required>
            <button type="submit">Save Strategy</button>
        </form>
        <div id="tradingHistory">
            <h4>Recent Strategies</h4>
        </div>
    </section>

    <!-- Portfolio Analysis Section -->
    <section id="portfolioAnalysis">
        <h3>Portfolio Analysis</h3>
        <form id="portfolioForm">
            <label for="portfolioValue">Portfolio Value ($):</label>
            <input type="number" id="portfolioValue" name="portfolioValue" required>
            <label for="assetDistribution">Asset Distribution:</label>
            <input type="text" id="assetDistribution" name="assetDistribution" placeholder="Stocks: 60%, Bonds: 40%">
            <button type="submit">Analyze Portfolio</button>
        </form>
        <div id="portfolioResults">
            <h4>Portfolio Results</h4>
        </div>
    </section>

    <!-- Risk Management Section -->
    <section id="riskManagement">
        <h3>Risk Management</h3>
        <p>Risk assessment tool with real-time monitoring, alerts, etc.</p>
    </section>

    <!-- Research Collaboration Section -->
    <section id="researchCollaboration">
        <h3>Research Collaboration</h3>
        <button id="startNewProjectBtn">Start New Project</button>
        <div id="collaborationList">
        </div>
    </section>

    <!-- Data Science Experimentation Section -->
    <section id="dataScienceExperimentation">
        <h3>Data Science Experimentation</h3>
        <form id="experimentForm">
            <label for="experimentName">Experiment Name:</label>
            <input type="text" id="experimentName" name="experimentName" required>
            <label for="experimentDetails">Details:</label>
            <textarea id="experimentDetails" name="experimentDetails" required></textarea>
            <button type="submit">Save Experiment</button>
        </form>
        <div id="experimentHistory">
            <h4>Experiment History</h4>
        </div>
    </section>

    <!-- Data Sources Integration Section -->
    <section id="dataSourcesIntegration">
        <h3>Data Sources Integration</h3>
        <button id="loadDataBtn">Load Data</button>
        <div id="dataResults">
        </div>
    </section>

    <!-- AI Model Deployment Section -->
    <section id="aiModelDeployment">
        <h3>AI Model Deployment</h3>
        <form id="deployModelForm">
            <label for="modelName">AI Model Name:</label>
            <input type="text" id="modelName" name="modelName" required>
            <button type="submit">Deploy Model</button>
        </form>
        <div id="modelStatus">
        </div>
    </section>

    <!-- Compliance Tracking Section -->
    <section id="complianceTracking">
        <h3>Compliance Tracking</h3>
        <p>Track financial regulatory compliance in your projects.</p>
    </section>

    <!-- Notifications Section -->
    <section id="notifications">
        <h3>Market Notifications</h3>
        <p>Get notifications about significant market events or changes.</p>
    </section>


    <section id="subscriptionPlans">
        <h2>Subscription Plans</h2>
        <div class="plan-tile" data-plan="basic">
            <h3>Basic Plan</h3>
            <p>$10 per user/month</p>
        </div>
        <div class="plan-tile" data-plan="premium">
            <h3>Premium Plan</h3>
            <p>$50 per user/month</p>
        </div>
        <div class="plan-tile" data-plan="enterprise">
            <h3>Enterprise Plan</h3>
            <p>Custom Pricing</p>
        </div>
    </section>

    <script>

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');
    sidebar.classList.toggle('collapsed');
}




    </script>

    <!-- Linking external JS files -->
    <script src="algorithmicTrading.js"></script>
    <script src="machineLearning.js"></script>
    <script src="compliance.js"></script>
    <script src="dataIntegration.js"></script>
    <script src="notifications.js"></script>
    <script src="portfolio.js"></script>
    <script src="riskManagement.js"></script>
    <script src="collaboration.js"></script>
    <script src="experimentation.js"></script>
    <script src="dataIntegration.js"></script>
    <script src="aiDeployment.js"></script>
    <script src="realTimeData.js"></script>
    <script src="quantitativeResearch.js"></script>
</body>
</html>
