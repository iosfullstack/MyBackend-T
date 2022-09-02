const fs = require(`fs`)

fs.rename(`./ios`,`./linux`, error => {
    if (error) {
        console.log(error)
    }
    console.log(`Done`)
})

// try {
//     const data = fs.renameSync(`./linux`, `./ios`)
//     console.log(data)
//     console.log(`Done`)
// } catch (error) {
//     console.log(error)
// }