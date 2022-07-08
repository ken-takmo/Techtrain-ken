import React, { useState } from "react";
export const Hukeisan = () =>{

    const {haihu, setHaihu} = useState([]);

    function mentu(b){
        const haifu = document.getElementById(`hainyu`);
        haifu.insertAdjacentText('beforeend',`${b}`);
    }
    function reset(){
        const hai = document.getElementById("hainyu");
        hai.textContent = "";
    }

    const mennyu = (a) =>{
        const textLocation = document.getElementById(`${a}`);
        const hainyu = document.getElementById("hainyu").textContent;
        textLocation.insertAdjacentText('beforeend',`${hainyu}`);
    }

    return(
        <div>
            <h1>符計算をします</h1>
            <div className="agarikei">
                <div className="atama">
                    <h2 id="p-atama">頭：</h2>
                    <button onClick={() => mennyu("p-atama")}>決定</button>
                </div>
                <div className="mentu1">
                    <h2 id="p-mentu1">面子１：</h2>
                    <button onClick={() => mennyu("p-mentu1")}>決定</button>
                </div>
                <div className="mentu2">
                    <h2 id="p-mentu2">面子２：</h2>
                    <button onClick={() => mennyu("p-mentu2")}>決定</button>
                </div>
                <div className="mentu2">
                    <h2 id="p-mentu3">面子３：</h2>
                    <button onClick={() => mennyu("p-mentu3")}>決定</button>
                </div>
                <br />
                <br />
                <h2 id="hainyu"></h2>
                <button onClick={reset}>リセット</button>
                <br />
                <br />
                <div className="manzu">
                    <button onClick={() => mentu(1)}>１萬</button>
                    <button onClick={() => mentu(2)}>２萬</button>
                    <button onClick={() => mentu(3)}>３萬</button>
                    <button onClick={() => mentu(4)}>４萬</button>
                    <button onClick={() => mentu(5)}>５萬</button>
                    <button onClick={() => mentu(6)}>６萬</button>
                    <button onClick={() => mentu(7)}>７萬</button>
                    <button onClick={() => mentu(8)}>８萬</button>
                    <button onClick={() => mentu(9)}>９萬</button>
                </div>
                <br />
                <div className="pinzu">
                    <button onClick={() => mentu(1)}>１筒</button>
                    <button onClick={() => mentu(2)}>２筒</button>
                    <button onClick={() => mentu(3)}>３筒</button>
                    <button onClick={() => mentu(4)}>４筒</button>
                    <button onClick={() => mentu(5)}>５筒</button>
                    <button onClick={() => mentu(6)}>６筒</button>
                    <button onClick={() => mentu(7)}>７筒</button>
                    <button onClick={() => mentu(8)}>８筒</button>
                    <button onClick={() => mentu(9)}>９筒</button>
                </div>
                <br />
                <div className="souzu">
                    <button onClick={() => mentu(1)}>１索</button>
                    <button onClick={() => mentu(2)}>２索</button>
                    <button onClick={() => mentu(3)}>３索</button>
                    <button onClick={() => mentu(4)}>４索</button>
                    <button onClick={() => mentu(5)}>５索</button>
                    <button onClick={() => mentu(6)}>６索</button>
                    <button onClick={() => mentu(7)}>７索</button>
                    <button onClick={() => mentu(8)}>８索</button>
                    <button onClick={() => mentu(9)}>９索</button>
                </div>
                <br />
                <div className="zihai">
                    <div className="kaze">
                        <button onClick={() => mentu("東")}>東</button>
                        <button onClick={() => mentu("南")}>南</button>
                        <button onClick={() => mentu("西")}>西</button>
                        <button onClick={() => mentu("北")}>北</button>
                    </div>
                    <div className="sangenn">
                        <button className="haku" onClick={() => mentu("白")}>白</button>
                        <button className="hatu" onClick={() => mentu("發")}>發</button>
                        <button className="chun" onClick={() => mentu("中")}>中</button>
                    </div>
                </div>
            </div>
        </div>
    )

}