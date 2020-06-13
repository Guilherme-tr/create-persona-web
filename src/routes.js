import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import UserForm from './pages/userForm'

const Routes = () =>{
    return(
        <BrowserRouter>
            <switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/user" component={UserForm}></Route>
            </switch>
        </BrowserRouter>
    )
}

export default Routes