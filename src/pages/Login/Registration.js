import React from 'react';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import LoginPic from '../../assets/login.png';
import Google from '../../assets/google.png';

const Registration = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="container mx-auto bg-base-200 my-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 p-5">
                    <div className="text-center hidden md:block lg:text-left">
                        <img className='mx-auto w-3/4' src={LoginPic} alt="" />
                    </div>
                    <div className='w-full md:w-3/4 mx-auto flex items-center'>
                        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                            <div className="card-body px-5 md:px-8">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                                <div className="my-3">
                                    <div className='flex items-center justify-center' >
                                        <div className='border-b-2 w-2/5  border-slate-300'></div>
                                        <div className='w-1/5 flex justify-center font-medium'>Or</div>
                                        <div className='border-b-2 w-2/5 border-slate-300'></div>
                                    </div>
                                </div>
                                <div className='my-3 flex'>
                                    <button className='w-full h-14 p-1'>
                                        <span className="w-full h-14 rounded-md flex items-center justify-center cursor-pointer  hover:bg-slate-200 border-2 border-slate-600">
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