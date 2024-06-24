var fs = require('fs')

fs.writeFile('calc1.js','console.log ("done")',function(err){
    console.log("data saved")
})