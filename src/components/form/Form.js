import React, { Component } from 'react';
import './css/Form.scss';
class Form extends Component {
    state = { name: '', phone: '', email: '',idea: '' }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div className="Form">
                <div>
                    <div className="utility__margin--bottom-small">
                        <h2 className="Form__heading">Let's Convert Your idea into Reality</h2>
                    </div>
                    <div className="utility__margin--bottom-small">
                        <p className="Form__paragraph">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                        </p>
                    </div>
                </div>
                <form className="Form__Section" onSubmit={(e)=>{this.handleSubmit(e)}}>
                    <div className="utility__flex utility__flex-direction">
                        <div className="Form__Section__name utility__flex">
                            <div className="utility__flex Form__icon">
                                <ion-icon name="person-outline"></ion-icon>
                            </div>
                            <input type="text" required placeholder="Your name" name="name" value={this.state.name} onChange={(e) => { this.setState({ name: e.target.value }) }} />
                        </div>
                        <div className="Form__Section__mobile utility__flex">
                            <div className="utility__flex Form__icon">
                                <ion-icon name="phone-portrait-outline"></ion-icon>
                            </div>
                            <input type="text" required name="mobile" placeholder="Phone" value={this.state.phone} onChange={(e) => { this.setState({ phone: e.target.value }) }} />
                        </div>
                    </div>
                    <div className="Form__Section__email utility__flex">
                        <div>
                            <div className="utility__flex Form__icon">
                                <ion-icon name="mail-outline"></ion-icon>
                            </div>
                        </div>
                        <div>
                            <input type="email" required name="email" placeholder="Your email" value={this.state.email} onChange={(e) => { this.setState({ email: e.target.value }) }} />
                        </div>
                    </div>
                    <div className="Form__Section__textarea">
                        <div className="utility__flex Form__icon">
                            <ion-icon name="film-outline"></ion-icon>
                        </div>
                        <textarea placeholder="Tell us about your project or idea" name="idea" value={this.state.idea} onChange={(e) => { this.setState({ idea: e.target.value }) }}></textarea>
                    </div>
                    <button type="submit"className="Form__Section__button utility__margin__top-small">Get a Free Quote</button>            
                </form>
            </div>
        );
    }
}

export default Form;