import Kartica from "@/components/bedem/Kartica";
import Pretraga from "@/components/bedem/Pretraga";
import Link from "next/link";
import { getAllStan } from "../_actions/glavneAkcije";

const sviStanovi = await getAllStan();

export default async function NekretninePage() {
  console.log(sviStanovi[0]);
  return (
    <>
      <div className="bg-white z-10">
        <div className="container mx-auto">
          <Pretraga />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 container mx-auto">
          <Kartica showLink="/nekretnine/1" sourceUrl="/images/slika1.jpg" />

          <Kartica hasVr="true" sourceUrl="/images/slika2.jpg" />
          <Kartica sourceUrl="/images/slika3.jpg" />
          <Kartica sourceUrl="/images/slika1.jpg" />
          <Kartica sourceUrl="/images/slika2.jpg" />
          <Kartica sourceUrl="/images/slika3.jpg" />

          {sviStanovi.map((stan) => {
            console.log(stan);
            return (
              <div key={stan.id + stan.title}>
                <Kartica
                  sourceUrl="/images/slika3.jpg"
                  title={stan.title}
                  price={stan.price}
                  hasVr={false}
                  isNovo={false}
                  numberOfRooms={stan.numberOfRooms}
                  size={stan.size}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div></div>
    </>
  );
}
