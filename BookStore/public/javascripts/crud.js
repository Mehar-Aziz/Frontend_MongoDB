const bookModel= require("../javascripts/crud");

const createBook = async (title,author,genre)=>{
    console.log("Cretae Book Member:");
    let book = new bookModel();
    book.Title = title;
    book.Author = author;
    book.Genre = genre;
    await book.save();
    return book;
};

const getAllBook = async  ()=>{
    let book = await bookModel.find();
    return book;
}

const DeleteBook  = async  (_id)=>{
    let book = await bookModel.findByIdAndDelete(_id);
    return book;
}

const updateBook = async (_id,title,author,genre)=>{
    console.log("Updated Book",_id);
    let book = await bookModel.findById(_id);
    book.Title = title;
    book.Author = author;
    book.Genre = genre;
    await book.save();
    return book;
};

module.exports.createBook =createBook;
module.exports.getAllBook =getAllBook;
module.exports.DeleteBook =DeleteBook;
module.exports.updateBook =updateBook;