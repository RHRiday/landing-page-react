import React, {Component} from 'react';
import Blog from './Blog';
// import './css/blog.css';

class Blogs extends Component {
    render() {
        return (
            <>
                <div className="my-5">
                    <h3 className="text-center font-title">Our posts</h3>
                    <div className="row">
                        <p className="text-center fw-bold col-md-8 text-uppercase mx-auto">Take a look at our awesome posts
                        </p>
                    </div>
                </div>
                <div className="row d-flex mt-3 px-5 justify-content-between">
                    <Blog/>
                    <Blog/>
                    <Blog/>
                    <Blog/>
                </div>
            </>
        );
    }
}

export default Blogs;