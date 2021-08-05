import React, {Component} from 'react';
import team from '../images/team.jpg'

class AboutUs extends Component {
    render() {
        return (
            <div className="container my-5">
                <div className="row ">
                    <div className="col-lg-7 col-md-8">
                        <div className="abuot-box row">
                            <div className="col-lg-4">
                                <h2 className="font-title">About Us<span className="bg-primary"></span>
                                </h2>
                                <h4 className="text-muted">We create unique experiences</h4>
                            </div>
                            <div className="col-lg-8">
                                <p className="text-muted">Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                                    ever since the 1500s, when an unknown printer took a galley of type and
                                    scrambled it to make a type specimen book. It has survived not only five
                                    centuries, but also the leap into electronic typesetting, remaining essentially
                                    unchanged. It was popularised in the 1960s with the release of Letraset sheets
                                    containing Lorem Ipsum passages, and more recently with desktop publishing
                                    software like Aldus PageMak.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-4 about-img">
                        <img src={team}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutUs;