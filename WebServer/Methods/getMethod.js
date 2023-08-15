import movieData from '../Data/movies.js';

const getMethod = (req, res) => {
    if (req.url === '/api/movies') {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        
        res.end(JSON.stringify(movieData));
    } else {
        res.writeHead(404, {"Content-Type": "application/json"});
        res.end(JSON.stringify({"message": "No route found"}));
    }
}

export default getMethod;
