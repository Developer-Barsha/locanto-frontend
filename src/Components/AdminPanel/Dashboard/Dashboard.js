import React, { useEffect, useState } from 'react';

const Dashboard = () => {
    const [users, setUsers] = useState(0);
    const [categories, setCategories] = useState(0);
    const [mainCategories, setMainCategories] = useState(0);
    const [subCategories, setSubCategories] = useState(0);
    const [ads, setAds] = useState(0);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(Res => Res.json())
            .then(data => setUsers(data?.length))

        fetch('http://localhost:5000/categories')
            .then(Res => Res.json())
            .then(data => setCategories(data?.length))

        fetch('http://localhost:5000/sub-categories')
            .then(Res => Res.json())
            .then(data => setSubCategories(data?.length))

        fetch('http://localhost:5000/main-categories')
            .then(Res => Res.json())
            .then(data => setMainCategories(data?.length))

        fetch('http://localhost:5000/ads')
            .then(Res => Res.json())
            .then(data => setAds(data?.length))
    }, [])

    return (
        <div>
            <div className="grid grid-cols-4 gap-5 text-white">
                <div className='p-4 bg-orange-500 rounded-lg'>
                    <h1 className="text-2xl pb-2">All Users</h1>
                    <p>{users}</p>
                </div>
                <div className='p-4 bg-blue-500 rounded-lg'>
                    <h1 className="text-2xl pb-2">All Ads</h1>
                    <p>{ads}</p>
                </div>
                <div className='p-4 bg-green-500 rounded-lg'>
                    <h1 className="text-2xl pb-2">Pending Ads</h1>
                    <p>0</p>
                </div>
                <div className='p-4 bg-indigo-600 rounded-lg'>
                    <h1 className="text-2xl pb-2">Pending VIP Ads</h1>
                    <p>0</p>
                </div>
                <div className='p-4 bg-pink-500 rounded-lg'>
                    <h1 className="text-2xl pb-2">Total VIP Adds</h1>
                    <p>0</p>
                </div>
                <div className='p-4 bg-violet-500 rounded-lg'>
                    <h1 className="text-2xl pb-2">Total Main Category</h1>
                    <p>{mainCategories}</p>
                </div>
                <div className='p-4 bg-amber-500 rounded-lg'>
                    <h1 className="text-2xl pb-2">Total Sub Category</h1>
                    <p>{subCategories}</p>
                </div>
                <div className='p-4 bg-red-500 rounded-lg'>
                    <h1 className="text-2xl pb-2">Total Category </h1>
                    <p>{categories}</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;