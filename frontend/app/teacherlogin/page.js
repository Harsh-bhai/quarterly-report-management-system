import React from 'react'

const TeacherLogin = () => {
  return (
    <div>

      {/* navbar starts */}
      <div className='relative h-24'>
        <div className='top-0 z-[1000] overflow-hidden h-fit'>
          <div className='antialiased'>
            <div className='w-screen text-gray-700 bg-transparent'>
              <div 
            //   x-data='{ open: false }'
                className='flex flex-col max-w-full px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8'>
                <div className='flex flex-row items-center justify-between'><img id='logo' draggable={false}
                  className='w-14 h-14 md:w-20 md:h-20 mt-2' src="/logo.png"
                  alt='' /><svg  xmlns='http://www.w3.org/2000/svg' id='Dark'
                    fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor'
                    className='mt-5 w-6 h-6 absolute left-[75%] sm:left-[85%] md:left-[45%] lg:left-[55%] xl:left-[65%] 2xl:left-[70%] my-auto'>
                    <path strokeLinecap='round' strokeLinejoin='round'
                      d='M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z' />
                  </svg><svg  xmlns='http://www.w3.org/2000/svg' id='Light' fill='none'
                    viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor'
                    className='mt-5 hidden w-6 h-6 absolute left-[75%] sm:left-[85%] md:left-[45%] lg:left-[55%] xl:left-[65%] 2xl:left-[70%] my-auto'>
                    <path strokeLinecap='round' strokeLinejoin='round'
                      d='M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z' />
                  </svg>
                  <div className='rounded-lg md:hidden focus:outline-none focus:shadow-outline'
                    ><svg id='Hamburger' fill='currentColor' viewBox='0 0 20 20'
                      className='w-6 h-6'>
                      <path 
                    //   x-show={!open} 
                      fillRule='evenodd'
                        d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z'
                        clipRule='evenodd'></path>
                      <path
                    //    x-show={open}
                        fillRule='evenodd'
                        d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                        clipRule='evenodd'></path>
                    </svg></div>
                </div>
                <nav className={
                    // open ? 
                    'flex bg-gray-50 md:bg-transparent pt-5 flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row'
                    //  : 'hidden'
                    }
                >
                  <a id='navbarItem1'
                    className='px-4 py-2 mt-2 text-md font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                    href='#'>Contact</a><a id='navbarItem2'
                    className='px-4 py-2 mt-2 text-md font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                    href='#'>Orders</a><a id='navbarItem3'
                    className='px-4 py-2 mt-2 text-md font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                    href='#'>About</a><a id='navbarItem4'
                    className='px-4 py-2 mt-2 text-md font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                    href='#'>Contact</a></nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* navbar ends */}

      {/* component */}
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
                    Asiper To Excel</div>
                  <div
                    className="text-center uppercase text-lg font-semibold underline underline-offset-4 decoration-neutral-950">
                    BIT Durg</div>
                </div>
              </div>

              <div
                className="w-full mt-10 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12 bg-gray-300 bg-opacity-30 shadow-lg rounded-lg backdrop-blur-3xl mix-blend-color-dodge">
                <div className="w-40 rounded-lg mix-blend-color-dodge h-40 bg-yellow-500 absolute -left-16 -top-10 "></div>
                <div className="w-40 rounded-lg mix-blend-color-dodge h-40 bg-green-500 absolute -right-16 -bottom-10"></div>
                <div
                  className="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 rounded-2xl relative z-10 w-full mt-10">
                  <p className="w-full text-4xl font-medium text-center leading-snug font-serif">Sign In</p>
                  <p className="w-full text-center">Teacher</p>
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
                    <a href="./StudentlogIn.html" className="w-fit mx-auto inline-block px-2 py-1 text-md font-medium text-center text-white bg-black rounded-lg ">You Are Student</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>


      {/* footer starts */}
      {/* {footer()} */}
      {/* footer ends */}

      <script src="..//script/login.js"></script>

    </div>
  )
}

export default TeacherLogin