import React, { useState, useEffect } from 'react';

const Category = () => {
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [categoryTitle, setCategoryTitle] = useState('');
    const [categorysubCat, setCategorysubCat] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/sub-categories')
            .then(res => res.json())
            .then(data => setSubCategories(data));
    }, []);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, []);


    const deleteCat = id => {
        const response = window.confirm('Are you sure?');

        if (response === true) {
            fetch(`http://localhost:5000/categories/${id}`, {
                method: 'DELETE',
                headers: { 'Content-type': 'application/json' }
            })
                .then(res => res.json())
                .then(data => {
                    if (data?.deletedCount) {
                        window.alert('category deleted')
                    } else {
                        window.alert('error occured')
                    }
                    console.log(data)
                })
        }
    }

    const submitForm = (e) => {
        e.preventDefault();
        const newCategory = {title:categoryTitle, subCategory: categorysubCat};

        fetch('http://localhost:5000/categories', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newCategory)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.insertedId) {
                    window.alert('Sub category added')
                } else {
                    window.alert('error occured')
                }
            })
    };

    return (
        <div>
            <label htmlFor="add-menu-modal" className="text-xl btn btn-success mb-5">Add category <i className="fa-solid fa-plus"></i></label>

            <input type="checkbox" id="add-menu-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative flex flex-col gap-3">
                    <label htmlFor="add-menu-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Enter New Category Info:</h3>
                    <form onSubmit={submitForm} className='flex flex-col gap-3'>
                        <input required onChange={(e) => setCategoryTitle(e?.target?.value)} className='w-full h-12 input input-bordered' name='sub-category' placeholder='Title' type="text" />

                        <select required onChange={(e) => setCategorysubCat(e?.target?.value)} className="select select-bordered w-full">
                            <option disabled selected>Choose Sub Category</option>
                            {subCategories.map(c => <option> <i className={c?.icon}></i> {c?.title}</option>)}
                        </select>

                        <input type="submit" className='btn btn-success' value="Add" />
                    </form>
                </div>
            </div>

            <div>
                <table className="table table-normal w-full">
                    <thead>
                        <tr>
                            <th>Category Title</th>
                            <th>Sub Category</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map(c => {
                            return <tr>
                                <td>
                                    <h1 className="text-xl">{c?.title}</h1>
                                </td>
                                <td>
                                    {c?.subCategory}
                                </td>
                                <td>
                                    <button onClick={() => deleteCat(c?._id)} className='btn btn-error'>Delete</button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Category;