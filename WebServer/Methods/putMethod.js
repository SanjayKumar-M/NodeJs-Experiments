const putMethod  =(req,res) =>{
    res.statusCode = 200;
    res.setHeader("Content-Type","application/json")
    res.write("Hello this is put Method");
    res.end()
}

export default putMethod;