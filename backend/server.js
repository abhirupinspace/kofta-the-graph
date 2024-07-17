const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Load environment variables from .env file
require('dotenv').config();

// Initialize Express app and port
const app = express();
const port = process.env.PORT || 3001;

// Middleware setup
app.use(cors());
app.use(express.json());

// Access your API key as an environment variable
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

// Get the Generative Model
let model;
async function initModel() {
    try {
        model = await genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        console.log('Model initialized successfully');
    } catch (error) {
        console.error('Error initializing model:', error);
    }
}
initModel();

// Function to generate contract based on templateName
async function generateContract(templateName) {
    try {
        if (!model) {
            throw new Error('Model not initialized');
        }
        const prompt = `Generate a solidity smart contract for ${templateName}`;
        const result = await model.generateContent(prompt);
        const contractText = await result.response.text();
        return contractText.trim();
    } catch (error) {
        console.error('Error generating contract:', error.message);
        throw new Error('Failed to generate contract');
    }
}

// Endpoint to generate contract
app.post('/generateContract', async (req, res) => {
    const { templateName } = req.body;
    try {
        if (!templateName) {
            return res.status(400).json({ error: 'templateName is required' });
        }
        const contract = await generateContract(templateName);
        res.status(200).json({ contract });
    } catch (error) {
        console.error('Error fetching contract:', error.message);
        res.status(500).json({ error: 'Failed to fetch contract. Please try again later.' });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Backend server is running on http://localhost:${port}`);
});
