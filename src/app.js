import 'react-dates/initialize'
import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import AppRouter, { history } from './routers/AppRouter'
import configureStore from './store/configureStore'
import { startSetExpenses } from './actions/expenses'
import { login, logout } from './actions/auth'
// import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import { firebase } from './firebase/firebase'

const store = configureStore()

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)
let hasRender = false
const renderApp = () => {
    if (!hasRender) {
        ReactDOM.render(jsx, document.getElementById('app'))
        hasRender = true
    }
}

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'))

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid))
        store.dispatch(startSetExpenses()).then(() => {
            renderApp()
            if (history.location.pathname === '/') {
                history.push('/dashboard')
            }
        })
    } else {
        store.dispatch(logout())
        renderApp()
        history.push('/')
    }
})
