import { useState } from "react"

const Bookshelf = () => {
    const [books, setBooks] = useState([])
    const [newBook, setNewBook] = useState([
        { title: '', author: '' }
    ])
    const handleChange = (event) => {
        setNewBook({ ...newBook, [event.target.name]: event.target.value })
    }
    const handleSubmit = (event) => {
        // prevent default event behavior
        event.preventDefault()
        setBooks([...books, newBook])
        setNewBook({
          title: '', 
          author: ''
        })
    }
    return (
        <>
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title">Title:</label>
                        <input
                            id="title" 
                            name="title" 
                            value={newBook.title}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="author">Author:</label>
                        <input
                            id="author" 
                            name="author" 
                            value={newBook.author}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <button type="submit">Submit Book</button>
                    </div>
                </form>
            </div>
        </div>
        <div>
            <ul>
                {books.map((book, index) => (
                    <li key={index} className="bookCard">
                        <h3>Title: {book.title}</h3>
                        <h3>Author: {book.author}</h3>
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}

export default Bookshelf