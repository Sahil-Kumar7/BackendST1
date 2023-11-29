import Book from "../Model/bookModel.js";

export const addBook = async (req,res) => {
    try {
        const bookData = new Book(req.body);
        if(!bookData){
            return res.status(404).json({msg: "Enter all required fields"})
        }
        const data = await bookData.save();
        res.status(200).json({msg: "book added"});
    }
    catch(error) {
        res.status(500).json({error});
    }
}

export const bookList = async (req,res) => {
    try{
        const bookData = await Book.find();
        if(!bookData){
            return res.status(404).json({msg: "No book found"})
        }
        res.status(200).json(bookData);
    }
    catch(error) {
        res.status(500).json({error});
    }
}

export const oneBook = async (req,res) => {
    try{
        const id = req.params.id;
        const bookData = await Book.findById(id);
        if(!bookData){
            return res.status(404).json({msg: "Book doesn't exist"})
        }
        res.status(200).json(bookData);
    }
    catch(error) {
        res.status(500).json({error});
    }
}

export const updateBook = async (req,res) => {
    try {
        const id = req.params.id;
        const bookData = await Book.findById(id);
        if(!bookData){
            return res.status(404).json({msg: 'No book found'});
        }
        const data = await Book.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json("book updated successfully");
    }
    catch(error){
        res.status(500).json({msg: error});
    }
}

export const deleteBook = async (req,res) => {
    try {
        const id = req.params.id;
        const bookData = await Book.findById(id);
        if(!bookData){
            return res.status(404).json({msg: 'No book found with that ID'});
        }
        const data = await Book.findByIdAndDelete(id);
        res.status(200).json({msg: "book deleted successfully"})
    }
    catch(error){
        res.status(500).json({msg: error});
    }
}

