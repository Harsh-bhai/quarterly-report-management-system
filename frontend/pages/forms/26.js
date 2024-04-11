import React from 'react'

const TwentySix = () => {
  return (
<form className="mr-4 backdrop-blur-xl shadow-md rounded-xl bg-white px-4 pt-6 pb-8 mb-4 flex flex-col my-2 w-11/12  mx-auto">
  <div
    className="text-md rounded-lg w-full text-center sm:text-2xl md:text-3xl font-medium bg-black py-1 text-white mb-2"
    id="formName"
    name=""
  >
    Details of the Students selected in Government (Central/State)/Public Sector
    Units:
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
  <div className="lg:flex space-x-0 lg:space-x-5 items-center">
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
        htmlfor="Batch"
      >
        Batch
      </label>
      <input
        required=""
        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
        id="Batch"
        name="Batch"
        type="text"
        placeholder="NA"
      />
    </div>
    <div className="-mx-3 lg:flex mb-2 px-3">
      <div className="sm:flex w-full justify-between">
        <div className="md:w-full px-3 mb-3 md:mb-0">
          <label
            className="block uppercase tracking-wide text-grey-darker text-md font-medium mb-1 md:mb-2"
            htmlfor="contactdetails"
          >
            Contact Details
          </label>
          <input
            required=""
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
            id="contactdetails"
            name="contactdetails"
            type="text"
            placeholder="NA"
          />
        </div>
      </div>
    </div>
    <div className="md:w-full px-3 mb-3 md:mb-0">
      <label
        className="block uppercase tracking-wide text-grey-darker text-lg font-medium mb-2"
        htmlfor="emailid"
      >
        E-mail ID
      </label>
      <input
        required=""
        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
        id="emailid"
        name="emailid"
        type="text"
        placeholder="NA"
      />
    </div>



  </div>

  <div className="lg:flex space-x-0 lg:space-x-5 items-center">
  <div className="-mx-3 lg:flex mb-2 px-3">
      <div className="sm:flex w-full justify-between">
        <div className="md:w-full px-3 mb-3 md:mb-0">
          <label
            className="block uppercase tracking-wide text-grey-darker text-md font-medium mb-1 md:mb-2"
            htmlfor="Mobileno."
          >
            Mobile No.
          </label>
          <input
            required=""
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
            id="Mobileno."
            name="Mobileno."
            type="text"
            placeholder="NA"
          />
        </div>
      </div>
    </div>
    <div className="-mx-3 lg:flex mb-2 px-3">
      <div className="sm:flex w-full justify-between">
        <div className="md:w-full px-3 mb-3 md:mb-0">
          <label
            className="block uppercase tracking-wide text-grey-darker text-md font-medium mb-1 md:mb-2"
            htmlfor="profileinsocialmdeia"
          >
            Profile in Social
            <span className="text-[10px] font-thin">
              (Facebook,Linked In, Twitteretc.)
            </span>
          </label>
          <input
            required=""
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
            id="profileinsocialmedia"
            name="contactdetails"
            type="text"
            placeholder="NA"
          />
        </div>
      </div>
    </div>
    <div className="md:w-full px-3 mb-3 md:mb-0">
      <label
        className="block uppercase tracking-wide text-grey-darker text-lg font-medium mb-2"
        htmlfor="nameofthePSU"
      >
        Name of the PSU
      </label>
      <input
        required=""
        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
        id="nameofthePSU"
        name="nameofthePSU"
        type="text"
        placeholder="NA"
      />
    </div>
    <div className="-mx-3 lg:flex mb-2 px-3">
      <div className="sm:flex w-full justify-between">
        <div className="md:w-full px-3 mb-3 md:mb-0">
          <label
            className="block uppercase tracking-wide text-grey-darker text-md font-medium mb-1 md:mb-2"
            htmlfor="packageoffered"
          >
            Package offered
          </label>
          <input
            required=""
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
            id="packageoffered"
            name="packageoffered"
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

export default TwentySix
