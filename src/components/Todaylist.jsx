import React from 'react';
import { useEffect,useState } from 'react';
import {useFiefTokenInfo} from '@fief/fief/react'
import axios from "axios";
import { Link } from 'react-router-dom';


export const Todaylist = () => {
  const [data, setData] = React.useState([])
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
                <div className="absolute top-25 right-40 border border-gray-200 rounded">
                  <div className="flex-col align-center items-center pl-2 pr-2 pt-4 pb-4 inset-y-3">
                    <svg
                      className="m-auto"
                      width="12"
                      viewBox="0 0 26 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.134 0.499999C12.5189 -0.166668 13.4811 -0.166667 13.866 0.5L25.1244 20C25.5093 20.6667 25.0281 21.5 24.2583 21.5H1.74167C0.971868 21.5 0.490744 20.6667 0.875644 20L12.134 0.499999Z"
                        fill="black"
                      />
                    </svg>
                    <span className="text-f13 font-semibold mt-1 block">
                      73
                    </span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )});
};

export default Todaylist;
