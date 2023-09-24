import React from 'react'
import Cards from '../cards/Cards'
import "./Dashboard.css"
import { getBooks } from '../../services/BookServices'

function Dashboard() {
    let response = getBooks();
    console.log(response);
    return (
        <div className='dash-outer-box'>
            {/* <Cards title={"Don't Make Me Think"} /> */}
            <Cards  />
        </div>
    )
}

export default Dashboard