import React, { useEffect, useState } from 'react'
import Cards from '../cards/Cards'
import "./Dashboard.css"
import { getBooks } from '../../services/BookServices'

function Dashboard() {
    const [books, setBooks] = useState([])
    const getAllBooks = async () => {
        let response = await getBooks();
        let booksArr = response.data.result;
        setBooks(booksArr);
    }
    useEffect(() => {
        getAllBooks()
    }, [])
    return (
        <div className='dash-outer-box'>
            {
                books.map((eachBook) => (
                    <Cards key={eachBook._id} eachBook={eachBook}
                     />
                ))
            }
        </div>
    )
}

export default Dashboard