import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { data } from 'autoprefixer';
import axios from 'axios';

const Signup = () => {
    const {createUser}=useContext(AuthContext)
    const handleSignUp = (e) =>{
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value;
        const password = e.target.password.value
        // console.log(email,password)
        createUser(email,password)
        .then(result=>{
            const user = result.user;
            const newUser = {user,name}
            // console.log(user)
            axios.post("https://coffee-store-server-lilac-seven.vercel.app/users",newUser)
            .then(data=>console.log( "sign up data = ",data.data))
            
        })
        .catch(err=>{
            console.log("error from sign up : ", err)
        })
    }
    return (
        <div>
            <div className="w-full max-w-sm mx-auto shadow-2xl card bg-base-100 shrink-0">
                <form className="card-body" onSubmit={handleSignUp}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" className="input input-bordered" name='name' required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" name='email' required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" name='password' required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="mt-6 form-control">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Signup;