import Cookies from "js-cookie";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TwentyOne = ({ quarter }) => {
  const [form, setForm] = useState({
    name: "",
    branch: "",
    semester: "",
    type_of_competition: "",
    orgainzed_by: "",
    organized_during: "",
    level: "",
    awards: "",
  });

  const handleInputChange = (e) => {
    // const { name, value } = e.target;
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hadlesubmit is running")
    let token = Cookies.get("jwtoken");
    try {
      const data = {
        data: {
          name: form.name,
          branch: form.branch,
          semester: form.semester,
          type_of_competition: form.type_of_competition,
          orgainzed_by: form.orgainzed_by,
          organized_during: form.organized_during,
          level: form.level,
          awards: form.awards,
        },
      };
      console.log(data, "data")
      console.log(`${process.env.NEXT_PUBLIC_BHOST}/api/competitions-organized-or-participation-by-the-students`);
      let a = await fetch(
        `${process.env.NEXT_PUBLIC_BHOST}
        /api/competitions-organized-or-participation-by-the-students`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(data),
        }
      );
      
      console.log(a, "a");
      console.log("form2");
      let response = await a.json();
      console.log(response, "response");
      console.log(data, "data");
      console.log("form", form);
      toast.success("Form Submiteed Successfully", {
        position: "top-right",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    } catch (error) {
      toast.error(error, {
        position: "top-right",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    }
    //     setForm({
    //      name: '',
    //      articleName: '',
    //      journalName: '',
    //      snip: '',
    //      sjr: '',
    //      hIndex: '',
    //      impactFactor: '',
    //      ISSN: '',
    //      Publisher: '',
    //      Month: '',
    //      Year: '',
    //      Volume: '',
    //      Issue: '',
    //      DOI: '',
    //      pagenum: '',
    //      Citation: '',
    //      Indexed: '',
    //      quarter:'',
    //    });
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="mr-4 backdrop-blur-xl shadow-md rounded-xl bg-white px-4 pt-6 pb-8 mb-4 flex flex-col my-2 w-11/12  mx-auto"
      >
        <div
          className="text-md rounded-lg w-full text-center sm:text-2xl md:text-3xl font-medium bg-black py-1 text-white mb-2"
          id="formName"
          name=""
        >
          Details of the Competitions Organized/Participation by the Students
          (Extra-Curricular & Co-Curricular)
        </div>
        <div className="md:w-full px-3 mb-3 md:mb-0">
          <label
            className="block uppercase tracking-wide text-grey-darker text-lg font-medium mb-2"
            htmlFor="name"
          >
            Name of the student{" "}
            <span className="text-[10px] font-thin">(student name)</span>
          </label>
          <input
            required
            value={form.name}
            onChange={handleInputChange}
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
            id="name"
            name="name"
            type="text"
            placeholder="NA"
          />
        </div>
        <div className="lg:flex space-x-0 lg:space-x-5">
          <div className="md:w-full px-3 mb-3 md:mb-0">
            <label
              className="block uppercase tracking-wide text-grey-darker text-lg font-medium mb-2"
              htmlFor="branch"
            >
              Branch
            </label>
            <input
              required
              value={form.branch}
              onChange={handleInputChange}
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
              htmlFor="semester"
            >
              Semester
            </label>
            <input
              required
              value={form.semester}
              onChange={handleInputChange}
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
                htmlFor="type_of_competition"
              >
                Type of programme/competition
              </label>
              <input
                required=""
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
                value={form.type_of_competition}
              onChange={handleInputChange}
                id="type_of_competition"
                name="type_of_competition"
                type="text"
                placeholder="NA"
              />
            </div>
          </div>
        </div>
        <div className="md:w-full px-3 mb-3 md:mb-0">
          <label
            className="block uppercase tracking-wide text-grey-darker text-lg font-medium mb-2"
            htmlFor="orgainzed_by"
          >
            Organised by(details)
          </label>
          <input
            required=""
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
            value={form.orgainzed_by}
              onChange={handleInputChange}
            id="orgainzed_by"
            name="orgainzed_by"
            type="text"
            placeholder="NA"
          />
        </div>
        <div className="-mx-3 lg:flex mb-2 px-3">
          <div className="sm:flex w-full justify-between">
            <div className="md:w-full px-3 mb-3 md:mb-0">
              <label
                className="block uppercase tracking-wide text-grey-darker text-md font-medium mb-1 md:mb-2"
                htmlFor="organized_during"
              >
                Organised during
              </label>
              <input
                required=""
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
                id="organized_during"
                value={form.organized_during}
              onChange={handleInputChange}
                name="organized_during"
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
                htmlFor="level"
              >
                Level
                <span className="text-[10px] font-thin" />
              </label>
              <input
                required=""
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
                id="level"
                value={form.level}
              onChange={handleInputChange}
                name="level"
                type="text"
                placeholder="NA"
              />
            </div>
          </div>
        </div>
        <div className="md:w-full px-3 mb-3 md:mb-0">
          <label
            className="block uppercase tracking-wide text-grey-darker text-lg font-medium mb-2"
            htmlFor="awards"
          >
            Awards
          </label>
          <input
            required=""
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
            id="awards"
            value={form.awards}
              onChange={handleInputChange}
            name="awards"
            type="text"
            placeholder="NA"
          />
        </div>
        <button className="flex mx-auto mt-16 text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-gray-700 rounded-full text-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TwentyOne;
