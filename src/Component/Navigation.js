import React from 'react';
import SingleSearch from '../Pages/SingleSearch';
import MultiSearch from '../Pages/MultiSearch';
import BackEnd from '../Pages/BackEnd';
import Home from "../Pages/Home";
import {BrowserRouter as Router, NavLink, Route, Routes} from "react-router-dom";

const Navigation = () => {
  return (
    <Router>
        <div >
    <NavLink to="/Home">Home</NavLink><br/>
   <NavLink to="/Single">SingleSearch</NavLink><br/>
   <NavLink to="/Multi">MultiSearch</NavLink><br/>
   <NavLink to="/Backend">BackendSearch</NavLink><br />

   <Routes>
<Route path="/Home" element={<Home />} />
<Route path="/Single" element={<SingleSearch />} />
<Route path="/Multi" element={<MultiSearch />} />
<Route path="/Backend" element={<BackEnd />} />
   </Routes>
        </div>
    </Router>
  
  )
}

export default Navigation