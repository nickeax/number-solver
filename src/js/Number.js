export class Number {
    // VARS
    used
    value

    constructor (val) {
        this.value = val
    }

    // METHODS
    display(parent, deubug=0) {
        // Maybe have a 'debug' flag that has levels for the amount extra data to show?
    }

    // All of the operation methods should return information data objects
    subtractFrom (n) {
        return {
            answer: this.value - n,
            positive: this.value - n >= 0 ? true : false
        }
    }

}