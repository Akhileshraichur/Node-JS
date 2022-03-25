
//console.log(process.pid);

//reading menu.txt and printing
const fs = require('fs');
const menu = fs.readFileSync('./menu.txt')
console.log(menu);
console.log(menu.toString('utf8'));