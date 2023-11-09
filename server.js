const express = require('express');
const multer = require('multer');
const path = require('path');

// Initialize express app
const app = express();
const port = process.env.PORT || 3000; // Use the environment port or 3000 as a fallback

// Initialize multer for file uploads
const storage = multer.memoryStorage(); // Store files in memory
const upload = multer({ storage: storage });

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Body parser middleware to handle form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Endpoint to handle form submissions
app.post('/submit-form', upload.array('files'), (req, res) => {
    // Here you would handle the form data and send it to Zapier
    // For now, let's just log the form data and send a response back
    console.log('Text input:', req.body['text-input']);
    console.log('Additional info:', req.body['additional-info']);
    console.log('Mobile number:', req.body['mobile-number']);
    // Assuming files are optional
    if (req.files) {
        req.files.forEach(file => {
            console.log('Uploaded file:', file.originalname);
        });
    }

    // TODO: Implement sending data to Zapier webhook and handle the response

    // Send a response back to the client
    res.status(200).json({ message: 'Form data received' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
