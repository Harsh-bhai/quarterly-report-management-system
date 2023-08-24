import React from 'react'

const Update = () => {
    return (
        <div className="w-11/12 md:flex mx-auto">
          <div>
            <div className="bg-black py-2 px-4 flex justify-between md:h-52">
              <h2 className="text-white text-xl md:text-2xl mt-2 text-center">
                Contact Information
              </h2>
              <svg
                id="conatactbutton"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 md:hidden"
                fill="white"
                viewBox="0 0 16 16"
              >
                <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
              </svg>
            </div>
            <div className="bg-black hidden md:block">
              <img
                src="..//Assets/Bit-logo.png"
                alt="Bit Logo"
                className="h-32 w-32 rounded-md mx-auto"
              />
              <div className="text-white font-semibold text-center text-2xl">
                Asiper To Excel
              </div>
              <div className="text-white font-semibold text-center text-xl">
                BIT Durg
              </div>
            </div>
            <div id="contact" className="hidden md:block bg-black p-5">
              <div className="flex flex-row">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-slate-200 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-slate-200 text-xs pt-2.5">
                    Name : David Warner
                  </h2>
                </div>
              </div>
              <div className="mt-4 flex flex-row">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-slate-200 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-slate-200 text-xs pt-2.5">
                    Email : davidwarner323@xyz.com
                  </h2>
                </div>
              </div>
              <div className="mt-4 flex flex-row">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-slate-200 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-slate-200 text-xs pt-2.5">
                    Phone : 123-456-789-01
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 px-6 py-8 w-full md:w-3/5" id="contact_us">
            <div className="flex justify-between">
              <h2 className="text-blue-800 text-xl">Get In Touch</h2>
            </div>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full text-md py-4 font-thin text-black px-3 h-8 my-2 outline-none rounded-md border focus:shadow-sm"
            />
            <br />
            <input
              type="text"
              placeholder="Enter Your Email"
              className="w-full text-md py-4 font-thin px-3 h-8 my-2 outline-none rounded-md border focus:shadow-sm"
            />
            <br />
            <input
              type="text"
              placeholder="Subject"
              className="w-full text-md py-4 font-thin px-3 h-8 my-2 outline-none rounded-md border focus:shadow-sm"
            />
            <br />
            <div className="relative">
              <div className="space-y-1 mt-2">
                <div>
                  <label
                    htmlFor="formType"
                    className="pl-1 text-sm text-center md:text-md font-medium tracking-wide"
                  >
                    Select the filed of your achivement
                  </label>
                  <select
                    className="mt-1 block appearance-none w-full border bg-white text-sm text-gray-600 py-2 font-thin px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="formType"
                  >
                    <option value="" className="text-sm text-black">
                      Published ResearchArticles/Papers in Journals/Periodicals
                    </option>
                    <option value="" className="text-sm text-black">
                      Paper Publication in Conferences (in related
                      area/subject):[specify the details of collaborative authors]
                    </option>
                    <option value="" className="text-sm text-black">
                      Short Term Training Program/Workshop Attended By Faculty Members
                    </option>
                    <option value="" className="text-sm text-black">
                      Books/Monographs Published as Author/Co-Author
                    </option>
                    <option value="" className="text-sm text-black">
                      Details of Faculty as Editor/ Co-Editor/Members of Editorial
                      Board of Journals/Books
                    </option>
                    <option value="" className="text-sm text-black">
                      Chapters published in Books/Reference books/Edited books (other
                      than journal)
                    </option>
                    <option value="" className="text-sm text-black">
                      faculty being the member of various bodies/Committees at the
                      University/ State/ National Level
                    </option>
                    <option value="" className="text-sm text-black">
                      Patents Filed/Technology Transfer by the Faculty Members
                    </option>
                    <option value="" className="text-sm text-black">
                      Reviewers of Research Papers in Journals/ Conferences
                    </option>
                    <option value="" className="text-sm text-black">
                      Research Guidance during the mentioned quarter
                    </option>
                    <option value="" className="text-sm text-black">
                      Faculty Membership of Professional Bodies (Only newly added
                      membership mention here)
                    </option>
                    <option value="" className="text-sm text-black">
                      Development of Course/Laboratory Modules related to enhancement
                      of TLP
                    </option>
                    <option value="" className="text-sm text-black">
                      Organized Seminar/STTP/Guest Lecture/Workshop For faculty
                    </option>
                    <option value="" className="text-sm text-black">
                      Faculty Members Invited As Resource Person
                    </option>
                    <option value="" className="text-sm text-black">
                      Development of New Laboratory/Equipments in the Department
                    </option>
                    <option value="" className="text-sm text-black">
                      Sponsored Projects Undertaken By the Department
                    </option>
                    <option value="" className="text-sm text-black">
                      Consultancy Projects (Carried out/Ongoing)
                    </option>
                    <option value="" className="text-sm text-black" />
                    <option value="" className="text-sm text-black">
                      Published Research Articles/Papers in Journals/Periodicals by
                      the students
                    </option>
                    <option value="" className="text-sm text-black">
                      Research Paper Presented by the Students in a conferences
                    </option>
                    <option value="" className="text-sm text-black">
                      Competitions Organized/Participation by the Students
                      (Extra-Curricular &amp; Co-Curricular
                    </option>
                    <option value="" className="text-sm text-black">
                      Programme Organized by the Department for the Students
                      (Extra-Curricular &amp; Co-Curricular)
                    </option>
                    <option value="" className="text-sm text-black">
                      Sponsored/Collaboration with industry Projects Carried Out By
                      Students as a Part of Their Curriculum (If Applicable)
                    </option>
                    <option value="" className="text-sm text-black">
                      Students Qualified GATE/GRE/TOFEL/CAT/GMAT/MAT
                    </option>
                    <option value="" className="text-sm text-black">
                      Students selected in Campus Recruitment
                    </option>
                    <option value="" className="text-sm text-black">
                      Students selected in Government (Central/State)/Public Sector
                      Units
                    </option>
                    <option value="" className="text-xs">
                      Selected in Companies and Higher Studies (For the students
                      passed in the June 20XX(e.g. 2017), their details of placement
                      and admission to higher studies to be submitted in the quarterly
                      report of Jan-March(2018)). It may contain entire list of the
                      concerned batch
                    </option>
                    <option value="" className="text-sm text-black">
                      Certification Courses completed by the Students(NPTEL/Spoken
                      Tutorials/Others)
                    </option>
                    <option value="" className="text-sm text-black">
                      Vocational training /workshop/industrial visit completed by the
                      Students
                    </option>
                    <option value="" className="text-sm text-black">
                      Special Mention achievements/Awards Received by the current
                      students/Alumni
                    </option>
                  </select>
                  <div className="pointer-events-none absolute top-8 right-0 items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="space-y-1 mt-2">
                <label
                  htmlFor="quaterofyear"
                  className="pl-1 text-sm text-center md:text-md font-medium tracking-wide mb-1"
                >
                  Select the quater of year
                </label>
                <select
                  className="block appearance-none w-full bg-white border font-thin border-gray-200 text-gray-600 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="quaterofyear"
                >
                  <option value="" className="text-sm text-black">
                    January-March
                  </option>
                  <option value="" className="text-sm text-black">
                    April-June
                  </option>
                  <option value="" className="text-sm text-black">
                    July-September
                  </option>
                  <option value="" className="text-sm text-black">
                    October-December
                  </option>
                </select>
                <div className="pointer-events-none float-right -translate-y-9 -translate-x-3 text-gray-700">
                  <svg
                    className="fill-current h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>  
            <div className="flex space-x-4 mt-3 mb-2 relative">
              <div className="text-gray-600 text-md pl-2">Message</div>
              <svg
                id="infoLogo"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                />
              </svg>
              <div
                id="info"
                className="hidden shadow-2xl bg-white absolute w-80 h-fit p-2 rounded-lg left-28 -top-2 text-sm"
              >
                Give the description about what are the things you want to update in
                the your achivment specify the the filed name along with the updated
                value then concerned person for the process will look into it. For
                more details contact on the phone number or via email mentioned on
                left.
              </div>
            </div>
            <textarea
              placeholder="Enter your Message here"
              className="w-full text-sm px-3 py-2 h-20 outline-none rounded-md border focus:shadow-sm resize-none"
              defaultValue={""}
            />
            <br />
            <input
              type="submit"
              defaultValue="Send"
              className="text-sm bg-blue-800 px-4 py-2 rounded-md text-white  cursor-pointer hover:shadow-md mt-5"
            />
          </div>
        </div>
        )
}

export default Update