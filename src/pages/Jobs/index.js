import React, { useEffect, useState } from 'react';
import {getJobs} from '../../services/services'
import Job from './Job';
import './index.scss';
// API GET Route
// http://localhost:3001/api/v1/users/jobs;

const Jobs = () => {
    const [jobs,setJobs] =useState([])
    console.log(jobs)
    const  getJobsCall = async  (params) => {
        const data = await getJobs()
        console.log(data)
        if(data) {
            setJobs(data?.jobs);
        }
    }

    useEffect(()=>{
        getJobsCall()
    },[])

    return (
        <div className="jobs">
            {jobs?.map((job)=> (<Job data={job} />))}
        </div>
    )
}

export default Jobs;