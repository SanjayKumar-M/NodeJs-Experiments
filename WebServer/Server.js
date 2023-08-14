import fs from 'fs/promises'

const File = async() =>{
    const readData = await fs.readFile('haha.txt','utf-8')
    console.log(readData) 

    await fs.writeFile('./Hello.txt',"Hi I'm Sanjay")
}
File()