const fs = require(`fs`)

const data = "I am an Operating System"

fs.writeFile(`./linux/text.txt`, data, err => {
    if (err) {
        console.log(err)
    }
    console.log(data)
})

// try {
//     fs.writeFileSync(`./linux/text1.txt`, data)
//     console.log(data)
// } catch (error) {
//     console.log(error)
// }