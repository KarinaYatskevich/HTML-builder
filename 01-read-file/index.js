const fs = require("fs")
const path = require("path")
const fileDirectory = path.join(__dirname, 'text.txt');

let stream = new fs.ReadStream(fileDirectory, "utf-8");

stream.on('readable', function(){
    let data = stream.read();
    if(data != null)console.log(data);
});
