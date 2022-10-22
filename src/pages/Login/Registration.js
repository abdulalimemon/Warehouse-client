import React from 'react';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import LoginPic from '../../assets/login.png';
import Google from '../../assets/google.png';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="container mx-auto bg-base-200 my-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 p-5">
                    <div className="flex justify-center items-center">
                        <div className='hidden md:block'>
                            <img className='mx-auto' src={LoginPic} alt="" />
                        </div>
                    </div>
                    <div className='w-full md:w-3/4 mx-auto flex items-center'>
                        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                            <div className="card-body px-5 md:px-8">
                                <h2 className='text-center font-semibold text-2xl py-1'>Create a new account</h2>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-medium text-lg">Your name</span>
                                    </label>
                                    <input type="text" placeholder="Enter your name" className="input input-bordered text-lg" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-medium text-lg">Email address</span>
                                    </label>
                                    <input type="email" placeholder="Enter your email address" className="input input-bordered text-lg" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-medium text-lg">Password</span>
                                    </label>
                                    <input type="text" placeholder="Enter your password" className="input input-bordered text-lg" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-medium text-lg">Confirm password</span>
                                    </label>
                                    <input type="text" placeholder="Enter your password" className="input input-bordered text-lg" />
                                </div>
                                <div className="form-control">
                                    <label className='label justify-start font-medium text-base'>
                                        <input className='mr-3 checkbox checkbox-sm' type="checkbox" />
                                        <span>I agree to the Terms & Conditions</span>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary font-medium text-lg capitalize">Register</button>
                                </div>
                                <label className="label">
                                    <p className='font-medium text-base'>Already have an account?
                                        <Link to='/login' className="ml-2 text-red-700">Login Now</Link>
                                    </p>

                                </label>
                                <div className="my-3">
                                    <div className='flex items-center justify-center' >
                                        <div className='border-b-2 w-2/5  border-slate-400'></div>
                                        <div className='w-1/5 flex justify-center font-medium'>Or</div>
                                        <div className='border-b-2 w-2/5 border-slate-400'></div>
                                    </div>
                                </div>
                                <div className='my-3 flex'>
                                    <button className='w-full h-14 p-1'>
                                        <span className="w-full h-14 rounded-md flex items-center justify-center cursor-pointer  hover:bg-slate-200 border border-slate-600">
                                            <img className='w-10 h-10' src={Google} alt="Google" />
                                            <h2 className='ml-3 font-semibold text-lg'>Sign up With Google</h2>
                                        </span>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>

    );
};

export default Registration;