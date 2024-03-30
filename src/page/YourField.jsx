import React from "react";
import Page1 from "../pages/Page1";
import { Routes, Route, Link } from "react-router-dom";
import Page3 from "../pages/Page3";
import Page2 from "../pages/Page2";
export default function YourField() {
  return (
    <div className="YourField-all">
      <h2>O’z sohangizni tanlang</h2>
      <div className="YourField-block">
        <nav>
          <Link to="/">
            <div className="link-block">
              <h1>Frontend - React</h1>
              <p>
                foydalanuvchiga ko’rinadigan sahifalarni, <br />
                dashboardlarni yasash imkonini beradi
              </p>
              <span>Batafsil</span>
            </div>
          </Link>
          <Link to="/Page2">
            <div className="link-block">
              <h1>Foundation</h1>
              <p>
                dasturlashga ilk qadam, kompyuter va <br />
                umumiy dasturlash bilan tanishish
              </p>
              <span>Batafsil</span>
            </div>
          </Link>
          <br />
          <Link to="/Page3">
            <div className="link-block">
              <h1>Backend - Nodejs</h1>
              <p>
                veb-saytlarning server kodini tezda yozish <br />
                imkonini beradi
              </p>
              <span>Batafsil</span>
            </div>
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/" element={<Page2 />} />
          <Route path="/" element={<Page3 />} />
        </Routes>
      </div>
    </div>
  );
}
