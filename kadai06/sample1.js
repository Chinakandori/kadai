//error//
const input  =process.argv[2]//外部から取得//
const num= parseInt (input)//文字列から整数に変換//
if (Number.isNaN(num)){
    throw new Error("数字以外が入力されました")
}
console.log(number+1)