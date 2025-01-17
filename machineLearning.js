// machineLearning.js

// Function to load a pre-trained model
async function loadMachineLearningModel(modelUrl) {
    try {
        console.log("Loading model from:", modelUrl);

        // Example with TensorFlow.js
        const model = await tf.loadLayersModel(modelUrl);
        console.log("Model loaded successfully.");
        return model;
    } catch (error) {
        console.error("Error loading model:", error);
        document.getElementById('mlPrediction').innerText = "Error loading model. Please try again.";
        throw error;
    }
}

// Function to predict using the model
async function predictWithModel(model, inputData) {
    try {
        console.log("Running prediction with input data:", inputData);

        // Convert input data to a TensorFlow.js tensor (example)
        const inputTensor = tf.tensor(inputData);
        const prediction = model.predict(inputTensor).arraySync(); // Convert prediction to JavaScript array
        console.log("Prediction result:", prediction);

        return prediction;
    } catch (error) {
        console.error("Error during prediction:", error);
        document.getElementById('mlPrediction').innerText = "Error during prediction. Please check the input data.";
        throw error;
    }
}

// Event listener for loading the model and making predictions
document.addEventListener('DOMContentLoaded', () => {
    const predictBtn = document.getElementById('predictBtn');

    predictBtn.addEventListener('click', async function () {
        const modelUrl = document.getElementById('modelUrl').value.trim();
        if (!modelUrl) {
            alert("Please enter a valid model URL.");
            return;
        }

        try {
            const model = await loadMachineLearningModel(modelUrl);

            // Example input data for prediction
            const inputData = [
                [5.1, 3.5, 1.4, 0.2], 
                [6.2, 3.4, 5.4, 2.3]  
            ];

            const result = await predictWithModel(model, inputData);
            document.getElementById('mlPrediction').innerText = `Prediction Results: ${JSON.stringify(result)}`;
        } catch (error) {
            console.error("An error occurred during the prediction process.");
        }
    });
});
