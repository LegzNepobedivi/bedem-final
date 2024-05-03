import LeftArrowSvg from "@/components/svgComp/LeftArrowSvg";
import PhoneSvg from "@/components/svgComp/PhoneSvg";
import AgentSvg from "@/components/svgComp/AgentSvg";

import Image from "next/image";

import { poppins } from "@/app/layout";
import { SwipeCarousel } from "@/components/foreign/SwipeCarousel";

export default function PrikazNekretnine() {
  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <div className={`${poppins.className} bg-white text-slate-600 `}>
          <button className="flex uppercase border-2 borderIvanZelenaSvetla py-1 px-2">
            <span>
              <LeftArrowSvg />
            </span>{" "}
            Nazad
          </button>
        </div>
        <div className="py-2 px-4">
          <div className="ivanZelena text-2xl font-semibold mb-3">
            Šumatovačka 116, Vračar, Beograd
          </div>
          <div className="grid grid-cols-4 md:grid-cols-6 xl:grid-cols-8 gap-0 mx-auto font-medium">
            <div className="">
              <div
                className={`${poppins.className} ivanZlatna uppercase text-sm`}
              >
                Cena
              </div>
              <div className="text-black">€ 450.000</div>
            </div>
            <div className="">
              <div
                className={`${poppins.className} ivanZlatna uppercase text-sm`}
              >
                Površina
              </div>
              <div className="text-black">150 m2</div>
            </div>
            <div className="">
              <div
                className={`${poppins.className} ivanZlatna uppercase text-sm`}
              >
                Struktura
              </div>
              <div className="text-black">Četvorosoban</div>
            </div>
            <div className="">
              <div
                className={`${poppins.className} ivanZlatna uppercase text-sm`}
              >
                Kupatilo
              </div>
              <div className="text-black">1 celo</div>
            </div>
          </div>
        </div>
        <div className="p-2 flex">
          <div className=" w-14 ivanZelena">
            <AgentSvg />
          </div>
          <div className="px-2">
            <div className="text-base ivanZelena font-semibold">
              Agent: Marko +381 69 123 4567
            </div>
            <div className="flex ivanZelena border-2 border-green-950 w-fit">
              <PhoneSvg />
              <button className="bg-green-950 uppercase text-white text-sm py-1 px-2">
                Pozovi
              </button>
            </div>
          </div>
        </div>
        <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-400"></hr>
        {/* <div className="relative grid grid-cols-1 p-2">
          <div className="relative h-80">
            <Image
              src="/images/slika1.jpg"
              alt="Picture of real estate"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div> */}
        <SwipeCarousel />
        {/*Sledeca sekcija*/}
        <div className="p-2 ivanZelena text-center ">
          <h1 className="text-3xl">Karakteristike</h1>
          <div className="grid grid-cols-3 gap-0 mx-auto font-medium py-3">
            <div className="">
              <div
                className={`${poppins.className} ivanZlatna uppercase text-sm`}
              >
                Id nekretnine
              </div>
              <div className="text-black">123456</div>
            </div>
            <div className="">
              <div
                className={`${poppins.className} ivanZlatna uppercase text-sm`}
              >
                Godina izgradnje
              </div>
              <div className="text-black">2023</div>
            </div>
            <div className="">
              <div
                className={`${poppins.className} ivanZlatna uppercase text-sm`}
              >
                Sadržaj
              </div>
              <div className="text-black">Veš-mašina</div>
            </div>
          </div>
        </div>
        {/*Sledeca sekcija*/}
        <div className="bgIvanZelenaSvetla py-3">
          <div className="container mx-auto px-4">
            <p className="text-center text-4xl">O lokaciji</p>
            <div className="border-t border-gray-600 my-4"></div>
            <p className="text-center ivanSiva font-thin">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae s
              voluptatum, quas, quos quod, quibusdam autem doloremque voluptates
              tempora quia quidem aperiam. Quisquam, quidem. Quisquam, quidem.
            </p>
          </div>
        </div>
        <iframe
          width="600"
          height="450"
          //style="border:0"
          loading="lazy"
          //allowfullscreen
          //referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed/v1/place?key=API_KEY
    &q=Space+Needle,Seattle+WA"
        ></iframe>
      </div>
    </div>
  );
}
