import React from "react";
import { Koron } from "./koron"
import { Kotumo } from "./kotumo"
import { Oyaron } from "./oyaron"
import { Oyatumo } from "./oyatumo"

export const GetPoint = () => {

    return(
        <main className="home">
            <h1 className="title">麻雀点数計算</h1>
            <div className="calc-component">
                <Koron />
                <Kotumo />
                <Oyaron />
                <Oyatumo />
            </div>
        </main>
    )
}