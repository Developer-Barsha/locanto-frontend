import React, { useState, useEffect } from 'react';

const SubCategory = () => {
    const [mainCategories, setMainCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [subCatCats, setSubCatCats] = useState([]);
    const [image, setImage] = useState('');
    const [subCategoryTitle, setSubCategoryTitle] = useState('');
    const [subCategoryIcon, setSubCategoryIcon] = useState('');
    const [subCatCategory, setSubCatCategory] = useState('');
    const imageStorageKey = `c57edde5c6208c27a5d91c5e10163c0f`;

    useEffect(() => {
        fetch('http://localhost:5000/sub-categories')
            .then(res => res.json())
            .then(data => setSubCategories(data));
    }, []);

    useEffect(() => {
        fetch('http://localhost:5000/main-categories')
            .then(res => res.json())
            .then(data => setMainCategories(data));
    }, []);


    const deleteSubCat = id => {
        const response = window.confirm('Are you sure?')
        if (response) {
            fetch(`http://localhost:5000/sub-categories/${id}`, {
                method: 'DELETE',
                headers: { 'Content-type': 'application/json' }
            })
                .then(res => res.json())
                .then(data => {
                    if (data?.deletedCount) {
                        window.alert('Sub category deleted')
                    } else {
                        window.alert('error occured')
                    }
                    console.log(data)
                })
        }
    }

    const submitForm = (e) => {
        e.preventDefault();

        const img = image[0];
        const imgUrl = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        const formData = new FormData();
        formData.append('image', img);

        fetch(imgUrl, {
            method: "POST",
            body: formData
        })
            .then(response => response.json())
            .then(result => {
                if (result?.success) {
                    const subCat = {
                        image: result?.data?.url,
                        title: subCategoryTitle,
                        icon: subCategoryIcon,
                        mainCategory: subCatCategory,
                        categories: subCatCats
                    };

                    fetch('http://localhost:5000/sub-categories', {
                        method: 'POST',
                        headers: {
                            'Content-type': 'application/json'
                        },
                        body: JSON.stringify(subCat)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data?.insertedId) {
                                window.alert('Sub category added')
                            } else {
                                window.alert('error occured')
                            }
                        })
                }
                else {
                    console.log('error in adding sub category');
                }
            });
    };

    return (
        <div>
            <label htmlFor="add-menu-modal" className="text-xl btn btn-success mb-5">Add sub category <i className="fa-solid fa-plus"></i></label>

            <input type="checkbox" id="add-menu-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative flex flex-col gap-3">
                    <label htmlFor="add-menu-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Enter New Sub Menu Info:</h3>
                    <form onSubmit={submitForm} className='flex flex-col gap-3'>
                        <input required onChange={(e) => setSubCategoryTitle(e?.target?.value)} className='w-full h-12 input input-bordered' name='sub-category' placeholder='Title' type="text" />

                        <input required onChange={(e) => setSubCategoryIcon(e?.target?.value)} className='w-full h-12 input input-bordered' name='sub-category-icon' placeholder='Icon' type="text" />
                        <input required onChange={(e) => setSubCatCats(e?.target?.value)} className='w-full h-12 input input-bordered' name='sub-category-cats' placeholder='Separate categories by comma (,)' type="text" />

                        <div className="grid grid-cols-2 gap-2 items-center justify-center">
                            <input required onChange={(e) => setImage(e?.target?.files)} accept="image/gif, image/jpeg, image/png" className='h-12 input input-bordered' placeholder='File' name='image' type="file" />

                            <select required onChange={(e) => setSubCatCategory(e?.target?.value)} className="select select-bordered w-full">
                                <option disabled selected>Choose Category</option>
                                {mainCategories.map(c => <option> <i className={c?.icon}></i> {c?.title}</option>)}
                            </select>
                        </div>

                        <input type="submit" className='btn btn-success' value="Add" />
                    </form>
                </div>
            </div>

            <div>
                <table className="table table-normal w-full">
                    <thead>
                        <tr>
                            <th>Sub Cat Image</th>
                            <th>Title</th>
                            <th>Icon</th>
                            <th>Main Category</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {subCategories.map(sc => {
                            return <tr>
                                <th><img src={sc?.image} className='w-16 h-16 border rounded-lg' alt="" /></th>
                                <td>
                                    <h1 className="text-xl">{sc?.title}</h1>
                                </td>
                                <td><i className={sc?.icon}></i></td>
                                <td>
                                    {sc?.mainCategory}
                                </td>
                                <td>
                                    <button onClick={() => deleteSubCat(sc?._id)} className='btn btn-error'>Delete</button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default SubCategory;