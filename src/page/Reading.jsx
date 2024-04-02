import React from "react";
import img2 from "../assets/Reading-imges/image 7.png";
export default function Reading() {
    return (
        <div className="Reading-all">
            <div className="Reading-block">
                <div className="Reading-mini-block">
                    <h1>Bizda o'qishning afzalliklari</h1>
                    <p>
                        <div className="bir">1</div> 80% tajriba va ko'nikma
                    </p>
                    <p>
                        <div className="bir">2</div>Mentorlarimiz eng kamida 2
                        yil dasturlashda <br /> tajribaga ega
                    </p>
                    <p>
                        <div className="bir">3</div>Co-working’dan 24/7
                        foydalanish imkonyati
                    </p>
                    <p>
                        <div className="bir">4</div>Kurs oxirida tajriba o’tash
                        uchun labaratoriya
                    </p>
                </div>
                <div className="Reading-mini-block">
                    <img src={img2} alt="" />
                </div>
            </div>
        </div>
    );
}
