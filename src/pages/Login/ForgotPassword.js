import React, { useRef } from 'react';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import LoginPic from '../../assets/login.png';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';


const ForgotPassword = () => {
    const emailRef = useRef('');
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        sendPasswordResetEmail(email);
        toast.success('A reset password email has been sent to your email address. please check your inbox or spam folder.', {
            theme: "colored",
        });
    }

    if (error?.message) {
        toast.error('error?.message', {
            theme: "colored",
        });
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
                                    <h2 className='text-center font-semibold text-2xl py-1 textHeading'>Forgot password</h2>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-medium text-lg textHeading">Email Address</span>
                                        </label>
                                        <input ref={emailRef} type="text" placeholder="email" className="input input-bordered text-lg" required />
                                    </div>
                                    <div className="form-control">
                                        <div className="form-control mt-6">
                                            <button className="btn btn-primary font-medium text-lg capitalize">Next</button>
                                        </div>
                                    </div>
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

export default ForgotPassword;