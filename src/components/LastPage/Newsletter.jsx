import React from "react";
// import Cards from "./src/assets/newsletter.png";
import Cards from "./newsletter.png";

export const Newsletter = () => {

  const [email , setEmail] = React.useState(true)
  const [disabled, setDisabled] = React.useState(false)

  function ChangeButton() {
    setEmail(prevState => !prevState)
  }
  
  function handleClick() {
    setDisabled(!disabled)
  }


  const scrset = `${Cards} 1024w, ${Cards} 640w, ${Cards} 320w`;
  return (
    <div className="mb-6 flex items-center justify-center min-h-screen">
      <div className="">
        <div>
          <div className="p-5">
            <div className="login-form bg-white w-[650px] mx-[65px] my-auto flex flex-col rounded-md shadow-2xl">
              <div className="svg">
                <img srcset={scrset} sizes="1000%" alt="Monitoring" />
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
                      autocomplete="nope"
                      disabled={disabled}
                      className="text-base block w-full px-3 py-[1px] border-0 border-b border-[#747474]  focus:ring-0"
                    />
                  </div>
                </div>
                <div className="action w-full flex justify-center items-center mb-8 ">
                  <button  onClick={ChangeButton} className=" border-0 px-5 py-4 uppercase bg-[#f43f5e] text-[#fff] font-extrabold tracking-wide hover:shadow-xl rounded-md outline-none ">
                    <h1>
                      {email ? "Subscribe" : "Subscribed"}
                      
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
