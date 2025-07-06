import Image from "next/image";
import Link from "next/link";

export default function Item(props) {

    return (

        <Link href={props?.address} className="col-span-1">

            <Image src={props?.image} width={120} height={120} className="w-full h-full rounded-lg" alt="icon" />

        </Link>
    )
}