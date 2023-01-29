import React from 'react';
import './Word.css';

const Word = () => {
    return (
        <section className='word'>
            <div className="bg-blue-800 p-10">
                <h1 className="text-5xl font-bold text-white t-shadow">Link to Locanto</h1>
            </div>
            <div className="word-bg grid grid-cols-2 p-10">
                <div></div>
                <div>
                    <p>Are you a Locanto fan? Add a link to Locanto on your blog or website.
                        We appreciate your help in spreading the word about us.
                        <br /><br />
                        We have a selection of banners and text links below to make linking to Locanto easier and faster.
                        <br /><br />
                        Thank you very much for your support!
                        <br /><br />
                        Your Locanto Team</p>
                </div>
            </div>
            <p className="p-5">Feel free to link to Locanto from your web site or blog using any of the banners shown below. Simply copy the HTML code shown on the right.
            </p>
            <div className="grid grid-cols-2 gap-8 p-10">
                <div className='flex flex-col gap-5 pr-5' style={{borderRight:'1px solid #999'}}>
                    <b>Banners</b>
                    <img width={200} src="https://static.locanto.info/assets/230116_154411/images/logo/Locanto_200.png" alt="" />
                    <input type="text" className='w-full border shadow-lg input' value={'<a href="https://www.in.locan.to/"><img src="https://static.locanto.info/assets/230116_154411/images/logo/Locanto_200.png" alt="Locanto" /></a>'} />
                </div>
                <div className='flex flex-col gap-5'>
                    <b>Ad Widget</b>
                    <p>Select one of our options</p>
                    <p className='bg-blue-100 rounded-lg hover:underline cursor-pointer p-3'>You are not logged in</p>
                </div>
                <div className='flex flex-col gap-5'>
                    <b>Text link</b>                    
                    <p className='hover:underline cursor-pointer'>Free Classified India</p>
                    <input type="text" className='w-full border shadow-lg input' value={'<a href="https://www.in.locan.to/">Free Classifieds India</a>'} />
                </div>
            </div>
        </section>
    );
};

export default Word;