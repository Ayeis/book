import Book from '../models/Books.js'

export const findAllBook = async (req, res) => {
    try{
        const books = await Book.find().sort({title: 1});
        res.json(books);
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Something went wrong retrieving the book'
        })
    }
}

export const createBook = async (req, res) => {

    if(!req.body.title){
        return res.status(400).send({message: 'Book needs a Title'});
    }

        try{
            const newBook = new Book({
                title: req.body.title,
                description: req.body.description,
                done : req.body.done ? req.body.done : false
            });
            const bookSaved = await newBook.save();
            res.json(bookSaved)
        } catch (error) {
            res.status(500).json({
                message: error.message || 'Something went wrong creating the book'
            })
        }
}

export const findOneBook = async (req, res) => {
    try{
        const { id } = req.params;

        const book = await Book.findById(id);
    
        if(!book) return res
                    .status(404)
                    .json({message: `Book with id ${id} does not exists`});
    
        res.json(book);
    }catch (error){
        res.status(500).json({
            message: error.message || 'Error retrieving the book'
        })
    }
}

export const deleteBook = async (req, res) => {

    try{
        const data = await Book.findById(req.params.id);

        await Book.findByIdAndDelete(req.params.id)
        if(data){
            res.json({
            message: `${data.title} <- Book was deleted successfully`
        });
        }else{
            res.json({
            message: `Error deleting the Book (wrong ID or didn't exists)`
            });
        }
    }catch (error){
        res.status(500).json({
            message: error.message || 'Error deleting the book'
        })
    }
    
}

export const findAllDoneBook = async (req, res) => { 
    const books = await Book.find({done: true}).sort({title: 1});
    res.json(books)
}

export const updateBook = async (req, res) => {
    try{
        
        const { id } = req.params;

        const updatedBook = await Book.findByIdAndUpdate(id, req.body)

        if(!updatedBook) {
            return res.status(404).json({
              error: 'Book not found'
            });
          }        
          res.json({message: "Book was updated succesfully"})
    } catch (error) {
        console.log(error);
        return res.status(500).json({
          error: 'Internal Server Error updating book'
        });
    }
}

