import React from 'react';

const Testimonial = ({comment,img,name,desg}) => {
    return (
        <div className="col-lg-5 col-xl-3 m-2">
            <div className="card rounded shadow p-3">
                <p className="text-muted mb-0 fw-lighter lh-lg">{comment}
                </p>
            </div>
            <div className="my-2">
                <div className="testimonial-pic">
                    <img src={img}/>
                </div>
                <h5 className="text-uppercase pt-2 mb-0">{name}</h5>
                <p className="text-muted pt-1 mb-0">{desg}</p>
            </div>
        </div>
    );
};

export default Testimonial;