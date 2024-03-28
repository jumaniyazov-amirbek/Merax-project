import React from "react";
import logo from "../assets/Header-img/header-logo.png";
import tel from "../assets/Header-img/tel.png";
export default function Header() {
    return (
        <div className="Header-all">
            <div className="continer">
                <div className="Header-block">
                    <div className="Header-logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="Header-block-mini">
                        <div className="Header-tel">
                            <div className="Header-tel-text">
                                <p>+998(90) 429-90-19</p>
                            </div>
                            <div className="Header-tel-img">
                                <img src={tel} alt="" />
                            </div>
                        </div>
                        <div className="Header-btn"> Bepul konsultatsiya</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
