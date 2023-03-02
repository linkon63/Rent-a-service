import React from 'react';

const Navbar = () => {
    return (

        <div className="navbar bg-base-100 h-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li className="font-semibold text-lg">
                            <a href="/#">
                                <span>Home</span>
                            </a>
                        </li>

                        <li className="font-semibold text-lg">
                            <a href="/#">
                                <span>Service</span>
                            </a>
                        </li>


                        <li className="font-semibold text-lg">
                            <a href="/#">
                                <span>About</span>
                            </a>
                        </li>

                        <li className="font-semibold text-lg">
                            <a href="/#">
                                <span>Projects</span>
                            </a>
                        </li>

                        <li className="font-semibold text-lg">
                            <a href="/#">
                                <span>Skills</span>
                            </a>
                        </li>

                        <li className="font-semibold text-lg">
                            <a href="/#">
                                <span>Contacts</span>
                            </a>
                        </li>

                        <li className="font-semibold text-lg">
                            <a href="/#">
                                <span>Pages</span>
                            </a>
                        </li>

                        <li className="font-semibold text-lg">
                            <a href="/#">
                                <span>Admin</span>
                            </a>
                        </li>
                    </ul>


                </div>
                <a href="/#" class="border h-20 flex-shrink-0 flex items-center justify-center px-4 lg:px-6 xl:px-8">
                    <img class="" src="https://i.ibb.co/W6ZXdqN/2021-10-26-16h20-21.png" alt="" />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className="font-semibold text-lg">
                        <a href="/#">
                            <span>Home</span>
                        </a>
                    </li>

                    <li className="font-semibold text-lg">
                        <a href="/#">
                            <span>Service</span>
                        </a>
                    </li>


                    <li className="font-semibold text-lg">
                        <a href="/#">
                            <span>About</span>
                        </a>
                    </li>

                    <li className="font-semibold text-lg">
                        <a href="/#">
                            <span>Projects</span>
                        </a>
                    </li>

                    <li className="font-semibold text-lg">
                        <a href="/#">
                            <span>Skills</span>
                        </a>
                    </li>

                    <li className="font-semibold text-lg">
                        <a href="/#">
                            <span>Contacts</span>
                        </a>
                    </li>

                    <li className="font-semibold text-lg">
                        <a href="/#">
                            <span>Pages</span>
                        </a>
                    </li>

                    <li className="font-semibold text-lg">
                        <a href="/#">
                            <span>Admin</span>
                        </a>
                    </li>
                </ul>

                <ul className="menu menu-horizontal px-1">
                    <li class="p-1">
                        <a href="/#" class="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5">
                            <svg class="h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-linkedin-in fa-w-14 fa-9x"><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
                        </a>
                    </li>

                    <li class="p-1">
                        <a href="/#" class="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5">
                            <svg class="h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-linkedin-in fa-w-14 fa-9x"><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
                        </a>
                    </li>

                    <li class="p-1">
                        <a href="/#" class="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5">
                            <svg class="h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-linkedin-in fa-w-14 fa-9x"><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
                        </a>
                    </li>

                    <li class="p-1">
                        <a href="/#" class="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5">
                            <svg class="h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-linkedin-in fa-w-14 fa-9x"><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="border flex items-center px-4 lg:px-6 xl:px-8">
                <a href="/#" class="mr-4 lg:mr-6 xl:mr-8">
                    <svg class="h-6 xl:h-8" aria-hidden="true" focusable="false" data-prefix="far" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-search fa-w-16 fa-3x"><path fill="currentColor" d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"></path></svg>
                </a>
                <button class="bg-black hover:bg-gray-700 text-white font-bold px-4 xl:px-6 py-2 xl:py-3 rounded">Contact Me</button>
            </div>
        </div >
    );
};

export default Navbar;