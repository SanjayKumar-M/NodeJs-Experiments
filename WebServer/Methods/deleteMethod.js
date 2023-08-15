const deleteMethod  =(req,res) =>{
    res.statusCode = 200;
    res.setHeader("Content-Type","application/json")
    res.write("Hello this is delete Method");
    res.end()
}

export default deleteMethod;