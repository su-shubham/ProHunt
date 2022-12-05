// import React from 'react';
// import Articles from './components/Articles';

// export const Todaylist = () => {

  
  
//   return (
//     <Articles />
//     )
//   };
  
//   export default Todaylist;
  // const tokenInfo = useFiefTokenInfo(); 
  // axios.post('http://localhost:8000/vote', {
  //   Name: 'Fred',
  //   Age: '23'
  // })
  // .then(function (response) {
  //   console.log(response);
  // })
  // React.useEffect(() => {
  //   axios.get('https://prohunt-fastapi.herokuapp.com/posts/')
  //     .then(res => setData(res.data))
  // },[]);
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
  // <img srcset="large.jpg  1024w,
  //     medium.jpg 640w,
  //     small.jpg  320w"
  //  sizes="(min-width: 36em) 33.3vw,
  //     100vw"
  //  src="small.jpg"
  //  alt="A rad wolf" />
  
  // return data.map((p, index) => {
    
//     const scrset = `${p.url} 1024w,
//                     ${p.url} 640w,
//                     ${p.url} 320w`
//   return (
  //     <motion.div
  //     variants={containerVariants}
  //     initial="hidden"
//     animate="visible"
//     >
      // <div className="flex bg-white sm:mx-0 md:mx-0 border-b shadow overflow-hidden sm:flex items-center mb-6">
      //   <div className="flex w-full">
      //     <ul className="w-full">
      //       <li>
      //         <div className="flex pl-5 pr-24 pt-5 pb-5 relative border-gray-200">
      //           <div>
      //             <figure className='block float-left w-20 p-1 m-0'>
      //               <img 
      //                 srcset={scrset} 
      //                 sizes="500px"
      //                 src={p.url} 
      //                 alt={p.id} />
      //             {/* <img className="w-20 h-20 "  src={p.url} alt="product hunt" /> */}
      //             </figure>
      //           </div>
      //           <div className="mr-2 ml-4 ">
      //             <h3 className="text-base font-bold text-gray-900">
      //               {p.id}
      //             </h3>
      //             <p className="md:text-base sm:text-sm font-normal">
      //                 {p.description}
      //             </p>
      //             <div className="color-lighter-grey text-f8 underline">
      //             <Link to={`/topics/${p.topic.name}`}>{p.topic.name}</Link>
      //             </div>
      //           </div>
      //           <Count />
      //         </div>
      //       </li>
      //     </ul>
      //   </div>
      // </div>
//     </motion.div>
//   )});