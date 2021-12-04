const fs =require('fs')
const data=fs.readFileSync("./kadai06/data.json").toString("utf-8")
const obj=JSON.parse(data)
try{obj.updateAt=Date()
    obj.count=obj.count+1
    console.log(obj)
    fs.writeFileSync("./kadai06/data.json",JSON.stringify(obj))
    process.exit(0)
}catch (error){
        console.log('不正なJSONフォーマットです')
    　　process.exit(1)
}
