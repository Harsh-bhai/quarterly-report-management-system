import React from 'react'

const Thirteen = () => {
  return (
    <div>
  <form className="mr-4 backdrop-blur-xl shadow-md rounded-xl bg-white px-4 pt-6 pb-8 mb-4 flex flex-col my-2 w-11/12  mx-auto">
    <div
      className="text-md rounded-lg w-full text-center sm:text-xl md:text-2xl font-medium bg-black py-1 text-white mb-4 px-2"
      id="formName"
      name=""
    >
      Details of Organized Seminar/STTP/Guest Lecture/Workshop For faculty
    </div>
    <div className="md:w-full px-3 mb-3 md:mb-0">
      <label
        className="block uppercase tracking-wide text-grey-darker text-lg font-medium mb-2"
        htmlfor="name"
      >
        Title
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
          htmlfor="semLevel"
        >
          Type{" "}
          <span className="font-thin text-xs">
            (STTP/Seminar/ Guest Lecture/ Workshop))
          </span>
        </label>
        <input
          required=""
          className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
          id="semLevel"
          name="semLevel"
          type="text"
          placeholder="Seminar Leve"
        />
      </div>
      <div className="md:w-full px-3 mb-3 md:mb-0">
        <label
          className="block uppercase tracking-wide text-grey-darker text-lg font-medium mb-2"
          htmlfor="organizer"
        >
          Organized by
        </label>
        <input
          required=""
          className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
          id="organizer"
          name="organizer"
          type="text"
          placeholder="Organizer Name"
        />
      </div>
    </div>
    <div className="-mx-3 lg:flex mb-2 px-3">
      <div className="sm:flex w-full justify-between">
        <div className="md:w-full px-3 mb-3 md:mb-0">
          <label
            className="block uppercase tracking-wide text-grey-darker text-md font-medium mb-1 md:mb-2"
            htmlfor="info"
          >
            Resource Person Complete information
          </label>
          <input
            required=""
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
            id="info"
            name="info"
            type="text"
            placeholder="Information"
          />
        </div>
        <div className="md:w-full px-3 mb-3 md:mb-0">
          <label
            className="block uppercase tracking-wide text-grey-darker text-md font-medium mb-1 md:mb-2"
            htmlfor="duration"
          >
            Duration Of The Program With Dates
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
        <div className="md:w-full px-3 mb-3 md:mb-0">
          <label
            className="block uppercase tracking-wide text-grey-darker text-md font-medium mb-1 md:mb-2"
            htmlfor="level"
          >
            Level{" "}
            <span className="font-thin text-xs">(National/International)</span>
          </label>
          <input
            required=""
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
            id="level"
            name="level"
            type="text"
            placeholder="Level"
          />
        </div>
      </div>
    </div>
    <div className="lg:flex space-x-0 lg:space-x-5">
      <div className="md:w-full px-3 mb-3 md:mb-0">
        <label
          className="block uppercase tracking-wide text-grey-darker text-md font-medium mb-1 md:mb-2"
          htmlfor="NumofPart"
        >
          No. of Participants
        </label>
        <input
          required=""
          className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
          id="NumofPart"
          name="NumofPart"
          type="text"
          placeholder="No. of Participants"
        />
      </div>
      <div className="md:w-full px-3 mb-3 md:mb-0">
        <label
          className="block uppercase tracking-wide text-grey-darker text-sm font-medium mb-1 md:mb-2"
          htmlfor="sponsore"
        >
          Sponsored By
        </label>
        <input
          required=""
          className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
          id="sponsore"
          name="sponsore"
          type="text"
          placeholder="Sponsored Name"
        />
      </div>
      <div className="md:w-3/5 px-3 mb-3 md:mb-0">
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

export default Thirteen
