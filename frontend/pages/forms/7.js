import React from 'react'

const Seven = () => {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <div>
    <form className="mr-4 backdrop-blur-xl shadow-md rounded-xl bg-white px-4 pt-6 pb-8 mb-4 flex flex-col my-2 w-11/12  mx-auto">
      <div
        className="text-md rounded-lg w-full text-center sm:text-xl md:text-2xl font-medium bg-black py-1 text-white mb-4 px-2"
        id="formName"
        name=""
      >
        Details of the faculty being the member of various bodies/Committees at
        the University/ State/ National
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
            htmlfor="details"
          >
            Details of the body/Committee
          </label>
          <input
            required=""
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
            id="details"
            name="details"
            type="text"
            placeholder="Details of the body/Committee"
          />
        </div>
        <div className="md:w-full px-3 mb-3 md:mb-0">
          <label
            className="block uppercase tracking-wide text-grey-darker text-lg font-medium mb-2"
            htmlfor="responsbility"
          >
            Responsbility shared{" "}
            <span className="font-thin text-xs">
              (Whether Chair person or member)
            </span>
          </label>
          <input
            required=""
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
            id="responsbility"
            name="responsbility"
            type="text"
            placeholder="Responsbility"
          />
        </div>
      </div>
      <div className="-mx-3 lg:flex mb-2 px-3">
        <div className="sm:flex w-full justify-between">
          <div className="md:w-full px-3 mb-3 md:mb-0">
            <label
              className="block uppercase tracking-wide text-grey-darker text-md font-medium mb-1 md:mb-2"
              htmlfor="level"
            >
              Level{" "}
              <span className="font-thin text-xs">
                (University/State/National/International)
              </span>
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
          <div className="md:w-full px-3 mb-3 md:mb-0">
            <label
              className="block uppercase tracking-wide text-grey-darker text-md font-medium mb-1 md:mb-2"
              htmlfor="othDetails"
            >
              Any other details{" "}
              <span className="font-thin text-xs">(Membership ID)</span>
            </label>
            <input
              required=""
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
              id="othDetails"
              name="othDetails"
              type="text"
              placeholder="Other details"
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
</>

  )
}

export default Seven
