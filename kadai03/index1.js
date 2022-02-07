const n = parseInt(process.argv[2])

let isPrime = true

for (let m =2;m<=n-1;m=m+1){
    if(n%m===0){
        isPrime = false
        console.log('素数ではない')
        break
    }
}

if(isPrime) {
  console.log(n)
}
