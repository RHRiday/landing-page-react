import React, {Component} from 'react';
import Platform from './Platform';

class Platforms extends Component {
    render() {
        return (
            <div className="container my-5">
                <h5 className="text-center font-title d30000">Choose your platform</h5>
                <h3 className="text-center font-title">Available on all platforms</h3>
                <div className="row justify-content-center">
                    <div className="row d-flex my-lg-5 justify-content-around">
                        <Platform
                            name="Android app"
                            option={['Strategy and planning', 'Monthly reports', 'Trend research']}/>
                        <Platform
                            name="Smart cloud"
                            option={['Creating content', 'Evaluation marketting', 'Monthly reports']}/>
                        <Platform
                            name="iPhone app"
                            option={['Uniquely validated', 'Fast and secure', 'Higher demand']}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Platforms;