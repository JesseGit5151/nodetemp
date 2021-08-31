const { readFile, writeFile, read } = require('fs') 
console.log('start')
readFile('./content/first.txt', 'utf-8', (err, result) => {
    if(err) {
        console.log(err)
        return
    }
    const first = result
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if(err) {
            console.log(err)
            return
        }
        const second = result
        writeFile(
            './content/resultasync.txt',
             `Here is the async file text combo: ${first}, ${second}`
             ,(err, result) => {
                 if(err) {
                     console.log(err)
                     return
                 }
                 console.log('done with this task')
             })
    })
})
console.log('starting next task')