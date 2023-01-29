import React, { useState, useEffect } from 'react';
import topBadge from './../../../images/top-badge.png';
import './Home.css';
import ad1 from './1.png';
import Header from '../../Shared/NavHeader/Header';

const Home = () => {
    const [galleryAds, setGalleryAds] = useState([]);
    const [vipUsers, setVipUsers] = useState([]);
    const [otherAds, setOtherAds] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/vip-users')
            .then(res => res.json())
            .then(data => setVipUsers(data))

        fetch('http://localhost:5000/ads')
            .then(res => res.json())
            .then(data => {
                const filteredAds = data.filter(ad => ad.adType !== 'Gallery');
                setOtherAds(filteredAds);
                const gAds = data.filter(ad => ad.adType === "Gallery");
                setGalleryAds(gAds);
                console.log('df', gAds);
            })
    }, [])

    let randomGAds = galleryAds[Math.floor(Math.random() * galleryAds.length)];

    const ads = [
        {
            id: 0,
            title: 'Family Restuarant & Fine Dining',
            descripiton: 'A restaurant is a place where you can eat a meal and pay for it. In restaurants, your food is usually served to you at your table by a waiter or waitress. The restaurant serves breakfast, lunch, and dinner. The food at the restaurant was good and the waiters were polite.',
            image: 'https://cdn.vox-cdn.com/thumbor/VF4Bp99v90IMMcFhQDnJqxI_AJs=/0x0:5996x4003/1200x900/filters:focal(1003x1633:1961x2591)/cdn.vox-cdn.com/uploads/chorus_image/image/59732085/2021_03_23_Merois_008.12.jpg',
            sponsored: true
        },
        {
            id: 1,
            title: 'Family Restuarant & Fine Dining',
            descripiton: 'A restaurant is a place where you can eat a meal and pay for it. In restaurants, your food is usually served to you at your table by a waiter or waitress. The restaurant serves breakfast, lunch, and dinner. The food at the restaurant was good and the waiters were polite.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSVm4qF0IjbZiTIn47gW4x8eQHEKEBNtP2otHP0FixTyW1sjMaYRv81aSK-bkRRZHlCKs&usqp=CAU',
            sponsored: false
        },
        {
            id: 2,
            title: 'Family Restuarant & Fine Dining',
            descripiton: 'A restaurant is a place where you can eat a meal and pay for it. In restaurants, your food is usually served to you at your table by a waiter or waitress. The restaurant serves breakfast, lunch, and dinner. The food at the restaurant was good and the waiters were polite.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoU0RIv1raQZDm5S_XOu5BgRDUAd1Tp70nnKCuCj4v-p0K2KOlVjE3R4JBIVtxARNq84w&usqp=CAU',
            sponsored: false
        },
        {
            id: 3,
            title: 'Family Restuarant & Fine Dining',
            descripiton: 'A restaurant is a place where you can eat a meal and pay for it. In restaurants, your food is usually served to you at your table by a waiter or waitress. The restaurant serves breakfast, lunch, and dinner. The food at the restaurant was good and the waiters were polite.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAYZUvpFMYsZMg2pIWBLX5qaPOZsT8QLPLg_xn1NAkjR0cRsyr8TXFbQc0GdyYvvPe2wY&usqp=CAU',
            sponsored: false
        },
        {
            id: 4,
            title: 'Family Restuarant & Fine Dining',
            descripiton: 'A restaurant is a place where you can eat a meal and pay for it. In restaurants, your food is usually served to you at your table by a waiter or waitress. The restaurant serves breakfast, lunch, and dinner. The food at the restaurant was good and the waiters were polite.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk5rk6Vs1E_xUPo-Ck_At3dWNyI1gRHvAaJbUWeFcDlnKuuKI73uNTjkKahh0KR6mosw4&usqp=CAU',
            sponsored: false
        },
        {
            id: 5,
            title: 'Family Restuarant & Fine Dining',
            descripiton: 'A restaurant is a place where you can eat a meal and pay for it. In restaurants, your food is usually served to you at your table by a waiter or waitress. The restaurant serves breakfast, lunch, and dinner. The food at the restaurant was good and the waiters were polite.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZmOROM2OuAyE1A_tHNh4Ju5GyHUvjH3mG9G6mn-50quBt6nniztIh-J8zXfyvPbEUOZg&usqp=CAU',
            sponsored: false
        },
        {
            id: 6,
            title: 'Family Restuarant & Fine Dining',
            descripiton: 'A restaurant is a place where you can eat a meal and pay for it. In restaurants, your food is usually served to you at your table by a waiter or waitress. The restaurant serves breakfast, lunch, and dinner. The food at the restaurant was good and the waiters were polite. A restaurant is a place where you can eat a meal and pay for it. In restaurants, your food is usually served to you at your table by a waiter or waitress. The restaurant serves breakfast, lunch, and dinner. The food at the restaurant was good and the waiters were polite. A restaurant is a place where you can eat a meal and pay for it. In restaurants, your food is usually served to you at your table by a waiter or waitress. The restaurant serves breakfast, lunch, and dinner. The food at the restaurant was good and the waiters were polite. ',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Restaurant_N%C3%A4sinneula.jpg/1200px-Restaurant_N%C3%A4sinneula.jpg',
            sponsored: false
        },
        {
            id: 7,
            title: 'Family Restuarant & Fine Dining',
            descripiton: 'A restaurant is a place where you can eat a meal and pay for it. In restaurants, your food is usually served to you at your table by a waiter or waitress. The restaurant serves breakfast, lunch, and dinner. The food at the restaurant was good and the waiters were polite.',
            image: 'https://images.adsttc.com/media/images/5e4c/13ef/6ee6/7e0b/9d00/0880/newsletter/Wine_room_2.jpg?1582044085',
            sponsored: false
        },
    ]

    return (
        <section className='bg-white'>
            <Header />
            <div className="flex items-center justify-between gap-2 bg-orange-500 px-8">
                <img width='120' src="https://static.locanto.info/assets/230110_095414/images/logo/locanto_color.svg" alt="" />
                <div className="flex items-center gap-8 h-16">
                    <p className="text-lg">VIP Ads</p>
                    <div className="relative">
                        <img src={'https://media.istockphoto.com/id/1220376125/vector/vip-icon-isolated-logo-on-a-white-background.jpg?s=170667a&w=0&k=20&c=fsbJdIYM875OIGLAjfEkd-x44PfWydm2RXNX5dlpE1U='} className='rounded-full z-auto w-28 h-28' alt="" />
                    </div>
                    <button className="underline hover:text-white">Learn More</button>
                </div>
            </div>
            <div className="px-10 py-16 grid grid-cols-1 lg:grid-cols-7 md:grid-cols-3 gap-5 text-center">
                {/* <div>
                    <img className='w-full rounded-full mb-2' src="https://i.pinimg.com/236x/09/d7/08/09d7083aa66d5cdd7fef0534d02995dc.jpg" alt="" />
                    <p>Image Title</p>
                </div> */}

                {vipUsers.slice(0, 7).map(vu => {
                    return <div>
                        <img className='w-full h-40 rounded-full mb-2' src={vu.picture ? vu.picture : "https://w7.pngwing.com/pngs/754/2/png-transparent-samsung-galaxy-a8-a8-user-login-telephone-avatar-pawn-blue-angle-sphere-thumbnail.png"} alt="" />
                        <p>{vu?.name}</p>
                    </div>
                })}
            </div>
            <div className="flex">
                <div className="w-1/5 flex items-center flex-col gap-5">
                    {galleryAds.slice(0, 4).map(gd => {
                        return <div>
                            <img src={gd?.image} className='w-48 h-48 rounded-lg' alt="" />
                            <h3 className="text-xl mt-2">{gd?.adTitle}</h3>
                        </div>
                    })}
                </div>
                <div className="px-8 pb-8 w-3/5 m-auto flex flex-col gap-8">
                    <button className="btn relative w-full flex m-auto border-none hover:bg-orange-400 rounded-full bg-orange-500">Want Your Ad Here?
                        <i className='fa-solid fa-thumbs-up absolute top-2 right-5 text-2xl'></i>
                    </button>

                    <div className="ads">
                        {otherAds?.length > 0 && otherAds.map(ad => {
                            return <div className={`flex items-start relative gap-3 p-3 rounded-lg border my-2 ${ad?.adType === 'Top' && 'bg-orange-50 border-orange-300'}`}>
                                <img className='w-1/3 rounded-lg h-40' src={ad?.image} alt="" />
                                {ad.adType === 'Top' && <img className='w-16 -top-1 -right-1 absolute' src={topBadge} alt="" />}
                                <div className='w-2/3 flex flex-col gap-2'>
                                    <h2 className="text-2xl">{ad?.adTitle}</h2>
                                    <p>{ad?.adDescription.length < 360 ? ad?.adDescription : ad?.adDescription.slice(0, 360) + '...'}</p>
                                </div>
                                {ad?.adType === 'Premium' && <img src="https://cdn-icons-png.flaticon.com/512/70/70535.png" className='absolute w-10 bottom-2 right-2' alt="" />}
                            </div>
                        })}
                    </div>

                    <div className="flex items-center justify-between gap-2 bg-orange-500 px-8">
                        <img width='120' src="https://static.locanto.info/assets/230110_095414/images/logo/locanto_color.svg" alt="" />
                        <div className="flex items-center gap-8 h-16">
                            <p className="text-lg">VIP Ads</p>
                            <div className="relative">
                                <img src={'https://media.istockphoto.com/id/1220376125/vector/vip-icon-isolated-logo-on-a-white-background.jpg?s=170667a&w=0&k=20&c=fsbJdIYM875OIGLAjfEkd-x44PfWydm2RXNX5dlpE1U='} className='rounded-full z-auto w-28 h-28' alt="" />
                            </div>
                            <button className="underline hover:text-white">Learn More</button>
                        </div>
                    </div>
                    <div className="px-5 py-10 grid grid-cols-1 lg:grid-cols-5 md:grid-cols-2 gap-5 text-center">
                        <div>
                            <img className='w-full rounded-full mb-2' src="https://i.pinimg.com/236x/09/d7/08/09d7083aa66d5cdd7fef0534d02995dc.jpg" alt="" />
                            <p>Image Title</p>
                        </div>
                        <div>
                            <img className='w-full rounded-full mb-2' src="https://i.pinimg.com/236x/3a/fc/53/3afc538c499d411e8c0c999a602eb584.jpg" alt="" />
                            <p>Image Title</p>
                        </div>
                        <div>
                            <img className='w-full rounded-full mb-2' src="https://i.pinimg.com/736x/3c/21/a8/3c21a87ff185a3af305d7e02a6d9f010.jpg" alt="" />
                            <p>Image Title</p>
                        </div>
                        <div>
                            <img className='w-full rounded-full mb-2' src="https://i.pinimg.com/originals/49/d8/bd/49d8bd8237695866b736f04534c94aa3.jpg" alt="" />
                            <p>Image Title</p>
                        </div>
                        <div>
                            <img className='w-full rounded-full mb-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuISuTnx8xUtzyPExqezBkG6R0eWTlvNMTWgThRw1INaL4qdw5XauELL1ddDwlhJG-RXM&usqp=CAU" alt="" />
                            <p>Image Title</p>
                        </div>
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
                    {galleryAds?.length > 4 && galleryAds.slice(4, 8).map(gd => {
                        return <div>
                            <img src={gd?.image} className='w-48 h-48 rounded-lg' alt="" />
                            <h3 className="text-xl mt-2">{gd?.adTitle}</h3>
                        </div>
                    })}
                </div>
            </div>
        </section>
    );
};

export default Home;