import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Shared/NavHeader/Header';
import topBadge from './../../images/top-badge.png';
import diamond from './../../images/diamond.svg';

const SubCategoryAds = () => {
    const [ads, setAds] = useState([]);
    const [sponsoredAds, setSponsoredAds] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/ads')
            .then(res => res.json())
            .then(data => {
                const filteredAds = data.filter(ad => ad.sponsored !== true);
                setAds(filteredAds);
                const sAds = data.filter(ad => ad.sponsored === true);
                setSponsoredAds(sAds);
            })
    }, []);

    const subCategory = JSON.parse(localStorage.getItem('clickedSubCat'));
    const subCatCategories = subCategory?.categories.split(',');

    return (
        <section>
            <Header />
            <div className='bg-slate-100 flex gap-5 p-5'>
                <div className='w-1/4 bg-white p-5 rounded-lg h-95'>
                    <button>Adjust your search</button>
                    <h3 className="text-xl pb-5">REFINE CATEGORY</h3>
                    <ul>
                        {subCatCategories.map(c => {
                            return <li onClick={() => localStorage.setItem('clickedCat', c)} className='py-2 hover:text-blue-800 cursor-pointer'>{c}</li>
                        })}
                    </ul>
                </div>
                <div className='w-3/4'>
                    <div className="ads">
                        {sponsoredAds.slice(0,1).map(ad => {
                            return <div onClick={()=>navigate(`/ad/${ad?._id}`)} className={`cursor-pointer flex items-start text-[#684b93] relative gap-3 p-3 rounded-lg border my-2 bg-[#E8DFF0]`}>
                                <div className="relative w-1/3">
                                    <img className='w-full rounded-lg h-40' src={ad?.adImages.length>0 ? ad?.adImages[0] : ''} alt="" />
                                </div>
                                <img className='w-16 -top-1 -right-1 absolute' src={topBadge} alt="" />
                                <div className='w-2/3 flex flex-col gap-2'>
                                    <h2 className={`text-2xl font-bold ${ad?.adType === 'Premium' && 'text-[#1C3649]'}`}>{ad?.adTitle}</h2>
                                    <p>{ad?.adDescription?.length < 360 ? ad?.adDescription : ad?.adDescription?.slice(0, 360) + '...'}</p>
                                </div>

                                <div className='absolute bottom-1 right-2 flex gap-2 text-xl font-bold'>SPONSORED | PREMIUM <img src={diamond} className='w-8' alt="" /></div>
                            </div>
                        })}

                        {ads?.map(ad => {
                            return <div onClick={()=>navigate(`/ad/${ad?._id}`)} className={`cursor-pointer flex items-start text-[#684b93] relative gap-3 p-3 rounded-lg border my-2 ${ad?.adType === 'Premium' && 'bg-[#E8DFF0]'}`}>
                                <div className="relative w-1/3">
                                    <img className='w-full rounded-lg h-40' src={ad?.adImages.length>0 ? ad?.adImages[0] : ''} alt="" />
                                    {ad?.adType === 'Top' && <img src={'https://static.locanto.info/assets/230203_153422/images/bg/icons/sprites/desktop/account_section/sprite_bg.svg#vip_crown'} className='absolute w-10 bottom-2 left-2 bg-white p-1' alt="" />}
                                </div>
                                {ad.adType === 'Premium' && <img className='w-16 -top-1 -right-1 absolute' src={topBadge} alt="" />}
                                {ad.adType === 'Top' && <img className='w-16 -top-1 -right-1 absolute' src={topBadge} alt="" />}
                                <div className='w-2/3 flex flex-col gap-2'>
                                    <h2 className={`text-2xl font-bold ${ad?.adType === 'Premium' && 'text-[#1C3649]'}`}>{ad?.adTitle}</h2>
                                    <p>{ad?.adDescription?.length < 360 ? ad?.adDescription : ad?.adDescription?.slice(0, 360) + '...'}</p>
                                </div>

                                {ad?.adType === 'Top' && <img src={'https://static.locanto.info/assets/230203_153422/images/bg/icons/sprites/desktop/account_section/sprite_bg.svg#vip_crown'} className='absolute w-10 bottom-2 right-2' alt="" />}
                                {ad?.adType === 'Premium' && <img src={diamond} className='absolute w-10 bottom-2 right-2' alt="" />}
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SubCategoryAds;