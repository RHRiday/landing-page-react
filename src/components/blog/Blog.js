import React from 'react';

const Blog = () => {
    return (
        <div className="col-md-6 col-lg-4 col-xl-3 my-2">
            <div className="card blog">
                <img
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1952&q=80"
                    className="card-img-top"/>
                <div className="card-body">
                    <p className="fw-bolder fs-3 mb-1">Title</p>
                    <p className="card-text">Some quick example text to build on the card title and
                        make up the bulk of the card's content. Mix and match multiple content types to
                        create the card you need, or throw everything in there. Shown below are image
                        styles, blocks, text styles, and a list group—all wrapped in a fixed-width card.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;