const path = require('path');
const os = require('os');
const fs = require('fs');

const file_name = path.basename(__filename);
const file_ext = path.extname(__filename);
const file = path.parse(__filename);


// console.log(file_name);
// console.log(file_ext);
// console.log(file.name);
// const file = path.parse(__filename);

// console.log('Total Memory on Laptop ' + os.totalmem);
// console.log('Free memory' + os.freemem());
// console.log(os.hostname());

// console.log(fs.readdirSync('../'));
const file_content = fs.readFile(__filename, "utf8" , (err, data) => {
    if(err) console.log(err);
    else console.log(data);
});
console.log(file_content);