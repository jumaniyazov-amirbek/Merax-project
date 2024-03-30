import React from "react";

export default function Question() {
  return (
    <div className="Question-all">
      <div className="Question-block">
        <div className="Question-mini1">
          <h1>Yana savollaringiz qoldimi?</h1>
          <p>
            Agar sizda format haqida savollaringiz bo'lsa yoki nimani tanlashni{" "}
            <br />
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
  );
}
