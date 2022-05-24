import React, {useEffect, useState} from "react";
import Navigation from "../navigation";
import WhatsHappening from "../whats-happening";

import './tuiter.css'

import WhoToFollowList from "../whotofollowlist";
import {Outlet} from "react-router-dom";

const Tuiter=() =>{

    return (
        <>
            <div className="container">
                <div className="ttr-tuiter">
                    <div className="ttr-left-column">
                        <Navigation/>
                    </div>
                    <div className="ttr-center-column">
                        <Outlet/>
                    </div>
                    <div className="ttr-right-column">
                        <WhatsHappening/>
                        {/*<div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 col-xxl-3">*/}
                        {/*    <WhoToFollowList/>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tuiter;