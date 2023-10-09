import React from "react";
import { useState,useEffect } from "react";
import One from "./1";
import Two from "./2";
import Three from "./3";
import Four from "./4";
import Five from "./5";
import Six from "./6";
import Seven from "./7";
import Eight from "./8";
import Nine from "./9";
import Ten from "./10";
import Eleven from "./11";
import Twelve from "./12";
import Thirteen from "./13";
import Fourteen from "./14";
import Fifteen from "./15";
import Sixteen from "./16";
import Seventeen from "./17";
import Eighteen from "./18";
import Nineteen from "./19";
import Twenty from "./20";
import TwentyOne from "./21";
import TwentyTwo from "./22";
import TwentyThree from "./23";
import TwentyFour from "./24";
import TwentyFive from "./25";
import TwentySix from "./26";
import TwentySeven from "./27";
import TwentyEight from "./28";
import TwentyNine from "./29";
import Thirty from "./30";
import Cookies from "js-cookie";

const Forms = () => {
  const [selectedvalue, setSelectedvalue] = useState()
  const [quarter, setQuarter] = useState()
  const [role, setRole] = useState("student")

  useEffect(() => {
    setRole(Cookies.get("role"))
  }, [])
  
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
  const selectStudentOptions=[
    // {
    //     "text": "Details of the Published Research Articles/Papers in Journals/Periodicals",
    //     "number": 1
    // },
    // {
    //     "text": "Details of the Paper Publication in Conferences (in related area/subject):[specify the details of collaborative authors]",
    //     "number": 2
    // },
    // {
    //     "text": "Details of the Short Term Training Program/Workshop Attended By Faculty Members",
    //     "number": 3
    // },
    // {
    //     "text": "Details of the Books/Monographs Published as Author/Co-Author",
    //     "number": 4
    // },
    // {
    //     "text": "Details of Faculty as Editor/Co-Editor/Members of Editorial Board of Journals/Books",
    //     "number": 5
    // },
    // {
    //     "text": "Details of the Chapters published in Books/Reference books/Edited books (other than journal)",
    //     "number": 6
    // },
    // {
    //     "text": "Details of the faculty being the member of various bodies/Committees at the University/State/National Level",
    //     "number": 7
    // },
    // {
    //     "text": "Details of the Patents Filed/Technology Transfer by the Faculty Members",
    //     "number": 8
    // },
    // {
    //     "text": "Details of Reviewers of Research Papers in Journals/Conferences",
    //     "number": 9
    // },
    // {
    //     "text": "Details of the Research Guidance during the mentioned quarter",
    //     "number": 10
    // },
    // {
    //     "text": "Details of the Faculty Membership of Professional Bodies (Only newly added membership mention here)",
    //     "number": 11
    // },
    // {
    //     "text": "Details of the Development of Course/Laboratory Modules related to enhancement of TLP",
    //     "number": 12
    // },
    // {
    //     "text": "Details of Organized Seminar/STTP/Guest Lecture/Workshop For faculty",
    //     "number": 13
    // },
    // {
    //     "text": "Details of the Faculty Members Invited As Resource Person",
    //     "number": 14
    // },
    // {
    //     "text": "Details of the Development of New Laboratory/Equipments in the Department",
    //     "number": 15
    // },
    // {
    //     "text": "Details of the Sponsored Projects Undertaken By the Department",
    //     "number": 16
    // },
    // {
    //     "text": "Details of the Consultancy Projects (Carried out/Ongoing)",
    //     "number": 17
    // },
    // {
    //     "text": " Data Regarding the Theory Subjects Only Are To Be Mentioned (Please Provide the Information In Separate Sheet Semester-wise)",
    //     "number": 18
    // },
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
    <div>
      <div>
        <div className="min-h-screen ">
          <div className="flex justify-center">
            <div className="mr-4 backdrop-blur-xl shadow-md rounded-xl bg-white px-4 pt-6 pb-8 mb-4 flex flex-col my-2   mx-auto">
              <div className="relative md:ml-28">
                <div className="">
                <label
                    htmlFor="formType"
                    className="text-sm text-center md:text-3xl font-bold md:font-semibold tracking-wide mb-1 ml-4 md:p-4"
                  >
                    Select Month Quarter
                  </label>
                <select onChange={(e) => setQuarter(e.target.value)} className="block  my-10 w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8  rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                  <option value="" disabled selected>Select Month Quarter</option>
                      <option  className="text-sm" value="1">Q1.Jan-Mar</option>
                      <option  className="text-sm" value="1">Q2.Apr-Jun</option>
                      <option  className="text-sm" value="1">Q3.Jul-Sep</option>
                      <option  className="text-sm" value="1">Q4.Oct-Dec</option>
                    
                  </select>
                  <label
                    htmlFor="formType"
                    className="text-sm text-center md:text-3xl font-bold md:font-semibold tracking-wide mb-1 ml-4 md:p-4"
                  >
                    Select a form according to your achievement
                  </label>
                  <select onChange={(e) => {setSelectedvalue(e.target.value)}} className="block  my-10 w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8  rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                  <option value="" disabled selected>Select a form</option>
                    {role=="teacher" && selectOptions.map((option) => (
                      <option key={option.number} className="text-sm" value={option.number}>T-{option.number}. {option.text}</option>
                    ))}
                    {role=="student" && selectStudentOptions.map((option) => (
                      <option key={option.number} className="text-sm" value={option.number}>T-{option.number}. {option.text}</option>
                    ))}
                    
                  </select>
                  

                  {/* ... other inputs ... */}
                </div>
                {/* ... other inputs ... */}
              </div>
              {quarter && selectedvalue && (() => {
                // console.log(typeof selectedvalue,"here")
        switch (selectedvalue) {
          case '1':
            return <One />;
          case '2':
            return <Two />;
          case '3':
            return <Three />;
          case '4':
            return <Four />;
          case '5':
            return <Five />;
          case '6':
            return <Six />;
          case '7':
            return <Seven />;
          case '8':
            return <Eight />;
          case '9':
            return <Nine />;
          case '10':
            return <Ten />;
          case '11':
            return <Eleven />;
          case '12':
            return <Twelve />;
          case '13':
            return <Thirteen />;
          case '14':
            return <Fourteen />;
          case '15':
            return <Fifteen />;
          case '16':
            return <Sixteen />;
          case '17':
            return <Seventeen />;
          case '18':
            return <Eighteen />;
          case '19':
            return <Nineteen />;
          case '20':
            return <Twenty />;
          case '21':
            return <TwentyOne />;
          case '22':
            return <TwentyTwo />;
          case '23':
            return <TwentyThree />;
          case '24':
            return <TwentyFour />;
          case '25':
            return <TwentyFive />;
          case '26':
            return <TwentySix />;
          case '27':
            return <TwentySeven />;
          case '28':
            return <TwentyEight />;
          case '29':
            return <TwentyNine />;
          case '30':
            return <Thirty />;
          
          default:
            return <p className="text-2xl font-semibold text-center">Select a Form to fill details</p>;
        }
      })()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forms;
