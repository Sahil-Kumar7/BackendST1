import mongoose from "mongoose";

const Book = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: {type: String, required: true},
    publicationYear: {type:Number, required:true},
    isbn: {type:Number, required:true}
})

export default mongoose.model("SampleBook",Book);