import React, { useState } from "react";
export const Koron = () => {
    const han1 = {20:"役なし", 25:"役なし", 30:1000, 40:1300, 50:1600, 60:2000, 70:2300, 80:2600, 90:2900, 100:3200, 110:3600};
    const han2 = {20:"役なし", 25:1600, 30:2000, 40:2600, 50:3200, 60:3900, 70:4500, 80:5200, 90:5800, 100:6400, 110:7100};
    const han3 = {20:"役なし", 25:3200, 30:3900, 40:5200, 50:6400, 60:7700, 70: 8000, 80:8000, 90:8000, 100:8000, 110:8000};
    const han45 = {20:"役なし", 25:6400, 30:7700, 40:8000, 50:8000, 60:8000, 70:8000, 80:8000, 90:8000, 100:8000, 110:8000};
    const han67 = 12000;
    const han8910 = 16000;
    const han1112 = 24000;
    const max = 32000;

    const [fu, setFu] = useState("20");
    const [han, setHan] = useState("1");

    const getpoint = () => {

            switch(han){
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
    }

    return(
        <div>
            <h2 className="child">子　ロン</h2>
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