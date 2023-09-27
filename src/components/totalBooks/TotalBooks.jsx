import React, { useState, createContext } from 'react'
import IncreaseIcon from '@mui/icons-material/AddCircleOutline';
import DecreaseIcon from '@mui/icons-material/RemoveCircleOutline';
import { IconButton } from '@mui/material';
import "./TotalBooks.css"
import NavBar from '../navbar/NavBar';

export const bCount = createContext();
function TotalBooks() {
    const [count, setCount] = useState(1)
    const IncreaseCount = () => {
        setCount(prevCount => prevCount + 1)
    }
    const DecreaseCount = () => {
        setCount(prevCount => (prevCount === 0) ? (prevCount = 0) : (prevCount - 1))
    }
    return (
        <div className='tb-total-div'>
            <IconButton onClick={DecreaseCount}><DecreaseIcon className='iconButton' /></IconButton>
            <div className="tb-books-count">{count}</div>
            <IconButton onClick={IncreaseCount}><IncreaseIcon className='iconButton' /></IconButton>
            <bCount.Provider value={count}>
                <NavBar />
            </bCount.Provider>
        </div>
    )
}

export default TotalBooks