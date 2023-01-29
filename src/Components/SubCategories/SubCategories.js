import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SubCategories = ({ clickedMainCat }) => {
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, []);

    useEffect(() => {
        fetch('http://localhost:5000/sub-categories')
            .then(res => res.json())
            .then(data => setSubCategories(data));
    }, []);

    return (
        <div>
            <div className="grid grid-cols-3 gap-5 p-5">
                {subCategories.map(sc => {
                    return <div
                        onClick={() => {
                            navigate(`/${sc?.title}`)
                            localStorage.setItem('clickedSubCat', JSON.stringify(sc))
                        }
                        }
                        className='bg-white rounded-lg shadow-lg border relative cursor-pointer'>
                        <img src={sc?.image} className='rounded-lg w-full h-60 z-0' alt="" />
                        <div className="absolute left-0 bottom-0 bg-[#feffffb8] w-full flex p-4 items-center gap-3">
                            <i className={`${sc?.icon} w-14 h-14 py-2 flex items-center justify-center text-3xl bg-[#446699] rounded-full`}></i>
                            <div>
                                <h1 className="text-3xl"> {sc?.title}</h1>
                                <p>{sc?.mainCategory}</p>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    );
};

export default SubCategories;