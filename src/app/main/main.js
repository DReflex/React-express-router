import React from 'react';
import Home from '../home/home';
import About from '../about/about';
import List from '../list/list'


var Switch = require('react-router-dom').Switch;
var Route = require('react-router-dom').Route;

 class Main extends React.Component{
   render(){
     return(
       <main>
         <Switch>
           <Route exact path='/' component={Home}/>
           <Route path="/about" component={About}/>
            <Route path="/list" component={List}/>
         </Switch>

        </main>


     );
   }
 }
export default Main
