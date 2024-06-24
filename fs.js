const { error } = require('console');
var fs = require('fs');
const { fileURLToPath } = require('url');

//fs is the file system

// read file is the function
//1st parameter - name of the file
//2nd parameter is the format - UTF -8
// call back function - unblocking IO, while it read the files it has other operations carried out
//checks if it has error
//error gets saved in the file
var in_data = fs.readFile('calc.js','utf8',function(err,data){

    console.log(data)
});

