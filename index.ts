//!native type

let mystr : string = "issa"
let myNumber : number = 12
let myBool : boolean = true
let myAny : any = true
myAny = "issa"
myAny = 12

console.log(mystr, myNumber, myBool, myAny)

//!Function

const nameFunction = (name: string) => `My name is ${name}, `

function ageFunction(age: number){
    return `and i am ${age} years old`
}

function sexeFunction(sexe: string = "woman"){
    return `i am a ${sexe} `
}

//arrow annotations
const double = (x: number) : number => x * x

function printMessage(message: string) : void{
    console.log(`INFOS: ${message}`)
}

const nameValue = nameFunction("omar")
const ageValue = ageFunction(12)
const sexeValue = sexeFunction("man")


console.log(nameValue, ageValue, sexeValue)

//!Array
//? old notation
const tabOfNumberOne : Array<number> = [1, 2, 3]
const tabOfStringOne : Array<string> = ["issa", "omar"]
//? new notation
const tabOfNumber : number[] = [1, 2, 3]
const tabOfString : string[] = ["issa", "omar"]
//? array with many dimentions
const doubleDim : number[][] = [[1, 2, 3]]
const tripleDim : number[][][] = [[[1, 2, 3]]]

//!Object

const person : {firtsName: string, lastName: string, age: number} = {
    firtsName: "John",
    lastName: "Mendy",
    age: 24,
};

console.log(`Firstname: ${person.firtsName}, Lastname: ${person.lastName}, age: ${person.age}`)

//return value for function

function printUser() : {firtsName: string, lastName: string, age: number} {
    return {
        firtsName: "John",
        lastName: "Mendy",
        age: 24,
    }
}

console.log(printUser())

//! aliases type
type User = {
    firtsName: string, 
    lastName: string, 
    age: number
}

const printUserInfos = (person: User) => {
    return `Firstname: ${person.firtsName}, Lastname: ${person.lastName}, age: ${person.age}`
}

console.log(printUserInfos({firtsName: "John", lastName: "Mendy", age: 24}))

//! optionnal properties

type Tenants = {
    firtsName: string, 
    lastName: string, 
    age: number,
    email?: string
}

const john : Tenants =  {firtsName: "John", lastName: "Mendy", age: 24}
const toto : Tenants =  {firtsName: "toto", lastName: "Diaw", age: 24, email: "toto@gmail.com"}

//! read-only properties

type Tenant = {
    firtsName: string, 
    lastName: string, 
    age: number,
    email?: string
    readonly paid: boolean
}

const doe : Tenants =  {firtsName: "doe", lastName: "Mendy", age: 24}
//?impossible
// doe.paid = true

//! intersection type

type Tenant1 = {
    firtsName: string, 
    lastName: string, 
    age: number,
}

type Lessor1 = {
    email: string,
    password: string,
}

type User1 = Tenant1 & Lessor1

const tata : User1 = {firtsName: "toto", lastName: "Diaw", age: 24, email: "toto@gmail.com", password: "passer123"}

console.log(`Firstname: ${tata.firtsName}, Lastname: ${tata.lastName}, age: ${tata.age}, email: ${tata.email}, password: ${tata.password}`)


//! union type
//Example for variable
let password : string | number = 1234

//Example for object
type pseudoAccount = {
    pseudo: string, 
    password: number,
}

type gmailAccount = {
    email: string,
    password: string,
}

const account1 : pseudoAccount | gmailAccount = {
    email: "toto@gmail.com",
    password: "passer123"
}

const account2 : pseudoAccount | gmailAccount = {
    pseudo: "John",
    password: 1234
}

//Example for array
const tab : (number | string)[] = [1, "jonh", 2000, "doe"]


//! literal type
// string literal type
let color: "red" | "green" | "blue"
color = "red" //valid
// color = "yellow" //invalid

// number literal type
let age : 12 | 24 | 32
age = 12 //valid
// age = 23 //invalid

// boolean literal type
let isMen : true | false
isMen = true //valid
// isMen = "john" //invalid

//! Tuples
let myTuple : [string, number] = ["john", 24]
let [getName, getAge] = myTuple
// myTuple = [24, "john"] //invalid
console.log(getName, getAge)

//! Enum

enum WeatherConditions {
    sunny = "sunny",
    cloudly = "cloudly",
    rainy = "rainy",
    snowy = "snowy"
}

console.log(WeatherConditions.sunny)

//! accessibility level

class Animals{
    public name: string
    public categorie: string
    public weight: string
    public ageAnimal: number
    protected price: string
    private isAnyIll: boolean

    constructor(name: string, categorie: string , weight: string, ageAnimal: number, price: string, isAnyIll: boolean){
        this.name = name
        this.categorie = categorie
        this.weight = weight
        this.ageAnimal = ageAnimal
        this.price = price
        this.isAnyIll = isAnyIll
    }

    getPrice(){
        return this.price
    }
 
    getIsAnyIll(){
        return this.isAnyIll
    }

    //? getter and setter
    get animalName(){
        return this.name
    }
    set animalName(value){
        this.name = value
    }

}

class Cats extends Animals{
    constructor(name: string, categorie: string , weight: string, ageAnimal: number, price: string, isAnyIll: boolean){
        super(name, categorie, weight, ageAnimal, price, isAnyIll)
    }

    displayInfos(){
        console.log(`Neme: ${this.name}, Categorie: ${this.categorie}, 
            weight: ${this.weight}, Age: ${this.ageAnimal}, isAnyIll: ${this.getIsAnyIll()}`)
    }
}

//! Interfaces 
// Example for object
interface Computer{
    mark: string,
    ram: string,
    disk: string,
    readonly processor: string 
}

const myComputer: Computer = {mark: "Dell", ram: "16Go", disk: "HDD 1To", processor: "Intel"}

//Example for functions
interface MathOperation{
    (x: number, y: number): number
}

const add: MathOperation = (a, b) => a + b
const substract: MathOperation = (a, b) => a - b

console.log(add(12, 24), substract(24, 12))

interface Person{
    firstname: string,
    lastname: string,
    age: number,
    sayHello() :void
}

function personInfos(person: Person){
    console.log(`Firstname: ${person.firstname}, Lastname: ${person.lastname}, age: ${person.age}`)
    person.sayHello
}

const person1: Person = {
    firstname: "toto", 
    lastname: "Diaw", 
    age: 24,
    sayHello(){
        console.log("Hello from me")
    }
}

personInfos(person1)
//Example for class
interface Vehicle{
    start(): void
    stop(): void
}

class Car implements Vehicle{
    start(){
        console.log("The car is start")
    }
    stop(){
        console.log("The car is stop")
    }
}

const myCar = new Car()
myCar.start()
myCar.stop()

//! Extend interfaces from another interface

interface Movie{
    name: string,
    price: number,
    printInfosMovie(name:string, price:number, genre:string):string
}

interface OtherInfosOfMovie extends Movie{
    genre: string
    rating: string
}

const myMovie: OtherInfosOfMovie = {
    name: "Suits",
    price: 200,
    genre: "action, comedie",
    rating: "8.2",
    printInfosMovie(name:string, price:number, genre:string):string{
        return `Nane ${name}, Delay: ${price}, Genre: ${genre}`
    }
}

console.log(myMovie.printInfosMovie("Suits", 2, "Action, Comedie"))


//! Declaration merging
// Once an interface is declared, it cannot be directly modified. However, TypeScript allows that
// Declaration merging in TS refers to the ability to extend or augment an existing declaration
// This can be useful when you want to add new properties or methods to an existing interface without modifying the original declaration

interface Products{
    reference: string
    price: number
    soldingProduct(): boolean
}

interface Products{
    designation: string
    soldQuantite: number
    totalQuantite: number
}

const myProduct: Products = {
    reference: "Lait",
    designation: "Lt",
    price: 2000,
    soldQuantite: 10.5,
    totalQuantite: 40,
    soldingProduct(){
        return true
    }
}

console.log(`Reference: ${myProduct.reference}, Designation: ${myProduct.designation}, Price: ${myProduct.price}, Quantite vendue: ${myProduct.soldQuantite}, Quantite tolate: ${myProduct.totalQuantite}`)