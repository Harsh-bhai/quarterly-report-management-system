import React from 'react'

const TwentyFive = () => {
  return (
    <form className="mr-4 backdrop-blur-xl shadow-md rounded-xl bg-white px-4 pt-6 pb-8 mb-4
    flex flex-col my-2 w-11/12 mx-auto">
  
  <div
    className="text-md rounded-lg w-full text-center sm:text-2xl md:text-3xl font-medium bg-black py-1 text-white mb-2"
    id="formName"
    name=""
  >
    Details of Sponsored/Collaboration with industry Projects Carried Out By
    Students as a Part of Their Curriculum (If Applicable):
  </div>
  <div className="md:w-full px-3 mb-3 md:mb-0">
    <label
      className="block uppercase tracking-wide text-grey-darker text-lg font-medium mb-2"
      htmlfor="name"
    >
      Name of student{" "}
      <span className="text-[10px] font-thin">(student name)</span>
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
        htmlfor="branch"
      >
        Branch
      </label>
      <input
        required=""
        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
        id="branch"
        name="branch"
        type="text"
        placeholder="Branch"
      />
    </div>
    <div className="md:w-full px-3 mb-3 md:mb-0">
      <label
        className="block uppercase tracking-wide text-grey-darker text-lg font-medium mb-2"
        htmlfor="semester"
      >
        Semester
      </label>
      <input
        required=""
        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
        id="semester"
        name="semester"
        type="text"
        placeholder="NA"
      />
    </div>
  </div>
  <div className="-mx-3 lg:flex mb-2 px-3">
    <div className="sm:flex w-full justify-between">
      <div className="md:w-full px-3 mb-3 md:mb-0">
        <label
          className="block uppercase tracking-wide text-grey-darker text-md font-medium mb-1 md:mb-2"
          htmlfor="titleoftheproject"
        >
          Title of the Project
        </label>
        <input
          required=""
          className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
          id="titleoftheproject"
          name="titleoftheproject"
          type="text"
          placeholder="NA"
        />
      </div>
      <div className="md:w-full px-3 mb-3 md:mb-0">
        <label
          className="block uppercase tracking-wide text-grey-darker text-lg font-medium mb-2"
          htmlfor="sponsoredby"
        >
          Sponsored by
        </label>
        <input
          required=""
          className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
          id="sponsoredby"
          name="sponsoredby"
          type="text"
          placeholder="NA"
        />
      </div>
    </div>
    <div className="-mx-3 lg:flex mb-2 px-3">
      <div className="sm:flex w-full justify-between">
        <div className="md:w-full px-3 mb-3 md:mb-0">
          <label
            className="block uppercase tracking-wide text-grey-darker text-md font-medium mb-1 md:mb-2"
            htmlfor="nameoftheguide"
          >
            Name of the guide
          </label>
          <input
            required=""
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
            id="nameoftheguide"
            name="nameoftheguide"
            type="text"
            placeholder="NA"
          />
        </div>

      </div>
    </div>
  </div>
  <button className="flex mx-auto mt-16 text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-gray-700 rounded-full text-lg">
          Submit
        </button>
</form>

  )
}

export default TwentyFive
