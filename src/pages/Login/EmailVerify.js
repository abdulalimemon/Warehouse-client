import React from 'react';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const EmailVerify = () => {
    const [sendEmailVerification, sending, error] = useSendEmailVerification(
        auth
    );
    if (error?.message) {
        toast.error('error?.message', {
            theme: "colored",
        });
    }
    return (
        <>
            <Navbar></Navbar>
            <div className='bgBodyPrimary py-5'>
                <div className='container py-48'>
                    <div className='flex items-center justify-center'>
                        <div className='text-center px-5 md:px-2'>
                            <h2 className='textHeading text-3xl font-semibold pb-3'>Your Email is not Verified.</h2>
                            <h4 className='textHeading text-lg font-semibold pb-3'>Please Verify Your Email Address.</h4>
                            <button className='btn btn-primary capitalize w-full text-base' onClick={async () => {
                                await sendEmailVerification();
                                toast.success('An user verification email has been sent to your email address. Please check your inbox or spam folder.', {
                                    theme: "colored",
                                });
                            }}>Send Email Again</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default EmailVerify;