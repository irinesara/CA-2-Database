const express = require("express");
const connectDB = require("./Database/db")
const app = express();
const routes = require("./Routes/movierouter")

require("dotenv").config({
    path:"./Config/.env"
});

const port = process.env.PORT||8080;
const url = process.env.db_url;

app.use(express.json())
app.use("/api",routes)

app.listen(port,async()=>{
    try {
        await connectDB(url);
        console.log(`Server is running on port ${port}`)
    } catch (error) {
        console.log(error)
        console.log("Error connecting")
    }
   
});

app.get('/',async(req,res)=>{
    res.send("Hello world")
});