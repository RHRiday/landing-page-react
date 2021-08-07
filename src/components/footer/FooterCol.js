import React from 'react';

const FooterCol = (props) => {
    return (
        <div className="col-4 mx-2 col-lg-2">
            <h6 className="h4">{props.menuTitle ? props.menuTitle : " "}</h6>
            <ul className="list-unstyled mt-4 text-muted">
                 {
                     props.menuItems.map(item => <li> {item.name}</li>)
                 }
            </ul>
            {props.children && props.children}
        </div>
    );
};

export default FooterCol;