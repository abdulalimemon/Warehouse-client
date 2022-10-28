import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Blog from './pages/Blog/Blog';
import DashBoard from './pages/DashBoard/DashBoard';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Registration from './pages/Login/Registration';
import NotFound from './pages/NotFound/NotFound';

const PageRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/home' element={<Home></Home>}></Route>
                {/* <Route path='/' element={}></Route> */}
                <Route path='/dashboard' element={<DashBoard></DashBoard>}></Route>
                <Route path='/login' element={<Login></Login>}></Route>
                <Route path='/registration' element={<Registration></Registration>}></Route>
                <Route path='/blog' element={<Blog></Blog>}></Route>
                <Route path='*' element={<NotFound></NotFound>}></Route>
            </Routes>
        </div>
    );
};

export default PageRoutes;