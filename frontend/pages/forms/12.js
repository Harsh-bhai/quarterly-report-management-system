import React from 'react'

const Twelve = () => {
  return (
    <div>
  <form className="mr-4 backdrop-blur-xl shadow-md rounded-xl bg-white px-4 pt-6 pb-8 mb-4 flex flex-col my-2 w-11/12  mx-auto">
    <div
      className="text-md rounded-lg w-full text-center sm:text-xl md:text-2xl font-medium bg-black py-1 text-white mb-4 px-2"
      id="formName"
      name=""
    >
      Details of the Development of Course/Laboratory Modules related to
      enhancement of TLP
    </div>
    <div className="md:w-full px-3 mb-3 md:mb-0">
      <label
        className="block uppercase tracking-wide text-grey-darker text-lg font-medium mb-2"
        htmlfor="name"
      >
        Developed by
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
          htmlfor="desc"
        >
          Module Description
        </label>
        <input
          required=""
          className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
          id="desc"
          name="desc"
          type="text"
          placeholder="Description"
        />
      </div>
      <div className="md:w-full px-3 mb-3 md:mb-0">
        <label
          className="block uppercase tracking-wide text-grey-darker text-lg font-medium mb-2"
          htmlfor="institute"
        >
          Any other Contributory Institute/Industry
        </label>
        <input
          required=""
          className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
          id="institute"
          name="institute"
          type="text"
          placeholder="Institute/Industry"
        />
      </div>
    </div>
    <div className="-mx-3 lg:flex mb-2 px-3">
      <div className="sm:flex w-full justify-between">
        <div className="md:w-full px-3 mb-3 md:mb-0">
          <label
            className="block uppercase tracking-wide text-grey-darker text-md font-medium mb-1 md:mb-2"
            htmlfor="use"
          >
            Usage and Citation etc.
          </label>
          <input
            required=""
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
            id="use"
            name="use"
            type="text"
            placeholder="Usage and Citation"
          />
        </div>
        <div className="md:w-full px-3 mb-3 md:mb-0">
          <label
            className="block uppercase tracking-wide text-grey-darker text-md font-medium mb-1 md:mb-2"
            htmlfor="amount"
          >
            Amount Spent
          </label>
          <input
            required=""
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
            id="amount"
            name="amount"
            type="text"
            placeholder="Amount"
          />
        </div>
        <div className="md:w-full px-3 mb-3 md:mb-0">
          <label
            className="block uppercase tracking-wide text-grey-darker text-md font-medium mb-1 md:mb-2"
            htmlfor="Year"
          >
            Academic Year
          </label>
          <input
            required=""
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
            id="Year"
            name="Year"
            type="text"
            placeholder="Academic Year"
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

  )
}

export default Twelve
