const fs =require('fs')
fs.writeFileSync('./hello.txt','こんにちは')
const txt=fs
fs.readFileSync('./hello.txt')
.toString('utf-8')