function test () {
    console.log(a)
}

let script = test.toString().replace('.log(a)', ".log('HELLO WORLD')")

console.log()

eval(`console.log('HELLO WORLD!!! ')`)