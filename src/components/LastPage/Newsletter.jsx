import React from "react";
import Cards from "./newsletterReal.png";

export const Newsletter = () => {

  const[email,setEmail] = React.useState('')
  const [button, setButton] = React.useState(true)

  function changeButton() {
    setButton(prevState => !prevState)
  }


  const handleFormSubmit =(e)=>{
    e.preventDefault();
    console.log(email)
    const data=[email]
    fetch('http://localhost:8000/email/',{
    method:'POST',
    headers:{
      "Content-Type": "application/json"
    },
    body:JSON.stringify(data)
    }).then(res=>res.json())
      .then(res=>{
        console.log(res['message'])
        // alert('Form Submit successfully')
      })
  }


  const scrset = `${Cards} 1024w, ${Cards} 640w, ${Cards} 320w`;

  return (
    <div className="mb-6 flex items-center overflow-y-hidden justify-center min-h-[900px]">
      <div className="">
        <div>
          <div className="p-5">
            <div className="login-form bg-white w-[650px] mx-[65px] my-auto flex flex-col rounded-md">
              <div className="svg">
                <img srcset={scrset} sizes="10%" alt="Monitoring" />
              </div>
              <form className="">
                <h1 className="pt-9 py-9 pb-0 font-semibold text-xl flex items-center justify-center mb-5">
                  Subscribe to get the latest news & updates.
                </h1>
                <div className="content p-9 text-center outline-none relative">
                  <label className="top-0 absolute  left-10 px-3 py-0 text-2xl text-black">
                    Email
                  </label>
                  <div className="input-field px-3 py-1 ">
                  <input
                  type="email"
                  name="email"
                  className="text-f13 pl-4 w-full rounded  focus:bg-transparent border border-gray-300 focus:border-grey-500 outline-none placeholder-gray-500 py-1 px- leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="Your email"
                  // value={email}
                  onChange={(event)=>
                    setEmail(event.target.value)
                  }
                />
                  </div>
                </div>
                <div className="action w-full flex justify-center items-center mb-8 ">
                  <button onClick = {changeButton} className=" border-0 px-5 py-4 uppercase bg-[#f43f5e] text-[#fff] font-extrabold tracking-wide hover:shadow-xl rounded-md outline-none ">
                    <h1>
                      {button ? "Subscribe" : "Subscribed"}
                      </h1>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
