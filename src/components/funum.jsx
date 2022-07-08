import React from "react";
import { useEffect, useState } from "react";

export const Funum = () => {
    
    const [yaku,setYaku] = useState({"役":"役なし","点数":0});

    let p = [0,0,0,0,0,0,0,0,0,];
    let m = [0,0,0,0,0,0,0,0,0,];
    let s = [0,0,0,0,0,0,0,0,0,];
    let z = [0,0,0,0,0,0,0];

    
    function Hand(x,a,b){
        x[a] += 1;
        const haifu = document.getElementById("haifu");
        haifu.insertAdjacentText('beforeend',`${b}`);
    }
    
    const kokusi = {
        m:[1,0,0,0,0,0,0,0,1],
        p:[1,0,0,0,0,0,0,0,1],
        s:[1,0,0,0,0,0,0,0,1],
        z:[1,1,1,1,1,1,2]
        };
    
    function agari(){
        const result = {m,p,s,z,}
        console.log(result);
        if(JSON.stringify(result) === JSON.stringify(kokusi)){
            setYaku({"役":"国士無双", "点数":32000});
        }
    }
    
    useEffect(() => { 
        alert(Object.values(yaku));
    },[yaku]);
    
    return(
        <div>
            <h1 id="haifu">牌符：</h1>
            <div className="manzu">
                <button onClick={() => Hand(m,0,1)}>１萬</button>
                <button onClick={() => Hand(m,1,2)}>２萬</button>
                <button onClick={() => Hand(m,2,3)}>３萬</button>
                <button onClick={() => Hand(m,3,4)}>４萬</button>
                <button onClick={() => Hand(m,4,5)}>５萬</button>
                <button onClick={() => Hand(m,5,6)}>６萬</button>
                <button onClick={() => Hand(m,6,7)}>７萬</button>
                <button onClick={() => Hand(m,7,8)}>８萬</button>
                <button onClick={() => Hand(m,8,9)}>９萬</button>
            </div>
            <br />
            <div className="pinzu">
                <button onClick={() => Hand(p,0,1)}>１筒</button>
                <button onClick={() => Hand(p,1,2)}>２筒</button>
                <button onClick={() => Hand(p,2,3)}>３筒</button>
                <button onClick={() => Hand(p,3,4)}>４筒</button>
                <button onClick={() => Hand(p,4,5)}>５筒</button>
                <button onClick={() => Hand(p,5,6)}>６筒</button>
                <button onClick={() => Hand(p,6,7)}>７筒</button>
                <button onClick={() => Hand(p,7,8)}>８筒</button>
                <button onClick={() => Hand(p,8,9)}>９筒</button>
            </div>
            <br />
            <div className="souzu">
                <button onClick={() => Hand(s,0,1)}>１索</button>
                <button onClick={() => Hand(s,1,2)}>２索</button>
                <button onClick={() => Hand(s,2,3)}>３索</button>
                <button onClick={() => Hand(s,3,4)}>４索</button>
                <button onClick={() => Hand(s,4,5)}>５索</button>
                <button onClick={() => Hand(s,5,6)}>６索</button>
                <button onClick={() => Hand(s,6,7)}>７索</button>
                <button onClick={() => Hand(s,7,8)}>８索</button>
                <button onClick={() => Hand(s,8,9)}>９索</button>
            </div>
            <br />
            <div className="zihai">
                <div className="kaze">
                    <button onClick={() => Hand(z,0,"東")}>東</button>
                    <button onClick={() => Hand(z,1,"南")}>南</button>
                    <button onClick={() => Hand(z,2,"西")}>西</button>
                    <button onClick={() => Hand(z,3,"北")}>北</button>
                </div>
                <button onClick={() => Hand(z,4,"白")} className="haku">白</button>
                <button onClick={() => Hand(z,5,"發")} className="hatu">發</button>
                <button onClick={() => Hand(z,6,"中")} className="chun">中</button>
            </div>
            <br />
            <button onClick={agari}>上がり！！</button>
        </div>
    )
}