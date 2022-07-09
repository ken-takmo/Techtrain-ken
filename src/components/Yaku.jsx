import React from "react";
import { Yaku1 } from "./Yaku1";
import { Yaku2 } from "./Yaku2";
import { Yaku3 } from "./Yaku3";
import { Yaku6 } from "./Yaku6";
import { Yakuman } from "./Yakuman";
export const Yaku = () => {
  return (
    <main className="yaku">
      <h1>役一覧</h1>
      <Yaku1 />
      <Yaku2 />
      <Yaku3 />
      <Yaku6 />
      <Yakuman />
    </main>
  );
};
