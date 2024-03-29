import React from "react";
import top from "../assets/About-images/top.png";
import medium from "../assets/About-images/medium.png";
import left from "../assets/About-images/left.png";
export default function About() {
    return (
        <div className="About-all">
            <div className="About-block">
                <div className="About-text-btn">
                    <h1>
                        Amaliyot va nazariya <br /> asosida yuksalish
                    </h1>
                    <p>Xalqaro IT mutaxassislarini yetishtirish</p>
                    <button>Ariza qoldiring</button>
                </div>
                <div className="About-img">
                    <div className="About-img-top">
                        <img src={top} alt="" />
                    </div>
                    <div className="About-img-medium">
                        <img src={medium} alt="" />
                    </div>
                    <div className="About-img-left">
                        <img src={left} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
