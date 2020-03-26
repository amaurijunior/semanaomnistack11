
import React from 'react';
import {BrowserRouter,Route,Switch } from 'react-router-dom';
import Logon from './pages/logon';
import Register from './pages/register';
import Profiles from './pages/profiles';
import Newincident from './pages/newincident';

export default function Routes(){
return(
<BrowserRouter>

    <Switch>
        <Route path='/' exact component={Logon}/>
        <Route path='/cadastro' component={Register}/>
        <Route path='/profiles' component={Profiles}/>
        <Route path='/incident/new' component={Newincident}/>
    </Switch>

</BrowserRouter>

)
}