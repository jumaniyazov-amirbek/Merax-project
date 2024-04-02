import React from "react";
import About from "../page/About";
import Coaches from "../page/Coaches.jsx";
import Advice from "../page/Advice.jsx";
import Question from "../page/Question.jsx";
import YourField from "../page/YourField.jsx";
import { BrowserRouter } from "react-router-dom";
import Reading from "../page/Reading.jsx";

export default function Main() {
    return (
        <div>
            <BrowserRouter>
                <About />
                <Coaches />
                <YourField />
                <Advice />
                <Reading />
                <Question />
            </BrowserRouter>
        </div>
    );
}
