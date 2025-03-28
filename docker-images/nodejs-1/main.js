const http = require('http');
const url = require('url');
const querystring = require('querystring');

// Create a simple HTTP server
const server = http.createServer((req, res) => {
    // Set the response content type
    res.setHeader('Content-Type', 'application/json');

    // Handle GET requests
    if (req.method === 'GET') {
        const parsedUrl = url.parse(req.url, true);
        res.statusCode = 200;
        res.end(JSON.stringify({
            message: 'This is a GET request',
            query: parsedUrl.query
        }));
    }

    // Handle POST requests
    else if (req.method === 'POST') {
        let body = '';

        // Collect data from the POST request
        req.on('data', chunk => {
            body += chunk;
        });

        // Handle the complete POST request data
        req.on('end', () => {
            const parsedBody = JSON.parse(body); // Parse JSON from the request body
            res.statusCode = 200;
            res.end(JSON.stringify({
                message: 'This is a POST request',
                data: parsedBody
            }));
        });
    } else {
        // Handle other HTTP methods
        res.statusCode = 405; // Method Not Allowed
        res.end(JSON.stringify({ message: 'Method Not Allowed' }));
    }
});

// Set the server to listen on port 3000
server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

