import React, { useState } from "react";
export const Kotumo = () => {


    const han1 = {20:"役なし", 25:"役なし", 30:"300,500", 40:"400,700", 50:"400,800", 60:"500,1000", 70:"600,1200", 80:"700,1300", 90:"800,1500", 100:"800,1600", 110:"900,1800"};
    const han2 = {20:"400,700", 25:"役なし", 30:"500,1000", 40:"700,1300", 50:"800,1600", 60:"1000,2000", 70:"1200,2300", 80:"1300,2600", 90:"1500,2900", 100:"1600,3200", 110:"1800,3600"};
    const han3 = {20:"700,1300", 25:"800,1600", 30:"1000,2000", 40:"1300,2600", 50:"1600,3200", 60:"2000,3900", 70:"2000,4000", 80:"2000,4000", 90:"2000,4000", 100:"2000,4000", 110:"2000,4000"};
    const han45 = {20:"1300,2600", 25:"1600,3200", 30:"2000,3900", 40:"2000,4000", 50:"2000,4000", 60:"2000,4000", 70:"2000,4000", 80:"2000,4000", 90:"2000,4000", 100:"2000,4000", 110:"2000,4000"};
    const han67 = "3000,6000";
    const han8910 = "4000,8000";
    const han1112 = "6000,12000";
    const max = "8000,16000";

    const [fu, setFu] = useState("20");
    const [han, setHan] = useState("1");

    const getpoint = () => {

            switch(String(han)){
                case "1":
                    const han1_result = Object.keys(han1).filter((i) => i === fu);
                    alert(han1[han1_result]);
                    break;
                case "2":
                    const han2_result = Object.keys(han2).filter((i) => i === fu);
                    alert(han2[han2_result]);
                    break;
                case "3":
                    const han3_result = Object.keys(han3).filter((i) => i === fu);
                    alert(han3[han3_result]);
                    break;
                case "4":
                case "5":
                    const han45_result = Object.keys(han45).filter((i) => i === fu);
                    alert(han45[han45_result]);
                    break;
                case "6":
                case "7":
                    alert(han67);
                    break;
                case "8":
                case "9":
                case "10":
                    alert(han8910);
                    break;
                case "11":
                case "12":
                    alert(han1112);
                    break;
                case "13":
                case "over":
                    alert(max);
                    break;
                default:
                    alert("残念、チョンボ")
                    break;
            }
            console.log(han);
            console.log(fu);
    }

    return(
        <div>
            <h2 className="child">子　ツモ</h2>
            <label htmlFor="point">飜数を選択</label>
            <select className="point" id="point" onChange={e => setHan(e.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="over">それ以上</option>
            </select>

            <label htmlFor="fuNum">符を選択</label>
            <select className="fuNum" id="fu" onChange={e => setFu(e.target.value)}>
                <option value="20">20</option>
                <option value="25">25</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
                <option value="60">60</option>
                <option value="70">70</option>
                <option value="80">80</option>
                <option value="90">90</option>
                <option value="100">100</option>
                <option value="110">110</option>
            </select>
            <button onClick={getpoint}>計算</button>
        </div>
    )
}