const express = require("express");
const app = express();

const dotenv = require("dotenv");
const mongoose = require("mongoose");

//models
const TodoTask = require("./models/TodoTask"); 
dotenv.config(); 

 app.use("/static",express.static("public"));
 app.use(express.urlencoded({extended:true}));

//connection to db
mongoose.set("useFindAndModify", false);
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
   
console.log("Connected to db!");
app.listen(3000, () => console.log("Server Up and running"));
});

app.set("view engine", "ejs");
console.log("Connected to db2222!");
app.get('/',(req, res) => {
    console.log("Connected to db3333!");
    res.render('todo.ejs');
    });
    console.log("Connected to db444442!");
   //POST METHOD
app.post('/',async (req, res) => {
    console.log("Connected to db5555!");
    console.log('inside psot'+ req.body)
    console.log('inside psot'+ req.body.content)
    const todoTask = new TodoTask({
    content: req.body.content
    });
    try {
        console.log('inside psotvvvv'+ req.body.content)
        let saveUser = await todoTask.save();
        console.log(saveUser); //when success it print.
        console.log('after save');
    res.redirect("/");
    } catch (err) {
        console.log('err'+ err)
    res.redirect("/");
    }
    });