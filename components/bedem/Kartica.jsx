import Image from "next/image";

import AgentSvg from "../svgComp/AgentSvg";
import PhoneSvg from "../svgComp/PhoneSvg";

export default function Kartica({
  sourceUrl,
  title = "Naslov",
  price = "$1,900,000",
  size = "150",
  numberOfRooms = "4 sobe",
  hasVr = false,
  isNovo = false,
}) {
  return (
    <div className="md:rounded-lg shadow-lg overflow-hidden">
      <div>
        <div className="flex items-start uppercase text-sm">
          {isNovo && hasVr && (
            <>
              <div className="bgIvanZelena py-1 px-2 rounded-tr-lg">Novo</div>
              <div className="bgIvanZelena py-1 px-2 rounded-t-lg">VR Tura</div>
            </>
          )}
          {isNovo && !hasVr && (
            <div className="bgIvanZelena py-1 px-2 rounded-tr-lg">Novo</div>
          )}
          {!isNovo && hasVr && (
            <div className="bgIvanZelena py-1 px-2 rounded-tr-lg">VR Tura</div>
          )}
          {!isNovo && !hasVr && (
            <div className="bg-white py-1 px-2 rounded-t-lg">'</div>
          )}
        </div>
        <div className="relative grid grid-cols-1">
          <div className="relative h-80">
            <Image
              src={sourceUrl}
              alt="Picture of real estate"
              fill
              style={{ objectFit: "cover" }}
              //sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
        <div className="pt-2 px-2">
          <div className="text-xl ivanZelena font-medium " aria-hidden="true">
            {title}
          </div>
        </div>
        <div className="pt-1 px-2">
          <div className="text-lg text-black font-bold">$1,900,000</div>
        </div>
        <div className="pt-1 px-2">
          <div className="text-base text-stone-400">
            {numberOfRooms} sob
            {numberOfRooms >= 2 && numberOfRooms <= 4 ? "e" : "a"}-{size}m2
          </div>
        </div>
        <div className="p-2 flex ">
          <div className=" w-14 ivanZelena">
            <AgentSvg />
          </div>
          <div className="px-2">
            <div className="text-base ivanZelena font-semibold">
              Agent: Marko +381 69 123 4567
            </div>
            <div className="flex ivanZelena border-2 border-green-950 w-fit ">
              <PhoneSvg />
              <div className="bg-green-950 uppercase text-white text-sm py-1 px-2 hover:bg-green-900">
                Pozovi
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-400"></hr>
    </div>
  );
}
