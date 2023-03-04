import React from "react";
import { Scroll } from "@react-three/drei";
type Props = {};

function HeroContents({}: Props) {
  return (
    <Scroll html>
      <div className="w-screen text-white text-center py-3 absolute top-[60vh]  ">
        <div className="max-w-3xl w-[95%] mx-auto">
          <h1 className=" text-5xl md:text-6xl font-bebas opacity-70">
            Dragon Farm <br />
            is comingmax-w-3xl
          </h1>
          <p className=" text-lg md:text-xl py-5 md:py-10 opacity-70  ">
            A new Dragon Tale is being written in the depths of Arbitrum
            Kingdom. Will you fight and be worthy of your dragon eggs ?
          </p>
        </div>
      </div>
    </Scroll>
  );
}

export default HeroContents;
