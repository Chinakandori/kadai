function product(a,b){
    return(a*b)

}

function sum (n) {
    let ans=0
    for(let i =1; i<n+1; i=i+1){
        ans=ans+i
    }
    return ans
}

console.log(product(200,100))
console.log(sum(500))