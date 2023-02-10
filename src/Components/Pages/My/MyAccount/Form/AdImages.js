import React, { useState } from "react";

function AdImages({ formData, setFormData, image1, image2, image3, image4, image5, image6, image7, setImage1, setImage2, setImage3, setImage4, setImage5, setImage6, setImage7 }) {

  return (
    <div className="ad-images relative">
      <div className="grid grid-cols-3 gap-5">
        <div className="w-full h-36 relative">
          <input
            onChange={(e) => setImage1(e.target.files)}
            required accept="image/gif, image/jpeg, image/png" className='h-24 w-full input input-bordered' name='image' type="file" id='image1' />

          <label htmlFor="image1" className="w-full h-24 text-white bg-orange-400 rounded-lg absolute top-0 left-0">
            <i className="fa-solid fa-upload text-4xl"></i>
          </label>
          {image1 && <p className="text-success absolute bottom-3 right-0">Uploaded</p>}
        </div>

        <div className="w-full h-36 relative">
          <input
            onChange={(e) => setImage2(e.target.files)}
            accept="image/gif, image/jpeg, image/png" className='h-24 w-full input input-bordered' name='image' type="file" id='image2' />

          <label htmlFor="image2" className="w-full h-24 text-white bg-orange-400 rounded-lg absolute top-0 left-0">
            <i className="fa-solid fa-upload text-4xl"></i>
          </label>
          {image2 && <p className="text-success absolute bottom-3 right-0">Uploaded</p>}
        </div>

        <div className="w-full h-36 relative">
          <input
            onChange={(e) => setImage3(e.target.files)}
            accept="image/gif, image/jpeg, image/png" className='h-24 w-full input input-bordered' name='image' type="file" id='image3' />

          <label htmlFor="image3" className="w-full h-24 text-white bg-orange-400 rounded-lg absolute top-0 left-0">
            <i className="fa-solid fa-upload text-4xl"></i>
          </label>
          {image3 && <p className="text-success absolute bottom-3 right-0">Uploaded</p>}
        </div>

        <div className="w-full h-36 relative">
          <input
            onChange={(e) => setImage4(e.target.files)}
            accept="image/gif, image/jpeg, image/png" className='h-24 w-full input input-bordered' name='image' type="file" id='image4' />

          <label htmlFor="image4" className="w-full h-24 text-white bg-orange-400 rounded-lg absolute top-0 left-0">
            <i className="fa-solid fa-upload text-4xl"></i>
          </label>
          {image4 && <p className="text-success absolute bottom-3 right-0">Uploaded</p>}
        </div>

        <div className="w-full h-36 relative">
          <input
            onChange={(e) => setImage5(e.target.files)}
            accept="image/gif, image/jpeg, image/png" className='h-24 w-full input input-bordered' name='image' type="file" id='image5' />

          <label htmlFor="image5" className="w-full h-24 text-white bg-orange-400 rounded-lg absolute top-0 left-0">
            <i className="fa-solid fa-upload text-4xl"></i>
          </label>
          {image5 && <p className="text-success absolute bottom-3 right-0">Uploaded</p>}
        </div>

        <div className="w-full h-36 relative">
          <input
            onChange={(e) => setImage6(e.target.files)}
            accept="image/gif, image/jpeg, image/png" className='h-24 w-full input input-bordered' name='image' type="file" id='image6' />

          <label htmlFor="image6" className="w-full h-24 text-white bg-orange-400 rounded-lg absolute top-0 left-0">
            <i className="fa-solid fa-upload text-4xl"></i>
          </label>
          {image6 !== undefined && <p className="text-success absolute bottom-3 right-0">Uploaded</p>}
        </div>

        <div className="w-full h-36 relative">
          <input
            onChange={(e) => setImage7(e.target.files)}
            accept="image/gif, image/jpeg, image/png" className='h-24 w-full input input-bordered' name='image' type="file" id='image7' />

          <label htmlFor="image7" className="w-full h-24 text-white bg-orange-400 rounded-lg absolute top-0 left-0">
            <i className="fa-solid fa-upload text-4xl"></i>
          </label>
          {image7 && <p className="text-success absolute bottom-3 right-0">Uploaded</p>}
        </div>
      </div>

      <input type="submit" className={`absolute label-btn right-10`} value='Submit' />
    </div>
  );
}

export default AdImages;