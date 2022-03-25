let p = require("path");
let fs = require("fs");
let request = require("request");

let filePath = p.join(__dirname, "../data.json");

request("http://reddit.com/r/popular/.json", (err, res, body) => {
    if (err) console.log(err);

    JSON.parse(body).data.children.forEach(item => {
        console.log(item.data.title)
        // fs.appendFileSync(filePath, item.data.title + "\n");
    })
    // fs.writeFile(filePath, res.body, err => {
    //     if (err) console.log(err);
    // });
})

// fs.readFile(filePath, {
//     encoding: "UTF-8"
// }, (err, data) => {
//     let dataParsed = JSON.parse(data);

//     console.log(dataParsed.name);
//     console.log(dataParsed.shirtColor);
// })