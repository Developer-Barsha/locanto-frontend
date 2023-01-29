import React from 'react';
import './Promote.css';

const Promote = () => {
    return (
        <section className='promote'>
            <div className="bg-blue-800 p-10">
                <h1 className="text-5xl font-bold text-white t-shadow">Advertise with Locanto</h1>
            </div>
            <div className="promote-bg">
                <div className='grid promote-top grid-cols-2 gap-10 p-10'>
                    <div>
                        <h1 className="text-3xl t-shadow">Tell us about your business goals, and we’ll get back to you with a growth solution specifically tailored to your business.</h1>
                        <a href='#banners'>Banners <i className="fa-solid fa-angles-right"></i></a>
                        <a href='#adwords'>Adwords <i className="fa-solid fa-angles-right"></i></a>
                    </div>
                    <div className='text-3xl flex flex-col justify-center items-center gap-8 p-24'>
                        <p><i class="fa-solid fa-people-group"></i> Internationally recognised</p>
                        <p><i class="fa-solid fa-globe"></i>Websites in over 50 countries</p>
                        <p><i class="fa-solid fa-desktop"></i>Millions of weekly visitors</p>
                    </div>
                </div>

                <div className='p-10 text-white'>
                    <h2 className="text-4xl text-center">WHO DO YOU WANT TO TARGET?</h2>
                    <div className='grid targets grid-cols-2 gap-5 p-10'>
                        <div>
                            <h1 className="text-3xl">Specific User Groups</h1>
                            <br />
                            <div className="flex flex-col justify-between">
                                <div>
                                    <p>Including:</p>
                                    <ul>
                                        <li>Jobseekers</li>
                                        <li>Mothers</li>
                                        <li>Sports enthusiasts</li>
                                    </ul>
                                    <p>...and many more!</p>
                                    <br />
                                </div>
                                <div className='underline'>
                                    <p>Advertising opportunities:</p>
                                    <ul>
                                        <li>Google Adwords</li>
                                        <li>Banners</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-3xl">Our Dating Audience</h1>
                            <br />
                            <div className="flex flex-col justify-between">
                                <div>
                                    <p>Including:</p>
                                    <ul>
                                        <li>Single men and women</li>
                                        <li>Straight, bi or gay</li>
                                        <li>Looking for relationships, casual encounters and services</li>
                                    </ul>
                                    <br />
                                </div>
                                <div className='underline'>
                                    <p>Advertising opportunities:</p>
                                    <ul>
                                        <li>Banners</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-5 py-5">
                        <div className=' bg-glass'>
                            <h2 className="text-3xl">SMART SERVING</h2>
                            <p>Your dedicated account manager will give preference to the best performing ads of your campaign.</p>
                        </div>

                        <div className=' bg-glass'>
                            <h2 className="text-3xl">DAY ’N’ NIGHT</h2>
                            <p>Choose to connect with your target audience in the morning, evening, or on specific days of the week.</p>
                        </div>

                        <div className=' bg-glass'>
                            <h2 className="text-3xl">LOCATION, LOCATION</h2>
                            <p>Using geo-targeting, you can select the country, state, region, city or village you want to target.</p>
                        </div>
                    </div>

                    <div className="flex gap-5">
                        <div className=' bg-glass'>
                            <h2 className="text-3xl">MULTI-DEVICE</h2>
                            <p>Choose to run your banner campaigns on mobile, tablet or desktop. Target one, or target all.</p>
                        </div>

                        <div className=' bg-glass'>
                            <h2 className="text-3xl">CAPPING IT</h2>
                            <p>Keep your banners fresh by selecting limits on how often you want a banner shown per day and per user.</p>
                        </div>
                    </div>

                    <div id="banners" className='py-10 mt-10 text-center'>
                        <h1 className="text-3xl text-left"><span className="text-5xl bg-glass" style={{ padding: '2px' }}>BANNERS</span> Advertise in your local area, city, nationwide, or even internationally!</h1>
                        <div className='grid grid-cols-2 gap-5 p-10'>
                            <img src="https://static.locanto.info/assets/230116_154411/images/bg/info/promote/middledevices.png" alt="" />
                            <div>
                                <h1 className="text-3xl text-black bg-glass mb-2">We’ll make sure your ads are seen by the right people.</h1>
                                <div className="flex gap-2">
                                    <div className='bg-glass'>
                                        <h2 className='text-2xl underline'>STANDARD ADS</h2>
                                        <p style={{ color: '#fff' }}>Drive targeted traffic to your website through the use of a range of desktop banner formats.</p>
                                    </div>
                                    <div className='bg-glass'>
                                        <h2 className='text-2xl underline'>STANDARD ADS</h2>
                                        <p style={{ color: '#fff' }}>Drive targeted traffic to your website through the use of a range of desktop banner formats.</p>
                                    </div>
                                </div>
                                <h1 className="text-3xl text-black text-left my-2">Top countries:</h1>
                                <img className='bg-glass w-full' src="https://static.locanto.info/images/bg/info/promote/countries.png" alt="" />
                                <div className="flex gap-2 my-2">
                                    <div className='bg-glass'>
                                        <h2 className='text-5xl'>80%</h2>
                                        <p style={{ color: '#fff' }}>are between the ages of 18-34.</p>
                                    </div>
                                    <div className='bg-glass'>
                                        <h2 className='text-5xl'>9 min</h2>
                                        <p style={{ color: '#fff' }}>average time users stay per visit.</p>
                                    </div>
                                </div>
                                <div className="text-black text-2xl my-3">For more information and prices:</div>
                                <button className='bg-white shadow-3xl hover:underline text-black text-xl rounded-lg py-2 px-10'>Email us <i className="fa-solid fa-angles-right"></i></button>
                            </div>
                        </div>
                    </div>

                    <div id="adwords" className='py-10'>
                        <h1 className="text-3xl"><span className="text-5xl bg-glass" style={{ padding: '2px' }}>ADWORDS</span> For those who value maximum control, Google Adwords is the way to go.</h1>
                        <div className='grid grid-cols-2 gap-10 pt-10 items-center'>
                            <img src="https://static.locanto.info/assets/230116_154411/images/bg/info/promote/adwords_logo.png" className='w-full bg-glass' alt="" />
                            <div>
                                <ul className='text-2xl'>You can:
                                    <li>Set your campaign budget and duration</li>
                                    <li>Target your ideal audience by topic and locality</li>
                                    <li>Select between using text or display ADWORDS</li>
                                </ul>
                                <button className='bg-white shadow-3xl hover:underline text-black text-xl rounded-lg py-2 px-10 mt-10'>Read More <i className="fa-solid fa-angles-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Promote;