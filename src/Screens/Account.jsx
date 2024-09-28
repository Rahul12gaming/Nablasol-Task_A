import React, { useEffect, useRef, useState } from "react";
import { SlArrowLeft } from "react-icons/sl";
import ProfileCard from "../component/ProfileCard";
import BusinessCard from "../component/BusinessCard";

function Account() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const buttonRef = useRef(null);

  const [open,setOpen]=useState('profile')
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };
  useEffect(() => {
    // Set focus on the button when the component is mounted
    if (buttonRef.current) {
      buttonRef.current.focus();
    }
  }, []);
  return (
    <>
      <div className="container relative text-center p-10 ">
        <h1 className="text-2xl font-medium ">Create New Account</h1>
        <div className="w-11/12 bg-[#ffffff] shadow-xl md:w-10/12 m-auto">
          <div className="bg-white w-12/12 border border-slate-100 m-auto shadow-xl rounded-xl mt-10">
            <div className=" btn-container bg-slate-100 rounded-xl flex flex-col items-start md:flex-row h-[10vh] justify-between items-center ">
              <button ref={buttonRef} onClick={()=>setOpen('profile')} className="w-full flex items-center gap-2 justify-center md:w-4/12 h-full">
                <span>1</span>Your Profile
              </button>
              <button onClick={()=>setOpen('business')} className="w-full flex items-center gap-2 justify-center md:w-4/12 h-full"> <span>2</span>Business Information</button>
              <button disabled className="w-4/12 h-full">Additional Users</button>
            </div>
          </div>
       

           {
            open==='profile'? <ProfileCard handleChange={handleChange}/>:<BusinessCard handleChange={handleChange}/>
           }

        </div>

        <div className="w-10/12 m-auto mt-10 flex flex-col gap-10 md:flex-row justify-between items-center">
            <button className="flex gap-2 items-center text-blue-500 text-lg"><SlArrowLeft size={15}/>Back to Login</button>

            <div className="flex gap-2 items-center">
                <button onClick={()=>setOpen('profile')} className="border border-purple-700 text-purple-700 font-medium bg-transparent p-4 rounded-md">
                    Previous Step
                </button>

                <button onClick={()=>setOpen('business')} className="border border-slate-700 text-white font-medium bg-purple-500 p-4 rounded-md">
                    Next Step
                </button>
            </div>
        </div>
      </div>
    </>
  );
}

export default Account;
