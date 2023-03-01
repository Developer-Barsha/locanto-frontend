import React, { useState, useEffect } from 'react';
import adSec1 from './../../Info/Premium/adSec1.png';
import adSec2 from './../../Info/Premium/adSec2.png';
import adSec3 from './../../Info/Premium/adSec3.png';
import adSec4 from './../../Info/Premium/adSec4.png';
import modal1 from './../../Info/Premium/top_.webp';
import modal2 from './../../Info/Premium/premium_.webp';
import modal3 from './../../Info/Premium/gallery_.webp';
import bestSeller from './../../Info/Premium/best-seller.png';
import './MyAds.css';

const MyAds = () => {
    const [user, setUser] = useState({});
    const [clickedId, setClickedId] = useState('');
    const [adType, setAdType] = useState('');
    const [userAds, setUserAds] = useState({});
    const u_id = localStorage.getItem('u_id');
    const [clickedTime, setClickedTime] = useState({ value: '1 week', index: 0 });
    const [price, setPrice] = useState(0);
    const [formData, setFormData] = useState({
      adTitle: "",
      adDescription: "",
      adImages: [],
      mainCategory: "",
      subCategory: "",
      category: "",
      adType: "",
      adNumber: "",
      adPrice: "",
      adLocation: "",
      admin: user.user,
    });

    useEffect(() => {
        fetch(`http://localhost:5000/users/${u_id}`)
            .then(res => res.json())
            .then(data => setUser(data));
    }, []);

    useEffect(() => {
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

    const postAd = async (e) => {
      e.preventDefault();
  
      try {
        if (formData === {}) {
          return window.alert('Please enter informations')
        }
  
        if ((formData.adLocation === '' || formData.adPrice === '') || formData.adNumber === '') {
          return window.alert('Please enter other informations')
        }
  
        if ((formData.mainCategory === '' || formData.category === '') || formData.subCategory === '') {
          return window.alert('Please enter category details')
        }
  
        console.log(formData, 'when submit btn is clicked')
  
        if (FormData.adImages !== []) {
          await fetch('http://localhost:5000/ads', {
            method: 'POST',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(formData)
          })
            .then(res => res.json())
            .then(data => {
              if (data && formData.adImages.length > 0) {
                setFormData({})
                return window.alert('Now you may reload this page and open modal to post another ad!')
              }
              else { return window.alert('Please enter all informations') }
            })
        }
        else{console.log('cound not process')}
      }
  
      catch (err) {
        console.log(err);
      }
    }

    const adSec = [
        {
            id: 0,
            title: 'Top Ad',
            des: 'Sends your ad to the top of users’ search results in Jobs Rajasthan.',
            img: adSec1,
            icon: 'fa-solid fa-thumbs-up',
            new: false,
            color: 'orange-400',
            pricing: [
                {
                    price: 490,
                    time: '1 Week'
                },
                {
                    price: 980,
                    time: '2 Weeks'
                },
                {
                    price: 1960,
                    time: '1 Month'
                },
            ],
            modal: {
                des: 'The Top Ad sends your ad to the top of the Locanto search results and gives it the “Top” label for a selected amount of time.',
                img: modal1
            },
        },
        {
            id: 1,
            title: 'Gallery Ad',
            des: 'Showcases your ad in a gallery next to users’ search results.',
            img: adSec2,
            icon: 'fa-solid fa-images',
            new: false,
            color: 'teal-400',
            pricing: [
                {
                    price: 590,
                    time: '1 Week'
                },
                {
                    price: 1180,
                    time: '2 Weeks'
                },
                {
                    price: 2360,
                    time: '1 Month'
                },
            ]
        },
        {
            id: 2,
            title: 'Premium Ad',
            des: 'Highlights your ad, removes third-party advertisements and gives it the “Premium” badge.',
            img: adSec3,
            icon: 'fa-solid fa-gem',
            new: false,
            color: 'violet-400',
            modal: {
                des: 'The Gallery Ad puts your ad in two places at once, both in a gallery next to the search results and in the search results themselves.',
                img: modal2
            },
            pricing: [
                {
                    price: 260,
                    time: '1 Week'
                },
                {
                    price: 480,
                    time: '2 Weeks'
                },
                {
                    price: 960,
                    time: '1 Month'
                },
            ]
        },
        {
            id: 3,
            title: 'Notify Followers',
            des: 'Automatically notify your followers via email and push notification when you post a new ad.',
            img: adSec4,
            icon: 'fa-solid fa-bell',
            new: true,
            color: 'blue-700',
            modal: {
                des: 'Premium ads are not only marked with the “Premium” label and highlighted in users’ search results, but are also rid of any third-party advertisements or references to other Locanto ads.',
                img: modal3
            },
            pricing: []
        },
    ];

    useEffect(() => {
        if (clickedTime?.value == '1 week') {
            setPrice(0)
        }
        else if (clickedTime?.value == '2 weeks') {
            setPrice(1)
        }
        else if (clickedTime?.value == '1 month') {
            setPrice(1)
        }

        console.log(clickedTime);
    }, [clickedTime])


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

            {user?.userType !== ('Normal' || '') && <div className="flex mt-10 gap-4">
                <div className='w-4/5'>
                    {userAds.length > 0 && userAds.map((ua, index) => {
                        return <div className='w-full'>
                            <div className="border border-slate-800">
                                <div className="flex justify-between text-xl mb-3 px-2 pt-2">
                                    <p> <i className="fa-solid fa-circle text-green-600"></i> {ua?.adTitle}</p>
                                    <p>Premium Features</p>
                                </div>
                                <div className="flex gap-3 bg-white items-center p-2 w-full">
                                    <img className='w-40' src={ua?.adImages[0]} alt="" />
                                    <div className='p-2 w-3/5'>
                                        {ua?.adDescription?.slice(0, 130)}...
                                        <br /><spam className="text-sm">Category: {ua?.subCategory} - {ua?.category}</spam>
                                        <br /><br />
                                        Still online for 28 days
                                    </div>

                                    <div className="divider lg:divider-horizontal"></div>
                                    <div className='flex flex-col gap-1'>
                                        <div className='flex items-center gap-1'>
                                            <input type="radio" name={`radio-${index}`}
                                                onClick={() => {
                                                    setAdType('Top')
                                                    setClickedId(ua?._id)
                                                }}
                                                className="radio radio-warning" />

                                            <label htmlFor="adtype-upgrade-modal" className='bg-orange-400 px-5 py-1 rounded-full text-white border-none'>Top Ad</label>
                                        </div>
                                        <div className="divider p-0 m-0 "></div>
                                        <div className='flex items-center gap-1'>
                                            <input type="radio" name={`radio-${index}`}
                                                onClick={() => {
                                                    setAdType('Gallery')
                                                    setClickedId(ua?._id)
                                                }}
                                                className="radio radio-accent" checked />
                                            <label htmlFor="adtype-upgrade-modal" className='bg-cyan-400 px-5 py-1 rounded-full text-white border-none'>Gallery Ad</label>
                                        </div>
                                        <div className="divider p-0 m-0 "></div>
                                        <div className='flex items-center gap-1'>
                                            <input type="radio" name={`radio-${index}`}
                                                onClick={() => {
                                                    setAdType('Premium')
                                                    setClickedId(ua?._id)
                                                }}
                                                className="radio radio-primary" />
                                            <label htmlFor="adtype-upgrade-modal" className='bg-purple-400 px-5 py-1 rounded-full text-white border-none'>Premium Ad</label>
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

                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id="adtype-upgrade-modal" className="modal-toggle" />
                    <label htmlFor="adtype-upgrade-modal" className="modal p-40 cursor-pointer">
                        <div className="modal-box min-w-full p-10">
                            <div className='flex flex-col gap-10 w-full'>
                                <div className='w-full grid lg:grid-cols-2 grid-cols-1 gap-10'>
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
                                        <div className='flex flex-col gap-3 justify-center items-center'>
                                            <span className="text-red-500 font-bold line-through">₹ 2,440</span>
                                            <h2 className="text-3xl font-bold">₹ 1,960</h2>
                                            <div className="flex gap-2 items-center text-white">
                                                <i className='fa-solid fa-thumbs-up bg-orange-400 w-14 h-14 flex items-center justify-center rounded-full text-4xl'></i>
                                                <i className='fa-solid fa-plus text-4xl text-black'></i>
                                                <i className='fa-solid fa-gem bg-violet-500 w-14 h-14 flex items-center justify-center rounded-full text-4xl'></i>
                                            </div>
                                            <button className='px-10 py-2 hover:text-white hover:bg-orange-400 text-black bg-gray-200 shadow-md rounded-lg'>Add</button>
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
                                        <div className='flex flex-col gap-3 justify-center items-center'>
                                            <span className="text-red-500 font-bold line-through">₹ 5,280</span>
                                            <h2 className="text-3xl font-bold">₹ 4,320</h2>
                                            <div className="flex gap-2 items-center text-white">
                                                <i className='fa-solid fa-thumbs-up bg-orange-400 w-14 h-14 flex items-center justify-center rounded-full text-4xl'></i>
                                                <i className='fa-solid fa-plus text-4xl text-black'></i>
                                                <i className='fa-solid fa-images bg-teal-400 w-14 h-14 flex items-center justify-center rounded-full text-4xl'></i>
                                                <i className='fa-solid fa-plus text-4xl text-black'></i>
                                                <i className='fa-solid fa-gem bg-violet-500 w-14 h-14 flex items-center justify-center rounded-full text-4xl'></i>
                                            </div>
                                            <button className='px-10 py-2 hover:text-white hover:bg-teal-600 text-black bg-gray-200 shadow-md rounded-lg'>Add</button>
                                        </div>
                                    </div>
                                </div>

                                <div className='w-full bg-slate-100 p-5 rounded-lg'>
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
                                                    <div className='w-4/5'>
                                                        <div className="flex gap-0 w-full justify-between">
                                                            <h2 className="text-2xl mb-6">{sec?.title}</h2>
                                                            <h2 className="font-bold flex gap-5 items-center">
                                                                {sec?.pricing?.length > 0 && `₹ ${sec.pricing[clickedTime?.index].price} /`}

                                                                {sec?.pricing?.length > 0 &&
                                                                    <select
                                                                        className="select select-bordered w-fit max-w-xs"
                                                                    // onClick={(e) => setClickedTime({ value: e?.target?.value, index: adSec?.indexOf(sec) })}
                                                                    >
                                                                        {sec?.pricing?.map(p => { return <option>{p?.time}</option> })}
                                                                    </select>}
                                                            </h2>
                                                        </div>

                                                        {/* modal */}
                                                        {/* {sec?.modal && <div className=''>
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
                                                        </div>
                                                        } */}

                                                        <p>{sec?.des}</p>
                                                    </div>

                                                    {sec?.pricing?.length === 0 ? <button className='px-10 py-3 rounded-lg shadow-lg bg-blue-600 h-16 flex items-center my-auto text-white'>Added</button> :
                                                        <button className='px-10 py-3 rounded-lg shadow-lg bg-slate-200 hover:bg-slate-100 h-16 flex items-center my-auto'>Add</button>}
                                                </div>
                                            </div>
                                            <hr />
                                        </div>
                                    })}

                                    <hr />
                                    <div className='py-5 flex flex-col items-end'>
                                        <div>
                                            <h1 className="text-3xl">TOTAL</h1>
                                            <button className='px-10 py-2 mt-3 hover:text-white hover:bg-gray-400 text-black bg-gray-200 shadow-md rounded-lg'>Proceed <div className="fa-solid fa-right-arrow"></div> </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </label>
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