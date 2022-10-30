import React, { useRef } from 'react';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import LoginPic from '../../assets/login.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';


const Login = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await signInWithEmailAndPassword(email, password);

    }
    // Error Message
    const errorCheck = () => {

        if (error?.message === 'Firebase: Error (auth/wrong-password).') {
            toast.error('Wrong password', {
                theme: "colored",
            })
            return;
        }
        if (error?.message === 'Firebase: Error (auth/user-not-found).') {
            toast.error('User Not Found', {
                theme: "colored",
            })
            return;
        }
        if (error?.message === 'Firebase: Error (auth/invalid-email).') {
            toast.error('Invalid Email', {
                theme: "colored",
            })
            return;
        }
        if (error?.message) {
            toast.error(error?.message, {
                theme: "colored",
            })
            return;
        }
    }
    errorCheck();
    if (user) {
        navigate(from, { replace: true });
    }

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <>
            <Navbar></Navbar>
            <div className='bgBodyPrimary py-8'>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 p-5">
                        <div className="flex justify-center items-center">
                            <div className='hidden md:block'>
                                <img className='mx-auto' src={LoginPic} alt="" />
                            </div>
                        </div>
                        <div className='w-full md:w-3/4 mx-auto flex items-center'>
                            <form onSubmit={handleSubmit} className="card flex-shrink-0 w-full shadow-2xl cardBgPrimary">
                                <div className="card-body px-5 md:px-8">
                                    <h2 className='text-center font-semibold text-2xl py-1 textHeading'>Log in to WareHouse</h2>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-medium text-lg textHeading">Email Address</span>
                                        </label>
                                        <input ref={emailRef} type="text" placeholder="email" className="input input-bordered text-lg" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-medium text-lg textHeading">Password</span>
                                        </label>
                                        <input ref={passwordRef} type="password" placeholder="password" className="input input-bordered text-lg" required />
                                        <label className="label">
                                            <Link to='/Forgotpassword' className=" font-medium text-base text-red-700 textHoverColor2">Forgot password?</Link>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary font-medium text-lg capitalize">Login</button>
                                    </div>
                                    <label className="label">
                                        <p className='font-medium text-base textHeading'>New to WareHouse?
                                            <Link to='/registration' className="ml-2 text-red-700 textHoverColor2">Register Now</Link>
                                        </p>

                                    </label>
                                    <div className="my-3">
                                        <div className='flex items-center justify-center' >
                                            <div className='border-b-2 w-2/5  border-slate-400'></div>
                                            <div className='w-1/5 flex justify-center font-medium textHeading'>Or</div>
                                            <div className='border-b-2 w-2/5 border-slate-400'></div>
                                        </div>
                                    </div>
                                    <SocialLogin></SocialLogin>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>

    );
};

export default Login;