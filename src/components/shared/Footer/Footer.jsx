import React from 'react';
import './Footer.css'

const Footer = () => {
    return (

        <footer className="footer bgFooter p-10  text-base-content ">
            <div className='text-gray-300'>
                <img className='w-52' src="https://www.pngmart.com/files/22/Car-Logo-Transparent-PNG.png" alt="" />
                <p className='font-semibold text-2xl'>Rent A Car</p>
                <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Nam eius laboriosam .</p>

            </div>
            <div className='text-gray-300'>
                <span className="footer-title">Customer Service:</span>
                <a href='/#' className="link link-hover">Terms And Conditions</a>
                <a href='/#' className="link link-hover">Privacy Policies</a>
                <a href='/#' className="link link-hover">Vacancy</a>
                <a href='/#' className="link link-hover">FAQ</a>
            </div>
            <div className='text-gray-300'>
                <span className="footer-title">Contact Us: </span>
                <a href='/#' className="link link-hover">Email: rentacar@gmail.com</a>
                <a href='/#' className="link link-hover">+88017********</a>
                <a href='/#' className="link link-hover">Sector-10, Uttara, Dhaka</a>
                <a href='/#' className="link link-hover">Press kit</a>
            </div>
            <div className='text-gray-300'>
                <span className="footer-title">Quick Links:</span>
                <a href='/#' className="link link-hover">Home</a>
                <a href='/#' className="link link-hover">About Us</a>
                <a href='/#' className="link link-hover">Contact Us</a>
            </div>

        </footer>


    );
};

export default Footer;