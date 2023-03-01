import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import topBadge from './../../../images/top-badge.png';
import diamond from './../../../images/diamond.svg';

const SingleAd = () => {
    const { id } = useParams();
    const [clickedAd, setClickedAd] = useState({});
    const [otherAds, setOtherAds] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/ads/' + id)
            .then(res => res.json())
            .then(data => setClickedAd(data))
    }, [id]);

    useEffect(() => {
        fetch('http://localhost:5000/ads')
            .then(res => res.json())
            .then(data => {
                const filteredAds = data.filter(ad => ad._id !== id);
                setOtherAds(filteredAds);
            })
    }, []);

    const tips = [
        "Locanto employees will never approach and ask you for credit card or bank details.",
        "Be wary of users who have a poor grasp of English; most scams originate overseas.",
        "Protect your personal details and initiate communication using our contact form.",
        "Usernames containing ‘Locanto’ or a variation thereof are not official Locanto employees.", 
        "The only way to reach an official Locanto employee is through our contact form.",
        "Avoid communicating via email; use the Locanto messaging centre.",
        "Do not want to use the messaging centre, or meet in person.",
        "When meeting up with a seller, avoid carrying more cash than necessary."
    ]

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

    let randomAds = getRandomElementsFromArray(otherAds, 5);

    return (
        <div className="flex gap-5 p-10 text-xl">
            <div className='p-5 flex flex-col gap-5 w-4/5'>
                <div className="w-full flex items-center justify-between bg-slate-100 p-3">
                    <span className="text-2xl bg-slate-100">{clickedAd?.adTitle}</span>
                    <btn className="cursor-pointer p-2 text-2xl hover:bg-slate-200 bg-slate-100"><i class="fa-solid fa-triangle-exclamation"></i> Flag</btn>
                </div>
                Ad ID: {id}

                <div className="h-fit bg-slate-100 p-3 flex justify-center">
                    {clickedAd?.adImages && <img className='w-fit h-96 rounded-lg' src={clickedAd?.adImages[0]} alt="" />}
                </div>
                <p>{clickedAd?.adDescription}</p>
                <p>Contact us for any query - <b>{clickedAd?.admin?.email}</b></p>
                <div className='w-full flex justify-between gap-2'>
                    <div className="flex gap-5">
                        <button className='btn w-fit flex mx-auto bg-yellow-500 hover:bg-yellow-600 border-none rounded-lg'>Contact</button>
                        <button className='btn w-fit flex mx-auto bg-blue-600 hover:bg-blue-700 border-none rounded-lg'> Make an offer</button>
                    </div>

                    <div className="flex gap-2 mt-2 items-center">
                        <p>Share ad</p>
                        <i class="fa-brands fa-facebook-f bg-slate-800 text-white hover:bg-blue-600 cursor-pointer p-2 text-2xl w-12 h-12 flex justify-center items-center"></i>
                        <i class="fa-brands fa-twitter bg-slate-400 text-white hover:bg-blue-500 cursor-pointer p-2 text-2xl w-12 h-12 flex justify-center items-center"></i>
                        <i class="fa-brands fa-pinterest-p bg-slate-800 text-white hover:bg-red-600 cursor-pointer p-2 text-2xl w-12 h-12 flex justify-center items-center"></i>
                    </div>
                </div>

                <div className="divider">
                    <button onClick={() => navigate(`/ad/${randomAds[0]?._id}`)}>Next Ad <i className="fa-solid fa-arrow-right"></i> </button>
                </div>

                <div className="border p-2 flex flex-col gap-3">
                    <p className="font-bold text-2xl">You might also be interested in the following Locanto ads</p>
                    {randomAds?.map(ad => {
                        return <div onClick={() => navigate(`/ad/${ad?._id}`)} className={`cursor-pointer flex items-start text-[#684b93] bg-slate-100 relative gap-3 p-3 rounded-lg border my-2 ${ad?.adType === 'Premium' && 'bg-[#E8DFF0]'}`}>
                            <div className="relative w-1/3">
                                <img className='w-full rounded-lg h-40' src={ad?.adImages[0]} alt="" />
                                {ad?.adType === 'Top' && <img src={'https://static.locanto.info/assets/230203_153422/images/bg/icons/sprites/desktop/account_section/sprite_bg.svg#vip_crown'} className='absolute w-10 bottom-2 left-2 bg-white p-1' alt="" />}
                            </div>
                            {ad?.adType === 'Premium' && <img className='w-16 -top-1 -right-1 absolute' src={topBadge} alt="" />}
                            {ad?.adType === 'Top' && <img className='w-16 -top-1 -right-1 absolute' src={topBadge} alt="" />}
                            <div className='w-2/3 flex flex-col gap-2'>
                                <h2 className={`text-2xl font-bold ${ad?.adType === 'Premium' && 'text-[#1C3649]'}`}>{ad?.adTitle}</h2>
                                <p>{ad?.adDescription.length < 380 ? ad?.adDescription : ad?.adDescription.slice(0, 380) + '...'}</p>
                            </div>

                            {ad?.adType === 'Top' && <img src={'https://static.locanto.info/assets/230203_153422/images/bg/icons/sprites/desktop/account_section/sprite_bg.svg#vip_crown'} className='absolute w-10 bottom-2 right-2' alt="" />}
                            {ad?.adType === 'Premium' && <img src={diamond} className='absolute w-10 bottom-2 right-2' alt="" />}
                        </div>
                    })}
                </div>
            </div>
            <div className='w-1/5 flex flex-col'>
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-2 m-2 bg-slate-100 p-4">
                        <div className="flex gap-3">
                            <i className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-200 text-white fa-solid fa-user"></i>
                            <p><b className='text-2xl'>{clickedAd?.admin?.name}</b><br />
                                show online status</p>
                        </div>

                        <div className="flex gap-3">
                            <i className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-200 text-white fa-solid fa-phone"></i>
                            <p><b>Phone number</b><br />
                                {clickedAd?.adNumber}</p>
                        </div>
                        <div className="flex gap-3">
                            <i className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-200 text-white fa-solid fa-user-check"></i>
                            <p><b>Registered:</b><br />
                                1 year ago</p>
                        </div>
                        <button className="bg-slate-200 px-4 py-3 rounded-lg"> <i className="fa-solid fa-user-plus text-green-500"></i> Follow this user</button>
                        <p className="text-blue-700 text-center">Block ad</p>
                    </div>

                    <div className="flex flex-col gap-2 p-2 m-2 bg-slate-100">
                        <h2 className="w-full p-3 text-2xl bg-slate-200">Contact {clickedAd?.admin?.name}</h2>

                        <textarea className='input input-bordered h-40 p-4 resize-none' placeholder='Your message' name="" id="" cols="30" rows="10"></textarea>
                        <div className="flex items-center gap-1">
                            <i className="text-primary fa-solid fa-bell"></i>
                            <p>Notify me when there are updates from {clickedAd?.admin?.name}</p>
                            <input type="checkbox" className="toggle toggle-primary" />
                        </div>
                        <button className='btn bg-yellow-500 hover:bg-yellow-600 border-none rounded-lg'> Send</button>
                    </div>

                    <div className="flex flex-col gap-2 p-2 m-2 bg-slate-100 max-h-60">
                        <h2 className="w-full p-3 text-2xl bg-slate-200"><i class="fa-solid fa-shield text-green-500"></i> Safety Tips </h2>
                        <div className="carousel w-full">
                            {tips.map(tip => {
                                return <div className='carousel-item relative w-full flex flex-col gap-5 h-fit'>
                                    <div id={`slide-${tips.indexOf(tip)}`}>
                                        <div className="w-4/6 flex mx-auto"><p>{tip}</p></div>
                                        <div className="absolute flex text-5xl justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                            <a href={`#slide-${(tips.indexOf(tip) - 1)}`} className={`hover:text-slate-200 text-5xl`}>❮</a>

                                            <a href={`#slide-${(tips.indexOf(tip) + 1)}`} className={`hover:text-slate-200 text-5xl`}>❯</a>
                                        </div>
                                    </div>
                                    <p className='w-4/6 flex mx-auto text-slate-400 font-bold'>{(tips.indexOf(tip) + 1)} / {(tips.length)}</p>
                                </div>
                            })}
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 p-2 m-2 bg-slate-100">
                        <h2 className="w-full p-3 text-2xl bg-slate-200">Would you like to post a similar ad?
                        </h2>

                        <button className='btn w-fit flex mx-auto bg-blue-600 hover:bg-blue-700 border-none rounded-full'><i className='fa-solid fa-circle-plus pr-2'></i> Post Free Ad</button>
                    </div>

                    <div className="flex flex-col gap-2 p-2 m-2 bg-slate-100">
                        <h2 className="w-full p-3 text-2xl bg-slate-200">Or try</h2>
                        <p className="h-uline">● Construction Material Supplier Delhi</p>
                        <hr className='my-1' />
                        <p className="h-uline">● Concrete & Masonry Delhi</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleAd;