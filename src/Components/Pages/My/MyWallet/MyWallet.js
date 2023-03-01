import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useCall from '../../../Shared/useCall';
import diamond from './../../../../images/diamond.svg';
import './MyWallet.css';

const MyWallet = () => {
    const navigate = useNavigate();
    const u_id = localStorage.getItem('u_id');
    const { data: user } = useCall('users/' + u_id);
    const [picture, setPicture] = useState('');
    const imageStorageKey = `c57edde5c6208c27a5d91c5e10163c0f`;
    const imgUrl = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;

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
                        <h2 className="text-3xl">Welcome <br /> {user?.name}!</h2>
                        <button className='h-uline'>View My Profile</button>
                    </div>
                </div>
                <label htmlFor="post-ad-modal" className='bg-slate-700 text-white pl-10 py-2 flex items-center justify-start gap-5 text-2xl cursor-pointer'><i className="fa-solid fa-plus bg-red-500 text-2xl w-12 h-12 flex items-center justify-center rounded-full"></i>Post an ad</label>


                <button onClick={() => navigate('/my/my-ads')} className='pl-10 flex items-center justify-start gap-5'><i className="fa-solid fa-pencil text-2xl"></i>Edit Ads</button>

                <button onClick={() => navigate('/my/my-favourite-ads')} className=' pl-10 flex items-center justify-start gap-5'><i className="fa-solid fa-star text-2xl"></i>My Favourite Ads</button>

                <button onClick={() => navigate('/my/my-wallet')} className=' pl-10 flex items-center justify-start gap-5'><i className="fa-solid fa-wallet text-2xl"></i>My Wallet <span className="text-red-500 text-sm">new</span></button>

                <button className=' pl-10 flex items-center justify-start gap-5'><i className="fa-solid fa-person-circle-check text-2xl"></i>My Updates <span className="text-red-500 text-sm">new</span></button>
            </div>

            <div>
                <h1 className="text-3xl flex gap-5">My Wallet <label htmlFor="wallet-info-modal" className="fa-solid fa-info text-xl cursor-pointer w-8 h-8 rounded-full flex items-center justify-center bg-yellow-300"></label> </h1>
                {/* <label htmlFor="my-modal-3" className="btn">open modal</label> */}


                {/* modal */}
                <input type="checkbox" id="wallet-info-modal" className="modal-toggle" />
                <div className="modal text-white">
                    <div className="modal-box w-11/12 relative wallet-info-modal">
                        <label htmlFor="wallet-info-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <div className="flex justify-between">
                            <div className="flex flex-col gap-5">
                                <h3 className="text-3xl font-bold flex gap-5">Introducing <img src="https://static.locanto.info/assets/230210_181402/images/logo/locanto_white.svg" width={100} alt="" /> Wallet</h3>
                                <h3 className="text-3xl">A smarter, faster way to get upgrades</h3>
                                <h2 className="text-2xl"><i className="fa-solid fa-check"></i>Activation of upgrades in seconds</h2>
                                <h2 className="text-2xl"><i className="fa-solid fa-check"></i>Additional payment options, including bank transfers</h2>
                                <h2 className="text-2xl"><i className="fa-solid fa-check"></i>Exclusive features and promotions</h2>
                            </div>
                            <div>
                                <img src="https://static.locanto.info/assets/230210_181402/images/payment_options/wallet.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyWallet;