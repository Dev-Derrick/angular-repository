export class Animal {
    legs: number

    constructor() {
        this.legs = 4
    }

    run() {
        this.legs = this.legs + 1
        console.log('Running ' + this.legs)
    }
}

const an = new Animal()
an.run()