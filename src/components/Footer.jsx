import React from "react";
import logo from "../assets/Header-imges/header-logo.png";
import youtube from "../assets/Footer-imges/Component 1.png";
import telegram from "../assets/Footer-imges/Component 2.png";
import instagram from "../assets/Footer-imges/Component 3.png";
export default function Footer() {
    return (
        <div className="Footer-all">
            <div className="Footer-block">
                <div className="Footer-block-mini">
                    <img src={logo} alt="" />
                    <div className="Footer-block-mini-logtip">
                        <a href="https://www.youtube.com/results?search_query=by+Appx+Group">
                            {" "}
                            <img src={youtube} alt="" />
                        </a>
                        <a href="https://t.me/appx_group">
                            {" "}
                            <img src={telegram} alt="" />
                        </a>
                        <a href="https://www.instagram.com/appx_global/ ">
                            {" "}
                            <img src={instagram} alt="" />
                        </a>
                    </div>
                </div>
                <div className="Footer-block-minihr">
                    <hr />
                </div>
                <div className="Footer-block-mini">
                    <p>© Merax Academy 2023 All rights reserved</p>
                    <p>by Appx Group</p>
                </div>
            </div>
        </div>
    );
}
