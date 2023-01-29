import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Common from './Common';

const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const signInWithEmail = () => {
        const user = { email, password: pass };
        fetch(`http://localhost:5000/login`, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }


    return (
        <div>
            <div className='bg-container'></div>
            <div className='breadcrumbs shadow-slate-400 shadow-md px-10 py-3'>
                <Link to='/' className="h-uline"><i class="fa-solid fa-house pr-1"></i> Free Classifieds India</Link>
                <b className='h-uline'> <i class="fa-solid fa-angle-right"></i> My Locanto</b>
                <b> <i class="fa-solid fa-angle-right"></i> Log in</b>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 p-5 lg:p-10">
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl mb-2">Log in</h1>
                    <div>
                        <label className="label">Email/Phone</label>
                        <input type="text" placeholder="Type here" onChange={(e) => setEmail(e.target.value)} className="input bg-slate-200 input-bordered w-full" />
                    </div>
                    <div>
                        <label className="label">Password</label>
                        <input type="password" placeholder="Type here" onChange={(e) => setPass(e.target.value)} className="input bg-slate-200 input-bordered w-full" />
                    </div>
                    <div className="flex justify-between">
                        <label className="cursor-pointer flex gap-2 items-center">
                            <input type="checkbox" className="" />
                            <span className="label-text">stay logged in</span>
                        </label>
                        <div className="h-uline">Can’t access your account?</div>
                    </div>
                    <button onClick={signInWithEmail} className="btn bg-blue-700 hover:bg-blue-500 text-xl border-none flex gap-5 w-fit px-12 py-3 h-fit items-center">Log in <i className="fa-solid fa-angles-right"></i></button>
                    <button className="btn btn-outline outline-blue-700 btn-lg hover:outline-blue-500 flex gap-5 w-fit px-12 items-center">Log in without passsword <i className="fa-solid fa-angles-right"></i></button>

                </div>
                <div className="flex flex-col gap-8 p-5 bg-slate-100 rounded-lg">
                    <h1 className="text-3xl mb-2">First time on Locanto?</h1>
                    <p><i className="text-2xl fa-solid fa-pen pr-4"></i> Manage and edit ads easily</p>
                    <p><i className="text-2xl fa-solid fa-message pr-4"></i> Read and answer your active messages anytime</p>
                    <p><i className="text-2xl fa-solid fa-star pr-4"></i> Access your favourite ads anytime, anywhere</p>
                    <Link to='/register'><button className="btn bg-blue-700 hover:bg-blue-500 text-xl border-none flex  w-fit px-12 py-3 h-fit items-center">Register in 20 seconds »</button></Link>
                </div>
            </div>
            <div className="divider">OR</div>
            <Common/>
        </div>
    );
};

export default Login;