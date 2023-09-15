import React from 'react'

const Five = () => {
  return (
    <form className="min-h-screen">
  <div className="flex space-x-5">
    <div className="mr-4 backdrop-blur-xl shadow-md rounded-xl bg-white px-4 pt-6 pb-8 mb-4 flex flex-col my-2 w-11/12  mx-auto">
      <div className="mr-4 bg-white pt-6 pb-8 mb-4 flex flex-col my-2 w-full mx-auto">
        <div
          className="text-sm w-full text-center sm:text-xl md:text-2xl font-medium rounded-lg bg-black py-1 text-white mb-2"
          id="formName"
        >
          Details of Faculty as Editor/ Co-Editor/Members of Editorial Board of
          Journals/Books
        </div>
        <div className="md:w-full px-3 mb-3 md:mb-0">
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
        <div className="md:w-full px-3 mb-3 md:mb-0">
          <label
            className="block uppercase tracking-wide text-grey-darker text-sm sm:text-md font-medium mb-2"
            htmlFor="bookName"
          >
            Title Of The Book/Journal
          </label>
          <input
            required=""
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
            id="bookName"
            type="text"
            placeholder="Book Name"
          />
        </div>
        <div className="-mx-3 lg:flex mb-2 px-3">
          <div className="md:w-3/4 px-3 mb-3 md:mb-0">
            <label
              className="block uppercase tracking-wide text-grey-darker text-sm sm:text-md font-medium mb-1 md:mb-2"
              htmlFor="ownership"
            >
              Whether Sole or Co-Author
            </label>
            <input
              required=""
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
              id="ownership"
              type="text"
              placeholder="YES/NO"
            />
          </div>
          <div className="md:w-full px-3 mb-3 md:mb-0">
            <label
              className="block uppercase tracking-wide text-grey-darker text-sm sm:text-md font-medium mb-1 md:mb-2"
              htmlFor="publisherName"
            >
              Publisher (with city/ country)
            </label>
            <input
              required=""
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
              id="publisherName"
              type="text"
              placeholder="Publisher Name , City , Country"
            />
          </div>
          <div className="md:w-full px-3 mb-3 md:mb-0">
            <label
              className="block uppercase tracking-wide text-grey-darker text-sm sm:text-md font-medium mb-1 md:mb-2"
              htmlFor="ISSN/ ISBN No."
            >
              ISSN/ ISBN No.
            </label>
            <input
              required=""
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
              id="ISSN/ ISBN No."
              type="text"
              placeholder="ISSN/ ISBN No."
            />
          </div>
        </div>
        <div className="lg:flex">
          <div className="md:w-full px-3 mb-3 md:mb-0">
            <label
              className="block uppercase tracking-wide text-grey-darker text-sm sm:text-md font-medium mb-1 md:mb-2"
              htmlFor="year"
            >
              Year of Publication
            </label>
            <input
              required=""
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
              id="year"
              type="text"
              placeholder="Year"
            />
          </div>
          <div className="md:w-full px-3 mb-3 md:mb-0">
            <label
              className="block uppercase tracking-wide text-grey-darker text-sm sm:text-md font-medium mb-1 md:mb-2"
              htmlFor="Level"
            >
              Type of the Book (Local, National or International)
            </label>
            <input
              required=""
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
              id="Level"
              type="text"
              placeholder="(Local, National or International)"
            />
          </div>
        </div>
      </div>
      <button class="flex mx-auto  text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-gray-700 rounded-full text-lg">Submit</button>

    </div>
  </div>
</form>

  )
}

export default Five