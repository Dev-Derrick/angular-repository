import { Animal } from './classes-objects'

var i = 10
let j = 20
const k = 30
const pi = 3.14

const fnOld = function () {
    console.log('This is older represntation')
}

const fnNew = () => console.log('This is new representation')

const nm: string = 'android'
if (true) {
    const nm: string = 'ios'
}
console.log(nm)


const isOkay: boolean = true
const ver: number = 10
const make: string = 'abc'
const mixed: number | boolean = true
const fn: (() => void) = function () {
}

const obj: {} = { delay: 1 }
const anything: any = () => 10

