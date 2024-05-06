import Link from "next/link";
import Pretraga from "./Pretraga";

import { poppins } from "@/app/layout";
import Izdvajamo from "./Izdvajamo";
import Predlozi from "./Predlozi";
import { TextParallaxContentWhole } from "../foreign/TextParallaxContent";

export default function Naslovna() {
  return (
    <div className="bg-white">
      <TextParallaxContentWhole />
      {/* <div className="bg-[url('/images/slika1.jpg')] text-center">
        <div className="p-10">
          <div className="text-center text-5xl">Sa nama ste bezbedni</div>
          <div
            className={`${poppins.className} grid grid-cols-2 justify-items-center uppercase mt-10`}
          >
            <div className="bg-yellow-500 py-1 px-2 border-[1px] border-yellow-500 hover:bg-inherit">
              <Link href="/nekretnine">Nekretnine</Link>
            </div>
            <div className="py-1 px-2 border-[1px] border-yellow-500 hover:bg-yellow-500">
              <Link href="/nas-tim">O nama</Link>
            </div>
          </div>
        </div>
      </div> */}
      <div className="container mx-auto">
        <div className="ivanZelena text-3xl font-medium pl-6 pt-6">
          Pronađite svoj dom
        </div>
        <Pretraga />
      </div>
      <Izdvajamo />
      <div className="container mx-auto py-3">
        <div className="container mx-auto">
          <Predlozi />
        </div>
      </div>
    </div>
  );
}
