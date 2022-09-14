import React from 'react'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import '../App.css';

import { Bars } from  'react-loader-spinner'
function Loading() {
    return (
        <div style={{textAlign: 'center'}}>
            <header className="App-header">
       
            <Bars
  height="80"
  width="80"
  color="#fff"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
       <h1>Hybr1d Engine is fetching data...</h1>
      
     </header>
        </div>
    )
}

export default Loading