const Book = require("../models/Book");

const addBook= async(req,res)=>{
    const {BookName,Author,Desc,Price,PublishedAt,Image} =req.body
    try{
        const savedBook = await Book.create({BookName,Author,Desc,Price,PublishedAt,Image});
        res.status(200).json(savedBook).json({message:"book saved"});
    }catch(err){
        res.status(500).json(err).json({message:"book not saved"});
    }
};
const updateBook = async(req,res)=>{
    try{
        const book = await Book.findById(req.params.id);
            await book.updateOne({$set: req.body});
            res.status(200).json("post updated");
        }
    catch(err){
            res.status(500).json(err).json({message:"post not updated"});
        };
}
const deleteBook = async(req,res)=>{
    try{
        const book = await Book.findById(req.params.id);
            await book.deleteOne(book)
            res.json(200).json("post deleted")
    }catch(err){
        res.json(500).json(err).json({message:"post not deleted"})
    }
}
const findBook = async(req,res)=>{
    let book
    try{
       book = await Book.findById(req.params.id);
    }catch(err){
        res.json(500).json(err)
    }
    return res.status(200).json({book})
}
const findAllBook = async(req,res)=>{
    let book;
    try{
     book = await Book.find();
           
    }catch(err){
        res.json(500).json(err)
    }
    return res.status(200).json({book})
}
module.exports = {addBook , updateBook , deleteBook , findBook, findAllBook };