import fs from 'fs/promises';

const __dirname = "/home/sanjay/Desktop/David Gray/Files/WebServer/Data";

const writeFile = async (data) => {
    try {
        await fs.writeFile(`${__dirname}/movies.js`, JSON.stringify(data), 'utf-8');
    } catch (err) {
        console.log(err);
    }
}

export default writeFile;
