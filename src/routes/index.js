import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Login from 'pages/Login';
import Jobs from 'pages/Jobs';
import Protected from './protected';
import { useContext } from 'react';
import { UserContext } from '../context/userContext';
const Routes = () => {
    const user=useContext(UserContext);
    console.log(user)
    return (
        <div className="routes-wrapper">
            <Switch>
                <Route path="/login" exact component={Login}/>
                <Protected path="/" exact component={Jobs} user={user} />
                {/* 404 page - DO NOT CHANGE LOCATION */}
                <Route path="*" status={404}/>
            </Switch>
        </div>
    );
};

export default Routes;