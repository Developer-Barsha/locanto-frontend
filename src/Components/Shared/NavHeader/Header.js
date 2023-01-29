import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavHeader.css';

const Header = () => {
    const [mainCategories, setMainCategories] = useState([]);
    // const [clickedCat, setClickedCat] = useState({});
    const location = useLocation();
    const pathname = location?.pathname;

    const xsButtons = [
        "Men's Watches",
        "Microwaves",
        "3 room apartment",
        "Business Software",
        "3 room flat",
        "Refrigerators & Freezers",
        "Mobile phones",
        "Shirts",
        "Electronic Devices",
        "Women's Watches",
        "Frocks"
    ];

    useEffect(() => {
        fetch('http://localhost:5000/main-categories')
            .then(res => res.json())
            .then(data => setMainCategories(data));
    }, []);

    const clickedCat=(cat)=>{
        localStorage.setItem('clickedMainCat', JSON.stringify(cat));
        console.log(localStorage.getItem('clickedMainCat'));
    }

    return (
        <header className='nav-header'>
            <div className="flex justify-center w-full items-center gap-3 glass-bg">
                <input className='w-1/2 h-12' placeholder='Search Item' type="text" />
                <div className="relative w-1/2">
                    <input className='w-full h-12' placeholder='Location' type="text" /> <span className='location-icon absolute top-4 right-3'><i class="fa-solid fa-location-crosshairs"></i></span>
                </div>
                <select className="select rounded-none">
                    <option disabled selected><i class='fa-solid fa-plus'></i> km</option>
                    <option>Homer</option>
                    <option>Marge</option>
                    <option>Bart</option>
                    <option>Lisa</option>
                    <option>Maggie</option>
                </select>
                <button className='btn bg-blue-800 rounded-none'><i class='fa-solid fa-search pr-2'></i>Find It</button>
            </div>

            <div className="flex gap-3 pt-5 items-center justify-between">
                {xsButtons.map(btn => { return <button className='btn btn-xs bg-white rounded-full py-1 text-black hover:text-white hover:bg-orange-500 border-none font-thin'>{btn}</button> })}
            </div>
            <div className="flex gap-1 items-center pt-5 justify-between">
                {!pathname.includes('category-ads') && mainCategories.map(btn => {
                    return <Link to={`/${btn?.title}`} onClick={()=>clickedCat(btn)} className='btn py-5 px-12 bg-white rounded-none grid grid-cols-1 gap-3 items-center justify-center text-white hover:bg-white hover:text-orange-400 border-none w-24 h-20 glass-bg font-thin'>
                        <p><i class={`text-3xl ${btn?.icon}`}></i></p>
                        <p>{btn?.title}</p>
                    </Link>
                })}
            </div>
        </header>
    );
};

export default Header;