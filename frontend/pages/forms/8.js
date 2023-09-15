import React from 'react'

const Eight = () => {
  return (
    <div>
  <form className="mr-4 backdrop-blur-xl shadow-md rounded-xl bg-white px-4 pt-6 pb-8 mb-4 flex flex-col my-2 w-11/12  mx-auto">
    <div
      className="text-md rounded-lg w-full text-center sm:text-xl md:text-2xl font-medium bg-black py-1 text-white mb-4 px-2"
      id="formName"
      name=""
    >
      Details of the Patents Filed/Technology Transfer by the Faculty Members
    </div>
    <div className="md:w-full px-3 mb-3 md:mb-0">
      <label
        className="block uppercase tracking-wide text-grey-darker text-lg font-medium mb-2"
        htmlfor="name"
      >
        Name Of The faculty
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
          htmlfor="prjTitle"
        >
          Title of Research Project
        </label>
        <input
          required=""
          className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
          id="prjTitle"
          name="prjTitle"
          type="text"
          placeholder="Title"
        />
      </div>
      <div className="md:w-full px-3 mb-3 md:mb-0">
        <label
          className="block uppercase tracking-wide text-grey-darker text-lg font-medium mb-2"
          htmlfor="joint"
        >
          PI/Co-PI/Joint PI
        </label>
        <input
          required=""
          className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
          id="joint"
          name="joint"
          type="text"
          placeholder="Academic Tenured"
        />
      </div>
    </div>
    <div className="-mx-3 lg:flex mb-2 px-3">
      <div className="sm:flex w-full justify-between">
        <div className="md:w-full px-3 mb-3 md:mb-0">
          <label
            className="block uppercase tracking-wide text-grey-darker text-md font-medium mb-1 md:mb-2"
            htmlfor="period"
          >
            Period
          </label>
          <input
            required=""
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
            id="period"
            name="period"
            type="text"
            placeholder="Period"
          />
        </div>
        <div className="md:w-full px-3 mb-3 md:mb-0">
          <label
            className="block uppercase tracking-wide text-grey-darker text-md font-medium mb-1 md:mb-2"
            htmlfor="totalgrant"
          >
            Total Grant Received{" "}
            <span className="font-thin text-xs">(in Rupees)</span>
          </label>
          <input
            required=""
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
            id="totalgrant"
            name="totalgrant"
            type="text"
            placeholder="Total Grant"
          />
        </div>
        <div className="md:w-full px-3 mb-3 md:mb-0">
          <label
            className="block uppercase tracking-wide text-grey-darker text-md font-medium mb-1 md:mb-2"
            htmlfor="agency"
          >
            Name of Funding Agency
          </label>
          <input
            required=""
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
            id="agency"
            name="agency"
            type="text"
            placeholder="Agency name"
          />
        </div>
      </div>
    </div>
    <div className="lg:flex space-x-0 lg:space-x-5">
      <div className="md:w-full px-3 mb-3 md:mb-0">
        <label
          className="block uppercase tracking-wide text-grey-darker text-md font-medium mb-1 md:mb-2"
          htmlfor="patent"
        >
          Patent/Technology Transfer
        </label>
        <input
          required=""
          className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
          id="patent"
          name="patent"
          type="text"
          placeholder="Patent/Technology Transfer"
        />
      </div>
      <div className="md:w-full px-3 mb-3 md:mb-0">
        <label
          className="block uppercase tracking-wide text-grey-darker text-sm font-medium mb-1 md:mb-2"
          htmlfor="dovLevel"
        >
          Major Policy Document of Government{" "}
          <span className="font-thin text-[10px] ">
            (at Central/ State Level Others)
          </span>
        </label>
        <input
          required=""
          className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
          id="dovLevel"
          name="dovLevel"
          type="text"
          placeholder="Document Level"
        />
      </div>
      <div className="md:w-3/5 px-3 mb-3 md:mb-0">
        <label
          className="block uppercase tracking-wide text-grey-darker text-md font-medium mb-1 md:mb-2"
          htmlfor="patentLevel"
        >
          Patent{" "}
          <span className="font-thin text-xs">
            (National/ International Level)
          </span>
        </label>
        <input
          required=""
          className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
          id="patentLevel"
          name="patentLevel"
          type="text"
          placeholder="Patent Level"
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

export default Eight
