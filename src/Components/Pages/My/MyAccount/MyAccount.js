import React, { useState, useEffect } from 'react';
import diamond from './../../../../images/diamond.svg';
import Form from './Form/Form';
import './MyAccount.css';

const MyAccount = () => {
    const [image, setImage] = useState('');
    const [picture, setPicture] = useState('');
    const [user, setUser] = useState({});
    const [adTitle, setAdTitle] = useState('');
    const [adDescription, setAdDescription] = useState('');
    const [adNumber, setAdNumber] = useState('');
    const [category, setCategory] = useState('');
    const [adLocation, setAdLocation] = useState('');
    const [adPrice, setAdPrice] = useState(0);
    const [subCategory, setSubCategory] = useState('');
    const [mainCategory, setMainCategory] = useState('');
    const u_id = localStorage.getItem('u_id');
    const imageStorageKey = `c57edde5c6208c27a5d91c5e10163c0f`;
    const imgUrl = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;

    useEffect(() => {
        fetch(`http://localhost:5000/users/${u_id}`)
            .then(res => res.json())
            .then(data => setUser(data));
    }, []);

    const updateAvatar = () => {
        const avatar = picture[0];
        const formData = new FormData();
        formData.append('image', avatar);
        fetch(imgUrl, {
            method: "POST",
            body: formData
        })
            .then(response => response.json())
            .then(result => {
                console.log(result);
                if (result?.success) {
                    const picture = result?.data?.url;
                    fetch(`http://localhost:5000/users/${user?.email}`, {
                        method: 'PUT',
                        headers: {
                            'Content-type': 'application/json'
                        },
                        body: JSON.stringify({ picture })
                    })
                        .then(res => res.json())
                        .then(data => console.log(data))
                }
                else {
                    console.log('error in updating picture');
                }
            });
    }

    return (
        <section>
            <div className='bg-slate-100 flex gap-5 p-5'>
                <div className="w-1/3 bg-white grid grid-cols-1 rounded-lg gap-5 pb-5">
                    <div className='flex gap-5 items-center p-5 relative'>
                        <div className="relative w-32 h-32 rounded-full overflow-hidden avatar">
                            <img src={user?.picture !== '' ? user?.picture : 'https://w7.pngwing.com/pngs/754/2/png-transparent-samsung-galaxy-a8-a8-user-login-telephone-avatar-pawn-blue-angle-sphere-thumbnail.png'} className='w-full' alt="" />

                            <label htmlFor="my-modal-3" className="btn fa-solid fa-camera absolute top-0 flex items-center justify-center left-0 text-5xl w-32 h-32 bg-[#01010188] change-avatar"></label>
                        </div>

                        {/* Put this part before </body> tag */}
                        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box relative">
                                <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                {user && <div>
                                    <h3 className="text-lg font-bold mb-5">Upload your new avatar</h3>
                                    <div className='flex gap-3'>
                                        <input required onChange={(e) => setPicture(e?.target?.files)} accept="image/gif, image/jpeg, image/png" className='h-12 input input-bordered' placeholder='File' name='image' type="file" />
                                        <button onClick={() => updateAvatar()} className="btn btn-success">Upload</button>
                                    </div>
                                </div>}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl">{user?.name}
                                {user?.userType === 'VIP' && <img src="https://cdn-icons-png.flaticon.com/512/70/70535.png" className='w-10 inline' alt="" />}
                                {user?.userType === 'Premium' && <img className='w-10 inline' src={diamond} alt="" />}
                            </h2>
                            <button className='h-uline'>View My Profile</button>
                        </div>
                    </div>
                    <label htmlFor="post-ad-modal" className='bg-slate-700 text-white pl-10 py-2 flex items-center justify-start gap-5 text-2xl cursor-pointer'><i className="fa-solid fa-plus bg-red-500 text-2xl w-12 h-12 flex items-center justify-center rounded-full"></i>Post an ad</label>

                    <button className='pl-10 flex items-center justify-start gap-5'><i className="fa-solid fa-hashtag bg-black rounded-t-full rounded-l-full text-2xl w-12 h-12 flex items-center justify-center text-white"></i>Dating</button>

                    <button className=' pl-10 flex items-center justify-start gap-5'><i className="fa-solid fa-pencil text-2xl"></i>Edit Ads</button>

                    <button className=' pl-10 flex items-center justify-start gap-5'><i className="fa-solid fa-star text-2xl"></i>My Favourite Ads</button>

                    <button className=' pl-10 flex items-center justify-start gap-5'><i className="fa-solid fa-wallet text-2xl"></i>My Wallet <span className="text-red-500 text-sm">new</span></button>

                    <button className=' pl-10 flex items-center justify-start gap-5'><i className="fa-solid fa-person-circle-check text-2xl"></i>My Updates <span className="text-red-500 text-sm">new</span></button>
                </div>


                <input type="checkbox" id="post-ad-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                        <label htmlFor="post-ad-modal" className="btn btn-sm btn-warning btn-circle absolute top-5 right-5">✕</label>
                        {user.name ? <Form user={user} /> : 'No user'}
                    </div>
                </div>

               

                <div className='w-2/3 rounded-lg'>
                    <div className="bg-white p-5 rounded-lg grid grid-cols-2 gap-10">
                        <div className='flex flex-col gap-3'>
                            <h2 className="text-3xl text-slate-800">My Balance:</h2>
                            <h2 className="text-3xl text-slate-500">₹0</h2>
                            <p>Active</p>
                            <button className='btn border-none w-fit bg-slate-500 rounded-lg px-5 py-2'>My Wallet</button>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <h2 className="text-3xl text-slate-800"> <i className="fa-solid fa-message"></i> Messages</h2>
                            <p>0 new messages</p>

                            <h2 className="text-3xl text-slate-800">Followers</h2>
                            <p>Followers: 3</p>
                            <p>Following: 0</p>
                            <p className="text-blue-800"> <i className="fa-solid fa-search"></i> View my followers</p>
                            <p>My Ads</p>
                            <p className="text-blue-800"> <i className="fa-solid fa-circle-check"></i>1 active</p>
                        </div>
                    </div>

                    <div className='vip-bg h-95'>

                    </div>
                </div>
            </div>
        </section >
    );
};

export default MyAccount;