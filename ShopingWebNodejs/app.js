const express = require("express");
const app = express();
const path = require("path");
app.get("/", express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({extended:true}));

app.get("/home",(req, res) => {
    res.render()
})
app.listen(3000, () => {
    console.log("server running at 3000 port");
})