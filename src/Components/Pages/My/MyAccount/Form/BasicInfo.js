import React, { useState, useEffect } from "react";

function BasicInfo({ formData, setFormData }) {
  const [categories, setCategories] = useState([]);
  const [mainCategories, setMainCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/main-categories')
      .then(res => res.json())
      .then(data => setMainCategories(data));

    fetch('http://localhost:5000/sub-categories')
      .then(res => res.json())
      .then(data => setSubCategories(data));

    fetch('http://localhost:5000/categories')
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);

  return (
    <div className="sign-up-container">
      <input
        type="text"
        className='w-full h-12 input input-bordered my-2' placeholder='Ad title'
        value={formData.adTitle}
        onChange={(event) =>
          setFormData({ ...formData, adTitle: event.target.value })
        }
      />
      <textarea
        type="text"
        className='w-full h-40 py-2 input input-bordered my-2' placeholder='Ad Description'
        value={formData.adDescription}
        onChange={(event) =>
          setFormData({ ...formData, adDescription: event.target.value })
        }
      />

      <select required onChange={(event) =>
        setFormData({ ...formData, mainCategory: event.target.value })
      }
        className="select select-bordered w-full my-2">
        <option disabled selected>Choose Main Category</option>
        {mainCategories.map(c => <option> <i className={c?.icon}></i> {c?.title}</option>)}
      </select>

      {formData?.mainCategory !== '' &&
        <select required
          onChange={(event) =>
            setFormData({ ...formData, subCategory: event.target.value })
          }
          className="select select-bordered w-full my-2">
          <option disabled selected>Choose Sub Category</option>
          {subCategories.map(c => <option> <i className={c?.icon}></i> {c?.title}</option>)}
        </select>
      }

      {formData?.subCategory !== '' &&
        <select required
          onChange={(event) =>
            setFormData({ ...formData, category: event.target.value })
          }
          className="select select-bordered w-full my-2">
          <option disabled selected>Choose Category</option>
          {categories.map(c => <option> <i className={c?.icon}></i> {c?.title}</option>)}
        </select>
      }
    </div>
  );
}

export default BasicInfo;