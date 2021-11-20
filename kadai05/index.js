const profile={
    name:"神鳥",
    age:"25",
    hobby:"アニメ",
    major:"地域"
}

const dictionary ={
    name:'名前',
    age:'年齢',
    hobby:'趣味',
    major:'専攻'
}

const keys =Object.keys(profile)
for (const key of keys){
    const value =profile[key]
    const key_injapanese=dictionary[key]
    console.log(`私の${key_injapanese}は${value}です`)
}