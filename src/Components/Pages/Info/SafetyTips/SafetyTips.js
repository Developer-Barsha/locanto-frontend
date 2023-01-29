import React from 'react';
import './SafetyTips.css';

const SafetyTips = () => {
    const tips = [
        {
            id: 0,
            img: 'https://static.locanto.info/assets/230113_160753/images/info/safer-trading/1.png',
            title: 'General',
            tips: [
                "The more questions you ask the advertiser, the more you know.",
                "Use your best judgment: if it seems too good to be true, it most likely is.",
                "Protect your personal details and initiate communication using our contact form.",
                "Unless the link leads directly to in.locan.to, don’t trust it."
            ],
            color: 'blue-700'
        },
        {
            id: 1,
            img: 'https://static.locanto.info/assets/230113_160753/images/info/safer-trading/2.png',
            title: 'Communication',
            tips: [
                "Locanto employees will never approach you and ask for your credit card or bank details.",
                "Be wary of users who have a poor grasp of English; most scams originate overseas.",
                "Protect your personal details and initiate communication using our contact form.",
                "Users with usernames containing ‘Locanto’ or a variation thereof are not official Locanto employees. The only way to reach an official Locanto employee is through our contact form.",
                "Avoid communicating via email; use the Locanto messaging centre.",
                "Be extremely careful with sellers who do not want to use the messaging centre, or meet in person.",
                "Report any ads and messages you find suspicious."
            ],
            color: 'orange-400',
            reverse:true
        },
        {
            id: 2,
            img: 'https://static.locanto.info/assets/230113_160753/images/info/safer-trading/3.png',
            title: 'Payment',
            tips: [
                "If you opt for direct shipping, please do so via registered mail.",
                "Be careful before paying in advance using gift cards, bank transfers or sign-ups asking for credit cards. ",
                "The best way to pay is Cash On Delivery.",
                "Do not pay using Western Union or other similar untraceable payment options.",
                "When meeting up with a seller, avoid carrying more cash than necessary."
            ],
            color: 'orange-700'
        },
        {
            id: 3,
            img: 'https://static.locanto.info/assets/230113_160753/images/info/safer-trading/4.png',
            title: 'Ads on the site',
            tips: [
                "Report ads and messages that you think are suspicious.",
                "Be wary of users who have a poor grasp of English; most scams originate overseas.",
                "Use your judgment: if it seems too good to be true, it most likely is."
            ],
            color: 'teal-300',
            reverse:true
        },
    ]

    return (
        <div>
            <div className='bg-teal-800 flex justify-between items-center relative'>
                <h1 className="text-5xl text-white w-1/2 t-shadow absolute top-12 left-10">The following tips are the best way to stay safe when buying and selling on classifieds sites.</h1>
                <img className='w-full' src="https://static.locanto.info/assets/230113_160753/images/info/safer-trading/header.png" alt="" />
            </div>

            <div className='flex flex-col gap-5 bg-slate-200'>
                {tips?.map(t => {
                    return <div>
                        <div className={`${t?.reverse ? 'flex flex-row-reverse' : 'flex'} ${t?.reverse && 'ml-auto'} gap-5 items-center w-2/3`}>
                            <img src={t?.img} alt="" />
                            <div className='bg-white rounded-3xl text-black p-5'>
                                <h1 className={`text-3xl text-${t?.color} w-4/6 flex mx-auto`}>{t?.title}</h1>
                                <div className="carousel w-full pt-5">
                                    {t?.tips.map(tip => {
                                        return <div className='carousel-item relative w-full flex flex-col gap-5'>
                                            <div id={`slide-${t?.title}-${t.tips.indexOf(tip)}`}>
                                                <div className="w-4/6 flex mx-auto"><p>{tip}</p></div>
                                                <div className="absolute flex text-5xl justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                                    <a href={`#slide-${t?.title}-${(t.tips.indexOf(tip) - 1)}`} className={`hover:text-slate-200 text-5xl text-${t?.color}`}>❮</a>

                                                    <a href={`#slide-${t?.title}-${(t.tips.indexOf(tip) + 1)}`} className={`hover:text-slate-200 text-5xl text-${t?.color}`}>❯</a>
                                                </div>
                                            </div>
                                            <p className='w-4/6 flex mx-auto text-slate-400 font-bold'>{(t.tips.indexOf(tip) + 1)} / {(t.tips.length)}</p>
                                        </div>
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="divider"></div>
                    </div>
                })}
            </div>
        </div>
    );
};

export default SafetyTips;