// import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header id="header" className="web custom-bg">
            <div className="container-fluid flex flex-col">
                <div className="row flex">
                    <div className="col-xs-8 col-md-3">
                        <div className="brand company-logo-only">
                            {/* Logo here */}
                        </div>
                    </div>

                    <div className="col-xs-4 col-md-9">
                        <div className="header-controls flex items-center justify-between">
                            <div className="nav-trigger toggle-mnu">
                                <span></span>
                            </div>

                            <div className="nav-wrapper flex items-center">
                                <div id="sb_menu" className="flex">
                                    <ul className="nav flex" id="sb_menu_list_items_container">
                                        <li className="menu-item flex">
                                            <Link className="popup-hide" to="/">Home</Link>
                                        </li>
                                        <li className="menu-item flex">
                                            <Link className="popup-hide" to="#reviews">Reviews</Link>
                                        </li>
                                        <li className="menu-item flex">
                                            <Link className="popup-hide" to="#gallery">Gallery</Link>
                                        </li>
                                        <li className="menu-item flex">
                                            <Link className="popup-hide" to="#client/bookings/type/upcoming">My Bookings</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div id="sb_ada_module" className="ada-compliance__wrapper flex items-center">
                                    <span></span>
                                </div>
                            </div>

                            <div className="items-wrapper flex items-center">
                                <div id="book-btn" className="nav-item">
                                    <div className="book-btn-container">
                                        <div className="item-container">
                                            <Link className="popup-hide" to="#book">
                                                <img src="/v2/themes/assets/img/btn-book.png" alt="Book" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div id="sb_cart" className="nav-item cart-header-module" aria-label="Cart menu"></div>
                                <div id="sb_client_info" className="nav-item" aria-label="User menu"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
