const express = require("express")
const api = express();

api.get("/", (req, res) => {
    res.send("connect my router here")
})

api.listen(8080, () => {
    console.log("testing my Docker here")
})