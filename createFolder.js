const fs = require(`fs`)

try {
    if (!fs.existsSync(`ios`))
    fs.mkdirSync(`ios`)
    console.log(`Folder Created Successfully`)
} catch (error) {
    console.log(error)
}