import React from 'react';

const Dropdown = ({title}) => {
    return (
        <div>
            <li class="nav-item dropdown mx-3">
                <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    {title}
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                        <a class="dropdown-item" href="#">Action</a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="#">Another action</a>
                    </li>
                    <li><hr class="dropdown-divider"/></li>
                    <li>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </li>
                </ul>
            </li>
        </div>
    );
};

export default Dropdown;