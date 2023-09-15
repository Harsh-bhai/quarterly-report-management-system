import React from 'react'

const Three = () => {
  return (
    <form className="min-h-screen">
  <div className="flex space-x-5">
    <div className="mr-4 backdrop-blur-xl shadow-md rounded-xl bg-white px-4 pt-6 pb-8 mb-4 flex flex-col my-2 w-11/12  mx-auto">
      <div className="mr-4 backdrop-blur-xl bg-white pt-6 pb-8 mb-4 flex flex-col my-2 w-full mx-auto">
        <div
          className="text-sm w-full text-center sm:text-xl md:text-2xl font-medium rounded-lg bg-black py-1 text-white mb-2"
          id="formName"
        >
          Details of the Short Term Training Program/Workshop Attended By
          Faculty Members
        </div>
        <div className="md:w-full mb-3 md:mb-0">
          <label
            className="block uppercase tracking-wide text-grey-darker text-sm sm:text-md font-medium mb-2"
            htmlFor="facultyName"
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
            className="block uppercase tracking-wide text-grey-darker text-sm sm:text-md font-medium mb-2"
            htmlFor="workshopName"
          >
            Name of the STTP/Workshop
          </label>
          <input
            required=""
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
            id="workshopName"
            type="text"
            placeholder="Workshop Name"
          />
        </div>
        <div className="-mx-3 lg:flex mb-2 lg:space-x-10 px-3">
          <div className="md:w-full mb-3 md:mb-0">
            <label
              className="block uppercase tracking-wide text-grey-darker text-sm sm:text-md font-medium mb-1 md:mb-2"
              htmlFor="organize"
            >
              Organized by
            </label>
            <input
              required=""
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
              id="organize"
              type="text"
              placeholder="organizer Name"
            />
          </div>
          <div className="md:w-full mb-3 md:mb-0">
            <label
              className="block uppercase tracking-wide text-grey-darker text-sm sm:text-md font-medium mb-1 md:mb-2"
              htmlFor="Place"
            >
              Place
            </label>
            <input
              required=""
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
              id="Place"
              type="text"
              placeholder="Place"
            />
          </div>
          <div className="md:w-full mb-3 md:mb-0">
            <label
              className="block uppercase tracking-wide text-grey-darker text-sm sm:text-md font-medium mb-1 md:mb-2"
              htmlFor="Duration"
            >
              Duration
            </label>
            <input
              required=""
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
              id="Duration"
              type="text"
              placeholder="Duration"
            />
          </div>
          <div className="md:w-full mb-3 md:mb-0">
            <label
              className="block uppercase tracking-wide text-grey-darker text-sm sm:text-md font-medium mb-1 md:mb-2"
              htmlFor="dates"
            >
              Special Leave Dates
            </label>
            <input
              required=""
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
              id="dates"
              type="text"
              placeholder="From-To"
            />
          </div>
        </div>
        <div className="">
          <label
            className="block uppercase tracking-wide text-grey-darker text-sm sm:text-md font-medium mb-1 md:mb-2"
            htmlFor="fees"
          >
            Registration fee reimbursed from college
          </label>
          <input
            required=""
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
            id="fees"
            type="text"
            placeholder="In Numeric"
          />
        </div>
      </div>
    <button class="flex mx-auto  text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-gray-700 rounded-full text-lg">Submit</button>
    </div>
  </div>
</form>

  )
}

export default Three