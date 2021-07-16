const fs = require('fs');

const readFile = (filePath)=>{
    return fs.readFileSync(filePath).toString();
};

const writeFile = (filePath, str) =>{
    fs.writeFileSync(filePath, str, (err)=>{
        if(err) return console.log(err);
    });

}

module.exports = {
    readFile, 
    writeFile,
};