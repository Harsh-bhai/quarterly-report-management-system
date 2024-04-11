import React from "react";

const TwentyTwo = () => {
  return (
    <form class="mr-4 backdrop-blur-xl shadow-md rounded-xl bg-white px-4 pt-6 pb-8 mb-4 flex flex-col my-2 w-11/12   mx-auto">
      <div
        class="text-md rounded-lg w-full text-center sm:text-2xl md:text-3xl font-medium bg-black py-1 text-white mb-2"
        id="formName"
        name=""
      >
        Details of the Programme Organized by the Department for the Students
        (Extra-Curricular & Co-Curricular)
      </div>
      <div class="md:w-full px-3 mb-3 md:mb-0">
        <label
          class="block uppercase tracking-wide text-grey-darker text-lg font-medium mb-2"
          htmlFor="nameoftheprogramme"
        >
          Name of the programme/competition{" "}
          <span class="text-[10px] font-thin">(programme name)</span>
        </label>
        <input
          required
          class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
          id="nameoftheprogramme"
          name="nameoftheprogramme"
          type="text"
          placeholder="NA"
        />
      </div>
      <div class="lg:flex space-x-0 lg:space-x-5 items-center">
        <div class="md:w-full px-3 mb-3 md:mb-0">
          <label
            class="block uppercase tracking-wide text-grey-darker text-lg font-medium mb-2"
            htmlFor="branch"
          >
            Branch
          </label>
          <input
            required
            class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
            id="branch"
            name="branch"
            type="text"
            placeholder="Branch"
          />
        </div>
        <div class="md:w-full px-3 mb-3 md:mb-0">
          <label
            class="block uppercase tracking-wide text-grey-darker text-lg font-medium mb-2"
            htmlFor="semester"
          >
            Semester
          </label>
          <input
            required
            class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
            id="semester"
            name="semester"
            type="text"
            placeholder="NA"
          />
        </div>
        <div class="-mx-3 lg:flex mb-2 px-3">
          <div class="sm:flex w-full justify-between">
            <div class="md:w-full px-3 mb-3 md:mb-0">
              <label
                class="block uppercase tracking-wide text-grey-darker text-md font-medium mb-1 md:mb-2"
                htmlFor="typeofprogramme/competition"
              >
                Type of programme/competition
              </label>
              <input
                required
                class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
                id="typeofprogramme/competition"
                name="typeofprogramme/competition"
                type="text"
                placeholder="NA"
              />
            </div>
          </div>
        </div>


      </div>
      <div class="lg:flex space-x-0 lg:space-x-5 items-center">

        <div class="md:w-full px-3 mb-3 md:mb-0">
          <label
            class="block uppercase tracking-wide text-grey-darker text-lg font-medium mb-2"
            htmlFor="organisedby(details)"
          >
            Organised by(details)
          </label>
          <input
            required
            class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
            id="organisedby(details)"
            name="organisedby(details)"
            type="text"
            placeholder="NA"
          />
        </div>
        <div class="-mx-3 lg:flex mb-2 px-3">
          <div class="sm:flex w-full justify-between">
            <div class="md:w-full px-3 mb-3 md:mb-0">
              <label
                class="block uppercase tracking-wide text-grey-darker text-md font-medium mb-1 md:mb-2"
                htmlFor="organisededuring"
              >
                Organised during
              </label>
              <input
                required
                class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
                id="organisededuring"
                name="organisededuring"
                type="text"
                placeholder="NA"
              />
            </div>
          </div>
        </div>
        <div class="-mx-3 lg:flex mb-2 px-3">
          <div class="sm:flex w-full justify-between">
            <div class="md:w-full px-3 mb-3 md:mb-0">
              <label
                class="block uppercase tracking-wide text-grey-darker text-md font-medium mb-1 md:mb-2"
                htmlFor="level"
              >
                Level<span class="text-[10px] font-thin"></span>
              </label>
              <input
                required
                class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
                id="level"
                name="level"
                type="text"
                placeholder="NA"
              />
            </div>
          </div>
        </div>
        <div class="md:w-full px-3 mb-3 md:mb-0">
          <label
            class="block uppercase tracking-wide text-grey-darker text-lg font-medium mb-2"
            htmlFor="awards"
          >
            Awards
          </label>
          <input
            required
            class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
            id="awards"
            name="awards"
            type="text"
            placeholder="NA"
          />
        </div>

      </div>
        <button class="flex mx-auto mt-16 text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-gray-700 rounded-full text-lg">
          Submit
        </button>
    </form>
  );
};

export default TwentyTwo;
