import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Count from "../FirstPage/Count";


const AllPost = () => {
  const [data, setData] = React.useState([]);
  const { name } = useParams();
  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch(
        `https://prohunt-fastapi.herokuapp.com/topics/${name}`
      );
      const data = await res.json();
      setData(data);
    }, 1000);
  });
  return (
    <>
      <div className="pt-20">
        <div className="container mx-auto px-5">
          <div className="pt-6 grid grid-cols-1 lg:grid-cols-6 lg:gap-6 ">
            <div className="col-span-4 sm:col-span-4 lg:col-span-4">
              <div className="upper ">
                <div className="flex">
                  <h2 className=" text-5xl font-[600] tracking-tight">
                    Productivity
                  </h2>
                </div>
                <p className="my-5 ml-3 text-lg font-300">
                  Follow your favorite topics to be notified of the newest
                  products in that space.
                </p>

                {data.map((p) => {
                  return (
                    <div
                      key={p.id}
                      className="flex bg-white rounded overflow-hidden sm:flex items-center mb-6 "
                    >
                      <div className="flex w-full ">
                        <ul className="w-full col-span-4">
                          <li>
                            <div className="flex pl-5 pr-24 pt-2 pb-5 relative   z-1">
                              <div>
                                <figure className="block float-left w-20 p-1 m-0">
                                  <img
                                    srcSet={`${p.url} 1024w, ${p.url} 640w, ${p.url} 320w`}
                                    src={p.url}
                                    alt={p.id}
                                  />
                                </figure>
                              </div>
                              <div className="ml-2">
                                <h3 className="text-base font-bold text-gray-900">
                                  {p.title}
                                </h3>
                                <p className="text-f13 font-normal">
                                  {p.description}
                                </p>
                              </div>
                              <Count />
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllPost;
