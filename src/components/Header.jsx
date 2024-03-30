import React from "react";
import tel from '../assets/Header-imges/tel.png'
import logo from '../assets/Header-imges/header-logo.png'
export default function Header() {
    return (
        <div className="Header-all">
            <div className="continer">
                <div className="Header-block">
                    <div className="Header-logo"><a href="/main"><img src={logo} alt="" /></a></div>
                    <div className="Header-mini-block">
                        <div className="Header-tel">
                            <div className="Header-tel-text"><p>+998(90) 429-90-19</p></div>
                            <div className="Header-tel-img"><img src={tel} alt="" /></div>
                        </div>
                        <div className="Header-mini-block-btn">
                            <button>Bepul konsultatsiya</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
