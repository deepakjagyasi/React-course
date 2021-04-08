var fs = require('fs')

// fs.readFile('express.js', 'utf-8', function(err, data){
//     console.log(data);
// })

// fs.writeFile('calc1.js', 'console.log("Write some data in file")', function(err){
//     console.log("data saved");
// })

// fs.appendFile('calc1.js', 'Write some data in file', function(err){
//     console.log("data saved"+ err);
// })

fs.unlink('calc1.js', function(err){
    console.log('Deleted')
})