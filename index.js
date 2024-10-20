const express = require("express")
const app = express();
// const data = DataModel;

//Setting up enviroment variable
require('dotenv').config()
const PORT = process.env.PORT;

// Setting Up Templating Engine
const path = require("path")
app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))
app.use(express.static(path.join(__dirname, 'src')))

//Routes
const staticRouter = require("./routes/staticRoute.js")
app.use("/", staticRouter)

app.listen(PORT, (err) => {
    if (err) console.error(err);
    else console.log(`Server started ${PORT}`);
})