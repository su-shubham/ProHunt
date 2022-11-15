import React from "react";
import axios from "axios";
import { useParams } from 'react-router-dom'


const AllPost = () =>{
  const [data, setData] = React.useState([])
  const {name} = useParams();
  React.useEffect(() => {
      axios.get(`http://localhost:8000/topics/${name}`)
        .then(res => setData(res.data))
    },[]);
    // return(
    //   data
    //   .filter((list)=>list.name===name)
    //   .map((list)=>(
    //     <div className="full-card">
    //     <h2>Name:{list.name}</h2>
    //     </div>
    //   ))
    return data.map((p)=>{
    return(
      <>
      console.log(p.title)
      console.log(p.content)
        <h2 className="text-5xl font-[600] tracking-tight">Topic</h2>
     <h2> {p.title}</h2>
     <h1>{p.content}</h1>
     </>
      )})
// )
}

export default AllPost;