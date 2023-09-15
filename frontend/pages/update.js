import React from 'react'
import { useState } from 'react'
const Update = () => {
  const [selectedvalue, setSelectedvalue] = useState()
  const [quarter, setQuarter] = useState()
  const selectOptions=[
    {
        "text": "Details of the Published Research Articles/Papers in Journals/Periodicals",
        "number": 1
    },
    {
        "text": "Details of the Paper Publication in Conferences (in related area/subject):[specify the details of collaborative authors]",
        "number": 2
    },
    {
        "text": "Details of the Short Term Training Program/Workshop Attended By Faculty Members",
        "number": 3
    },
    {
        "text": "Details of the Books/Monographs Published as Author/Co-Author",
        "number": 4
    },
    {
        "text": "Details of Faculty as Editor/Co-Editor/Members of Editorial Board of Journals/Books",
        "number": 5
    },
    {
        "text": "Details of the Chapters published in Books/Reference books/Edited books (other than journal)",
        "number": 6
    },
    {
        "text": "Details of the faculty being the member of various bodies/Committees at the University/State/National Level",
        "number": 7
    },
    {
        "text": "Details of the Patents Filed/Technology Transfer by the Faculty Members",
        "number": 8
    },
    {
        "text": "Details of Reviewers of Research Papers in Journals/Conferences",
        "number": 9
    },
    {
        "text": "Details of the Research Guidance during the mentioned quarter",
        "number": 10
    },
    {
        "text": "Details of the Faculty Membership of Professional Bodies (Only newly added membership mention here)",
        "number": 11
    },
    {
        "text": "Details of the Development of Course/Laboratory Modules related to enhancement of TLP",
        "number": 12
    },
    {
        "text": "Details of Organized Seminar/STTP/Guest Lecture/Workshop For faculty",
        "number": 13
    },
    {
        "text": "Details of the Faculty Members Invited As Resource Person",
        "number": 14
    },
    {
        "text": "Details of the Development of New Laboratory/Equipments in the Department",
        "number": 15
    },
    {
        "text": "Details of the Sponsored Projects Undertaken By the Department",
        "number": 16
    },
    {
        "text": "Details of the Consultancy Projects (Carried out/Ongoing)",
        "number": 17
    },
    {
        "text": " Data Regarding the Theory Subjects Only Are To Be Mentioned (Please Provide the Information In Separate Sheet Semester-wise)",
        "number": 18
    },
    {
        "text": "Details of the Published Research Articles/Papers in Journals/Periodicals by the students",
        "number": 19
    },
    {
        "text": "Details of the Research Paper Presented by the Students in a conferences",
        "number":20
    },
    {
        "text": "Details of the Competitions Organized/Participation by the Students (Extra-Curricular & Co-Curricular)",
        "number": 21
    },
    {
        "text": "Details of the Programme Organized by the Department for the Students (Extra-Curricular & Co-Curricular)",
        "number": 22
    },
    {
        "text": "Details of Sponsored/Collaboration with industry Projects Carried Out By Students as a Part of Their Curriculum (If Applicable)",
        "number": 23
    },
    {
        "text": "Details of the Students Qualified GATE/GRE/TOFEL/CAT/GMAT/MAT",
        "number": 24
    },
    {
        "text": "Details of the Students selected in Campus Recruitment",
        "number": 25
    },
    {
        "text": "Details of the Students selected in Government (Central/State)/Public Sector Units",
        "number": 26
    },
    {
        "text": "Complete Details of the Students selected in Companies and Higher Studies (For the students passed in the June 20XX(e.g. 2017), their details of placement and admission to higher studies to be submitted in the quarterly report of Jan-March(2018)). It may contain entire list of the concerned batch",
        "number": 27
    },
    {
        "text": "Details of Certification Courses completed by the Students(NPTEL/Spoken Tutorials/Others)",
        "number": 28
    },
    {
        "text": "Details of the vocational training/workshop/industrial visit completed by the Students",
        "number": 29
    },
    {
        "text": "Details of Special Mention achievements/Awards Received by the current students/Alumni",
        "number": 30
    }
]
    return (
        <div className="justify-center my-10   md:flex mx-auto">
          {/* <div>
            <div className="bg-white py-2 px-4 flex justify-between md:h-52">
              <h2 className="text-black text-xl md:text-2xl mt-2 text-center">
                Request For Update
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
          </div> */}
          <div className="bg-gray-100 px-6 py-8 w-full md:w-3/5 rounded-lg shadow-lg" id="contact_us">
            <div className="flex justify-between">
              <h2 className="text-black text-xl font-bold rounded-lg p-2">Request for Update</h2>
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
                  <select onChange={(e) => {setSelectedvalue(e.target.value)}} className="block  w-full  border border-gray-200 text-gray-700 p-1  rounded  focus:outline-none focus:bg-white focus:border-gray-500">
                  <option value="" disabled selected>Select a form</option>
                    {selectOptions.map((option) => (
                      <option key={option.number} className="text-sm" value={option.number}>{option.number}.{option.text}</option>
                    ))}
                    
                  </select>
                  <div className="pointer-events-none absolute top-8 right-0 items-center px-2 text-gray-700">
                    {/* <svg
                      className="fill-current h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg> */}
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
                <select onChange={(e) => setQuarter(e.target.value)} className="block  my-10 w-full  border border-gray-200 text-gray-700 p-1 pr-8  rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                  <option value="" disabled selected>Select Month Quarter</option>
                      <option  className="text-sm" value="1">Q1.Jan-Mar</option>
                      <option  className="text-sm" value="1">Q2.Apr-Jun</option>
                      <option  className="text-sm" value="1">Q3.Jul-Sep</option>
                      <option  className="text-sm" value="1">Q4.Oct-Dec</option>
                    
                  </select>                <div className="pointer-events-none float-right -translate-y-9 -translate-x-3 text-gray-700">
                  {/* <svg
                    className="fill-current h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg> */}
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
              className="text-sm bg-black px-4 py-2 rounded-md text-white  cursor-pointer hover:shadow-md mt-5"
            />
          </div>
        </div>
        )
}

export default Update