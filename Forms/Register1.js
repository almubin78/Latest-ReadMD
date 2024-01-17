import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { useGlobalContext } from '../../AuthProvider/AuthContextFunction';

const Register = () => {
    const { createUser, logOut } = useGlobalContext();
    const [err, setErr] = useState('');
    const navigate = useNavigate();
    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        const registeredUser = {
            name: name,
            email: email,
            password: password,
            // imgURL:imgURL
        }
        console.log(registeredUser);
        // Password validation
        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])/;
        if (!passwordRegex.test(password)) {
            setErr('Password must contain at least one capital letter and one special character.');
            return;
        }
        createUser(email, password)
            .then(res => {
                console.log(res);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Congratulation!!!Your Account has been Create',
                    showConfirmButton: false,
                    timer: 1500
                })
                logOut()
                    .then(() => {

                        navigate('/login')
                    })
            })
            .catch(err => console.error(err))
    }
    return (
        // <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

        //         </div>
        <div className="card-body sm:w-3/4 lg:w-2/4 mx-auto">
            <form onSubmit={handleSignUp}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input name='name' type="text" placeholder="Enter Your Name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name='email' type="email" placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input name='password' type="password" placeholder="Password" className="input input-bordered" />
                    {err}
                </div>

                <div className="form-control mt-6">
                    <input className="btn btn-primary" type='submit' value='Register' />
                </div>
            </form>

            <p>Already have account? <Link className='text-primary' to='/login'>Please Login</Link></p>
        </div>
    );
};

export default Register;