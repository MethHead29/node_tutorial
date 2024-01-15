const {readFile, writeFile} = require("fs");

readFile('./Folder/first.txt','utf8',(err,result)=>{
if(err){
    console.log(err);
    return;
    
}
const first = result;
 readFile('./Folder/second.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
        
    }
    const second = result;
    writeFile('./Folder/result-sync.txt',
    `Here is the result: ${first}, ${second}`,
    (err,result)=>{
        if(err){
            console.log(err);
            return
            
        }
        console.log(result);
        
    }
    )

 })

})