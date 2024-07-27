const fs = require('fs');// CJS(common JS)
// import fs from 'fs';// ESM (ECMAScript Module) -> after nodeJSv12/13+ need to rename the file as .mjs

fs.readFile('fileForRead1.txt','utf-8',(err, data)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log(data);
});

fs.writeFile('fileForWrite','Writing into file', 'utf-8', (data) => {
    console.log(data);
})
const directory  = './tmp/newFile';
fs.mkdir(directory,{recursive:true}, (err) => {
    if(err){
        throw err;
    }
    console.log('Directory - ${directory} is created');
});
fs.rm(directory, {recursive:true}, (err) => {
    if (err){
        console.error(err);
        return;
    }
    console.log('removed Directory ${directory}');
});