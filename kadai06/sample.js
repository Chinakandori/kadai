console.log('hello!')
try {
 JSON.parse('{"a":,') // JSON では無い文字列をパース（エラー発生）
 console.log('JSON のパース成功') // この行は実行されない
} catch (err) {
 console.log('error!')
 console.log(err) // エラーは Error オブジェクトとしてキャッチされる
}
console.log('bye!') 