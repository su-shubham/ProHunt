import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// want to add col span differ like todayList
const Topics = () => {
  const [data, setData] = React.useState([]);
  const [follow, setFollow] = React.useState(true);
  
  function handleButton() {
    setFollow (prevState => !prevState)
  }
  
  React.useEffect(() => {
    axios
      .get(
        import.meta.env.VITE_FETCH+"topics/"
        )
      .then((res) => setData(res.data));
  }, []);
  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-5">
        <div className="pt-6 grid grid-cols-1 lg:grid-cols-6 lg:gap-6 ">
          <div className="col-span-4 sm:col-span-4 lg:col-span-4">
            <div className="upper ">
              <div className="flex">
                <h2 className=" text-5xl font-[600] tracking-tight">Topics</h2>
              </div>
              <p className="my-5 ml-3 text-lg font-300">
                Follow your favorite topics to be notified of the newest
                products in that space.
              </p>

              <form className="flex items-center mb-10">
                <label for="simple-search" class="sr-only">
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-300 focus:border-rose-300 block pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="p-2.5 ml-2 text-sm font-medium text-white bg-[#f43f5e] rounded-lg border border-[#f43f5e] hover:bg-rose-600 focus:ring-4 focus:outline-none focus:ring-rose-300 dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                  <span className="sr-only">Search</span>
                </button>
              </form>

              {data.map((p) => {
                return (
                  <div className="flex bg-white rounded shadow hover:shadow-xl overflow-hidden sm:flex items-center mb-6 ">
                    <div className="flex w-full ">
                      <ul className="w-full col-span-4">
                        <li>
                          <div className="flex pl-5 pr-24 pt-2 pb-5 relative border-b border-gray-200  z-1">
                            <div>
                              <img
                                className="w-20 h-20"
                                src={p.image_url}
                                alt="product hunt"
                              />
                            </div>
                            <div className="ml-2">
                              <h3 className="text-base font-bold text-gray-900">
                                <Link to={`/topics/${p.name}`}>{p.name}</Link>
                              </h3>
                              <p className="text-f13 font-normal">
                                {p.content}
                              </p>

                              <div className="visible md:invisible ">
                                <span className="inline-flex items-center mt-3 border border-grey-100 rounded pl-2 pb-1 pt-1 pr-2 " onClick={handleButton}>
                                  <button className="">
                                    {follow ? "Follow" : "Unfollow" }
                                  </button>
                                </span>
                              </div>
                            </div>
                            <div className="absolute top-25 right-40 border border-gray-200 rounded invisible md:visible">
                              <div className="flex-col align-center items-center px-5 py-1 inset-y-3 shadow-lg">
                                <button className="text-lg font-[700]" onClick={handleButton}>
                                  {follow ? "Follow" : "Unfollow" }
                                </button>
                              </div>
                            </div>
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
  );
};

export default Topics;
