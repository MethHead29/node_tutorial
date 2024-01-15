const {readFileSync, writeFileSync, read} = require('fs')

const first = readFileSync('./Folder/first.txt','utf8')
const second = readFileSync('./Folder/second.txt','utf8')

writeFileSync('./Folder/result-sync.txt',`Here is the result: ${first}, ${second}`,
{ flag :' a'})