import React from 'react';
import EachOption from './Each Option/EachOption'
const Navigation = ({selected}) => {
    if(selected===0){
        return (
           <EachOption image="https://agency.dexignlab.com/react/demo/static/media/pic5.9717fcc4.jpg" heading="Project Cost Effectiveness" items={['Contrary to popular belief, Lorem Ipsum is not simply','Random text. It has roots in a piece of classical Latin literature','Latin professor at Hampden-Sydney College in Virginia']}/>
        );
    }
    else if(selected===1){
        return (
            <EachOption image="https://agency.dexignlab.com/react/demo/static/media/pic6.0b1ccca7.jpg" heading="Flexible Engagement Models" items={['Random text. It has roots in a piece of classical Latin literature','Latin professor at Hampden-Sydney College in Virginia','Contrary to popular belief, Lorem Ipsum is not simply']}/>
        );
    }
    else if(selected===2){
        return (
            <EachOption image="https://agency.dexignlab.com/react/demo/static/media/pic7.c4f53c8d.jpg" heading="Technology Expertization" items={['Latin professor at Hampden-Sydney College in Virginia','Contrary to popular belief, Lorem Ipsum is not simply','Random text. It has roots in a piece of classical Latin literature']}/>
        );
    }
    else if(selected===3){
        return (
           <EachOption image="https://agency.dexignlab.com/react/demo/static/media/pic8.c24449be.jpg" heading="Project Cost Effectiveness" items={['Contrary to popular belief, Lorem Ipsum is not simply','Random text. It has roots in a piece of classical Latin literature','Latin professor at Hampden-Sydney College in Virginia']}/>
        );
    }
    
};

export default Navigation;