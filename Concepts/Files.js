import fs from 'fs/promises'
import path from 'path'
const dirname = "/home/sanjay/Desktop/David Gray/Files"
const Quotes = "The greatest Success comes from having the freedom to fail --Sanjay"

const Files = () =>{
fs.readFile(path.join(dirname, 'opFiles', 'greet.txt'), 'utf-8', (err, output) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log(output)
    };
    fs.writeFile(path.join(dirname, 'opFiles', 'Quote.txt'), Quotes, (err) => {
        if (err) {
            console.log(err)
        }

        else {
            console.log("File created and written successfully")
        }

    })
})

}

export default Files
