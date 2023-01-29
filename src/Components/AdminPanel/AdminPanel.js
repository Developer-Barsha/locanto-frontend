import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './AdminPanel.css';

const AdminPanel = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="admin-panel" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* <!-- Page content here --> */}
                <div className='h-screen overflow-y-scroll p-5 lg:p-10 w-full relative'>
                    <label htmlFor="admin-panel" className="btn btn-primary drawer-button lg:hidden mb-10"> <i className="fa-solid fa-bars"></i> </label>
                    <Outlet />
                </div>
            </div>
            <div className="drawer-side bg-slate-900 h-screen overflow-y-scroll">
                <label htmlFor="admin-panel" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-slate-900 h-full text-white  text-xl">
                    <li><Link to='dashboard'>Dashboard</Link></li>
                    <div className="collapse collapse-arrow">
                        <input type="checkbox" />
                        <div className="collapse-title">
                            Users
                        </div>
                        <ul className="collapse-content text-base">
                            <li><Link to='all-users'>All Users</Link></li>
                            <li><Link to='add-new-user'>Add New User</Link></li>
                        </ul>
                    </div>
                    <div className="collapse collapse-arrow">
                        <input type="checkbox" />
                        <div className="collapse-title">
                            Categories
                        </div>
                        <ul className="collapse-content text-base">
                            <li><Link to='main-categories'>Main Categories</Link></li>
                            <li><Link to='sub-categories'>Sub Categories</Link></li>
                            <li><Link to='categories'>Categories</Link></li>
                        </ul>
                    </div>
                    <li><Link to='ads'>Ads</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default AdminPanel;