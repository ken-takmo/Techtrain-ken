import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Funum } from "./components/funum";
import { Header } from "./components/header";
import { GetPoint } from "./components/GetPoint";
import { Hukeisan } from "./components/hukeisan";
import { Koron } from "./components/koron";
import { Kotumo } from "./components/kotumo";
import { Oyaron } from "./components/oyaron";
import { Oyatumo } from "./components/oyatumo";
import { Home } from "./components/Home";


function App() {
    return(
        <div className="mahjong-score-calc">
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/getpoint" element={<GetPoint/>}/>
                    <Route path="ex" element={<Funum/>}/>
                    <Route path="ex2" element={<Hukeisan/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;
