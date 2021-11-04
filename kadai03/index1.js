const n = parseInt(process.argv[2])
for (let m =2;m<=n;m=m+1){
    if(n%m===0){
        console.log('素数ではない')
        break
    }

}