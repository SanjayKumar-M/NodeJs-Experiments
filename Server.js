import http from 'http'
import fs from 'fs'
const Server = http.createServer((req, res) => {

    res.writeHead(200, { "Content-Type": "Text/html" })
    let html = fs.readFileSync('./html/index.html', 'utf-8')
    process.nextTick(() => {
        console.log("Learning Event loop")
    })
    let user = "Sanjay"
    //using custom values in html with replace()

    html = html.replace('{name}', user)
    res.end(html)


})



Server.listen(3000, () => { console.log("Server connection established Successfully...") })


