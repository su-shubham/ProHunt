import React from "react";
import { useEffect, useState } from "react";
import { useFiefTokenInfo } from "@fief/fief/react";
// import axios from "axios";
import Count from "./Count";

export const Todaylist = (props) => {
  const [data, setData] = React.useState([])
  const tokenInfo = useFiefTokenInfo();
  const [user, setUser] = useState();
  React.useEffect(() => {
    axios.get('http://localhost:8000/api/posts')
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
                  <div>
                    <span className="inline-flex items-center mt-3 border border-grey-100 rounded pl-2 pb-1 pt-1 pr-2">
                      <svg
                        width="12"
                        height="11"
                        viewBox="0 0 12 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2.01156 7.83208C1.20956 7.05208 0.726562 6.04508 0.726562 4.94608C0.726562 2.46608 3.18956 0.455078 6.22656 0.455078C9.26456 0.455078 11.7266 2.46508 11.7266 4.94608C11.7266 7.42608 9.26456 9.43808 6.22656 9.43808C5.50211 9.43979 4.78237 9.32152 4.09656 9.08808C3.02656 9.70808 0.930562 10.5281 0.930562 10.5281C0.930562 10.5281 1.63056 8.84308 2.01156 7.83208V7.83208Z"
                          fill="#6F6F6F"
                        />
                      </svg>
                      <p className="text-f11 uppercase ml-1 font-medium">
                        {' '}
                        {p.id}
                      </p>
                    </span>
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
