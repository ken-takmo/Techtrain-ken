import React from "react";
export const Header = () => {
  return (
    <header>
      <h1>麻雀点数計算アプリ</h1>
      <nav className="to-getpoint">
        <a href="/getpoint">点数計算</a>
      </nav>
      <nav>
        <a href="/">HOME</a>
      </nav>
      <nav>
        <a href="/ex">譜面入力</a>
      </nav>
    </header>
  );
};
