import http from 'http'

const Server = http.createServer((req, res) => {
    switch (req.method) {
        case "GET":
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/plain");
            res.end("GET request received");
            break;
        case "POST":
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/plain");
            res.end("POST request received");
            break;
        case "PUT":
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/plain");
            res.end("PUT request received");
            break;
        case "DELETE":
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/plain");
            res.end("DELETE request received");
            break;

        default:
            res.statusCode = 404;
            res.setHeader("Content-Type", "text/plain");
            res.end("No Method found")
    }
})

Server.listen(3000, () => { console.log("Listening...") })