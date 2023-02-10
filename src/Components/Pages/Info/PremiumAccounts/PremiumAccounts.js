import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PremiumAccounts.css';

const PremiumAccounts = () => {
    const navigate = useNavigate();
    const [advantage, setAdvantage] = useState(
        {
            id: 3,
            title: 'Online status',
            des: 'Post as many ads as you like. It’s quick and easy.',
            icon: 'fa-solid fa-wifi',
            free: false,
            premium: true
        });

    const advantages = [
        {
            id: 0,
            title: 'Post ads',
            des: 'Post as many ads as you like. It’s quick and easy.',
            icon: 'fa-solid fa-thumbtack',
            free: true,
            premium: true
        },
        {
            id: 2,
            title: 'Contact advertisers',
            des: 'Contact advertisers via the Locanto messaging centre and protect your personal data.',
            icon: 'fa-solid fa-comments',
            free: true,
            premium: true
        },
        {
            id: 1,
            title: 'Save favourites',
            des: 'Save the ads you like most on your favourites list and look them up later.',
            icon: 'fa-solid fa-star',
            free: true,
            premium: true
        },
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
        {
            id: 11,
            title: 'Ad-free surfing',
            des: 'Surf Locanto without any third-party ads.',
            icon: 'fa-solid fa-laptop',
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
    ]

    return (
        <section>
            <div className="bg-blue-800 p-10">
                <h1 className="text-5xl text-center font-bold text-white t-shadow">Discover the full potential of your Locanto Account A Premium Account offers you exclusive advantages!</h1>
            </div>
            <div className='p-a-bg p-10 grid lg:grid-cols-2 grid-cols-1 items-end gap-10'>
                <table className="bg-white w-full relative mt-32">
                    <thead>
                        <td>All advantages at a glance:</td>
                        <td className='relative'>
                            <h1 className="text-3xl">Free</h1>
                            <button className='absolute -top-20 w-full rounded-none rounded-t-md left-0 right-0 h-20 bg-slate-200 text-slate-400 text-2xl'>Basic</button>
                        </td>
                        <td className='flex flex-col relative'>
                            from
                            <h1 className="text-5xl">₹99</h1>
                            per month
                            <button onClick={() => navigate('/info/account-upgrade')} className="btn bg-blue-700 btn-sm border-none w-fit mx-auto">Upgrade now</button>
                            <button className='absolute -top-20 w-full rounded-none rounded-t-md left-0 right-0 h-20 bg-blue-700 text-white text-3xl font-bold'>Premium</button>
                        </td>
                    </thead>
                    <tbody>
                        {advantages.map(a => {
                            return <tr onMouseOver={() => setAdvantage(a)}>
                                <td>{a?.title}</td>
                                <td>{a?.free && <i class="fa-solid fa-check text-green-600 text-2xl"></i>}</td>
                                <td>{a?.premium && <i class="fa-solid fa-check text-green-600 text-2xl"></i>}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
                <div>
                    <div className='bg-white h-60 flex flex-col p-6 items-center mb-10 border'>
                        <i className={`${advantage?.icon} rounded-full w-16 h-16 bg-blue-700 flex items-center justify-center text-3xl text-white`} />
                        <h1 className='text-4xl'>{advantage?.title}</h1>
                        <div className="divider"></div>
                        <p>{advantage?.des}</p>
                    </div>

                    <button onClick={() => navigate('/info/account-upgrade')} className="btn btn-lg flex mx-auto text-2xl bg-blue-700 hover:bg-blue-600 border-none"><i className="fa-solid fa-award border-r-2 pr-2 mr-2 border-black"></i> Upgrade now</button>
                </div>

                {/* <div className='p-10 grid lg:grid-cols-2 grid-cols-1 items-end gap-10'> */}
                <table className="bg-white w-full relative mt-32">
                    <thead>
                        <td>All advantages at a glance:</td>
                        <td className='relative'>
                            <h1 className="text-3xl">Free</h1>
                            <button className='absolute -top-20 w-full rounded-none rounded-t-md left-0 right-0 h-20 bg-slate-200 text-slate-400 text-2xl'>Basic</button>
                        </td>
                        <td className='flex flex-col relative'>
                            from
                            <h1 className="text-5xl">₹99</h1>
                            per month
                            <button onClick={() => navigate('/info/account-upgrade')} className="btn bg-blue-700 btn-sm border-none w-fit mx-auto">Upgrade now</button>
                            <button className='absolute -top-20 w-full rounded-none rounded-t-md left-0 right-0 h-20 bg-orange-400 text-white text-3xl font-bold'>VIP</button>
                        </td>
                    </thead>
                    <tbody>
                        {advantages.map(a => {
                            return <tr onMouseOver={() => setAdvantage(a)}>
                                <td>{a?.title}</td>
                                <td>{a?.free && <i class="fa-solid fa-check text-green-600 text-2xl"></i>}</td>
                                <td>{a?.premium && <i class="fa-solid fa-check text-green-600 text-2xl"></i>}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
                <div>
                    <div className='bg-white h-60 flex flex-col p-6 items-center mb-10 border'>
                        <i className={`${advantage?.icon} rounded-full w-16 h-16 bg-blue-700 flex items-center justify-center text-3xl text-white`} />
                        <h1 className='text-4xl'>{advantage?.title}</h1>
                        <div className="divider"></div>
                        <p>{advantage?.des}</p>
                    </div>

                    <button onClick={() => navigate('/info/account-upgrade')} className="btn btn-lg flex mx-auto text-2xl bg-blue-700 hover:bg-blue-600 border-none"><i className="fa-solid fa-award border-r-2 pr-2 mr-2 border-black"></i> Upgrade now</button>
                </div>
                {/* </div> */}
            </div>

            <div className='p-10'>
                <h2 className="text-3xl text-center py-5">Frequently Asked Questions</h2>
                <div tabIndex={0} className="collapse collapse-plus bg-base-100">
                    <div className="collapse-title text-xl font-medium">
                        What is a Premium Account and what kind of advantages does it offer?
                    </div>
                    <div className="collapse-content">
                        <p>Besides the basic account we also offer the Locanto Premium Account. As a Premium member you will receive many exclusive advantages compared to the basic account, such as:
                            <br /><br />
                            The option to delete one negative review per month and to respond to reviews. You can thank users for positive feedback and reply to criticism. Moreover, you can see the profiles of your followers and determine which users are best suited for your offers. This allows you to advertise to your target group even more effectively.
                            <br /><br />
                            Locanto Premium allows you to see the online status of other users so you can specifically target advertisers who are online right now. You can also verify your account to increase the trust of potential customers in your profile and browse Locanto without any third-party ads.</p>
                    </div>
                </div>
                <div className="divider p-0 m-0"></div>
                <div tabIndex={0} className="collapse collapse-plus bg-base-100">
                    <div className="collapse-title text-xl font-medium">
                        Is a Premium Account right for me?
                    </div>
                    <div className="collapse-content">
                        <p>Yes! A Premium Account offers great value to every Locanto user.
                            <br /> <br />
                            <b>If you want to advertise on Locanto</b> then your ads and your profile will be highlighted with the Premium Label. This boosts your visibility and increases the trust of other users in your profile. As a Premium user your listings will be displayed without any third-party ads, so that other users can concentrate entirely on your offers. Moreover, you can increase the trust in your profile by verifying your telephone number or by reacting to user reviews. You can thank them for positive comments or answer negative feedback and
                            even delete one negative review per month. You can learn more about your potential customers from looking at the profiles of your followers.
                            <br /> <br />
                            <b>If you use Locanto only to browse for goods and services</b> , then a Premium Account also offers great value as third-party ads on our website are hidden from view. You can browse faster and without interruptions on Locanto. Premium members immediately receive email and push notifications for saved searches, categories or users they follow. This provides an advantage as advertisers can be contacted immediately while basic account users only receive an update over new ads once per day. In addition, Premium members can see if other users are online right now, facilitating faster communication. With a Premium Account other users will place greater trust in you when they see the Premium Label in your profile or if you verify your account via telephone.
                            <br /> <br />
                            A Premium Account always offers you great advantages – no matter what kind of Locanto user you are.</p>
                    </div>
                </div>
                <div className="divider p-0 m-0"></div>
                <div tabIndex={0} className="collapse collapse-plus bg-base-100">
                    <div className="collapse-title text-xl font-medium">
                        What is the difference between a Premium Account and a Premium Ad?
                    </div>
                    <div className="collapse-content">
                        <p>A Premium Account offers you a great range of advantages. For instance, you can respond to comments or see the online status of other users.
                            <br /><br />
                            However, a Premium Account DOES NOT automatically turn all of your ads into Premium Ads.
                            <br /><br />
                            A Premium Ad stands out from other ads because it is marked with PREMIUM and is highlighted in purple. When you book a Premium Ad, all third-party ads and links to similar ads will also be removed.
                        </p>
                    </div>
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

        </section>
    );
};

export default PremiumAccounts;