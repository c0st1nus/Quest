import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/Main/Main";
import { Login } from "./pages/Login/Login";
import { FirstPage } from "./pages/QuestPages/FirstPage";
import { SecondPage } from "./pages/QuestPages/SecondPage";
import { ThirdPage } from "./pages/QuestPages/ThirdPage";
import { FourthPage } from "./pages/QuestPages/FourthPage";
import { FifthPage } from "./pages/QuestPages/FifthPage";
import { FinalPage } from "./pages/QuestPages/FinalPage";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
      <div className="geometric-background">
        {Array.from({ length: 15 }).map((_, i) => (
          <div key={i} className="shape">❄️</div>
        ))}
      </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/app/1" element={<FirstPage />} />
        <Route path="/app/2" element={<SecondPage />} />
        <Route path="/app/3" element={<ThirdPage />} />
        <Route path="/app/4" element={<FourthPage />} />
        <Route path="/app/5" element={<FifthPage />} /> 
        <Route path="/app/6" element={<FinalPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
