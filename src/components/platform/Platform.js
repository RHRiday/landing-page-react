import React from 'react';
import './platform.css'

const Platform = ({name, option}) => {
    return (
        <div className="col-lg-5 col-xl-3 my-2 card rounded shadow p-4">
            <div className="card-body">
                <h4 className="mb-3 f97316">{name}</h4>
                <p className="text-muted">Create customized popups and show the right message at
                    the right time. lorem dummy.
                </p>
                <ul className="list-circle lh-lg">
                    {option.map((op, index) => {
                        return ( <> <li className="text-muted fw-bold">{op}</li> </> )
                    })}
                </ul>
            </div>
            <button className="btn btn-dark mb-2 shadow">Details</button>
        </div>
    );
};

export default Platform;