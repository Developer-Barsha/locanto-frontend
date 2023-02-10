import React, { useState } from "react";
import BasicInfo from "./BasicInfo";
import AdImages from "./AdImages";
import OtherInfo from "./OtherInfo";
import './../MyAccount.css';

function Form(user) {
  const [page, setPage] = useState(0);
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

  const [formData, setFormData] = useState({
    adTitle: "",
    adDescription: "",
    adImages: [],
    mainCategory: "",
    subCategory: "",
    category: "",
    adType: "",
    adNumber: "",
    adPrice: "",
    adLocation: "",
    admin: user.user,
  });

  const FormTitles = ["Basic Info", "Other", "Ad Images"];

  console.log(formData, 'formData')

  const PageDisplay = () => {
    if (page === 0) {
      return <BasicInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <OtherInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <AdImages formData={formData} image1={image1} image2={image2}  image3={image3} image4={image4} image5={image5} image6={image6} image7={image7} setImage1={setImage1} setImage2={setImage2}  setImage3={setImage3} setImage4={setImage4} setImage5={setImage5} setImage6={setImage6} setImage7={setImage7} setFormData={setFormData} />;
    }
  };

  
  const postAd = async (e) => {
    e.preventDefault();
    try {
      if (formData === {}) {
        return window.alert('Please enter informations')
      }

      if (((formData.adLocation === '' || formData.adPrice === '') || formData.adNumber === '')) {
        return window.alert('Please enter other informations')
      }

      if (((formData.mainCategory === '' || formData.category === '') || formData.subCategory === '')) {
        return window.alert('Please enter category details')
      }

      const allImages = [];
      await images.map(i => {
        if (i !== undefined) {
          allImages.push(i)
        }
        else {
          console.log('i m undefined')
        }
      })

      let imageUrls = [];
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
                // imageUrls.push(result?.data?.url);
                setFormData({ ...formData, adImages: [...formData?.adImages, result?.data?.url] })
                // console.log(result.data.url)
              });
          }

          catch (err) {
            console.log(err?.message);
          }

          console.log(formData);
        })
      }
      else {
        return window.alert('Please upload at least one image')
      }


      if (allImages.length !== 0) {
        console.log(formData, 'formmmmm')
        // await fetch('http://localhost:5000/ads', {
        //   method: 'POST',
        //   headers: {
        //     'Content-type': 'application/json'
        //   },
        //   body: JSON.stringify(formData)
        // })
        //   .then(res => res.json())
        //   .then(data => {
        //     if (data && formData.adImages.length > 0) {
        //       setFormData({})
        //       imageUrls = [];
        //       return window.alert('Now you may reload this page and open modal to post another ad!')
        //     }
        //     else { return window.alert('Please enter all informations') }
        //   })
      }
    }

    catch (err) {
      console.log(err);
    }
  }

  return (
    <form onSubmit={postAd} className="form">
      <div className="progressbar">
        <div
          style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}
        ></div>
      </div>
      <div className="form-container">
        <div className="form-header">
          <h1 className="text-3xl font-bold mb-5">{FormTitles[page]}</h1>
        </div>
        <div>{PageDisplay()}</div>
        <div className="form-footer">
          {page !== 0 && <span
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Previous
          </span>}
          {page !== (FormTitles.length - 1) &&
            <span
              className={` ${(((formData.adTitle === '' || formData.adDescription === '') || (formData.mainCategory === '' || formData.subCategory === '')) || formData.category === '')
                && 'btn-disabled'} `}
              onClick={() => {
                if (page === FormTitles.length - 1) {
                  alert("FORM SUBMITTED");
                  console.log(formData);
                } else {
                  setPage((currPage) => currPage + 1);
                }
              }}
            >
              Next
            </span>}
        </div>
      </div>
    </form>
  );
}

export default Form;