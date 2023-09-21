import React, { useState } from 'react'
import NavBar from '../navbar/NavBar'
import Cards from '../cards/Cards'
import BookDisplay from '../booksDisplay/BookDisplay'
import Cart from '../cart/Cart'
import CustomerDetails from '../customerDetails/CustomerDetails'
import OrderSummary from '../orderSummary/OrderSummary'
import OrderPlaced from '../orderPlaced/OrderPlaced'

function Dashboard() {
    const [page, setPage] = useState(1)
  return (
    <div>
        <NavBar/>
        
        <Cards title={"Don't Make Me Think"}/>  
        
    </div>
  )
}

export default Dashboard