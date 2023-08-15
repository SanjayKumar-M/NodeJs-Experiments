import movieData from '../Data/movies.js';

const getMethod = (req, res) => {
    const id = req.url.split('/').pop();
    const movie = movieData.find(data =>data.id === id);
    if (req.url.startsWith('/api/movies/')) {
        if(movie){
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        
        res.end(JSON.stringify(movie));
        }
        else{
            res.writeHead(401,{"Content-Type": "text/plain"});
            res.end("Invalid Credentials")
        }
    } else {
        res.writeHead(404, {"Content-Type": "application/json"});
        res.end(JSON.stringify({"message": "No route found"}));
    }
}

export default getMethod;
