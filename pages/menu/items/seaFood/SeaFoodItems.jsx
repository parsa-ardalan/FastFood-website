
// images

import kaviar from "../../../../images/seafood-images/kaviar.jpg"
import lobster from "../../../../images/seafood-images/lobster.jpg"
import mussels from "../../../../images/seafood-images/mussels.jpg"
import shrimp from "../../../../images/seafood-images/shrimp.jpg"
import sushi from "../../../../images/seafood-images/sushi.webp"
import Item from "./Item"

export default function SeaFoodItems() {

    const seaFoodData = [
        {
            id: 1,
            prductName: "kaviar",
            ProductImage: kaviar,
            prise: 75000,
            type: "seaFood"
        },

        {
            id: 2,
            prductName: "lobster",
            ProductImage: lobster,
            prise: 75000,
            type: "seaFood"
        },

        {
            id: 3,
            prductName: "mussels",
            ProductImage: mussels,
            prise: 75000,
            type: "seaFood"
        },

        {
            id: 4,
            prductName: "shrimp",
            ProductImage: shrimp,
            prise: 75000,
            type: "seaFood"
        },

        {
            id: 5,
            prductName: "sushi",
            ProductImage: sushi,
            prise: 83000,
            type: "seaFood"
        }
    ]

    return (

        <div className="w-screen h-screen px-5 py-10 md:px-32 md:py-40">

            <div className="grid grid-cols-10 w-full h-auto md:gap-x-5 gap-y-6 px-10">

                {
                    seaFoodData.map((item) => (

                        <Item key={item?.id} name={item?.prductName} image={item?.ProductImage} price={item?.prise} category={item?.type} />
                    ))
                }

            </div>

        </div>
    )
}