import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Funum } from "./components/Funum";
import { Header } from "./components/Header";
import { GetPoint } from "./components/GetPoint";
import { Hukeisan } from "./components/Hukeisan";
import { Home } from "./components/Home";
import { Yaku } from "./components/Yaku";

function App() {
  return (
    <div className="mahjong-score-calc">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/getpoint" element={<GetPoint />} />
          <Route path="ex" element={<Funum />} />
          <Route path="ex2" element={<Hukeisan />} />
          <Route path="/yaku" element={<Yaku />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
