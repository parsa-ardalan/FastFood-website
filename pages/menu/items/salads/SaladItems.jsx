import Item from "./Item"

import greekSalad from "../../../../images/salad-images/greek-salad.jpg"
import Indonasian from "../../../../images/salad-images/Indonasian-salad.jpg.webp"
import olovie from "../../../../images/salad-images/olovieh-salad.jpg"
import saladFasl from "../../../../images/salad-images/salad-fasl.jpg"
import makaroniSalad from "../../../../images/salad-images/salad-makaroni-min.webp"

export default function SaladItems() {

    const saladData = [
        {
            id: 1,
            prductName: "Greek salad",
            ProductImage: greekSalad,
            prise: 75000,
            type: "salad"
        },

        {
            id: 2,
            prductName: "Indonasian salad",
            ProductImage: Indonasian,
            prise: 75000,
            type: "salad"
        },

        {
            id: 3,
            prductName: "Olovie salad",
            ProductImage: olovie,
            prise: 75000,
            type: "salad"
        },

        {
            id: 4,
            prductName: "fasl salad",
            ProductImage: saladFasl,
            prise: 75000,
            type: "salad"
        },

        {
            id: 5,
            prductName: "makaroni salad",
            ProductImage: makaroniSalad,
            prise: 83000,
            type: "salad"
        }
    ]

    return (

        <div className="h-screen w-screen flex items-center justify-center">

            <div className="h-4/5 w-5/6 border border-white mx-auto overflow-y-hidden grid grid-cols-6 py-24 px-8 gap-8 md:gap-12 md:px-56 md:py-22">

                {saladData.map((item) => (

                    <Item key={item?.id} name={item?.prductName} image={item?.ProductImage} price={item?.price} category={item?.type} />

                ))}

            </div>

        </div>

    )
}