import { poppins } from "@/app/layout";
import DropdownButton from "./DropdownButton";
import InputSearch from "./InputSearch";
import SearchLogo from "../svgComp/SearchSvg";

export default function Pretraga({}) {
  return (
    <div className="bg-white ">
      <div className="p-6 flex flex-col gap-2 border-solid border-green-600 ivanZelena focus:border-0">
        <form className="">
          <InputSearch />
          <div className="py-3 gap-2 flex flex-row flex-wrap">
            <DropdownButton
              classes={
                " border-solid border-1 border-green-800 md:mr-3 mr-1 flex-col hover:bg-green-900 hover:text-white"
              }
              items={["Kupujem", "Zakupljujem"]}
              title={"Kupujem / Zakupljujem"}
            />

            <DropdownButton
              classes={
                "border-solid border-1 border-green-800 md:mr-3 mr-1 flex-col hover:bg-green-900 hover:text-white"
              }
              items={["Stan", "Kuća", "Poslovni prostor", "Zemljište"]}
              title={"Tip nekretnine"}
            />
            <button
              className={`${poppins.className} border-solid border-1 border-green-800 flex-col hover:bg-green-900 hover:text-white uppercase inline-flex justify-center gap-x-1.5 rounded-sm px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-green-800`}
            >
              Traži
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
