import React, { useState } from "react";

function AdImages({ formData, setFormData }) {
  const [image1, setImage1] = useState();
  const [image2, setImage2] = useState();
  const [image3, setImage3] = useState();
  const [image4, setImage4] = useState();
  const [image5, setImage5] = useState();
  const [image6, setImage6] = useState();
  const [image7, setImage7] = useState();
  const images = [image1, image2, image3, image4, image5, image6, image7];
  const imageStorageKey = `c57edde5c6208c27a5d91c5e10163c0f`;
  const imgUrl = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;

  const uploadImages = () => {
    const allImages = [];
    images.map(i => {
      if (i !== undefined) {
        allImages.push(i)
      }
      else {
        console.log('i m undefined')
      }
    })

    if (allImages.length !== 0) {
      allImages.map(i => {
        try {
          const img = i[0];
          const imgFormData = new FormData();
          imgFormData.append('image', img);

          fetch(imgUrl, {
            method: "POST",
            body: imgFormData
          })
            .then(response => response.json())
            .then(result => {
              setFormData({ ...formData, adImages: [...formData?.adImages, result?.data?.url] })
              console.log(result.data.url);
            });
        }

        catch (err) {
          console.log(err?.message);
        }
      })
    }
    else {
      return window.alert('Please upload at least one image')
    }
  }

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

      <button onClick={uploadImages} className='btn btn-warning rounded-none'>Upload Images</button>
    </div>
  );
}

export default AdImages;