import React from 'react';
import './About.css';
// import yawla from './yalwa.svg';

const About = () => {
    return (
        <section>
            <div className="welcome text-white">
                <img width={'50%'} src='https://careers.recruiteecdn.com/image/upload/production/images/77o/hWR9xF4O8Tfm.png' alt="" />
                <p className="text-5xl">The Local Internet Company</p>
                <p className='text-2xl'>Bringing people together</p>
            </div>
            <div className="about text-blue-500 p-12">
                <h3 className="text-5xl text-center pb-10">Welcome to Yalwa</h3>
                <p className='text-2xl'>Yalwa is a thriving internet company based in Wiesbaden, Germany. Klaus Gapp founded Yalwa in 2006. His vision was to create a sustainable company with a start-up atmosphere. Since then Yalwa has launched three web applications in more than 50 countries. Our team consists of a diverse group of people from over 25 different countries.</p>
                <br/>
                <br/>
                <p className='text-2xl'>Discover our portals: Locanto, the classifieds site that makes buying or selling fun locally; #Dating, an online dating space to meet like-minded people in your area; and Yalwa, your first and last stop when searching your local area for businesses. Our three platforms are unified in their single goal: to connect people with their community.</p>
            </div>
        </section>
    );
};

export default About;