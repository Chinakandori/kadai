class Animal {
    constructor(){
        this.energy=100
    }
    eat(){
        this.energy=this.energy+10
        console.log('eatメゾットが呼び出された')

    }
}
class Cat extends Animal {
    speak(){
        console.log("meow")}
}    




const cat= new Cat()
cat.speak()
cat.eat()
console.log(cat.energy)

