import React, {Component} from 'react';
import Testimonial from './Testimonial';
import tm1 from './../../images/testimonial/tm1.jpg';

class Testimonials extends Component {
    render() {
        return (
            <div className="container py-5 testimonial">
                <h3 className="text-center font-title">Our testimonials</h3>
                <div className="row">
                    <p className="text-center text-muted col-md-8 mx-auto">Lorem Ipsum is simply
                        dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the time.
                    </p>
                </div>
                <div className="row d-flex my-5 justify-content-center">
                    <Testimonial
                        comment="Lorem Ipsum is simply dummy text
                                of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the when an printer took a galley of type and
                                scrambled it to make"
                        img={tm1}
                        name="Mr. Zorg"
                        desg="Company head"/>
                    <Testimonial
                        comment="Lorem Ipsum is simply dummy text
                                of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the when an printer took a galley of type and
                                scrambled it to make"
                        img={tm1}
                        name="Mr. Zorg"
                        desg="Company head"/>
                    <Testimonial
                        comment="Lorem Ipsum is simply dummy text
                                of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the when an printer took a galley of type and
                                scrambled it to make"
                        img={tm1}
                        name="Mr. Zorg"
                        desg="Company head"/>
                </div>
            </div>
        );
    }
}

export default Testimonials;