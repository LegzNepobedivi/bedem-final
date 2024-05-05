import React from "react";
import Image from "next/image";

import { poppins } from "@/app/layout";
import Apartmani from "./Apartmani";

function Objekat() {
  return (
    <>
      <div className="bg-stone-900 container mx-auto py-3">
        <h1 className="text-2xl md:text-3xl mb-2 md:mb-3"> Objekat 1</h1>
        <div className="relative h-56 md:h-80">
          <Image src="/images/slika2.jpg" fill style={{ objectFit: "cover" }} />
        </div>
        <p className={`${poppins.className} uppercase`}>Prizemlje</p>
      </div>
      <div className="container mx-auto py-3">
        <div className="ivanZelena">
          <div className="container mx-auto">
            <Apartmani />
          </div>
        </div>
      </div>
    </>
  );
}

export default Objekat;
