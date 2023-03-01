import React from "react";

function OtherInfo({ formData, setFormData }) {
  return (
    <div className="other-info-container">
      {/* <input
        type="text"
        placeholder="Nationality..."
        value={formData.nationality}
        onChange={(e) => {
          setFormData({ ...formData, nationality: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Other..."
        value={formData.other}
        onChange={(e) => {
          setFormData({ ...formData, other: e.target.value });
        }}
      /> */}

      <input
      required
        onChange={(e) => {
          setFormData({ ...formData, adNumber: e.target.value });
        }}
        className='h-12 input input-bordered w-full my-2'
        placeholder='Number' type="text" />

      <input
      required
        onChange={(e) => {
          setFormData({ ...formData, adLocation: e.target.value });
        }}
        className='h-12 input input-bordered w-full my-2'
        placeholder='Location' type="text" />

      <input
      required
        onChange={(e) => {
          setFormData({ ...formData, adPrice: e.target.value });
        }}
        className='h-12 input input-bordered w-full my-2'
        placeholder='Price' type="text" />
    </div>
  );
}

export default OtherInfo;