//lebih baik membaca folder di dalam app path. karena jika copas path, tanda \ akan terbaca hilang
const path = require('path');//untuk menampilkan path dari app
const fs = require('fs');

function ReadDir(folderPath){
    const directoryPath = path.join(__dirname, folderPath);
    return fs.promises.readdir(directoryPath)
}

function ReadFile(filePath){
    const directoryPath = path.join(__dirname, filePath);
    return fs.promises.readFile(directoryPath)
}

function DeleteFile(filePath){
    const directoryPath = path.join(__dirname, filePath);
    return fs.promises.unlink(directoryPath)
}

function RenameFile(filePath,rename){
    const directoryPath = path.join(__dirname, filePath);
    return fs.promises.rename(directoryPath,rename)
}

function CreateFile(filePath,data){
    const directoryPath = path.join(__dirname, filePath);
    ReadFile(filePath)
    .then(()=>console.log('File name is already exist!'))
    .catch(()=>{
        fs.promises.appendFile(directoryPath, data)
        console.log('Data Created!')
    })
}

function UpdateFile(filePath,data){
    const directoryPath = path.join(__dirname, filePath);
    ReadFile(filePath)
    .then(()=>{
        fs.promises.appendFile(directoryPath, data)
        console.log('Data Updated!')
    })
    .catch(()=>{
        console.log('Can not find the file!')
    })
}
module.exports = {ReadDir,ReadFile,CreateFile,UpdateFile,DeleteFile,RenameFile}