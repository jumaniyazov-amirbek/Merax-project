import React from "react";
import bc from "../assets/Page1-imges/image 8.png";
export default function Page1() {
    return (
        <div className="Page1-all">
            <div className="Page1-block">
                <div className="continer">
                    <div className="Page1-block-bc-img">
                        <img src={bc} alt="" />
                    </div>
                    <div className="Page1-block-text-btn">
                        <h3>UI/UX Dizayn</h3>
                        <p>
                            Jahon darajasidagi foydalanuvchi interfeysini
                            yaratish va <br /> UI / UX sohasida muvaffaqiyatli
                            martaba qilishni o'rganing.
                        </p>
                        <button>Ariza qoldiring</button>
                    </div>
                </div>
            </div>
            <div className="continer">
                <div className="Page1-block-2">
                    <div className="Page1-block-mini">
                        <span>Ta’lim tili</span>
                        <p>O’zbek</p>
                    </div>
                    <div className="Page1-block-mini">
                        <span>Davomiyligi</span>
                        <p>5 oy</p>
                    </div>
                    <div className="Page1-block-mini">
                        <span>Murakkablik</span>
                        <p>Boshlang'ich</p>
                    </div>
                    <div className="Page1-block-mini">
                        <span>Siz yaratasiz</span>
                        <p>Portolio</p>
                    </div>
                </div>
            </div>
            <h1 className="h11">Kurs kimlarga mos keladi?</h1>
            <div className="continer">
                <div className="Page1-block-3">
                    <div className="Page1-block-3-mini">
                        <h1>
                            UI / UX dizayneriga <br />
                            yangi kelganlar
                        </h1>
                        <p>
                            Dizayn bo'yicha bilimga ega bo'lmagan har <br />
                            bir kishi UX / UI dizaynini osongina <br />
                            o'rganishi mumkin.
                        </p>
                    </div>
                    <div className="Page1-block-3-mini-1">
                        <h1>
                            Junior dizaynerlari <br /> (Tajriba to’plash uchun)
                        </h1>
                        <p>
                            Ushbu sohada asosiy bilimlarga ega bo'lgan <br />
                            dizaynerlar o'z bilimlarini mustahkamlash orqali{" "}
                            <br />
                            yuqori darajaga ko'tarilishlari mumkin
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
