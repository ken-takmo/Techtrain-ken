import React from "react";
import { Koron } from "./Koron";
import { Kotumo } from "./Kotumo";
import { Oyaron } from "./Oyaron";
import { Oyatumo } from "./Oyatumo";

export const GetPoint = () => {
  return (
    <main className="home">
      <h1 className="title">麻雀点数計算</h1>
      <div className="calc-component">
        <Koron />
        <Kotumo />
        <Oyaron />
        <Oyatumo />
      </div>
    </main>
  );
};
