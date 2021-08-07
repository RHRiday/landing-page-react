import React from 'react';

const Dropdown = ({title}) => {
    return (
        <div>
            <li class="nav-item dropdown mx-3">
                <a class="nav-link fw-bold" href="#" data-bs-toggle="dropdown">
                    Services
                </a>
                <ul class="dropdown-menu">
                    <li>
                        <a class="dropdown-item" href="#">
                            Submenu item 1</a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="#">
                            Submenu item 2
                        </a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="#">
                            Submenu item 3
                        </a>
                    </li>
                </ul>
            </li>
        </div>
    );
};

export default Dropdown;