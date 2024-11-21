
const express = require("express");
const axios = require("axios");

const app = express();
const Api = "https://jsonplaceholder.typicode.com/users";

app.get("/users", async (req, res) => {
    try {
        const response = await axios.get(Api)
        res.json(response.data)
    } catch (e) {
        console.log("error", e)
        res.status(500)
    }
})

app.listen(3000, () =>{
    console.log("Server started successfully")
})