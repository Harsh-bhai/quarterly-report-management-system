import React from 'react'

const Eleven = () => {
  return (
  <div>
    <form className="mr-4 backdrop-blur-xl shadow-md rounded-xl bg-white px-4 pt-6 mb-4 flex flex-col my-2 w-11/12  mx-auto">
      <div>
        <div className="min-h-fit pb-20">
          <div className="flex space-x-5">
            <div className="backdrop-blur-xl shadow-md rounded-xl bg-white px-4 pt-6 pb-8 mb-4 flex flex-col my-2 w-11/12  mx-auto">
              <div className="mr-4 backdrop-blur-xl bg-white pt-6 pb-8 mb-4 flex flex-col my-2 w-full mx-auto">
                <div
                  className="text-sm w-full text-center sm:text-xl md:text-2xl font-medium rounded-lg bg-black py-1 text-white mb-2"
                  id="formName"
                >
                  Details of the Research Guidance during the mentioned quarter
                </div>
                <div className="md:w-full mb-3 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-grey-darker text-sm sm:text-md font-medium mb-2"
                    htmlfor="name"
                  >
                    Name of the Faculty Member
                  </label>
                  <input
                    required=""
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
                    id="name"
                    type="text"
                    placeholder="Faculty Name"
                  />
                </div>
                <div className="md:w-full mb-3 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-grey-darker text-sm sm:text-md font-medium mb-1 md:mb-2"
                    htmlfor="instName"
                  >
                    Name of Institution/Society
                  </label>
                  <input
                    required=""
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
                    id="instName"
                    type="text"
                    placeholder="Institution/Society"
                  />
                </div>
                <div className="-mx-3 lg:flex mb-2 lg:space-x-10 px-3">
                  <div className="md:w-full mb-3 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-grey-darker text-sm sm:text-md font-medium mb-2"
                      htmlfor="grade"
                    >
                      Grade of Membership
                    </label>
                    <input
                      required=""
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
                      id="grade"
                      type="text"
                      placeholder="Membership Grade"
                    />
                  </div>
                  <div className="md:w-full mb-3 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-grey-darker text-sm sm:text-md font-medium mb-1 md:mb-2"
                      htmlfor="membNumber"
                    >
                      Membership Number
                    </label>
                    <input
                      required=""
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
                      id="titThesis"
                      type="text"
                      placeholder="Membership Number"
                    />
                  </div>
                  <div className="md:w-full mb-3 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-grey-darker text-sm sm:text-md font-medium mb-1 md:mb-2"
                      htmlfor="year"
                    >
                      Year of Election
                    </label>
                    <input
                      required=""
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
                      id="year"
                      type="text"
                      placeholder="Election Year"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="flex mx-auto mt-16 text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-gray-700 rounded-full text-lg"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  </div>

  )
}

export default Eleven
