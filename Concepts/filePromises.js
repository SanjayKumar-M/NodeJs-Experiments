import fs from 'fs/promises'
import path from 'path'

const dirname = "/home/sanjay/Desktop/David Gray/Files"
const Quotes = "Win or Loose I gonna make it --Sanjay"
const newQ = "This is new Quote"

const fileOperations = async() =>{
    try{
    const data = await fs.readFile(path.join(dirname,'opFiles','Promise-Quote.txt'),'utf-8')
    console.log(data)

    await fs.writeFile(path.join(dirname,'opFiles','Promise-Quote.txt'),Quotes)

    await fs.appendFile(path.join(dirname,'opFiles','Promise-Quote.txt'),newQ)

    } catch (err){
        console.log(err)
    }

}

export default fileOperations