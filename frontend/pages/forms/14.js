import React from 'react'

const Fourteen = () => {
  return (
    <>
  <div>
    <form className="mr-4 backdrop-blur-xl shadow-md rounded-xl bg-white px-4 pt-6 pb-8 mb-4 flex flex-col my-2 w-11/12  mx-auto">
      <div
        className="text-md rounded-lg w-full text-center sm:text-xl md:text-2xl font-medium bg-black py-1 text-white mb-4 px-2"
        id="formName"
        name=""
      >
        Details of the Faculty Members Invited As Resource Person
      </div>
      <div className="md:w-full px-3 mb-3 md:mb-0">
        <label
          className="block uppercase tracking-wide text-grey-darker text-lg font-medium mb-2"
          htmlfor="name"
        >
          Resource Person Complete Information
        </label>
        <input
          required=""
          className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
          id="name"
          name="name"
          type="text"
          placeholder="Jane"
        />
      </div>
      <div className="lg:flex space-x-0 lg:space-x-5">
        <div className="md:w-full px-3 mb-3 md:mb-0">
          <label
            className="block uppercase tracking-wide text-grey-darker text-lg font-medium mb-2"
            htmlfor="depa"
          >
            Department
          </label>
          <input
            required=""
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
            id="depa"
            name="depa"
            type="text"
            placeholder="Department"
          />
        </div>
        <div className="md:w-full px-3 mb-3 md:mb-0">
          <label
            className="block uppercase tracking-wide text-grey-darker text-lg font-medium mb-2"
            htmlfor="invBy"
          >
            Invited By
          </label>
          <input
            required=""
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
            id="invBy"
            name="invBy"
            type="text"
            placeholder="Invited By"
          />
        </div>
      </div>
      <div className="-mx-3 lg:flex mb-2 px-3">
        <div className="sm:flex w-full justify-between">
          <div className="md:w-full px-3 mb-3 md:mb-0">
            <label
              className="block uppercase tracking-wide text-grey-darker text-md font-medium mb-1 md:mb-2"
              htmlfor="lecTitle"
            >
              Title/Subject of Lecture delivered
            </label>
            <input
              required=""
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
              id="lecTitle"
              name="lecTitle"
              type="text"
              placeholder="Lecture Title"
            />
          </div>
          <div className="md:w-full px-3 mb-3 md:mb-0">
            <label
              className="block uppercase tracking-wide text-grey-darker text-md font-medium mb-1 md:mb-2"
              htmlfor="date"
            >
              Date
            </label>
            <input
              required=""
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
              id="date"
              name="date"
              type="text"
              placeholder="Date"
            />
          </div>
          <div className="md:w-full px-3 mb-3 md:mb-0">
            <label
              className="block uppercase tracking-wide text-grey-darker text-md font-medium mb-1 md:mb-2"
              htmlfor="duration"
            >
              Duration (hrs.)
            </label>
            <input
              required=""
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
              id="duration"
              name="duration"
              type="text"
              placeholder="Total Duration"
            />
          </div>
        </div>
      </div>
      <button
        type="button"
        className="flex mx-auto mt-16 text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-gray-700 rounded-full text-lg"
      >
        Submit
      </button>
    </form>
  </div>
  <div>
  </div>
</>

  )
}

export default Fourteen
