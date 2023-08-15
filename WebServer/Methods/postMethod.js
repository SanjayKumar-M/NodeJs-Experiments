import crypto from 'crypto';
import bodyParser from '../Utils/bodyParser.js';
import writeFile from '../Utils/writeFile.js';

const postMethod = async (req, res) => {
    if (req.url === "/api/movies") {
        try {
            const body = await bodyParser(req);
            body.id = crypto.randomUUID()

            req.movieData.push(body);
            writeFile(req.movieData);

            res.writeHead(201, {"Content-Type": "application/json"});
            res.end(JSON.stringify(body));
        } catch (err) {
            console.error(err);
            res.writeHead(400, {"Content-Type": "application/json"});
            res.end(JSON.stringify({"message": "Invalid request data"}));
        }
    }
}

export default postMethod;
