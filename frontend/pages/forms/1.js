import Cookies from 'js-cookie';
import React,{useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const One = ({quarter}) => {
     const [form, setForm] = useState({
          name: '',
          articleName: '',
          journalName: '',
          snip: '',
          sjr: '',
          hIndex: '',
          impactFactor: '',
          ISSN: '',
          Publisher: '',
          Month: '',
          Year: '',
          Volume: '',
          Issue: '',
          DOI: '',
          pagenum: '',
          Citation: '',
          Indexed: '',
          quarter:'',
        });

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
               Authors: form.name,
               Title: form.articleName,
               Journal: form.journalName,
               SNIP: form.snip,
               SJR: form.sjr,
               H_Index: form.hIndex,
               Impact_Factor: form.impactFactor,
               ISSN: form.ISSN,
               Year: form.Year,
               Issue: form.Issue,
               Page_No: form.pagenum,
               Indexed: form.Indexed,
               Quarter:quarter,
               Citation: form.Citation,
               DOI: form.DOI,
               Month: form.Month,
               Publisher: form.Publisher,
               Vol: form.Vol,
              },
            };
            let a = await fetch(`${process.env.NEXT_PUBLIC_BHOST}/api/details-of-the-published-research-articles-in-journals`, {
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
        <form onSubmit={handleSubmit}
    className="mr-4 backdrop-blur-xl shadow-md rounded-xl bg-white px-4 pt-6 pb-8 mb-4 flex flex-col my-2 w-11/12  mx-auto">
    <div className="text-md rounded-lg w-full text-center sm:text-2xl md:text-3xl font-medium bg-black py-1 text-white mb-2"
         id="formName" name=''>Published Research
         Articles/Papers in Journals/Periodicals</div>
    <div className="md:w-full px-3 mb-3 md:mb-0">
         <label className="block uppercase tracking-wide text-grey-darker text-lg font-medium mb-2"
              htmlFor="name">
              Author <span className="text-[10px] font-thin">(student name)</span>
         </label>
         <input required value={form.name} onChange={handleInputChange}
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
              id="name" name='name' type="text" placeholder="Jane"/>
    </div>
    <div className="lg:flex space-x-0 lg:space-x-5">
         <div className="md:w-full px-3 mb-3 md:mb-0">
              <label
                   className="block uppercase tracking-wide text-grey-darker text-lg font-medium mb-2"
                   htmlFor="articleName">
                   Title
              </label>
              <input required value={form.articleName} onChange={handleInputChange}
                   className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
                   id="articleName" name='articleName' type="text" placeholder="Human Rights"/>
         </div>
         <div className="md:w-full px-3 mb-3 md:mb-0">
              <label
                   className="block uppercase tracking-wide text-grey-darker text-lg font-medium mb-2"
                   htmlFor="journalName">
                   Journal
              </label>
              <input required value={form.journalName} onChange={handleInputChange}
                   className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
                   id="journalName" name='journalName' type="text" placeholder="Human Rights Abuse"/>
         </div>
    </div>
    <div className="-mx-3 lg:flex mb-2 px-3">
         <div className="sm:flex w-full justify-between">
              <div className="md:w-full px-3 mb-3 md:mb-0">
                   <label
                        className="block uppercase tracking-wide text-grey-darker text-md font-medium mb-1 md:mb-2"
                        htmlFor="snip">
                        SNIP
                   </label>
                   <input required value={form.snip} onChange={handleInputChange}
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
                        id="snip" name='snip' type="text" placeholder="SNIP Value"/>
              </div>
              <div className="md:w-full px-3 mb-3 md:mb-0">
                   <label
                        className="block uppercase tracking-wide text-grey-darker text-md font-medium mb-1 md:mb-2"
                        htmlFor="sjr">
                        SJR
                   </label>
                   <input required value={form.sjr} onChange={handleInputChange}
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
                        id="sjr" name='sjr' type="text" placeholder="SJR Value"/>
              </div>
         </div>
         <div className="sm:flex w-full justify-between">
              <div className="md:w-full px-3 mb-3 md:mb-0">
                   <label
                        className="block uppercase tracking-wide text-grey-darker text-md font-medium mb-1 md:mb-2"
                        htmlFor="hIndex">
                        H Index
                   </label>
                   <input required value={form.hIndex} onChange={handleInputChange}
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
                        id="hIndex" name='hIndex' type="text" placeholder="H Index Value"/>
              </div>
              <div className="md:w-full px-3 mb-3 md:mb-0">
                   <label
                        className="block uppercase tracking-wide text-grey-darker text-md font-medium mb-1 md:mb-2"
                        htmlFor="impactFactor">
                        Impact Factor
                   </label>
                   <input required value={form.impactFactor} onChange={handleInputChange}
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
                        id="impactFactor" name='impactFactor' type="text" placeholder="Impact Factor Value"/>
              </div>
         </div>
    </div>
    <div className="-mx-3 lg:flex mb-2 px-3">
         <div className="sm:flex w-full justify-between">
              <div className="md:w-full px-3 mb-3 md:mb-0">
                   <label
                        className="block uppercase tracking-wide text-grey-darker text-md font-medium mb-1 md:mb-2"
                        htmlFor="ISSN">
                        ISSN
                   </label>
                   <input required value={form.ISSN} onChange={handleInputChange}
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
                        id="ISSN" name='ISSN' type="text" placeholder="ISSN Value"/>
              </div>
              <div className="md:w-full px-3 mb-3 md:mb-0">
                   <label
                        className="block uppercase tracking-wide text-grey-darker text-md font-medium mb-1 md:mb-2"
                        htmlFor="Publisher">
                        Publisher
                   </label>
                   <input required value={form.Publisher} onChange={handleInputChange}
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
                        id="Publisher" name='Publisher' type="text" placeholder="Publisher Value"/>
              </div>
         </div>
         <div className="sm:flex w-full justify-between">
              <div className="md:w-full px-3 mb-3 md:mb-0">
                   <label
                        className="block uppercase tracking-wide text-grey-darker text-md font-medium mb-1 md:mb-2"
                        htmlFor="Month">
                        Month <span className="text-[10px] font-thin">(month of publish)</span>
                   </label>
                   <input required value={form.Month} onChange={handleInputChange}
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
                        id="Month" name='Month' type="text" placeholder="Month"/>
              </div>
              <div className="md:w-full px-3 mb-3 md:mb-0">
                   <label
                        className="block uppercase tracking-wide text-grey-darker text-md font-medium mb-1 md:mb-2"
                        htmlFor="Year">
                        Year <span className="text-[10px] font-thin">(year of publish)</span>
                   </label>
                   <input required value={form.Year} onChange={handleInputChange}
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
                        id="Year" name='Year' type="text" placeholder="Year"/>
              </div>
         </div>
    </div>
    <div className="-mx-3 lg:flex mb-2 px-3">
         <div className="sm:flex w-full justify-between">
              <div className="md:w-full px-3 mb-3 md:mb-0">
                   <label
                        className="block uppercase tracking-wide text-grey-darker text-md font-medium mb-1 md:mb-2"
                        htmlFor="Volume">
                        Volume
                   </label>
                   <input required value={form.Volume} onChange={handleInputChange}
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
                        id="Volume" name='Volume' type="text" placeholder="Volume"/>
              </div>
              <div className="md:w-full px-3 mb-3 md:mb-0">
                   <label
                        className="block uppercase tracking-wide text-grey-darker text-md font-medium mb-1 md:mb-2"
                        htmlFor="Issue">
                        Issue
                   </label>
                   <input required value={form.Issue} onChange={handleInputChange}
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
                        id="Issue" name='Issue' type="text" placeholder="Issue"/>
              </div>
         </div>
         <div className="sm:flex w-full justify-between">
              <div className="sm:w-full px-3 mb-3 md:mb-0">
                   <label
                        className="block uppercase tracking-wide text-grey-darker text-md font-medium mb-1 md:mb-2"
                        htmlFor="DOI">
                        DOI
                   </label>
                   <input required value={form.DOI} onChange={handleInputChange}
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
                        id="DOI" name='DOI' type="text" placeholder="https: ......"/>
              </div>
         </div>
    </div>
    <div className="-mx-3 lg:flex mb-2 px-3">
         <div className="md:flex w-full justify-between">
              <div className="md:w-full px-3 mb-3 md:mb-0">
                   <label
                        className="block uppercase tracking-wide text-grey-darker text-md font-medium mb-1 md:mb-2"
                        htmlFor="pagenum">
                        Page Number
                   </label>
                   <input required value={form.pagenum} onChange={handleInputChange}
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
                        id="pagenum" name='pagenum' type="text"
                        placeholder="P.no(multiple page use '-' , eg.)"/>
              </div>
              <div className="md:w-full px-3 mb-3 md:mb-0">
                   <label
                        className="block uppercase tracking-wide text-grey-darker text-md font-medium mb-1 md:mb-2"
                        htmlFor="Citation">
                        Citation
                   </label>
                   <input required value={form.Citation} onChange={handleInputChange}
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
                        id="Citation" name='Citation' type="text" placeholder="Citation"/>
              </div>
              <div className="md:w-full px-3 mb-3 md:mb-0">
                   <label
                        className="block uppercase tracking-wide text-grey-darker text-sm md:text-xs  font-medium mb-1 md:mb-2"
                        htmlFor="Indexed">
                        Indexed (SCI/SCOPUS/Other)
                   </label>
                   <input required value={form.Indexed} onChange={handleInputChange}
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
                        id="Indexed" name='Indexed' type="text" placeholder="Indexed"/>
              </div>
         </div>
    </div>
    <button class="flex mx-auto mt-16 text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-gray-700 rounded-full text-lg">Submit</button>
</form>
</div>
  )
}

export default One