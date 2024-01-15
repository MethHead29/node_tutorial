const path = require("path")
console.log(path.sep);

const filePath = path.join('Folder','SubFolder','test.txt')
console.log(filePath);

const base = path.basename(filePath)
console.log(base);

const absolute = path.resolve(__dirname,'Folder','SubFolder','test.txt')
console.log(absolute);




