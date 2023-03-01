import React, { useState } from "react";
import BasicInfo from "./BasicInfo";
import AdImages from "./AdImages";
import OtherInfo from "./OtherInfo";
import './../MyAccount.css';

function Form(user) {
  const [page, setPage] = useState(0);

  const FormTitles = ["Basic Info", "Other", "Ad Images"];

  // const PageDisplay = () => {
  //   if (page === 0) {
  //     return <BasicInfo formData={formData} setFormData={setFormData} />;
  //   } else if (page === 1) {
  //     return <OtherInfo formData={formData} setFormData={setFormData} />;
  //   } else {
  //     return <AdImages formData={formData} setFormData={setFormData} />;
  //   }
  // };


  return (
    <form className="form">
      <div className="progressbar">
        <div
          style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}
        ></div>
      </div>
      <div className="form-container">
        <div className="form-header">
          <h1 className="text-3xl font-bold mb-5">{FormTitles[page]}</h1>
        </div>
        {/* <div>{PageDisplay()}</div> */}
        {/* <div className="form-footer">
          {(page === 1) && <button
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Previous
          </button>}
          {page !== (FormTitles.length - 1) &&
            <button
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
            </button>}
          <div className="relative w-full">
            {(page === 2 && formData?.adImages?.length > 0) && <input type="submit" className={`absolute label-btn right-0 bottom-0`} value='Submit' />}
          </div>
        </div> */}
      </div>
    </form>
  );
}

export default Form;