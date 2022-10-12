import React from 'react'
import './index.scss';

const Job = ({data:{name, location, department, applyUrl, requirements}}) => {

    return (
        <div className="container">
            <div className="container2">
                <div>{name}</div>
                <div className="titles">
                    <div>{location}</div>
                    <div>{department}</div>
                </div>
            </div>
            <div>
                <a href={applyUrl} target='_blank'>Apply</a>
            </div>
        </div>
    )
}

export default Job
