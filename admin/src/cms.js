import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './router'

function cms(props) {
    return (
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    )
}

export default cms

