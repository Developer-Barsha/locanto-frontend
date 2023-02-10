import React, { useState, useEffect } from 'react';

const Ads = () => {
    const [ads, setAds] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/ads')
            .then(res => res.json())
            .then(data => setAds(data));
    }, []);

    return (
        <div className='w-full'>
            <div className="ads">
                {ads?.map(ad => {
                    return <div className={`flex items-start relative gap-3 p-3 rounded-lg border my-2 ${ad?.sponsored ? 'bg-orange-50 border-orange-300' : 'bg-white'}`}>
                        <img className='w-1/3 rounded-lg h-60' src={ad?.image} alt="" />
                        <div className='w-2/3 flex flex-col gap-2'>
                            <h2 className="text-2xl">{ad?.adTitle}</h2>
                            <p toolTip={ad?.adDescription}>{ad?.adDescription?.length < 400 ? ad?.adDescription : ad?.adDescription.slice(0, 400) + '...'}</p>
                            <div className="flex gap-3">
                                <p> <b>Number:</b> {ad?.adNumber}</p>
                                <p> <b>Price:</b> {ad?.adPrice}</p>
                                <p> <b>Location:</b> {ad?.adLocation}</p>
                            </div>
                            <div className="flex gap-3">
                                <p> <b>Main Category :</b> {ad?.mainCategory}</p>
                                <p> <b>Sub Category :</b> {ad?.subCategory}</p>
                                <p> <b>Category :</b> {ad?.category}</p>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    );
};

export default Ads;