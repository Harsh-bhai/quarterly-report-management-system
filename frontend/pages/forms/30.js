import React,{useState} from 'react'
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Thirty = () => {
  const [form, setForm] = useState({
    name:'',
    award_name:'',
    Name_of_the_Work_for_which_Award_is_received:'',
    Date_of_Award_Received:'',
    Name_of_Awarding_Organization:'',
    Level_of_Award_University_State_or_National_or_International:'',
  })
  const handleInputChange = (e) => {
    // const { name, value } = e.target;
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit =async(e) => {
    e.preventDefault();
    let token=Cookies.get("jwtoken")
    try {
      const data = {
        data: {
          name: form.name,
          award_name: form.award_name,
          Name_of_the_Work_for_which_Award_is_received: form.Name_of_the_Work_for_which_Award_is_received,
          Date_of_Award_Received: form.Date_of_Award_Received,
          Name_of_Awarding_Organization: form.Name_of_Awarding_Organization,
          Level_of_Award_University_State_or_National_or_International: form.Level_of_Award_University_State_or_National_or_International,
        },
      };
      let a = await fetch(`${process.env.NEXT_PUBLIC_BHOST}/api/special-mention-achievements-received-by-students-or-alumnis

      `, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
      let response=await a.json()
      console.log(response,"response");
      console.log(data,"data");
      console.log("form",form)
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
      <form onSubmit={handleSubmit} className="mr-4 backdrop-blur-xl shadow-md rounded-xl bg-white px-4 pt-6 pb-8 mb-4 flex flex-col my-2 w-11/12  mx-auto">
  <div
    className="text-md rounded-lg w-full text-center sm:text-2xl md:text-3xl font-medium bg-black py-1 text-white mb-2"
    id="formName"
    name=""
  >
    Details of special mention achievements/awards recieved by current
    students/alumni:
  </div>
  <div className="md:w-full px-3 mb-3 md:mb-0">
    <label
      className="block uppercase tracking-wide text-grey-darker text-lg font-medium mb-2"
      htmlFor="name"
    >
      Name of student/Alumni{" "}
      <span className="text-[10px] font-thin">(student name)</span>
    </label>
    <input onChange={handleInputChange}
      required=""
      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
      id="name"
      name="name"
      type="text"
      value={form.name}
      placeholder="Jane"
    />
  </div>
  <div className="lg:flex space-x-0 lg:space-x-5">
    <div className="md:w-full px-3 mb-3 md:mb-0">
      <label
        className="block uppercase tracking-wide text-grey-darker text-lg font-medium mb-2"
        htmlFor="award_name"
      >
        Name of the Award
      </label>
      <input onChange={handleInputChange}
        required=""
        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
        id="award_name"
        name="award_name"
        type="text"
        value={form.award_name}
        placeholder="Award name"
      />
    </div>
    <div className="md:w-full px-3 mb-3 md:mb-0">
      <label
        className="block uppercase tracking-wide text-grey-darker text-lg font-medium mb-2"
        htmlFor="Name_of_the_Work_for_which_Award_is_received"
      >
        Name of the Work for which Award is received
      </label>
      <input onChange={handleInputChange}
        required=""
        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
        id="Name_of_the_Work_for_which_Award_is_received"
        name="Name_of_the_Work_for_which_Award_is_received"
        type="text"
        value={form.Name_of_the_Work_for_which_Award_is_received}
        placeholder="Static analysis"
      />
    </div>
  </div>
  <div className="-mx-3 lg:flex mb-2 px-3">
    <div className="sm:flex w-full justify-between">
      <div className="md:w-full px-3 mb-3 md:mb-0">
        <label
          className="block uppercase tracking-wide text-grey-darker text-md font-medium mb-1 md:mb-2"
          htmlFor="Date_of_Award_Received"
        >
          Date of Award Received
        </label>
        <input onChange={handleInputChange}
          required=""
          className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
          id="Date_of_Award_Received"
          name="Date_of_Award_Received"
          type="text"
          value={form.Date_of_Award_Received}
          placeholder="09.05.2023"
        />
      </div>
      <div className="md:w-full px-3 mb-3 md:mb-0">
        <label
          className="block uppercase tracking-wide text-grey-darker text-md font-medium mb-1 md:mb-2"
          htmlFor="Name_of_Awarding_Organization"
        >
          Name of Awarding Organization
        </label>
        <input onChange={handleInputChange}
          required=""
          className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
          id="Name_of_Awarding_Organization"
          name="Name_of_Awarding_Organization"
          type="text"
          value={form.Name_of_Awarding_Organization}
          placeholder="MSGB university"
        />
      </div>
    </div>
    <div className="sm:flex w-full justify-between">
      <div className="md:w-full px-3 mb-3 md:mb-0">
        <label
          className="block uppercase tracking-wide text-grey-darker text-md font-medium mb-1 md:mb-2"
          htmlFor="Level_of_Award_University_State_or_National_or_International"
        >
          Level of Award{" "}
          <span className="text-[10px] font-thin">
            (University/State/National/International)
          </span>
        </label>
        <input onChange={handleInputChange}
          required=""
          className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
          id="Level_of_Award_University_State_or_National_or_International"
          name="Level_of_Award_University_State_or_National_or_International"
          type="text"
          placeholder="National/state"
          value={form.Level_of_Award_University_State_or_National_or_International}
        />
      </div>
    </div>
  </div>
      <button className="flex mx-auto  mt-16 text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-gray-700 rounded-full text-lg">
        Submit
      </button>
</form>

    </div>
  )
}

export default Thirty
