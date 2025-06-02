import Link from "next/link";
import Headeroptions from "./HeaderOptions";

export default function Header() {

    const HeadOptions = {

        home: "Home",
        menu: "menu",
        WebGuide: "Web guide",
        aboutUs: "about us",
        contactUs: "contact us"
    }

    const backHome = () => {

        location.reload()
    }

    const gotocart = () => {

        console.log("going to cart");

    }

    return (

        <header className="grid grid-cols-5 text-center h-20 mx-auto w-11/12" dir="ltr">

            <svg xmlns="http://www.w3.org/2000/svg"
             fill="none" viewBox="0 0 24 24" strokeWidth={1.5} 
             stroke="currentColor"
             className="text-white size-6 mt-5 md:hidden">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>


            <Headeroptions innerHTML={HeadOptions?.WebGuide} />
            <Headeroptions innerHTML={HeadOptions?.contactUs} />
            <Headeroptions innerHTML={HeadOptions?.home} />
            <Link href={"../../about/About"}>  <Headeroptions innerHTML={HeadOptions?.aboutUs} /> </Link>
            <Headeroptions innerHTML={HeadOptions?.menu} />

        </header>

    )

}