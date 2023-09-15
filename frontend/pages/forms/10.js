import React from 'react'

const Ten = () => {
  return (
    <div>
  <div>
    <form className="mr-4 backdrop-blur-xl shadow-md rounded-xl bg-white px-4 pt-6 mb-4 flex flex-col my-2 w-11/12  mx-auto">
      <div>
        <div className="min-h-fit pb-5">
          <div className="mr-4 backdrop-blur-xl bg-white pt-6 flex flex-col w-full mx-auto">
            <div
              className="text-sm w-full text-center sm:text-xl md:text-2xl font-medium rounded-lg bg-black py-1 text-white mb-2"
              id="formName"
            >
              Details of the Research Guidance during the mentioned quarter
            </div>
            <div className="md:w-full mb-3 md:mb-0">
              <label
                className="block uppercase tracking-wide text-grey-darker text-sm sm:text-md font-medium mb-2"
                htmlfor="supervisorName"
              >
                Name Of Supervisor/ Co-Supervisor
              </label>
              <input
                required=""
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
                id="supervisorName"
                type="text"
                placeholder="S
                                  upervisor Name"
              />
            </div>
            <div className="md:w-full mb-3 md:mb-0">
              <label
                className="block uppercase tracking-wide text-grey-darker text-sm sm:text-md font-medium mb-1 md:mb-2"
                htmlfor="guidLevel"
              >
                Level of Guidance
              </label>
              <input
                required=""
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
                id="guidLevel"
                type="text"
                placeholder="Guidance Level"
              />
            </div>
            <div className="-mx-3 lg:flex mb-2 lg:space-x-10 px-3">
              <div className="md:w-full mb-3 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-sm sm:text-md font-medium mb-2"
                  htmlfor="stuName"
                >
                  Name of Candidate
                </label>
                <input
                  required=""
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
                  id="stuName"
                  type="text"
                  placeholder="Candidate Name"
                />
              </div>
              <div className="md:w-full mb-3 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-sm sm:text-md font-medium mb-1 md:mb-2"
                  htmlfor="titThesis"
                >
                  Title of Thesis
                </label>
                <input
                  required=""
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
                  id="titThesis"
                  type="text"
                  placeholder="Thesis Title"
                />
              </div>
              <div className="md:w-full mb-3 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-sm sm:text-md font-medium mb-1 md:mb-2"
                  htmlfor="ExtMember"
                >
                  Name of the External Member
                </label>
                <input
                  required=""
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
                  id="ExtMember"
                  type="text"
                  placeholder="External Member"
                />
              </div>
              <div className="md:w-full mb-3 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-sm sm:text-md font-medium mb-1 md:mb-2"
                  htmlfor="Dated"
                >
                  Thesis Presentation Date
                </label>
                <input
                  required=""
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
                  id="date"
                  type="text"
                  placeholder="Date"
                />
              </div>
            </div>
            <div className="-mx-3 lg:flex mb-2 lg:space-x-10 px-3">
              <div className="md:w-full mb-3 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-sm sm:text-md font-medium mb-1 md:mb-2"
                  htmlfor="status"
                >
                  Status
                </label>
                <input
                  required=""
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
                  id="status"
                  type="text"
                  placeholder="Status"
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

export default Ten
