const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
    {
        BookName:{
            type: String,
            required: true,
        },
        Author:{
            type:String,
            required: true,
        },
        Genre:{
            type:String,
            required: false,
        },
        Desc:{
            type:String,
            required: true,
            max:500,
            min:100,
        },
        Price:{
            type: Number,
            required: true,   
        },
        PublishedAt:{
            type: Date,
        },
        
    },
    {timestamp: true}
);

module.exports= mongoose.model("Book", BookSchema);