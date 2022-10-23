import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Google from '../../assets/google.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div className='my-3 flex'>
            <Link onClick={() => signInWithGoogle()} className='w-full h-14 p-1 textHoverColor textHeading'>
                <span className="w-full h-14 rounded-md flex items-center justify-center cursor-pointer  hover:bg-slate-200 border border-slate-600 ">
                    <img className='w-10 h-10' src={Google} alt="Google" />
                    <h2 className='ml-3 font-semibold text-lg '>Sign up With Google</h2>
                </span>
            </Link>
        </div>
    );
};

export default SocialLogin;