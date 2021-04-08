const express = require("express");
const app = express();
const path = require("path");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.urlencoded({extended:true}));
app.use("/", express.static(path.join(__dirname, "/public")));

const todoList = ["I am going to PVR",  "Gym", "Learn Web"];

app.get("/todo",(req,res) => {
    if(req.xhr) {
        console.log("Ajax Request (CSR)")
        res.send(todoList);
    } else {
        console.log("SSR");
        res.render("todos", {todoList});
    }
});

// post request

app.post("/todo", (req, res) => {
    if(req.xhr) {
        console.log("Ajax Post Request")
    }
   
    const todo = req.body.todo;
    todoList.push(todo);
    res.redirect("/todo");
});

app.listen(3000, () => {
    console.log("Server running at 3000");
})