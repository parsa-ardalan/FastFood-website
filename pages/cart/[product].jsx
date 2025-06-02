import Image from "next/image";
import { useRouter } from "next/router"

export default function Product(props) {

    const router = useRouter();

    let product = router.query.product;
    
    return (
        <div>

            <h1 className="text-4xl text-white mt-12 ml-20"> product is {product} </h1>
        </div>
    )
}