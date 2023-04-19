import React, { useEffect, useState } from 'react';
import './AppliedJobs.css'
import SingleAppliedJobs from '../SingleAppliedJobs/SingleAppliedJobs';


const AppliedJobs = () => {
    const [transfer, setTransfer] = useState([])
    const [data, setData] = useState([]);

    useEffect(() => {
        let getData = JSON.parse(localStorage.getItem('jobs'));
        setTransfer(getData);
        // setData(getData);
    }, [])

    return (
        <div>
            <h1 className='text-5xl text-center bg-gradient-to-r from-indigo-500 to-indigo-800 bg-clip-text text-transparent p-2 mb-4'>Applied Jobs</h1>
            <div>
                {/* dropdown */}
                <div className="mb-6 w-4/5 text-end mx-auto">
                    <div className="dropdown inline-block relative ">
                        <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                            <span className="mr-1">Filter</span>
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                        </button>
                        <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 text-center ">
                            <li className=""><a className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Onsite</a></li>
                            <li className=""><a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Remote</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* applied jobs */}
            <div>
                
                {
                    transfer.map((item) => <SingleAppliedJobs
                        item={item} key={item.id}></SingleAppliedJobs>)
                }
                
            </div>
            
        </div>
    );
};

export default AppliedJobs;