import fs from 'fs'

const Stream = () =>{

    const readStream = fs.createReadStream('./opFiles/Sanu.txt',{
        encoding:'utf-8'
    })

    

   
    const writeStream = fs.createWriteStream('./opFiles/newStream.txt')

    // readStream.on('data',(parts)=>{
    //         console.log(parts);
    //         writeStream.write(parts)
    // })
    readStream.pipe(writeStream)

}

export default Stream