import React from 'react';
import './App.css';  
import logo from './logo.png';
class Game extends React.Component {
    render(){  return (
        <div class="page">
            <div><img class="logo" src={logo} alt="logo.png"></img></div>
         
         <input id="searchme" class="search" title="Search" type="text" required></input>
         <div class="Bcontainer">
           <div class="button left" onclick="setGetParameter('q')">Stark Search</div>
            <div class="button right " onclick="IndexPage()">Index Page</div>
          </div> 
        </div> );
    
    }}
    export default Game;
    