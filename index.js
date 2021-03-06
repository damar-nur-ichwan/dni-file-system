const fs = require('fs');

function ReadDir(directoryPath){
    return fs.promises.readdir(directoryPath)
}

function ReadFile(filePath){
    return fs.promises.readFile(filePath)
}

function DeleteFile(filePath){
    return fs.promises.unlink(filePath)
}

function RenameFile(filePath,rename){
    return fs.promises.rename(filePath,rename)
}

function CreateFile(filePath,data){
    return ReadFile(filePath)
    .then(()=>{return 'File name is already exist!'})
    .catch(()=>{
        fs.promises.appendFile(filePath, data)
        return 'Data Created!'
    })
}

function UpdateFile(filePath,data){
    return ReadFile(filePath)
    .then(()=>{
        fs.promises.unlink(filePath)
        fs.promises.appendFile(filePath, data)
        return 'Data Updated!'
    })
    .catch(()=>{
        return 'Can not find the file!'
    })
}

function MoveFile(fromPath,toPath){
    return ReadFile(fromPath)
    .then(res => {
        return CreateFile(toPath,res)
        .then(()=>{
            DeleteFile(fromPath)
        })
    })
    .catch(() =>{
        return ReadFile(fromPath)
        .then(res => {
            return CreateFile(toPath,res)
        })
    })
}
module.exports = {ReadDir,ReadFile,CreateFile,UpdateFile,DeleteFile,RenameFile,MoveFile}
