import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import ExhaustedComponent from './Component/ExhaustedComponent';
import CompletedComponent from './Component/CompletedComponent';
import TaskComponent from './TaskComponent';
import ActiveComponent from './Component/ActiveComponent'


function AppRouter() {
    return (
        <BrowserRouter>
        <div>
        <Switch>
            <Route path="/" exact='true'><TaskComponent /></Route>
            <Route path= '/Active'><ActiveComponent /></Route>
            <Route path= '/Exhausted'><ExhaustedComponent /></Route>
            <Route path= '/Completed'><CompletedComponent /></Route>
        </Switch>  
        </div>
        </BrowserRouter>
    )
}

export default AppRouter
