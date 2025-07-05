import Link from "next/link";

export default function HeaderOptions(props) {

    return (

        <Link href={props?.link} className="hidden md:flex md:items-center md:justify-center md:col-span-1">

            <h1 className="md:text-lg select-none duration-300 hover:text-amber-400">
                {props?.innerHTML}
            </h1>

        </Link>
    );
}
