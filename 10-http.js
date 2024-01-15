const http = require("http")

const server = http.createServer((req,res)=>{
    if(req.url== '/'){
        res.end("good bye")
    }
    if(req.url =='/about'){
        res.end("hi")
    }
    res.end(`<h2>oops</h2><p> we cant seem to find the page that you are looking for</p>`)
    
})

server.listen(4000)