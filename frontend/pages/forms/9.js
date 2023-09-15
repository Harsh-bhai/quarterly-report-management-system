import React from 'react'

const Nine = () => {
  return (
    <div>
  <div>
    <form className="mr-4 backdrop-blur-xl shadow-md rounded-xl bg-white px-4 pt-6 mb-4 flex flex-col my-2 w-11/12  mx-auto">
      <div>
        <div className="min-h-fit pb-5">
          <div className="mr-4 backdrop-blur-xl bg-white pt-6 pb-8 mb-4 flex flex-col my-2 w-full mx-auto">
            <div
              className="text-sm w-full text-center sm:text-xl md:text-2xl font-medium rounded-lg bg-black py-1 text-white mb-2"
              id="formName"
            >
              Details of Reviewers of Research Papers in Journals/ Conferences
            </div>
            <div className="md:w-full mb-3 md:mb-0">
              <label
                className="block uppercase tracking-wide text-grey-darker text-sm sm:text-md font-medium mb-2"
                htmlfor="facultyName"
              >
                Name Of Faculty
              </label>
              <input
                required=""
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
                id="facultyName"
                type="text"
                placeholder="Faculty Name"
              />
            </div>
            <div className="md:w-full mb-3 md:mb-0">
              <label
                className="block uppercase tracking-wide text-grey-darker text-sm sm:text-md font-medium mb-1 md:mb-2"
                htmlfor="titJornal"
              >
                Title of the Journal/Conference
              </label>
              <input
                required=""
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
                id="titJornal"
                type="text"
                placeholder="Journal  Title "
              />
            </div>
            <div className="-mx-3 lg:flex mb-2 lg:space-x-10 px-3">
              <div className="md:w-full mb-3 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-sm sm:text-md font-medium mb-2"
                  htmlfor="jour/conf"
                >
                  Whether Journal/Conference
                </label>
                <input
                  required=""
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
                  id="jour/conf"
                  type="text"
                  placeholder="Journal/Conference"
                />
              </div>
              <div className="md:w-full mb-3 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-sm sm:text-md font-medium mb-1 md:mb-2"
                  htmlfor="jourType"
                >
                  Type of Journal
                </label>
                <input
                  required=""
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
                  id="jourType"
                  type="text"
                  placeholder="Journal Type"
                />
              </div>
              <div className="md:w-full mb-3 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-sm sm:text-md font-medium mb-1 md:mb-2"
                  htmlfor="ISSN"
                >
                  ISSN
                </label>
                <input
                  required=""
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
                  id="ISSN"
                  type="text"
                  placeholder="ISSN"
                />
              </div>
              <div className="md:w-full mb-3 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-sm sm:text-md font-medium mb-1 md:mb-2"
                  htmlfor="publisher"
                >
                  Publisher
                </label>
                <input
                  required=""
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
                  id="publisher"
                  type="text"
                  placeholder="Publisher"
                />
              </div>
            </div>
            <div className="-mx-3 lg:flex mb-2 lg:space-x-10 px-3">
              <div className="md:w-full mb-3 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-sm sm:text-md font-medium mb-1 md:mb-2"
                  htmlfor="year"
                >
                  Year
                </label>
                <input
                  required=""
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
                  id="year"
                  type="text"
                  placeholder="Year"
                />
              </div>
              <div className="md:w-full mb-3 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-sm sm:text-md font-medium mb-1 md:mb-2"
                  htmlfor="jourLevel"
                >
                  Type of the Journal/Conference (National/ International)
                </label>
                <input
                  required=""
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
                  id="jourLevel"
                  type="text"
                  placeholder="(National/ International)"
                />
              </div>
            </div>
          </div>
          <button
            type="button"
            className="flex mx-auto mt-8 text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-gray-700 rounded-full text-lg"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  </div>
</div>

  )
}

export default Nine
