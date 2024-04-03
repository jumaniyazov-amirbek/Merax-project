import React from "react";
import bc from "../assets/Page1-imges/image 8.png";
import Frame from "../assets/Page1-imges/Frame.png";
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
              Jahon darajasidagi foydalanuvchi interfeysini yaratish va <br />{" "}
              UI / UX sohasida muvaffaqiyatli martaba qilishni o'rganing.
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
              dizaynerlar o'z bilimlarini mustahkamlash orqali <br />
              yuqori darajaga ko'tarilishlari mumkin
            </p>
          </div>
        </div>
      </div>
      <h1 className="h11">Kursda nimalarni o’rganasiz?</h1>
      <div className="continer">
        <div className="block-1-all">
          <div className="block-1">
            <div className="block-1-mini">
              <h1>Mijozga loyihani taqdim etish</h1>
              <p>
                Loyiha oxirida mijozga ishni to'g'ri taqdim etish. To'g'ri
                portfelni shakllantirish.
              </p>
              <img src={Frame} alt="" />
            </div>
            <div className="block-1-mini">
              <h1>Interfeys dizayni</h1>
              <p>
                Saytlar, mobil ilovalar va xizmatlarning vizual qismini
                loyihalash.
              </p>
              <img src={Frame} alt="" />
            </div>
            <div className="block-1-mini">
              <h1>Figma-da ishlash</h1>
              <p>
                UX/UI kursida siz figmada noldan ishlashni va turli xil
                murakkablikdagi dizayn sxemalarini yaratishni o'rganasiz.
              </p>
              <img src={Frame} alt="" />
            </div>
          </div>
          <div className="block-1">
            <div className="block-1-mini">
              <h1>Interfeys dizayni</h1>
              <p>
                Saytlar, mobil ilovalar va xizmatlarning vizual qismini
                loyihalash.
              </p>
              <img src={Frame} alt="" />
            </div>
            <div className="block-1-mini">
              <h1>Interfeys dizayni</h1>
              <p>
                Saytlar, mobil ilovalar va xizmatlarning vizual qismini
                loyihalash.
              </p>
              <img src={Frame} alt="" />
            </div>
            <div className="block-1-mini">
              <h1>Interfeys dizayni</h1>
              <p>
                Saytlar, mobil ilovalar va xizmatlarning vizual qismini
                loyihalash.
              </p>
              <img src={Frame} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="advice-all">
        <div className="advice-block">
          <div className="advice-block-mini11">
            <h1>Kasb tanlashda qiyanlyapsizmi?</h1>
            <p>
              Bepul maslahat olish uchun so'rov qoldiring va biz sizga to'g'ri
              tanlov <br />
              qilishga yordam beramiz
            </p>
            <button>Maslahat olish</button>
          </div>
        </div>
      </div>
      <div className="Question-all">
        <div className="Question-block">
          <div className="p-block">
            <h1 className="ppp">
              Kurs haqida batafsil ma'lumot <br /> olishni xohlaysizmi?
            </h1>
            <p className="pp">
              Agar sizda format haqida savollaringiz bo'lsa yoki nimani
              tanlashni <br />
              bilmasangiz, raqamingizni qoldiring va operatorlarimiz sizga qayta{" "}
              <br />
              qo'ng'iroq qilishadi.
            </p>
          </div>
          <div className="Question-mini2">
            <input placeholder="Ismingizni kiriting" type="text" />
            <input placeholder="+998" type="text" />
            <button>Yuborish</button>
          </div>
        </div>
      </div>
    </div>
  );
}
