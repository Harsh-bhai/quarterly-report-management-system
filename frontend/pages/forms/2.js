import React from 'react'

const Two = () => {
  return (
          <div className="min-h-screen">
               <form className="flex space-x-5">
                    <div
                         className="mr-4 backdrop-blur-xl shadow-md rounded-xl bg-white px-4 pt-6 pb-8 mb-4 flex flex-col my-2 w-11/12  mx-auto">
                         <div
                              className="mr-4 bg-white pt-6 pb-8 mb-4 flex flex-col my-2 w-full mx-auto">
                              <div className="text-sm w-full text-center sm:text-xl md:text-2xl font-medium bg-black py-1 rounded-lg text-white mb-2"
                                   id="formName">Details of the Paper Publication in Conferences (in related
                                   area/subject): [specify the details of collaborative authors]</div>
                              <div className="md:w-full px-3 mb-3 md:mb-0">
                                   <label
                                        className="block uppercase tracking-wide text-grey-darker text-sm sm:text-md font-medium mb-2"
                                        htmlFor="titleName">
                                        Title
                                   </label>
                                   <input required
                                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
                                        id="titleName" type="text" placeholder="Title Name"/>
                              </div>
                              <div className="md:w-full px-3 mb-3 md:mb-0">
                                   <label
                                        className="block uppercase tracking-wide text-grey-darker text-sm sm:text-md font-medium mb-2"
                                        htmlFor="authorsName">
                                        Name of the Authors
                                   </label>
                                   <input required
                                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
                                        id="authorsName" type="text" placeholder="Jane"/>
                              </div>
                              <div className="-mx-3 lg:flex mb-2 px-3">
                                   <div className="md:w-3/4 px-3 mb-3 md:mb-0">
                                        <label
                                             className="block uppercase tracking-wide text-grey-darker text-sm sm:text-md font-medium mb-1 md:mb-2"
                                             htmlFor="ownership">
                                             Whether Sole /Corresponding Author
                                        </label>
                                        <input required
                                             className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
                                             id="ownership" type="text" placeholder="YES/NO"/>
                                   </div>
                                   <div className="md:w-full px-3 mb-3 md:mb-0">
                                        <label
                                             className="block uppercase tracking-wide text-grey-darker text-sm sm:text-md font-medium mb-1 md:mb-2"
                                             htmlFor="ISBN">
                                             ISBN/ISSN
                                        </label>
                                        <input required
                                             className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
                                             id="ISBN" type="text" placeholder="ISBN/ISSN"/>
                                   </div>
                                   <div className="md:w-full px-3 mb-3 md:mb-0">
                                        <label
                                             className="block uppercase tracking-wide text-grey-darker text-sm sm:text-md font-medium mb-1 md:mb-2"
                                             htmlFor="status">
                                             Status of The Conference (National/ International)
                                        </label>
                                        <input required
                                             className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
                                             id="status" type="text" placeholder="Level"/>
                                   </div>
                              </div>
                              <div className="px-3">
                                   <label
                                        className="block uppercase tracking-wide text-grey-darker text-sm sm:text-md font-medium mb-1 md:mb-2"
                                        htmlFor="conferenceDetails">
                                        Details of Conference/ Publication
                                   </label>
                                   <textarea name="" id="conferenceDetails" 
                                        className="resize-none appearance-none block w-full text-sm bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
                                        type="text" placeholder="Details"></textarea>
                              </div>
                              <div className="-mx-3 lg:flex mb-2 px-3">
                                   <div className="sm:flex w-full justify-between">
                                        <div className="md:w-full px-3 mb-3 md:mb-0">
                                             <label
                                                  className="block uppercase tracking-wide text-grey-darker text-sm sm:text-md font-medium mb-1 md:mb-2"
                                                  htmlFor="fee">
                                                  Registration fee reimbursed from college
                                             </label>
                                             <input required
                                                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
                                                  id="fee" type="text" placeholder="In numeric"/>
                                        </div>
                                   </div>
                                   <div className="sm:flex w-full justify-between">
                                        <div className="md:w-full px-3 mb-3 md:mb-0">
                                             <label
                                                  className="block uppercase tracking-wide text-grey-darker text-sm sm:text-md font-medium mb-1 md:mb-2"
                                                  htmlFor="dates">
                                                  Special Leave Dates
                                             </label>
                                             <input required
                                                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 md:py-3 px-4 mb-3"
                                                  id="dates" type="text" placeholder="From - To"/>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    <button class="flex mx-auto  text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-gray-700 rounded-full text-lg">Submit</button>
                    </div>
               </form>
          </div>
  )
}

export default Two