const fs = require("fs")

const file = fs.readFileSync("out/my-app-darwin-x64/my-app.app")
let base64 = new Buffer(file).toString('base64');
console.log(base64);