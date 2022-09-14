
// import Search from './components/Search'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Home from './components/Home'
// import PostDetail from './components/PostDetail'
import PostDetail from './components/post/index'
import SearchBar from './components/searchBar/index'
import { useState } from 'react';
import { useCallback } from 'react';
function App() {
  const [data, setdata] = useState({
    loader:false,
    error:false,
    message:"",
    typing:false,

  })
  const isLoader=useCallback((result)=> setdata({...data,loader:result}),[data]);
  const isError=useCallback((result,message)=> setdata({...data,error:result,message:message}),[data]);
  const isTyping=useCallback((result)=> setdata({...data,typing:result}),[data]);
  return (
    <div className="App">
       {/* <Search/> */}

       <Router>
     
      <SearchBar Loader={isLoader} err={isError} typing={isTyping} />
        

        <Routes>
          <Route path="/:id" element={<PostDetail load={data.loader} typing={data.typing} />} />
            
            
          <Route path="/" element={<Home  load={data.loader} />} />
          

        </Routes>
   </Router>
      
      
    </div>
  );
}

export default App;
