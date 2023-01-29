import React, { useState, useEffect } from 'react';

const CategoryModal = ({ menu }) => {
    const [modalMenu, setModalMenu] = useState({});
    const [newTitle, setNewTitle] = useState('');
    const [newIcon, setNewIcon] = useState('');

    useEffect(() => {
        setModalMenu(menu);
    }, [menu]);

    const handleEdit = id => {
        const editedCategory = {
            title: newTitle !== '' ? newTitle : modalMenu?.title,
            icon: newIcon !== '' ? newIcon : modalMenu?.icon
        };
        console.log(editedCategory);

        fetch('http://localhost:5000/categories/' + id, {
            method: 'PUT',
            headers: {
                "content-type": ["application/json"],
            },
            body: JSON.stringify(editedCategory)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.modifiedCount > 0) {
                    console.log('edited');
                }
            });
    }

    return (
        <div className='flex flex-col gap-3'>
            <label htmlFor={`menu-modal-${modalMenu?._id}`} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 className="text-xl">Current Info:</h3>
            <div className="flex gap-10 items-center mb-5">
                <i className={`${modalMenu?.icon} text-6xl`}></i>
                <div>
                    <h3 className="text-lg"><b>Title:</b> {modalMenu?.title}</h3>
                    <p><b>Icon:</b> {modalMenu?.icon}</p>
                </div>
            </div>
            <h3 className="text-xl">Enter New Info:</h3>
            <input onChange={(e) => setNewTitle(e?.target?.value)} className='w-full h-12 input input-bordered' placeholder='Title' type="text" />
            <input onChange={(e) => setNewIcon(e?.target?.value)} className='w-full h-12 input input-bordered' placeholder='Icon class' type="text" />
            <div className="modal-action flex justify-between">
                <label htmlFor={`menu-modal-${modalMenu?._id}`} onClick={() => handleEdit(modalMenu?._id)} className="btn btn-success">Save</label>
                <label htmlFor={`menu-modal-${modalMenu?._id}`} className="btn">Cancel</label>
            </div>
        </div>
    );
};

export default CategoryModal;