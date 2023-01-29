import React, { useState, useEffect } from 'react';
import './AllUsers.css';

const AllUsers = () => {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [user, setUser] = useState({});
    // const [email, setEmail] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);

    const editUser = (email, currentName) => {
        const updatedUser = {
            name: name !== '' ? name : currentName
        }
        fetch(`http://localhost:5000/users/${email}`, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    const deleteUser = (email) => {
        const response = window.confirm('Are you sure?');

        if (response === true) {
            fetch(`http://localhost:5000/users/${email}`, {
                method: 'DELETE',
                headers: { 'Content-type': 'application/json' }
            })
                .then(res => res.json())
                .then(data => console.log(data))
        }
    }

    return (
        <div>
            <table className="table table-normal w-full">
                <thead>
                    <tr>
                        <th>Account</th>
                        <th>Basic Info</th>
                        <th>Number</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(u => {
                        return <tr onClick={()=>setUser(u)}>
                            <th><img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Picture.png" className='w-16 h-16 rounded-full' alt="" /></th>
                            <td>
                                <h1 className="text-xl">{u?.name}</h1>
                            </td>
                            <td><p>{u?.email}</p></td>
                            <td>
                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn m-1">Action</label>
                                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-lg w-fit gap-2">
                                        <li><label htmlFor="edit-user-modal" className="btn btn-success">Edit</label></li>

                                        <li><button onClick={() => deleteUser(u?.email)} className='btn btn-error'>Delete</button></li>
                                    </ul>
                                </div>
                            </td>

                        </tr>
                    })}
                </tbody>
            </table>

            {/* edit user modal */}
            <input type="checkbox" id="edit-user-modal" className="modal-toggle" />
            <div className="modal">
                <div className='modal-box flex flex-col gap-5'>
                    <h1 className="text-4xl">Edit User</h1>
                    <input onChange={(e) => setName(e?.target?.value)} className='w-full h-12 input input-bordered' placeholder='Name' type="text" />
                    <input disabled className='w-full h-12 input input-bordered' value={user?.email} type='email' />
                    {/* <input onChange={(e) => setNumber(e?.target?.value)} className='w-full h-12 input input-bordered' placeholder='Number' type="text" /> */}
                    <div className="modal-action">
                        <button onClick={() => editUser(user?.email, user?.name)} className="btn btn-success">Save</button>
                        <label htmlFor="edit-user-modal" className="btn btn-error">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;