import React, { Component } from 'react';
import './css/FormSection.scss';
import Form from './Form.js'
class FormSection extends Component {
    render() {
        return (
            <div className="FormSection">
                <div className="FormSection__call utility__margin--top-medium">
                    <div>
                    <h2 className="FormSection__call--heading utility__margin--bottom-small">Let's get in touch</h2>
                    </div>
                    <div className="FormSection__call--paragraph utility__margin--bottom">
                        <p>
                        Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days.
                        </p>
                    </div>
                    <div className="FormSection__call--uses utility__margin--bottom">
                    By 700+ customers for 3200+ Web and Mobile App development projects.
                    </div>
                    <div>
                        <div className="FormSection__call--get">
                        & What you will get:
                        </div>
                        
                        <div className="EachOption__info--advertise benefit">
                                <div className="EachOption__info--advertise--icon utility__marigin--righ-small">
                                <ion-icon name="checkmark-outline"></ion-icon>
                                </div>
                                <div>
                                Contrary to popular belief, Lorem Ipsum is not simply
                                </div>
                            </div>
                            <div className="EachOption__info--advertise benefit">
                                <div className="EachOption__info--advertise--icon utility__marigin--righ-small">
                                <ion-icon name="checkmark-outline"></ion-icon>
                                </div>
                                <div>
                                Random text. It has roots in a piece of classical Latin literature
                                </div>
                            </div>
                            <div className="EachOption__info--advertise benefit">
                                <div className="EachOption__info--advertise--icon utility__marigin--righ-small">
                                <ion-icon name="checkmark-outline"></ion-icon>
                                </div>
                                <div>
                                Latin professor at Hampden-Sydney College in Virginia
                                </div>
                            </div>
                    </div>
                </div>
               <Form/>
            </div>
        );
    }
}

export default FormSection;