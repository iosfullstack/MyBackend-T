const fs = require(`fs`)

// fs.readFile(`./linux/text1.txt`, `utf-8`, (err, data) => {
//     if (err) {
//         console.log(err)
//         // return;
//     }
//     console.log(data)
// })

try {
    const data = fs.readFileSync(`./linux/text.txt`, `utf-8`)
    console.log(data)
} catch (error) {
    console.log(error)
}