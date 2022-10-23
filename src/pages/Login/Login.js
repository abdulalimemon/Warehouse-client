import React from 'react';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import LoginPic from '../../assets/login.png';
import Google from '../../assets/google.png';
import { Link } from 'react-router-dom';

const Login = () => {

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
                            <div className="card flex-shrink-0 w-full shadow-2xl cardBgPrimary">
                                <div className="card-body px-5 md:px-8">
                                    <h2 className='text-center font-semibold text-2xl py-1 textHeading'>Log in to WareHouse</h2>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-medium text-lg textHeading">Email Address</span>
                                        </label>
                                        <input type="text" placeholder="email" className="input input-bordered text-lg" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-medium text-lg textHeading">Password</span>
                                        </label>
                                        <input type="text" placeholder="password" className="input input-bordered text-lg" />
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
                                    <div className='my-3 flex'>
                                        <Link className='w-full h-14 p-1 textHoverColor textHeading'>
                                            <span className="w-full h-14 rounded-md flex items-center justify-center cursor-pointer  hover:bg-slate-200 border border-slate-600 ">
                                                <img className='w-10 h-10' src={Google} alt="Google" />
                                                <h2 className='ml-3 font-semibold text-lg '>Sign up With Google</h2>
                                            </span>
                                        </Link>
                                    </div>
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

export default Login;