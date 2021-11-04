let count3_1=0
let count3_2=0
for (let n=2; n<=10000;n=n+1){
    let isPrime=true
    for (let i=2;i<=n-1; i =i+1){
        if(n%i===0){
            isPrime=false
            break
        }
    }
    
  if (isPrime){
    if (n%3===1) {
        count3_1=count3_1+1
    }
    else if (n%3===2){
        count3_2=count3_2+1
    }
  }
}

console.log('3で割ると1余る素数'+count3_1)
console.log('3で割ると1余る素数'+count3_2)
