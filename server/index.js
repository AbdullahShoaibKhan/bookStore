const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/route.js");
const app = express();
const cors = require ("cors");

app.use(express.json());
app.use(cors());
app.use("/books", router);

mongoose.connect('mongodb+srv://abdullah:236bscs@cluster0.mbzm0.mongodb.net/nodeTut?retryWrites=true&w=majority',
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>console.log('connected'))
        .catch((err)=>console.log(err));

// app.use("/", router);
app.listen(3000,()=>{
    console.log("live on port");
});