import React, {useEffect, useState} from "react";
import Navigation from "../navigation";
import WhatsHappening from "../whats-happening";
import {BrowserRouter, Routes, Route, HashRouter, useNavigate} from "react-router-dom";
import Home from "../home";
import Bookmarks from "../bookmarks";
import Profile from "../profile";
import './tuiter.css'
import EditProfile from "../profile/edit-profile";
import Explore from "../explore";
import Notifications from "../notifications";
import Messages from "../messages";
import Lists from "../lists";
import More from "../more";
import {Login} from "../profile/login";
import Signup from "../profile/signup";
import * as service from "../../services/auth-service";
import Following from "../profile/following";
import Followers from "../profile/followers";
import WhoToFollowList from "../whotofollowlist";
import MyHome from "../home/my-home";

function Tuiter() {

    return (
        <BrowserRouter>
            <div className="container">
                <div className="ttr-tuiter">
                    <div className="ttr-left-column">
                        <Navigation/>
                    </div>
                    <div className="ttr-center-column">
                        <Routes>
                            <Route index element={<Home/>}/>
                            <Route path="login" element={<Login/>}/>
                            <Route path="signup" element={<Signup/>}/>
                            <Route path="tuiter" element={<Home/>}>
                                <Route path=":uid" element={<Home/>}/>
                            </Route>
                            <Route path="home" element={<MyHome/>}>
                                <Route path=":uid" element={<MyHome/>}/></Route>
                            <Route path="explore" element={<Explore/>}/>
                            <Route path="notifications" element={<Notifications/>}/>
                            <Route path="messages" element={<Messages/>}/>
                            <Route path="bookmarks" element={<Bookmarks/>}/>
                            <Route path="lists" element={<Lists/>}/>
                            <Route path="profile" element={<Profile/>}>
                                <Route path=":username" element={<Profile/>}>
                                    <Route path="edit" element={<EditProfile/>}/>
                                    <Route path="following" element={<Following/>}/>
                                    <Route path="followers" element={<Followers/>}/>
                                    <Route path="*" element={<Profile/>}/>
                                </Route>
                            </Route>
                            <Route path="more" element={<More/>}/>
                        </Routes>
                    </div>
                    <div className="ttr-right-column">
                        <WhatsHappening/>
                        <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 col-xxl-3">
                            <WhoToFollowList/>
                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default Tuiter;