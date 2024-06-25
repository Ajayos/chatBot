import express, { static as expressStatic } from "express";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3001;
// Add middleware for parsing JSON data
app.use(express.json());

// Add middleware for parsing URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Add middleware for serving static files from the 'public' folder
app.use(expressStatic(join(__dirname, 'public')));

// Route for serving the index.html file
app.get('/test', (req, res) => {
    res.sendFile(join(__dirname, 'public', 'test.html'));
});
app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'public', 'index.html'));
});

// Serve static files from the 'public' folder
app.use(express.static(join(__dirname, 'public')));

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});