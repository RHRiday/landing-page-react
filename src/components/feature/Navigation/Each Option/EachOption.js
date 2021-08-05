import React, { useEffect, useState } from 'react';
import './EachOption.scss';
const EachOption = ({image,heading,items}) => {
    const [im,setIm]=useState(image)
    useEffect(()=>{
        setIm(image);
    },[image])
    return (
        <>
            <div className="EachOption__image">
                <img src={im} alt={`${heading}`}/>
            </div>
            <div className="EachOption__info">
                <div className="EachOption__info--heading utility__margin--bottom-small">
                    {heading}
                </div>
                <div>
                    {
                        items.map((i)=>{
                            return(<div className="EachOption__info--advertise">
                                <div className="EachOption__info--advertise--icon">
                                <ion-icon name="checkmark-outline"></ion-icon>
                                </div>
                                <div>
                                {i}
                                </div>
                            </div>)
                        })
                    }
                </div>
                <div className="EachOption__loramIpsum">
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
            </div>
        </>
    );
};

export default EachOption;