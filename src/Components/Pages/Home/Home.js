import React, { useState, useEffect } from 'react';
import topBadge from './../../../images/top-badge.png';
import { useNavigate } from 'react-router-dom';
import diamond from './../../../images/diamond.svg';
import './Home.css';
import ad1 from './1.png';
import Header from '../../Shared/NavHeader/Header';
import useCall from '../../Shared/useCall';

const Home = () => {
    const [galleryAds, setGalleryAds] = useState([]);
    const [sponsoredAds, setSponsoredAds] = useState([]);
    const [vipUsers, setVipUsers] = useState([]);
    const [users, setUsers] = useState([]);
    const [otherAds, setOtherAds] = useState([]);
    const { data: mainCateogries } = useCall('main-categories');
    const navigate = useNavigate();

    console.log(mainCateogries, 'mainCateogries')

    useEffect(() => {
        fetch('http://localhost:5000/vip-users')
            .then(res => res.json())
            .then(data => setVipUsers(data))

        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))

        fetch('http://localhost:5000/ads')
            .then(res => res.json())
            .then(data => {
                const filteredAds = data.filter(ad => ad.adType !== 'Gallery');
                setOtherAds(filteredAds);
                const gAds = data.filter(ad => ad.adType === "Gallery");
                setGalleryAds(gAds);
                const sAds = data.filter(ad => ad.sponsored === true);
                setSponsoredAds(sAds);
            })
    }, [])

    localStorage.setItem('u_id', '63de470c0833fcc368febe6f');

    const getRandomElementsFromArray = (arr, numberOfElements) => {
        let randomElements = [];
        for (let i = 0; i < numberOfElements; i++) {
            let randomIndex = Math.floor(Math.random() * arr.length);
            if (randomElements.indexOf(randomIndex) === -1) {
                randomElements.push(arr[randomIndex]);
            }
        }
        return randomElements;
    }

    let randomElements = getRandomElementsFromArray(users, 5);
    let randomGalleryAds = getRandomElementsFromArray(galleryAds, 5);
    let randomSponsoredAd = getRandomElementsFromArray(sponsoredAds, 1);

    return (
        <section className='bg-white'>
            <Header />
            <div className="flex items-center justify-between gap-2 bg-[#aa7121] text-white font-bold text-2xl px-8">
                <img width='120' src="https://static.locanto.info/assets/230203_153422/images/logo/locanto_white.svg" alt="" />
                <div className="flex items-center gap-8 h-16">
                    <p>VIP Ads</p>
                    <div className="relative bg-white rounded-full border border-[#aa7121] w-28 h-28">
                        <img src={'https://static.locanto.info/assets/230203_153422/images/bg/icons/sprites/desktop/account_section/sprite_bg.svg#vip_crown'} className='rounded-full z-auto w-full p-4' alt="" />
                    </div>
                    <button className="underline hover:text-white">Learn More</button>
                </div>
            </div>
            <div className="px-10 py-16 grid grid-cols-1 lg:grid-cols-7 md:grid-cols-3 gap-5 text-center">
                {vipUsers.slice(0, 7).map(vu => {
                    return <div>
                        <img className='w-full h-52 rounded-full mb-2' src={vu.picture ? vu.picture : "https://w7.pngwing.com/pngs/754/2/png-transparent-samsung-galaxy-a8-a8-user-login-telephone-avatar-pawn-blue-angle-sphere-thumbnail.png"} alt="" />
                        <p className='text-2xl font-bold'>{vu?.name}</p>
                    </div>
                })}
            </div>
            <div className="flex pl-3">
                <div className="w-1/5 flex items-start p-5 h-fit flex-col gap-5 bg-slate-100 rounded-lg">
                    <button className='w-full bg-orange-400 text-xl p-4'>Adjust your search</button>
                    <h3 className="text-xl">REFINE CATEGORY</h3>
                    <ul>
                        {mainCateogries?.map(c => {
                            return <li className='py-2 hover:text-blue-800 cursor-pointer'>{c?.title}</li>
                        })}
                    </ul>
                    <h3 className="text-xl">ABOUT EVENTS INDIA</h3>
                    What’s going on in your city India? Do you know of the best parties, concerts, shows, and other events? Browse through Events India on Locanto to stay up to date about everything that is going on in your area! Events India has all the Events that you are looking for to have a great day or night out in town!
                </div>
                <div className="px-8 pb-8 w-3/5 m-auto flex flex-col gap-8">
                    <button className="btn relative w-full flex m-auto border-none hover:bg-orange-400 rounded-full bg-orange-500">Want Your Ad Here?
                        <i className='fa-solid fa-thumbs-up absolute top-2 right-5 text-2xl'></i>
                    </button>

                    <div className="ads">
                        {sponsoredAds?.length > 0 && <div onClick={() => navigate(`/ad/${randomSponsoredAd[0]?._id}`)} className={`cursor-pointer flex items-start text-[#684b93] relative gap-3 p-3 rounded-lg border my-2 bg-[#E8DFF0]`}>
                            <div className="relative w-1/3">
                                <img className='w-full rounded-lg h-40' src={randomSponsoredAd[0].adImages[0]} alt="" />
                            </div>
                            <img className='w-16 -top-1 -right-1 absolute' src={topBadge} alt="" />
                            <div className='w-2/3 flex flex-col gap-2'>
                                <h2 className={`text-2xl font-bold ${randomSponsoredAd[0].adType === 'Premium' && 'text-[#1C3649]'}`}>{randomSponsoredAd[0].adTitle}</h2>
                                <p>{randomSponsoredAd[0].adDescription.length < 380 ? randomSponsoredAd[0].adDescription : randomSponsoredAd[0].adDescription.slice(0, 380) + '...'}</p>
                            </div>

                            <div className='absolute bottom-1 right-2 flex gap-2 text-xl font-bold'>SPONSORED | PREMIUM <img src={diamond} className='w-8' alt="" /></div>
                        </div>
                        }

                        {otherAds?.length > 0 && otherAds.slice(0, 6).map(ad => {
                            return <div onClick={() => navigate(`/ad/${ad?._id}`)} className={`cursor-pointer flex items-start text-[#684b93] relative gap-3 p-3 rounded-lg border my-2 ${ad?.adType === 'Premium' && 'bg-[#E8DFF0]'}`}>
                                <div className="relative w-1/3">
                                    <img className='w-full rounded-lg h-40' src={ad?.adImages[0]} alt="" />
                                    {ad?.adType === 'Top' && <img src={'https://static.locanto.info/assets/230203_153422/images/bg/icons/sprites/desktop/account_section/sprite_bg.svg#vip_crown'} className='absolute w-10 bottom-2 left-2 bg-white p-1' alt="" />}
                                </div>
                                {ad.adType === 'Premium' && <img className='w-16 -top-1 -right-1 absolute' src={topBadge} alt="" />}
                                {ad.adType === 'Top' && <img className='w-16 -top-1 -right-1 absolute' src={topBadge} alt="" />}
                                <div className='w-2/3 flex flex-col gap-2'>
                                    <h2 className={`text-2xl font-bold ${ad?.adType === 'Premium' && 'text-[#1C3649]'}`}>{ad?.adTitle}</h2>
                                    <p>{ad?.adDescription.length < 380 ? ad?.adDescription : ad?.adDescription.slice(0, 380) + '...'}</p>
                                </div>

                                {ad?.adType === 'Top' && <img src={'https://static.locanto.info/assets/230203_153422/images/bg/icons/sprites/desktop/account_section/sprite_bg.svg#vip_crown'} className='absolute w-10 bottom-2 right-2' alt="" />}
                                {ad?.adType === 'Premium' && <img src={diamond} className='absolute w-10 bottom-2 right-2' alt="" />}
                            </div>
                        })}
                    </div>

                    <div className="flex items-center justify-between gap-2 bg-[#37559B] text-white px-8 py-3 text-2xl">
                        <div className="flex gap-2">
                            <img width='120' src="https://static.locanto.info/assets/230203_153422/images/logo/locanto_white.svg" alt="" /> Homepages
                        </div>
                        <button className="underline hover:text-white">Want to appear here?</button>
                    </div>
                    <div className="px-5 py-10 grid grid-cols-1 lg:grid-cols-5 md:grid-cols-2 gap-5 text-center">
                        {randomElements.map(u => {
                            return <div>
                                <img className='w-full h-40 rounded-full mb-2' src={u?.picture !== '' ? u?.picture : 'https://w7.pngwing.com/pngs/754/2/png-transparent-samsung-galaxy-a8-a8-user-login-telephone-avatar-pawn-blue-angle-sphere-thumbnail.png'} alt="" />
                                <p>{u?.name}</p>
                            </div>
                        })}
                    </div>

                    <div className='relative'>
                        <img src={ad1} className='w-full' alt="" />
                        <div className='absolute top-1 right-1 flex gap-1'>
                            <button className='btn bg-[#ffffff61] hover:bg-[#bccedfe1] btn-xs border-none rounded-none'> <i className='fa-solid fa-info-circle text-[#28d2fc]'></i> </button>
                            <button className='btn bg-[#ffffff61] hover:bg-[#bccedfe1] btn-xs border-none rounded-none text-[#28d2fc]'>x</button>
                        </div>
                    </div>
                </div>
                <div className="w-1/5 flex items-center flex-col gap-5">
                    <div className="text-white bg-teal-400 w-full rounded-l-full py-5 px-10 relative">
                        <h2 className="text-4xl">Gallery Ads</h2>
                        <p className='flex gap-3 items-center'><i className="fa-solid fa-info text-teal-400 bg-white rounded-full w-10 h-10 flex items-center justify-center"></i> Want your ad here?</p>
                        <i className="fa-solid fa-image text-5xl absolute top-8 right-6"></i>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                        {randomGalleryAds?.length > 4 && randomGalleryAds.map(gd => {
                            return <div className='cursor-pointer' onClick={() => navigate(`/ad/${gd?._id}`)}>
                                {gd?.adImages.length === 1 && <div className="flex justify-center">
                                    <img src={gd?.adImages[0]} className='w-20 h-20 rounded-lg border border-orange-300' alt="" />
                                </div>}
                                {gd?.adImages.length === 2 &&
                                    <div className="flex justify-between">
                                        <img src={gd?.adImages[0]} className='w-20 h-20 rounded-lg border border-orange-300' alt="" /><img src={gd?.adImages[1]} className='w-20 h-20 rounded-lg border border-orange-300' alt="" />
                                    </div>
                                }
                                {gd?.adImages.length > 2 &&
                                    <div className="flex gap-2">
                                        <img src={gd?.adImages[0]} className='w-20 h-20 rounded-lg border border-orange-300' alt="" />
                                        <img src={gd?.adImages[1]} className='w-20 h-20 rounded-lg border border-orange-300' alt="" />
                                        <img src={gd?.adImages[2]} className='w-20 h-20 rounded-lg border border-orange-300' alt="" />
                                    </div>
                                }
                                <h3 className="text-xl mt-2">{gd?.adTitle}</h3>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;