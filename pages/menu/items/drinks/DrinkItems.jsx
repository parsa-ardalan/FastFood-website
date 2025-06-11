import Item from "./Item"

import shampine from "../../../../images/drink-images/shampine.png"
import whisky from "../../../../images/drink-images/whisky.png"
import beer from "../../../../images/drink-images/beer.png"
import pepsi from "../../../../images/drink-images/pepsi.png"
import zerocola from "../../../../images/drink-images/zero-cola.png"
import fanta from "../../../../images/drink-images/fanta.png"

export default function DrinkItems() {

    const DrinkItems = [{

        id: 1,
        prductName: "shampine",
        ProductImage: shampine,
        prise: 75000,
        type: "drinks"
    },

    {
        id: 2,
        prductName: "whisky",
        ProductImage: whisky,
        prise: 75000,
        type: "drinks"
    },


    {
        id: 3,
        prductName: "beer",
        ProductImage: beer,
        prise: 75000,
        type: "drinks"
    },

    {
        id: 4,
        prductName: "zero cola",
        ProductImage: zerocola,
        prise: 83000,
        type: "drinks"
    },
    {
        id: 5,
        prductName: "pepsi",
        ProductImage: pepsi,
        prise: 83000,
        type: "drinks"
    },
    {
        id: 6,
        prductName: "fanta",
        ProductImage: fanta,
        prise: 83000,
        type: "drinks"
    },
    ]

    return (

        <div className="w-screen h-screen flex justify-center items-center">

            <div className="grid grid-cols-12 h-3/4 w-10/12 py-6 px-3 gap-y-5 gap-x-3 md:py-36 md:gap-x-6">

                {DrinkItems.map((item) => (

                    <Item key={item?.id} name={item?.prductName} price={item?.prise} image={item?.ProductImage} />

                ))}

            </div>

        </div>

    )
}