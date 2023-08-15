import http from 'http'
import getMethod from './Methods/getMethod.js';
import putMethod from './Methods/putMethod.js';
import postMethod from './Methods/postMethod.js';
import deleteMethod from './Methods/deleteMethod.js';

const Server = http.createServer((req, res) => {
    switch (req.method) {
        case "GET":
            getMethod(req,res);
            break;
        case "POST":
            postMethod(req,res);
            break;
        case "PUT":
            putMethod(req,res)
            break;
        case "DELETE":
            deleteMethod(req,res)
            break;

        default:
            res.statusCode = 404;
            res.setHeader("Content-Type", "text/plain");
            res.end("No Method found")
    }
})

Server.listen(3000, () => { console.log("Listening...") })