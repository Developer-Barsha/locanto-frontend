import React, { useState, useEffect } from 'react';
import './MainCategories.css';
import CategoryModal from './CategoryModal';

const MainCategories = () => {
    const [mainCategories, setMainCategories] = useState([]);
    const [clicked, setClicked] = useState({});
    const [newTitle, setNewTitle] = useState('');
    const [newIcon, setNewIcon] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/main-categories')
            .then(res => res.json())
            .then(data => setMainCategories(data));
    }, []);



    const addMenu = () => {
        const newCategory = { title: newTitle, icon: newIcon, subCat:[] };
        fetch('http://localhost:5000/main-categories', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newCategory)
        })
            .then(res => res.json())
            .then(data => console.log(data));
        setMainCategories([...mainCategories, newCategory]);
    }

    const handleDelete = id => {
        const response = window.confirm('Are you sure?');

        if (response === true) {
            fetch('http://localhost:5000/main-categories/' + id, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => console.log(data));
            const rest = mainCategories.filter(category => category._id !== id);
            setMainCategories(rest);
        }
    }


    return (
        <section>
            <label htmlFor="add-menu-modal" className="text-xl btn btn-success">Add New Main Category <i className="fa-solid fa-plus"></i></label>

            <input type="checkbox" id="add-menu-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative flex flex-col gap-3">
                    <label htmlFor="add-menu-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Enter New Main Menu Info:</h3>
                    <input onChange={(e) => setNewTitle(e?.target?.value)} className='w-full h-12 input input-bordered' placeholder='Title' type="text" />
                    <input onChange={(e) => setNewIcon(e?.target?.value)} className='w-full h-12 input input-bordered' placeholder='Icon class' type="text" />
                    <div className="modal-action flex justify-between">
                        <label htmlFor="add-menu-modal" onClick={() => addMenu()} className="btn btn-success">Save</label>
                        <label htmlFor="add-menu-modal" className="btn">Cancel</label>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 items-start my-5 rounded-lg">
                {mainCategories.map(btn => {
                    return <div key={btn?._id} onMouseEnter={() => setClicked(btn)} className='h-40 relative menu-cat'>
                        <div className='btn py-5 px-12 text-black text-center rounded-none grid grid-cols-1 gap-3 items-center justify-center hover:bg-white hover:text-orange-400 cursor-pointer border-none w-full h-40 glass-bg font-thin'>
                            <p><i class={`text-5xl ${btn?.icon}`}></i></p>
                            <p className='text-xl'>{btn?.title}</p>
                            <p>{btn?.icon}</p>
                        </div>

                        <div className="options flex flex-col justify-center gap-5 absolute w-full h-40 glass-bg rounded-lg top-0 left-0">
                            <label htmlFor={`menu-modal-${btn?._id}`} className="btn btn-success">Edit</label>
                            <label onClick={() => handleDelete(btn?._id)} className="btn btn-error">Delete</label>
                        </div>


                        <input type="checkbox" id={`menu-modal-${btn?._id}`} className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box relative">
                                <CategoryModal menu={clicked} />
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </section>
    );
};

export default MainCategories;