import React from 'react';
import {BrowserRouter} from "react-router-dom";

import axios from 'axios';

import Routes from 'routes';
import UserProvider from './context/userContext'

axios.defaults.withCredentials = true;

const App = () => {
    return (
        <BrowserRouter>
<UserProvider> 
<Routes/>
</UserProvider>
</BrowserRouter>
    );
}

export default App;