import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './router'
import { Provider } from 'react-redux'
import store from './redux-setup/store'

function App(props) {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </Provider>
    )
}

export default App

