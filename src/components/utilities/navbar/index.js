import Link from "next/link";
import Inputsearch from "./Inputsearch";
import Page from "@/app/search/[keyword]/page";

const Navbar = () => {
  return (
    <header className="bg-color-accent">
      <div className="flex md:flex-row flex-col justify-between md:items-center p-4 gap2">
        <Link href="/" className="font-bold text-white text-2xl">
          NoiNimeList
        </Link>

        <Inputsearch />
      </div>
    </header>
  );
};
export default Navbar;
