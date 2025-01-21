import React from "react";

function Header() {
  return (
    <>
      <h2 className="text-center text-lg font-bold text-white uppercase tracking-wider animate-pulse">
        TradingView Bot
      </h2>
      <p className="mx-auto mt-4 max-w-lg text-center text-3xl font-extrabold text-white drop-shadow-lg sm:text-4xl">
        PrimeX<span className="text-black"> -- </span>Algo
      </p>
      <div className="mt-3 flex justify-center">
        <div className="h-1 w-28 bg-black rounded-full animate-bounce"></div>
      </div>
    </>
  );
}

export default Header;
