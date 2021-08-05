import React, { Component } from 'react';
import './css/Feature.scss';
import Navigation from './Navigation/Navigation';
class Feature extends Component {
    state={selected:0}
    navOption=[
        {
            name:'Cost Effectiveness'
        },
        {
            name:'Flexible Engagement Models'
        },
        {
            name:'Technology Expertization'
        },{
            name:'Pre Built Packages'
        }
    ]
    render() {
        return (
            <div className="feature">
                <div className="feature__part--heading utility__margin--bottom-medium">
                    <div>
                        <h2 className="feature__heading utility__margin-small">Why Choose Us</h2>
                        <p className="feature--paragraph">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over</p>
                    </div>
                </div>
                <div className="feature__part--navigationbar">
                   {
                       this.navOption.map((navop,index)=>{
                           return(<div key={index} className={this.state.selected===index?'feature__part--navigationbar-selected':''} onClick={()=>{
                               this.setState({selected:index})
                           }}>{navop.name}</div>)
                       })
                   }
                </div>
                <div className="feature__part--feature">
                    <Navigation selected={this.state.selected}/>
                </div>   
                <div className="feature__part--show">
                    <div className="feature__part--show-each">
                        <div className="feature__part--show-icon">
                            <div>
                            <ion-icon name="briefcase-outline"></ion-icon>
                            </div>
                            <div>15+</div>
                        </div>
                        <div className="feature__part--show-text">
                            Years in Business
                        </div>
                    </div>
                    <div className="feature__part--show-each">
                        <div className="feature__part--show-icon">
                            <div>
                            <ion-icon name="person-outline"></ion-icon>
                            </div>
                            <div className="feature__part--show-text">700+</div>
                        </div>
                        <div>
                          Happy Clients
                        </div>
                    </div>
                    <div className="feature__part--show-each">
                        <div className="feature__part--show-icon">
                            <div>
                            <ion-icon name="people-outline"></ion-icon>
                            </div>
                            <div>50+</div>
                        </div>
                        <div className="feature__part--show-text">
                            Technical Experts
                        </div>
                        
                    </div>
                    <div className="feature__part--show-each">
                        <div className="feature__part--show-icon">
                            <div>
                            <ion-icon name="phone-portrait-outline"></ion-icon>
                            </div>
                            <div>200+</div>
                        </div>
                        <div className="feature__part--show-text">
                            Apps Delivered
                        </div>
                    </div>
                    
                   
                </div>
            </div>
        );
    }
}

export default Feature;