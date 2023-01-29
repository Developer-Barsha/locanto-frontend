import React from 'react';
import './MPremiumAccounts.css';

const MPremiumAccounts = () => {
    const advantages = [
        {
            id: 3,
            title: 'Online status',
            des: 'Post as many ads as you like. It’s quick and easy.',
            icon: 'fa-solid fa-wifi',
            free: false,
            premium: true
        },
        {
            id: 4,
            title: 'Premium label',
            des: 'The Premium label makes your ad stand out in search results.',
            icon: 'fa-solid fa-award',
            free: false,
            premium: true
        },
        {
            id: 5,
            title: 'SneakPic™',
            des: 'With SneakPic™ you can send pictures that will be visible for a short time only.',
            icon: 'fa-solid fa-stopwatch',
            free: false,
            premium: true
        },
        {
            id: 11,
            title: 'Unlimited chat storage',
            des: 'Keep access to your inactive conversations. The chats won‘t be deleted after longer periods of inactivity.',
            icon: 'fa-solid fa-comments',
            free: false,
            premium: true
        },
        {
            id: 6,
            title: 'Instant notifications',
            des: 'You’ll get an instant notification if new ads are posted for your saved searches.',
            icon: 'fa-solid fa-person-running',
            free: false,
            premium: true
        },
        {
            id: 7,
            title: 'Respond to reviews',
            des: 'Comment on user feedback and delete one rating per month.',
            icon: 'fa-solid fa-message',
            free: false,
            premium: true
        },
        {
            id: 8,
            title: 'See followers',
            des: 'View the profiles of all your followers and find out who’s interested in your offers.',
            icon: 'fa-solid fa-users',
            free: false,
            premium: true
        },
        {
            id: 9,
            title: 'Account verification',
            des: 'Phone verify your account and increase your trust factor and visibility.',
            icon: 'fa-solid fa-mobile-screen-button',
            free: false,
            premium: true
        },
        {
            id: 10,
            title: 'Faster browsing',
            des: 'Take advantage of shorter loading times and find what you’re looking for even faster.',
            icon: 'fa-solid fa-newspaper',
            free: false,
            premium: true
        },
    ]

    return (
        <div className='lg:w-1/3 w-full h-screen overflow-y-scroll relative'>
            <div className='bg-white flex justify-between items-center p-2'>
                <i className="fa-solid fa-angle-left text-3xl"></i>
                <img width='200' src="https://static.locanto.info/assets/230110_095414/images/logo/locanto_color.svg" alt="" />
                <button className='bg-slate-100 border py-2 px-3'>Login</button>
            </div>
            <div className="mpa-bg p-10 font-bold items-center text-white">
                <h1 className="text-2xl t-shadow">Discover the full potential of your Locanto Account</h1>
            </div>

            <div>
                {advantages.map(advantage => {
                    return <div className='flex flex-col p-6 items-center text-center text-blue-700'>
                        <i className={`${advantage?.icon} rounded-full w-16 h-16 bg-blue-700 flex items-center justify-center text-3xl text-white`} />
                        <h1 className='text-2xl'>{advantage?.title}</h1>
                        <p>{advantage?.des}</p>
                        <div className="divider"></div>
                    </div>
                })}
            </div>

            <div className="bg-white flex justify-between items-center shadow-inner p-2 tooltip tooltip-open tooltip-warning font-bold text-white" data-tip="from 99₹ per month">
                <button className="btn rounded-none flex mx-auto text-2xl bg-blue-700 hover:bg-blue-600 border-none"><i className="fa-solid fa-award border-r-2 pr-2 mr-2 border-black"></i> Upgrade now</button>
            </div>
        </div>
    );
};

export default MPremiumAccounts;