import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import FriendDetails from './components/FriendDetails/FriendDetails';

const App = () => {
  return (
   <Router>
     <Switch>
       <Route path="/home">
         <Home/>
       </Route>
       <Route path="/friend/:friendId">
         <FriendDetails/>
       </Route>
       <Route exact path="/">
         <Home/>
       </Route>
       <Route exact path="*">
        <NoMatch/>
       </Route>
     </Switch>
   </Router>
  );
};

export default App;