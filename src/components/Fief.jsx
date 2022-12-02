import { FiefAuthProvider } from '@fief/fief/react';
import { Routes, Route } from 'react-router-dom';
import React from "react"
import Callback from './Callback';
import Header from './Header';
import RequireAuth from './RequireAuth';
import Newsletter from './Newsletter';
import Topics from './Topics';
import LandPage from './LandPage';
import Todaylist from './Todaylist'
import {  Popover  } from '@typeform/embed-react'


function Fief() {
  return (
    <>
     <FiefAuthProvider 
      baseURL={import.meta.env.VITE_BASE_URI}
      clientId={import.meta.env.VITE_FIEF_CLIENT_ID}
    >
      <div className="Fief">
        <Header />  {}
        <Routes>  {}
          <Route path="/" element={<LandPage />} /> {}
          <Route path="/topics" element={<Topics />} />{}
          <Route path="/callback" element={<Callback />} /> {}
        </Routes>
      </div>
    </FiefAuthProvider> 
      <div className="example_popover">
     <Popover 
     id={import.meta.env.VITE_TYPEFORM}
     chat={true}
     opacity={90}
     autoClose={5}
     lazy={true}
     buttonColor={"#F43F5E"}
     customIcon={"🗨️"}
     >
       <button className="btn">Open</button>
     </Popover>
   </div>
   </>
  );
}

export default Fief;
