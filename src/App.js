import React from "react";
import './styles.css';

import Tuiter from "./components/tuiter";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/home";
import Login from "./components/profile/login";
import Signup from "./components/profile/signup";
import MyHome from "./components/home/my-home";
import Explore from "./components/explore";
import Notifications from "./components/notifications";
import Messages from "./components/messages";
import Bookmarks from "./components/bookmarks";
import Lists from "./components/lists";
import Profile from "./components/profile";
import EditProfile from "./components/profile/edit-profile";
import Following from "./components/profile/following";
import Followers from "./components/profile/followers";
import More from "./components/more";
import MyTuits from "./components/profile/my-tuits";
import MyLikes from "./components/profile/my-likes";
import MyMedias from "./components/profile/my-medias";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Tuiter/>}>
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
                            <Route path="mytuits" element={<Profile/>}/>
                            <Route path="mylikes" element={<Profile/>}/>
                            <Route path="mymedias" element={<Profile/>}/>

                        </Route>
                    </Route>
                    <Route path="more" element={<More/>}/>
                </Route>

            </Routes>

        </BrowserRouter>
    );
}

export default App;
