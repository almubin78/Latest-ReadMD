import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useGlobalContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
    const { googleLogin, loginUser } = useGlobalContext();
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    
    console.log('process.env===',process.env.REACT_APP_apiKey);
    console.log('process.env.REACT_APP_authDomain===',process.env.REACT_APP_authDomain);
    const handleGoogleSignIn = () => {
        googleLogin()
            .then(res => {
                const user = res.user;
                console.log(user);
                navigate('/')
            })
            .catch(err => console.error(err))
    }
    const handleLogIn = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        loginUser(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, { replace: true });
            })
            .catch(err => {
                const message = 'Email or password or both does not match'
                setError(message)
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">To take my Services with Discount</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleLogIn}>
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
                                <input name='password' type="password" placeholder="password" className="input input-bordered" />
                            </div>
                            <div className='text-red-500'>
                                {error}
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className='btn btn-primary' value='Login' />
                            </div>
                        </form>
                        <p className='text-center font-bold'>or</p>
                        <div className="form-control mt-4">
                            <button onClick={handleGoogleSignIn} className="btn btn-primary">Google SignIn</button>
                        </div>
                        <p>New to Our Site? <Link className='text-primary' to='/register'>Register Here</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;