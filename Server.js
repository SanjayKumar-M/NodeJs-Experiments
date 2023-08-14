import Express  from "express";
import os from 'os'

const app = Express();
const port = 3000;

app.get('/api/data', (req, res) => {
   res.send(os.cpus())
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// server.get('/:id',(req,res)=>{
//     const {id} = req.params

//     res.send(`User name is ${id}`)
// })

// import http from 'http'
// import fs from 'fs'
// import fileOperations from './Concepts/filePromises.js'
// const Server = http.createServer((req, res) => {

//     res.writeHead(200, { "Content-Type": "Text/html" })
//     let html = fs.readFileSync('./html/index.html', 'utf-8')
//     process.nextTick(() => {
//         console.log("Learning Event loop")
//     })
//     let user = "Sanjay"
//     //using custom values in html with replace()

//     html = html.replace('{name}', user)
//     res.end(html)


// })

// fileOperations()

// Server.listen(3000, () => { console.log("Server connection established Successfully...") })


