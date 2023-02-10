import React from 'react';

const AccountUpgrade = () => {
    return (
        <div>
            <div className="bg-blue-800 p-10">
                <h1 className="text-5xl py-5 font-bold text-white t-shadow">What are you waiting for? <br /> Experience all the advantages now!</h1>
            </div>

            <div className="grid grid-cols-3 gap-10 p-20 text-center">
                <div className='border flex flex-col gap-5 h-72'>
                    <h2 className="text-6xl text-white py-4 bg-blue-800 w-full">12 MONTHS</h2>
                    <p>for just <span className="text-6xl">₹99</span> per month</p>
                    <p>BEST VALUE</p>

                    <button className="btn bg-blue-800 w-full border-none text-2xl flex gap-5 items-center h-20"><i className="fa-solid fa-medal"></i> Select now</button>
                </div>
                <div className='border flex flex-col gap-10 h-72'>
                    <h2 className="text-6xl text-white py-4 bg-blue-800 w-full">12 MONTHS</h2>
                    <p>for just <span className="text-6xl">₹99</span> per month</p>

                    <button className="btn bg-blue-800 w-full border-none text-2xl flex gap-5 items-center h-20"><i className="fa-solid fa-medal"></i> Select now</button>
                </div>
                <div className='border flex flex-col gap-10 h-72'>
                    <h2 className="text-6xl text-white py-4 bg-blue-800 w-full">12 MONTHS</h2>
                    <p>for just <span className="text-6xl">₹99</span> per month</p>

                    <button className="btn bg-blue-800 w-full border-none text-2xl flex gap-5 items-center h-20"><i className="fa-solid fa-medal"></i> Select now</button>
                </div>
            </div>

            <hr className='w-2/3 flex mx-auto my-5' />

            <h2 className="text-3xl text-center py-5">Trusted by millions worldwide</h2>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 p-10 text-center">
                <div className='shadow-lg p-5 flex flex-col items-center justify-center'>
                    <h2 className="text-2xl">SSL Secure Payment</h2>
                    <img src="https://iconarchive.com/download/i98433/dakirby309/simply-styled/Security-Approved.ico" alt="" />
                    Your information is protected by 256-bit SSL encryption
                </div>
                <div className='shadow-lg px-10 py-5 flex flex-col gap-10 items-center justify-center'>
                    <h2 className="text-2xl">We accept the following payment methods:
                    </h2>
                    <div className="grid grid-cols-4 gap-5">
                        <img src="https://static.locanto.info/assets/230116_154411/images/bg/icons/sprites/desktop/payment_types/sprite_bg.svg#mastercard" alt="" />
                        <img src="https://static.locanto.info/assets/230116_154411/images/bg/icons/sprites/desktop/payment_types/sprite_bg.svg#jcb" alt="" />
                        <img src="https://static.locanto.info/assets/230116_154411/images/bg/icons/sprites/desktop/payment_types/sprite_bg.svg#visa" alt="" />
                        <img src="https://static.locanto.info/assets/230116_154411/images/payment_options/wallet.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountUpgrade;