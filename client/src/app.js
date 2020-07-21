import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './router'

function App(props) {
    return (
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    )
}

export default App

