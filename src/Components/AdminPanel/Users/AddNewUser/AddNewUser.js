import React,{useState, useEffect} from 'react';

const AddNewUser = () => {
    // const [categories, setCategories] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [userType, setUserType] = useState('Normal');

    const addUser = () => {
        const user = { name, email, userType};
        fetch('http://localhost:5000/add-user',{
            method:'POST',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => console.log(data));
    };


    return (
        <div className='flex flex-col gap-5'>
            <h1 className="text-4xl">Add New User</h1>
            <input onChange={(e)=>setName(e?.target?.value)} className='w-full h-12 input input-bordered' placeholder='Name' type="text" />
            <input onChange={(e)=>setEmail(e?.target?.value)} className='w-full h-12 input input-bordered' placeholder='Email' type="email" />
                    <div>
                        <label className="label">Choose account type</label>
                        <select  className="input bg-slate-200 input-bordered w-full" required onClick={(e)=>setUserType(e?.target?.value)} name="" id="">
                            <option disabled>Choose account type</option>
                            <option selected value='Normal'>Normal</option>
                            <option value='Premium'>Premium</option>
                            <option value='VIP'>VIP</option>
                        </select>
                    </div>
            {/* <input onChange={(e)=>setNumber(e?.target?.value)} className='w-full h-12 input input-bordered' placeholder='Number' type="text" /> */}
            <button onClick={addUser} className="btn btn-success px-10 w-fit">Add User</button>
        </div>
    );
};

export default AddNewUser;