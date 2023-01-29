import React, { useState, useEffect } from 'react';
import './MyAds.css';

const MyAds = () => {
    const [user, setUser] = useState({});
    const [clickedId, setClickedId] = useState('');
    const [userAds, setUserAds] = useState({});
    const [adType, setAdType] = useState('');
    const u_id = localStorage.getItem('u_id');

    useEffect(() => {
        fetch(`http://localhost:5000/users/${u_id}`)
            .then(res => res.json())
            .then(data => setUser(data));

        // if (user.email) {
        fetch(`http://localhost:5000/get-user-ads/${user.email}`)
            .then(res => res.json())
            .then(data => setUserAds(data));
        // }
    }, [user]);

    const updateAdType = () => {
        fetch(`http://localhost:5000/ads/${clickedId}`, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ adType })
        })
            .then(res => res.json())
            .then(data => console.log(data));
    }

    return (
        <div className='py-10 px-20 bg-slate-200'>
            <div className="flex gap-5 w-full">
                <div className='w-3/5 flex gap-2'>
                    <input className='w-full h-12 input input-bordered' placeholder='Location' type="text" /> <span className='location-icon absolute top-4 right-3'><i class="fa-solid fa-location-crosshairs"></i></span>
                    <button className='btn bg-blue-800 border-none'>Search</button>
                </div>
                <select name="" id="" className='input input-bordered w-2/5'>
                    <option value={user?.email}>{user?.email}</option>
                </select>
            </div>

            {user?.userType !== 'Normal' && <div className="flex mt-10 gap-4">
                <div className='w-4/5'>
                    {userAds.length > 0 && userAds.map(ua => {
                        return <div className='w-full'>
                            <div className="border border-slate-800">
                                <div className="flex justify-between text-xl mb-3 px-2 pt-2">
                                    <p> <i className="fa-solid fa-circle text-green-600"></i> {ua?.adTitle}</p>
                                    <p>Premium Features</p>
                                </div>
                                <div className="flex gap-3 bg-white items-center p-2 w-full">
                                    <img className='w-40' src={ua?.image} alt="" />
                                    <div className='p-2 w-3/5'>
                                        {ua?.adDescription?.slice(0, 130)}...
                                        <br /><spam className="text-sm">Category: {ua?.subCategory} - {ua?.category}</spam>
                                        <br /><br />
                                        Still online for 28 days
                                    </div>

                                    <div className="divider lg:divider-horizontal"></div>
                                    <div className='flex flex-col gap-1'>
                                        <div className='flex items-center gap-1'>
                                            <input type="radio" name="radio-4"
                                                onClick={() => {
                                                    setAdType('Top')
                                                    setClickedId(ua?._id)
                                                }}
                                                className="radio radio-warning" />
                                            <button className='bg-orange-400 px-5 py-1 rounded-full text-white border-none'>Top Ad</button>
                                        </div>
                                        <div className="divider p-0 m-0 "></div>
                                        <div className='flex items-center gap-1'>
                                            <input type="radio" name="radio-4"
                                                onClick={() => {
                                                    setAdType('Gallery')
                                                    setClickedId(ua?._id)
                                                }}
                                                className="radio radio-accent" checked />
                                            <button className='bg-cyan-400 px-5 py-1 rounded-full text-white border-none'>Gallery Ad</button>
                                        </div>
                                        <div className="divider p-0 m-0 "></div>
                                        <div className='flex items-center gap-1'>
                                            <input type="radio" name="radio-4"
                                                onClick={() => {
                                                    setAdType('Premium')
                                                    setClickedId(ua?._id)
                                                }}
                                                className="radio radio-primary" />
                                            <button className='bg-purple-400 px-5 py-1 rounded-full text-white border-none'>Premium Ad</button>
                                        </div>
                                        {(adType !== '' && ua._id === clickedId) && <label htmlFor="my-modal" className="btn btn-sm mt-1">Update to {adType}</label>}
                                    </div>

                                    {/* Put this part before </body> tag */}
                                    <input type="checkbox" id="my-modal" className="modal-toggle" />
                                    <div className="modal">
                                        <div className="modal-box">
                                            <p className="py-4">Update ad type to <b>{adType}</b>?</p>
                                            <div className="modal-action">
                                                <label htmlFor="my-modal" className="btn btn-error">Cancel</label>
                                                <label onClick={() => updateAdType()} htmlFor="my-modal" className="btn btn-success">Okay</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between text-md mb-3 px-2 pt-2">
                                    <div className='flex gap-2 items-center text-blue-900'>
                                        <div className="h-uline">View</div>
                                        <div className="divider divider-horizontal p-0 m-0"></div>
                                        <div className="h-uline">Edit</div>
                                        <div className="divider divider-horizontal p-0 m-0"></div>
                                        <div className="h-uline">Delete</div>
                                        <div className="divider divider-horizontal p-0 m-0"></div>
                                        <div className="h-uline">Share</div>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <i className="fa-solid fa-star"></i>10
                                        <i className="fa-solid fa-message"></i>2
                                        <i className="fa-solid fa-eye"></i>16
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
                <div className="w-1/5 bg-slate-100 flex flex-col items-center justify-between h-52 pb-10">
                    <div className="w-full text-2xl bg-orange-500 text-center p-4 text-white">Total</div>
                    <button className='btn btn-disabled rounded-none'>Go TO Shopping Cart</button>
                </div>
            </div>}
        </div>
    );
};

export default MyAds;