import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
    const isAuthenticated = window.localStorage.getItem('login');
    return (

        <Route {...rest} render={(props) => (
            isAuthenticated
                ? <Component {...props} />
                : <Redirect to='/' />
        )} />

    )
}

export default PrivateRoute