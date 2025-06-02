import Item from "./Item"

import jelly from "../../../../images/desert-images/jelly.jpg"
import mouchi from "../../../../images/desert-images/mouchi.webp"
import applePie from "../../../../images/desert-images/paie-sib.jpg"
import stroopwafel from "../../../../images/desert-images/vafel-stroup.jpg"
import wafel from "../../../../images/desert-images/vafel.jpg"
import glato from "../../../../images/desert-images/Gelato-Ice-cream.jpg"

export default function DesertItems() {

    const desertData = [
        {
            id: 1,
            prductName: "fruit jelly",
            ProductImage: jelly,
            price: 3,
            type: "desert"
        },

        {
            id: 2,
            prductName: "mouchi",
            ProductImage: mouchi,
            price: 5,
            type: "desert"
        },

        {
            id: 3,
            prductName: "apple pie",
            ProductImage: applePie,
            price: 7.5,
            type: "desert"
        },

        {
            id: 4,
            prductName: "stroopwafel",
            ProductImage: stroopwafel,
            price: 4,
            type: "desert"
        },

        {
            id: 5,
            prductName: "Italian wafel",
            ProductImage: wafel,
            price: 5,
            type: "desert"
        },
        {
            id: 6,
            prductName: "ice cream",
            ProductImage: glato,
            price: 9.5,
            type: "desert"
        },
    ]

    return (

        <div className="h-screen w-screen flex items-center justify-center">

            <div className="h-4/5 w-5/6 border border-white mx-auto overflow-y-hidden grid grid-cols-6 py-24 px-8 gap-8 md:gap-12 md:px-56 md:py-22">

                {desertData.map((item) => (

                    <Item key={item?.id} name={item?.prductName} image={item?.ProductImage} price={item?.price} category={item?.type} />

                ))}

            </div>

        </div>
    )
}