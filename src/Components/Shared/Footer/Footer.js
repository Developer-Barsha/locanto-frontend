import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='bg-[#f9f9f9] p-8'>
            <hr />
            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-10 justify-between py-10">
                <div>
                    <b>Information</b>
                    <ul className='mt-2'>
                        <li><Link to='/about'>About Us</Link></li>
                        <li><Link to='/info/terms'>Terms of Use</Link></li>
                        <li><Link to='/info/privacy'>Privacy Policy</Link></li>
                        <li><Link to='/run/faq'>Help/FAQ</Link></li>
                    </ul>
                </div>
                <div>
                    <b>Features</b>
                    <ul className='mt-2'>
                        <li><Link to='/info/premium'>Promote your ad</Link></li>
                        <li><Link to='/info/premium-accounts'>Premium Account</Link></li>
                        <li><Link to='/info/businesses'>Homepages</Link></li>
                        <li><Link to='/info/m/premium-accounts'>Mobile Site</Link></li>
                        <li><Link to='/info/promote'>Advertise on Locanto</Link></li>
                    </ul>
                </div>
                <div>
                    <b>Services</b>
                    <ul className='mt-2'>
                        <li><Link to='/info/safer-trading'>Safety Tips</Link></li>
                        <li><Link to='/run/faq-contact'>Contact & Feedback</Link></li>
                        <li><Link to='/run/word'>Promote us on your website!</Link></li>
                    </ul>
                </div>
                <div>
                    <b>Stay Connected</b>
                    <div className="flex gap-2 mt-2">
                        <i class="fa-brands fa-facebook-f bg-slate-800 text-white hover:bg-blue-600 cursor-pointer p-2 text-2xl w-12 h-12 flex justify-center items-center"></i>
                        <i class="fa-brands fa-twitter bg-slate-400 text-white hover:bg-blue-500 cursor-pointer p-2 text-2xl w-12 h-12 flex justify-center items-center"></i>
                        <i class="fa-brands fa-pinterest-p bg-slate-800 text-white hover:bg-red-600 cursor-pointer p-2 text-2xl w-12 h-12 flex justify-center items-center"></i>
                    </div>
                </div>
            </div>
            <p>Copyright © 2006-2023 Locanto™</p>
        </footer>
    );
};

export default Footer;