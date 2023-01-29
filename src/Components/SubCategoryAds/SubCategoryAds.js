import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Shared/NavHeader/Header';
import topBadge from './../../images/top-badge.png';

const SubCategoryAds = () => {
    const [ads, setAds] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/ads')
            .then(res => res.json())
            .then(data => setAds(data));
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
                        {ads?.map(ad => {
                            return <div className={`flex items-start relative gap-3 p-3 rounded-lg border my-2 ${ad?.adType==='Top' ? 'bg-orange-50 border-orange-300' : 'bg-white'}`}>
                                <img className='w-1/3 rounded-lg h-40' src={ad?.image} alt="" />
                                {ad?.adType==='Top' && <img className='w-16 -top-1 -right-1 absolute' src={topBadge} alt="" />}
                                <div className='w-2/3 flex flex-col gap-2 relative'>
                                    <h2 className="text-2xl">{ad?.adTitle}</h2>
                                    <p>{ad?.adDescription?.length < 360 ? ad?.adDescription : ad?.adDescription.slice(0, 360) + '...'}</p>
                                    <Link to={`/${ad?.category}`} className='bg-sky-100 text-sky-600 rounded-full text-sm w-fit px-2'>{ad?.category}</Link>
                                    {ad?.adType==='Premium' && <img src="https://cdn-icons-png.flaticon.com/512/70/70535.png" className='absolute w-10 bottom-2 right-2' alt="" />}
                                    {ad?.adType==='VIP' && <i className='fa-solid fa-medal absolute text-3xl bottom-2 right-2'> </i>}
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SubCategoryAds;