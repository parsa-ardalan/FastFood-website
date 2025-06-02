import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Header from "./components/header/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {

  return (

    <div  >

      <Header />

      <h1 className="text-2xl mt-28 ml-6 text-white font-bold md:text-4xl md:ml-44 md:mt-36"> happy meal, happy deal! </h1>

      <p className="mt-5 ml-8 text-white text-sm md:ml-44 md:text-2xl md:mt-10"> click on <span className="font-bold text-amber-400"> order </span> button
        right now and get a meal. <br /> look at our new bargains :)
      </p>

      <div className="flex flex-row w-full h-12 mt-7 md:mt-10 gap-x-4">

        <button className="w-14 ml-10 border border-amber-400 text-amber-400 h-7 text-xs rounded-sm md:rounded-md md:ml-44 md:text-xl md:w-36 md:h-10" id="order"> <Link href={"./order/Order"}>  order  </Link> </button>
        <button className="w-14 md:w-36 border h-7 text-xs border-amber-400 rounded-sm md:rounded-md text-amber-400 md:text-xl md:h-10" id="menue"><Link href={"./menu/main/MainMenu"}>  menu  </Link> </button>

      </div>
    </div>
  );
}
