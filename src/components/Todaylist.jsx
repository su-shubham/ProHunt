import React from 'react';
import { useEffect,useState } from 'react';
import {useFiefTokenInfo} from '@fief/fief/react';
import axios from "axios";
import Count from "./Count";

export const Todaylist = () => {
  const [data, setData] = React.useState([])
  const tokenInfo = useFiefTokenInfo();
  const [user, setUser] = useState();

  // const tokenInfo = useFiefTokenInfo(); 
  // axios.post('http://localhost:8000/vote', {
  //   Name: 'Fred',
  //   Age: '23'
  // })
  // .then(function (response) {
  //   console.log(response);
  // })
  React.useEffect(() => {
    axios.get('http://localhost:8000/posts/')
      .then(res => setData(res.data))
  },[]);
  //   useEffect(() => {
  //     const fetchNames = async () => {
  //     try{
  //     const res = await Promise.all([
  //       fetch('http://localhost:8000/vote'),
  //       fetch('http://localhost:8000/api/posts')
  //     ]);
  //     const data = await Promise.all(res.map(r => r.json()))
  //     console.log(data.flat());
  //   }
  //   catch {
  //     throw Error("Promise failed");
  //   }}
  // });
  // const fetchPosts = async () => {
  //   const accessToken = tokenInfo.access_token;
  //   const response = await fetch('http://localhost:8000/api/posts',
  //   {
  //     headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //     }
  // })
  //     const postsData = await response.json();
  //     setData(postsData);
  //   }
  //   fetchPosts();
  // },  [tokenInfo]);

//   useEffect(() => {
//     const fetchNames = async () => {
//     try{
//     const res = await Promise.all([
//       fetch('http://localhost:8000/vote'),
//       fetch('http://localhost:8000/api/posts')
//     ]);
//     const data = await Promise.all(res.map(r => r.json()))
//     console.log(data.flat());
//   }
//   catch {
//     throw Error("Promise failed");
//   }}
// });
// useEffect(() => {
//     const fetchPosts = async () => {
//   const accessToken = tokenInfo.access_token;
//       const response = await fetch('http://localhost:8000/api/posts',
//       {
//         headers: {
//             Authorization: `Bearer ${accessToken}`,
//         }
//     })
//       const postsData = await response.json();
//       setData(postsData);
//     }
//     fetchPosts();
//   },  [tokenInfo]);
  return data.map((p, index) => {
  return (
    <div>
      <div className="flex bg-white rounded shadow overflow-hidden sm:flex items-center mb-6">
        <div className="flex w-full">
          <ul className="w-full">
            <li>
              <div className="flex pl-5 pr-24 pt-5 pb-5 relative border-b border-gray-200">
                <div>
                  <img className="w-20 h-20"  src={p.url} alt="product hunt" />
                </div>
                <div className="ml-2">
                  <h3 className="text-base font-bold text-gray-900">
                    {p.id}
                  </h3>
                  <p className="text-f13 font-normal">
                      {p.description}
                  </p>
                  <div className="color-lighter-grey text-f8 underline">
                  <Link to={`/topics/${p.topic.name}`}>{p.topic.name}</Link>
                  </div>
                </div>
                <Count />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )});
};

export default Todaylist;
