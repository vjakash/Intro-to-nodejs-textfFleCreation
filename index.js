const fs = require('fs');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

let server = app.listen(3000, function() {
    // let host = server.address().address;
    // let port = server.address().port;
    // console.log("Text File app listening at http://%s:%s", host, port);
    console.log("Text File app listening at 3000");
});

app.post('/create', (req, res) => {
    // let today = new Date();
    // let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    // let time = today.getHours() + "-" + today.getMinutes() + "-" + today.getSeconds();
    // let filename = `${date}(${time})`;
    // console.log(req.body)
    fs.writeFile(`${req.body.name}.txt`, `Created at - ${req.body.content}`, 'utf8', (err) => {
        if (err) throw err;
        res.send("filecreated");
    })
});
app.get('/textfile', (req, res) => {
    let txtFiles = [];
    fs.readdir('D:/Vijay Akash/Node js/Intro to node and express', (err, data) => {
        if (err) throw err;
        data.forEach((item) => {
            if (String(path.extname(item)) == '.txt') {
                txtFiles.push(item);
            }
        })
        res.json(txtFiles);
    })
});