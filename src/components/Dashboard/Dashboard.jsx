import React, { useEffect, useState } from 'react'
import Cards from '../cards/Cards'
import "./Dashboard.css"
import { getBooks } from '../../services/BookServices'
import BookDisplay from '../booksDisplay/BookDisplay'

function Dashboard() {
    const [books, setBooks] = useState([])
    const [bookDisp, setBookDisp] = useState()
    const [homePage, setHomePage] = useState(true)

    const getAllBooks = async () => {
        let response = await getBooks();
        let booksArr = response.data.result;
        setBooks(booksArr);
    }
    useEffect(() => {
        getAllBooks()
    }, [])

    function showbook(bDet) {
        setBookDisp(bDet)
        // console.log(bookDisp)
    }
    function hPage() {
        setHomePage(true)
        setBookDisp(null)
    }
    const dashBoardBooks = () => {
        return (books.map((eachBook) => (
            <Cards key={eachBook._id} eachBook={eachBook} showBook={showbook}
            />
        )))
    }
    return (
        <div className='dash-outer-box'>
            {
                homePage ?
                    (
                        bookDisp ? <BookDisplay bookDisp={bookDisp} hPage = {hPage}/> : dashBoardBooks()
                    ) : ""
            }

        </div>
    )
}

export default Dashboard