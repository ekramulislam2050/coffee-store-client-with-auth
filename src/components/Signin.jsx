import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const Signin = () => {
    const {signinUser} = useContext(AuthContext)
    const handleSignIn = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value;
        const password = e.target.password.value
        // console.log(email,password)
        signinUser(email, password)
            .then(result => {
                const user = result.user;
                const lastSignInTime = user?.metadata?.lastSignInTime
                const newUser = { email, lastSignInTime }
                console.log(newUser)
                fetch(`http://localhost:5000/users`, {
                    method: 'PATCH',
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log("sign in : ",data)
                    })
            })
            .catch(err => {
                console.log("error from sign in : ", err)
            })
    }
    return (
        <div>
            <div className="w-full max-w-sm mx-auto shadow-2xl card bg-base-100 shrink-0">
                <form className="card-body" onSubmit={handleSignIn}>
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
                        <button className="btn btn-primary">Sign in</button>
                    </div>
                </form>
            </div>

        </div>
    );
};



export default Signin;