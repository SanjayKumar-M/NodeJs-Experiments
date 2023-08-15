const postMethod  =(req,res) =>{
    res.statusCode = 200;
    res.setHeader("Content-Type","application/json")
    res.write("Hello this is post Method");
    res.end()
}

export default postMethod;