import React from 'react';
import './Premium.css';
import bestSeller from './best-seller.png';
import adSec1 from './adSec1.png';
import adSec2 from './adSec2.png';
import adSec3 from './adSec3.png';
import adSec4 from './adSec4.png';
import modal1 from './top_.webp';
import modal2 from './premium_.webp';
import modal3 from './gallery_.webp';


const Premium = () => {
    const adSec = [
        {
            id: 0,
            title: 'Top Ad',
            des: 'Sends your ad to the top of users’ search results.',
            img: adSec1,
            icon: 'fa-solid fa-thumbs-up',
            faq: {
                title: 'Top Ad Upgrades:',
                faqs: [
                    {
                        q: '+ Pole Position',
                        a: 'Your ad appears above all other Top Ads in your category.'
                    },
                    {
                        q: '+ City Extension',
                        a: 'Allows you to make your ad seen in a nearby city or even nationwide.'
                    },
                    {
                        q: '+ Category Extension',
                        a: 'Puts your ad in related categories to attract even more customers.'
                    }
                ]
            },
            modal: {
                des: 'The Top Ad sends your ad to the top of the Locanto search results and gives it the “Top” label for a selected amount of time.',
                img: modal1
            },
            new: false,
            color: 'orange-400'
        },
        {
            id: 1,
            title: 'Gallery Ad',
            des: 'Showcases your ad in a gallery next to users’ search results.',
            img: adSec2,
            icon: 'fa-solid fa-images',
            modal: {
                des: 'The Gallery Ad puts your ad in two places at once, both in a gallery next to the search results and in the search results themselves.',
                img: modal2
            },
            new: false,
            color: 'teal-400'
        },
        {
            id: 2,
            title: 'Premium Ad',
            des: 'Highlights your ad, removes third-party advertisements and gives it the “Premium” badge.',
            img: adSec3,
            icon: 'fa-solid fa-gem',
            modal: {
                des: 'Premium ads are not only marked with the “Premium” label and highlighted in users’ search results, but are also rid of any third-party advertisements or references to other Locanto ads.',
                img: modal3
            },
            new: false,
            color: 'violet-400'
        },
        {
            id: 3,
            title: 'Notify Followers',
            des: 'Automatically notify your followers via email and push notification when you post a new ad.',
            img: adSec4,
            icon: 'fa-solid fa-bell',
            new: true,
            color: 'blue-700'
        },
    ]

    return (
        <section>
            <div className="bg-blue-800 p-10">
                <h1 className="text-5xl text-center font-bold text-white t-shadow">Boost your ad with Locanto Premium Features</h1>
            </div>
            <div className='flex flex-col gap-10 p-10'>
                <h3 className="text-3xl text-center">Ads with Premium Features are 10x more likely to be seen. Try it now!</h3>
                <hr className='w-4/5 flex mx-auto' />
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-10'>

                    <div className='grid grid-cols-2 w-full gap-0 rounded-box relative best-seller'>
                        <div className="bg-orange-400 text-white font-bold flex flex-col items-center justify-center py-2">
                            <img src={bestSeller} alt="" />
                            <h3 className="text-4xl">Plus</h3>
                            <b className="text-2xl">
                                1 month Top Ad
                            </b>
                            <i className='fa-solid fa-plus text-5xl'></i>
                            <h3 className="text-2xl">
                                2 weeks <span className="text-3xl">FREE</span>
                                <br />
                                Premium Ad
                            </h3>
                        </div>
                        <div className='flex flex-col gap-5 justify-center items-center'>
                            <div className="flex gap-2 items-center text-white">
                                <i className='fa-solid fa-thumbs-up bg-orange-400 w-14 h-14 flex items-center justify-center rounded-full text-4xl'></i>
                                <i className='fa-solid fa-plus text-4xl text-black'></i>
                                <i className='fa-solid fa-gem bg-violet-500 w-14 h-14 flex items-center justify-center rounded-full text-4xl'></i>
                            </div>
                            <button className='px-10 py-2 hover:text-white hover:bg-orange-400 text-black bg-gray-200 shadow-md rounded-lg'>Post Ads</button>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 w-full gap-0 rounded-box'>
                        <div className=" bg-teal-600 text-white font-bold flex flex-col items-center justify-center py-2">
                            <h3 className="text-4xl">Premium</h3>
                            <b className="text-2xl">
                                1 month Top Ad <br />
                                1 month Gallery Ad
                            </b>
                            <i className='fa-solid fa-plus text-5xl'></i>
                            <h3 className="text-2xl">
                                1 month <span className="text-3xl">FREE</span>
                                <br />
                                Premium Ad
                            </h3>
                        </div>
                        <div className='flex flex-col gap-5 justify-center items-center'>
                            <div className="flex gap-2 items-center text-white">
                                <div className="relative">
                                    <i className='fa-solid fa-thumbs-up bg-orange-400 w-14 h-14 flex items-center justify-center rounded-full text-4xl absolute -left-9'></i>
                                    <i className='fa-solid fa-images bg-teal-400 w-14 h-14 flex items-center justify-center rounded-full text-4xl'></i>
                                </div>
                                <i className='fa-solid fa-plus text-4xl text-black'></i>
                                <i className='fa-solid fa-gem bg-violet-500 w-14 h-14 flex items-center justify-center rounded-full text-4xl'></i>
                            </div>
                            <button className='px-10 py-2 hover:text-white hover:bg-teal-600 text-black bg-gray-200 shadow-md rounded-lg'>Post Ads</button>
                        </div>
                    </div>
                </div>

                <div className='bg-slate-100 p-5 rounded-lg'>
                    {adSec.map(sec => {
                        return <div>
                            <div className='flex gap-5 items-center py-5 relative'>
                                <div className="relative">
                                    {sec?.new && <div className="absolute -top-1 -right-1 bg-red-500 text-white px-2 py-1 text-sm rounded-full">NEW</div>}

                                    <img className='w-40 h-36' src={sec?.img} alt="" />
                                    <div className="icon">
                                        <i className={`${sec?.icon} bg-${sec?.color} absolute -left-1 -top-4 text-2xl text-white rounded-full w-14 h-14 flex items-center justify-center`}></i>
                                    </div>
                                </div>
                                <div className="flex justify-between w-full">
                                    <div>
                                        <div className="flex gap-0">
                                            <h2 className="text-2xl mb-6">{sec?.title}</h2>
                                            {sec?.modal && <label htmlFor={`adsec-modal-${sec?.title}`} className="btn pb-3 flex bg-transparent hover:bg-transparent text-2xl border-none text-black"><i class="fa-solid fa-circle-info"></i></label>}
                                        </div>

                                        {/* modal */}
                                        {sec?.modal && <>
                                            <input type="checkbox" id={`adsec-modal-${sec?.title}`} className="modal-toggle" />
                                            <div className="modal">
                                                <div className="modal-box relative p-0">
                                                    <label htmlFor={`adsec-modal-${sec?.title}`} className="cursor-pointer text-white text-2xl absolute right-3 top-2">✕</label>
                                                    <h3 className={`text-2xl py-2 text-center font-bold text-white bg-${sec?.color}`}> <i className={`${sec?.icon} absolute top-3 left-3`}></i> {sec?.title}</h3>
                                                    <div className="p-3">
                                                        <p>{sec?.modal?.des}</p>
                                                        <img className='m-auto flex' src={sec?.modal?.img} alt="" />
                                                        <button className='px-10 py-3 rounded-lg shadow-lg border hover:underline h-16 flex items-center m-auto gap-3'>Post Ads <i class="fa-solid fa-angles-right"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                        }

                                        <p>{sec?.des}</p>
                                        <div className="flex flex-col gap-0">
                                            {sec?.faq &&
                                                <div>
                                                    <p className='text-orange-400 pt-3 font-bold'>{sec?.faq?.title}</p>
                                                    <div>
                                                        {sec?.faq?.faqs.map(faq => {
                                                            return <div tabIndex={0} className="collapse collapse-plus bg-slate-50 mt-2 rounded-lg">
                                                                <input type="checkbox" className="peer" />
                                                                <div className="collapse-title text-black">
                                                                    {faq?.q}
                                                                </div>
                                                                <div className="collapse-content text-slate-700">
                                                                    <p tabIndex={0}>{faq?.a}</p>
                                                                </div>
                                                            </div>
                                                        })}
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                    <button className='px-10 py-3 rounded-lg shadow-lg bg-slate-200 hover:bg-slate-100 h-16 flex items-center my-auto'>Post Ads</button>
                                </div>
                            </div>
                            <hr />
                        </div>
                    })}
                </div>
            </div>
        </section>
    );
};

export default Premium;