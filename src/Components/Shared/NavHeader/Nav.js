import React from 'react';
import { Link } from 'react-router-dom';
import './NavHeader.css'

const Nav = ({user}) => {
    const token = localStorage.getItem('token');

    const logOut=()=>{
        localStorage.removeItem('token');
        localStorage.removeItem('u_id');
        console.log('logged out');
    }

    return (
        <nav className='flex justify-between py-3 px-5 bg-[#f9f9f9]'>
            <div className="flex items-end gap-2">
                <Link to='/'>
                    <img width='200' src="https://static.locanto.info/assets/230110_095414/images/logo/locanto_color.svg" alt="" />
                </Link>
                <p className="text-lg">Free classifieds India</p>
            </div>

            <div className='flex items-start gap-2'>
                <i className='fa-solid fa-star'></i>
                <button className='btn btn-xs bg-red-600 hover:bg-red-600 border-none rounded-full'><i className='fa-solid fa-circle-plus pr-2'></i> Post Free Ad</button>
                <p className='h-uline'>Help/FAQ</p> <span>|</span>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="cursor-pointer m-1">My Locanto <i className="fa-solid fa-angle-down"></i></label>
                    <ul tabIndex={0} className="dropdown-content p-2 shadow bg-base-100 w-fit">
                        <li selected><Link to='/my/my-account'>My Locanto</Link></li>
                        <li><Link to='/my/my-ads'>My ads</Link></li>
                        <li><Link to='/my/inbox'>Messages</Link></li>
                        <li><Link to='/my/alerts'>Alerts</Link></li>
                        <li><Link to='/my/purchases'>Purchases</Link></li>
                        <li><Link to='/my/my-profile'>Profile</Link></li>
                        <li><Link to='/my/my-wallet'>My Wallet</Link></li>
                        <li><button>Log out</button></li>
                    </ul>
                </div>
                <div className="flex flex-col items-end gap-2">
                    <select className="select w-20 select-ghost select-xs">
                        <option disabled selected>India</option>
                        <option>Homer</option>
                        <option>Marge</option>
                        <option>Bart</option>
                        <option>Lisa</option>
                        <option>Maggie</option>
                    </select>
                    {!token ? <Link to='/login' className='h-uline text-xs'>Login / Register</Link> : <button onClick={()=>logOut()}>Log out</button>}
                </div>
            </div>
        </nav>
    );
};

export default Nav;