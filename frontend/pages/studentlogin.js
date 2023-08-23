import Link from 'next/link'
import React from 'react'

const TeacherLogin = () => {
  return (
    <div>
      <form action="page.name" method="POST" id="form" name="form">
        <div className="relative ">
          <div
            className="flex flex-col items-center justify-between pt-0 pb-0 mt-0 mr-auto mb-0 ml-auto max-w-7xl xl:px-5 lg:flex-row">
            <div
              className="flex flex-col items-center w-full pt-5 pb-20 px-2 lg:pt-20 lg:flex-row space-x-0 lg:space-x-40">
              <div className="btn-moving w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12">
                <div className=" bg-white flex flex-col items-center justify-center w-full h-full relative lg:pr-10">
                  <div className="shadow-[2px_0px_10px_gray] rounded-full p-12 bg-white">
                    <img draggable={false} id="motion" src="/logo.png"
                      alt="Sign up" className="w-32 h-32 sm:h-56 sm:w-56  shdow-2xl" />
                  </div>
                  <div
                    className="text-center uppercase text-xl sm:text-5xl font-semibold underline underline-offset-4 decoration-neutral-950 my-4">
                    Aspire To Excel</div>
                  <div
                    className="text-center uppercase text-lg font-semibold underline underline-offset-4 decoration-neutral-950">
                    BIT Durg</div>
                </div>
              </div>

              <div
                className="w-full mt-10 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12 bg-gray-300 bg-opacity-30 shadow-lg rounded-lg backdrop-blur-3xl mix-blend-color-dodge">
                <div className="md:w-40  rounded-lg mix-blend-color-dodge h-40 bg-yellow-500 absolute -left-16 -top-10 "></div>
                <div className="md:w-40  rounded-lg mix-blend-color-dodge h-40 bg-green-500 absolute -right-16 -bottom-10"></div>
                <div
                  className="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 rounded-2xl relative z-10 w-full mt-10">
                  <p className="w-full text-4xl font-medium text-center leading-snug font-serif">Student</p>
                  <p className="w-full text-center text-xl">Sign In</p>
                  <div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
                    <div className="relative">
                      <p
                        className="bg-white rounded-lg shadow-sm pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
                        Username</p>
                      <input name="userName" placeholder="John" type="text"
                        className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md" />
                      <div className="text-red-700 text-xs opacity-0" id="nameWaring">Enter the
                        username</div>
                    </div>
                    <div className="relative">
                      <p
                        className="bg-white rounded-lg shadow-sm pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
                        Password</p>
                      <input name="userPassword" placeholder="Password" type="password"
                        className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md" />
                      <div className="text-red-700 text-xs opacity-0" id="passwordWarning">Enter the
                        Password</div>
                    </div>
                    <div 
                    // onClick={checkForm}
                     className="relative">
                      <a className="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-indigo-500 rounded-lg">Submit</a>
                    </div>
                  </div>
                  <div className="relative flex space-x-5 w-full mt-5">
                    <Link href="/teacherlogin" className="w-fit mx-auto inline-block px-2 py-1 text-md font-medium text-center text-white bg-black rounded-lg ">you are a Teacher</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default TeacherLogin