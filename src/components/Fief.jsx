import { FiefAuthProvider } from "@fief/fief/react";
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Callback from "./AuthenticationPage/Callback";
import Header from "./FirstPage/Header";
import Newsletter from "./LastPage/Newsletter";
import Topics from "./SecondPage/Topics";
import LandPage from "./FirstPage/LandPage";
import AllPost from "./SecondPage/AllPost";
import { Popover } from "@typeform/embed-react";
import Foot from "./FirstPage/Foot";

function Fief() {

  const [state, setState] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch("")
      .then(res => res.json)
      .then(data => {
        setTimeout(() => {
          setLoading(false)
          setState(data)
        }, 4000)
      })
  }, [])

  return (
    <>
      <div className="flex flex-col h-screen">
        <div>
          <FiefAuthProvider
            baseURL={import.meta.env.VITE_BASE_URI}
            clientId={import.meta.env.VITE_FIEF_CLIENT_ID}
          >
            <div className="flex-grow">
              <Header />
              <Routes>{}
                <Route path="/" element={<LandPage />} /> {}
                <Route path="/topics" element={<Topics />} />{}
                <Route path="/topics/:name" element={<AllPost />} />
                {}
                <Route path="/callback" element={<Callback />} /> {}
                <Route path="/newsletter" element={<Newsletter />} /> {}
              </Routes>
            </div>
          </FiefAuthProvider>
          <footer>
            <Foot />
          </footer>
        </div>
        <div className="example_popover">
          <Popover
            id={import.meta.env.VITE_FIEF_CLIENT_ID}
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
      </div>
    </>
  );
}

export default Fief;
