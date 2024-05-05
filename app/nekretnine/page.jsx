import Kartica from "@/components/bedem/Kartica";
import Pretraga from "@/components/bedem/Pretraga";
import Link from "next/link";

export default function NekretninePage() {
  return (
    <>
      <div className="bg-white z-10">
        <div className="container mx-auto">
          <Pretraga />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 container mx-auto">
          <Link href="/nekretnine/1">
            <Kartica sourceUrl="/images/slika1.jpg" />
          </Link>
          <Kartica sourceUrl="/images/slika2.jpg" />
          <Kartica sourceUrl="/images/slika3.jpg" />
          <Kartica sourceUrl="/images/slika1.jpg" />
          <Kartica sourceUrl="/images/slika2.jpg" />
          <Kartica sourceUrl="/images/slika3.jpg" />
        </div>
      </div>
      <div></div>
    </>
  );
}
