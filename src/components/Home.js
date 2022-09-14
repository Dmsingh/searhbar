import React from 'react'
import logo from './logo.svg';
import '../App.css';
import Loading from'./Loder'
function Home({load}) {
    return (
        <div style={{textAlign: 'center'}}>

        {
            load?<Loading/>:
            <header className="App-header">
       
       <img src={logo} className="App-logo" alt="logo" />
       <h1>Hybr1d Search Engine</h1>
      
     </header>
        }
        </div>
       
    )
}

export default Home
