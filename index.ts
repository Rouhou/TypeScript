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