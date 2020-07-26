import { Utilities } from './Utilities.js'
import { Number } from './Number.js'

let u = new Utilities()
let n = new Number(10)
for(let i = 0; i < 30; i++) {
    let op = u.randomRange(0, 100)
    console.log(`${n.value} + ${op} = ${n.add(op).result}`);
    console.log(`${op} - ${n.value} = ${n.subtractFrom(op).result}`);
    console.log(`${n.value} - ${op} = ${n.subtractNumber(op).result}`);
    console.log(`${n.value} X ${op} = ${n.multiply(op).result}`);
}