const fs = require('fs');
fs.readFile('./menu.txt',(err,data)=>{
    if(err)
        throw err;
    console.log(data.toString('utf8'));
})
console.log('something');