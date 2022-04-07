import * as service from "../../services/follow-service";
import {useEffect, useState} from "react";
import {Link, useLocation, useParams} from "react-router-dom";
import {UserList} from "./user-list";
import {FollowList} from "../follows";


const Following = () => {
    const {username} = useParams();
    const location = useLocation();
    const [followingUser,setFollowedUsers] = useState([]);
    const findFollowingUser = () =>
        service.findAllUsersFollowing(username)
            .then((users)=>setFollowedUsers(users));

    useEffect(findFollowingUser,[]);

    console.log(followingUser.map(user=>user.username));


    return(
            <div>
                <h2>Following</h2>
                <ul className="mt-4 nav nav-pills nav-fill">
                    <li className="nav-item">
                        <Link to={`/profile/${username}/followers`}
                              className={`nav-link ${location.pathname.indexOf('follower') >= 0 ? 'active':''}`}>
                            Followers</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/profile/${username}/followings`}
                              className={`nav-link ${location.pathname.indexOf('following') >= 0 ? 'active':''}`}>
                            Followings</Link>
                    </li>
                </ul>

                <FollowList users={followingUser} refreshUser={findFollowingUser}/>
            </div>


    );



};

export default Following;