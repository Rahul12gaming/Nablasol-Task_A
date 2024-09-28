import React from 'react'

function ProfileCard({handleChange}) {
  return (
    <>
        <div className='mt-4 md:p-10'>
                <div className='flex flex-col items-center justify-center'>
                    <span className='text-md text-slate-500 font-medium'>STEP 1</span>
                    <h1 className='text-2xl font-medium text-slate-600'>YOUR PROFILE</h1>
                    <p className='text-slate-500 text-md leading-4 w-6/12 m-auto'>Enter the login information for you accounr.You will be able to ceate additional users after registrating.</p>
                </div>

                <div className='flex flex-col  md:grid grid-cols-2 gap-20 p-10'>
                    <div className='flex flex-col gap-4'>

                        <div className='flex flex-col gap-2 '>
                            <label htmlFor="">First Name *</label>
                            <input onChange={handleChange}  required className='border border-slate-400 p-2 rounded-md focus:outline-blue-400' type="text" name="firstName" placeholder='Tnput Your First Name' id="" />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="">Email *</label>
                            <input onChange={handleChange}  required className='border border-slate-400 p-2 rounded-md focus:outline-blue-400' type="text" name="email" placeholder='Tnput Your Email' id="" />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="">Password *</label>
                            <input onChange={handleChange}  required className='border border-slate-400 p-2 rounded-md focus:outline-blue-400' type="text" name="password" placeholder='Tnput Your Password' id="" />
                        </div>



                    </div>

                    <div className='flex flex-col gap-4 '>

                        <div className='flex flex-col gap-2'>
                            <label htmlFor="">Last Name *</label>
                            <input onChange={handleChange}  required className='border border-slate-400 p-2 rounded-md focus:outline-blue-400' type="text" name="lastName" placeholder='Tnput Your Last Name' id="" />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="">Phone Number *</label>
                            <input onChange={handleChange}  required className='border border-slate-400 p-2 rounded-md focus:outline-blue-400' type="text" name="phoneNumber" placeholder='Tnput Your Phone Number' id="" />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="">Confirm Password *</label>
                            <input onChange={handleChange}  required className='border border-slate-400 p-2 rounded-md focus:outline-blue-400' type="text" name="confirmPassword" placeholder='Confirm Your Password' id="" />
                        </div>



                    </div>


                </div>
            </div>
    </>
  )
}

export default ProfileCard