import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Common from './Common';

const Register = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    const [userType, setUserType] = useState('Normal');

    const signUpWithEmail = () => {
        const user = { name, email, password: pass, userType};
        fetch(`http://localhost:5000/register`, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.token) {
                    localStorage.setItem('token', data?.token);
                    localStorage.setItem('u_id', data?.id);
                }else{
                    console.log("error in setting token to lcoaStorage");
                }
            })
    }

    return (
        <div>
            <div className='bg-container'></div>
            <div className='breadcrumbs shadow-slate-400 shadow-md px-10 py-3'>
                <Link to='/' className="h-uline"><i class="fa-solid fa-house pr-1"></i> Free Classifieds India</Link>
                <b className='h-uline'> <i class="fa-solid fa-angle-right"></i> My Locanto</b>
                <b> <i class="fa-solid fa-angle-right"></i> Register</b>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 p-5 lg:p-10">
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl mb-2">Register</h1>
                    <div>
                        <label className="label">Your Name</label>
                        <input type="text" placeholder="Type here" onChange={(e) => setName(e.target.value)} className="input bg-slate-200 input-bordered w-full" />
                    </div>
                    <div>
                        <label className="label">Email</label>
                        <input type="text" placeholder="Type here" onChange={(e) => setEmail(e.target.value)} className="input bg-slate-200 input-bordered w-full" />
                    </div>
                    <div>
                        <label className="label">Password</label>
                        <input type="password" placeholder="Type here" onChange={(e) => setPass(e.target.value)} className="input bg-slate-200 input-bordered w-full" />
                    </div>
                    <div>
                        <label className="label">Choose account type</label>
                        <select  className="input bg-slate-200 input-bordered w-full" required onClick={(e)=>setUserType(e?.target?.value)} name="" id="">
                            <option disabled>Choose account type</option>
                            <option selected value='Normal'>Normal</option>
                            <option value='Premium'>Premium</option>
                            <option value='VIP'>VIP</option>
                        </select>
                    </div>
                    <div className="flex justify-between">
                        <label className="cursor-pointer flex gap-2 items-center">
                            <input type="checkbox" className="" />
                            <span className="label-text">Remember me</span>
                        </label>
                        <Link to='/login' className="h-uline">Already have an account? Login</Link>
                    </div>
                    <button onClick={() => signUpWithEmail()} className="btn bg-blue-700 hover:bg-blue-500 text-xl border-none flex gap-5 w-fit px-12 py-3 h-fit items-center">Register <i className="fa-solid fa-angles-right"></i></button>

                </div>
            </div>
            <div className="divider">OR</div>

            <Common />
        </div>
    );
};

export default Register;