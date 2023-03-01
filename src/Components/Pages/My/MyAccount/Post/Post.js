import React from 'react';

const Post = ({formData, setFormData}) => {
    return (
        <div>
            <input
                type="text"
                className='w-full h-12 input input-bordered my-2' placeholder='Ad title'
                value={formData.adTitle}
                onChange={(event) =>
                    setFormData({ ...formData, adTitle: event.target.value })
                }
            />
        </div>
    );
};

export default Post;