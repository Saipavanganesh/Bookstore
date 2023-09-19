import React from 'react'
import NavBar from '../navbar/NavBar'
import Cards from '../cards/Cards'
import ForgotPassword from '../forgotPassword/ForgotPassword'
import BookDisplay from '../booksDisplay/BookDisplay'
import Cart from '../cart/Cart'

function Dashboard() {
  return (
    <div>
         <NavBar/>
        {/* <Cards title={"Don't Make Me Think"}/>   */}
        {/* <ForgotPassword/> */}
        {/* <BookDisplay/> */}
        <Cart/>
    </div>
  )
}

export default Dashboard