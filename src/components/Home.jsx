import React from "react";
export const Home = () => {
  return (
    <main>
      <h1>このアプリケーションでは麻雀の得点計算ができます</h1>
      <article>
        <h2>飜数と符の値がわかっている方はこちら</h2>
        <nav className="to-getpoint">
          <a href="/getpoint">点数計算</a>
        </nav>
        <h2>役一覧が見たい方はこちら</h2>
        <nav>
          <a href="/yaku">役一覧</a>
        </nav>
        <h2>譜面入力からの得点計算がしたい方はこちら</h2>
        <nav>
          <a href="/ex">譜面入力</a>
        </nav>
        <h2>得点計算表はこちら</h2>
      </article>
    </main>
  );
};
