import React from 'react'
import { FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
function BusinessCard({handleChange}) {
  return (
    <>
            <div className='mt-4 md:p-10'>
            <div className="flex flex-col items-center justify-center">
              <span className="text-md text-slate-500 font-medium">STEP 2</span>
              <h1 className="text-2xl font-medium text-slate-600">
                BUSINESS INFORMATION
              </h1>
              <p className="text-slate-500 text-md leading-4 w-8/12 md:w-6/12 m-auto">
                Please enter information about your company.
              </p>
            </div>
            <span className="relative top-[2vh] text-blue-400">
              Genral Information
            </span>
            <div className="flex flex-col p-4 gap-10 md:grid grid-cols-2 gap-20 p-10 items-center">
              <div className="flex flex-col gap-10 md:gap-4">
                <div className="flex flex-col gap-2 ">
                  <label htmlFor="">First Name *</label>
                  <input
                    onChange={handleChange}
                    required
                    className="border border-slate-400 p-2 rounded-md focus:outline-blue-400"
                    type="text"
                    name="firstName"
                    placeholder="Tnput Your First Name"
                    id=""
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="">Email *</label>
                  <input
                    onChange={handleChange}
                    required
                    className="border border-slate-400 p-2 rounded-md focus:outline-blue-400"
                    type="text"
                    name="email"
                    placeholder="Tnput Your Email"
                    id=""
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="">Password *</label>
                  <input
                    onChange={handleChange}
                    required
                    className="border border-slate-400 p-2 rounded-md focus:outline-blue-400"
                    type="text"
                    name="password"
                    placeholder="Tnput Your Password"
                    id=""
                  />
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-10  md:gap-4 md:mt-0 ">
                <div className="flex flex-col gap-2">
                  <label htmlFor="">Last Name *</label>
                  <input
                    onChange={handleChange}
                    required
                    className="border border-slate-400 p-2 rounded-md focus:outline-blue-400"
                    type="text"
                    name="lastName"
                    placeholder="Tnput Your Last Name"
                    id=""
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="">Phone Number *</label>
                  <input
                    onChange={handleChange}
                    required
                    className="border border-slate-400 p-2 rounded-md focus:outline-blue-400"
                    type="text"
                    name="phoneNumber"
                    placeholder="Tnput Your Phone Number"
                    id=""
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="">Confirm Password *</label>
                  <input
                    onChange={handleChange}
                    required
                    className="border border-slate-400 p-2 rounded-md focus:outline-blue-400"
                    type="text"
                    name="confirmPassword"
                    placeholder="Confirm Your Password"
                    id=""
                  />
                </div>
              </div>
            </div>

            <div className="p-10 ">
              <div className="flex flex-col gap-4 items-start w-12/12">
                <span className="text-blue-400">Documents</span>
                <p className="text-lg text-slate-500">
                  Once the following documents are signed, you'll be ready to
                  get started.
                </p>

                <div className="flex justify-between border border-slate-600 w-[100%] p-4 rounded-md shadow-md">
                  <p>Electronically signethe aggrement(s).</p>
                  <FaCheck size={25} color="green" />
                </div>

                <div className="flex justify-between border border-slate-600 w-[100%] p-4 rounded-md shadow-lg">
                  <p>
                    Not adult beverage Kroger market supplier waiver and
                    release.
                  </p>
                  <RxCross2 size={25} color="red" />
                </div>


                <span className="text-blue-400 text-center">
                  COI PDF UPLOAD
                </span>
                <div className="flex justify-between border border-slate-600 w-[100%] p-4 rounded-md shadow-lg">
                  <p>
                    Not adult beverage Kroger market supplier waiver and
                    release.
                  </p>
                  <FaCheck size={25} color="green" />
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default BusinessCard