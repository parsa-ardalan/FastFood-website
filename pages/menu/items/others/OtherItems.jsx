import Item from "./Item"

import falafel from "../../../../images/others-images/falafel.webp"
import chickenLiver from "../../../../images/others-images/chicken-liver.jpeg"
import sheepLiver from "../../../../images/others-images/sheap-liver.jpg"
import turkishKabab from "../../../../images/others-images/turkey-kabab.jpg"

export default function OtherItems() {

    const sandwichData = [

        {
            id: 1,
            prductName: "falafel",
            ProductImage: falafel,
            prise: 4,
            type: "sandwich"
        },

        {
            id: 2,
            prductName: "chicken liver",
            ProductImage: chickenLiver,
            prise: 7,
            type: "sandwich"
        },

        {
            id: 3,
            prductName: "sheep liver",
            ProductImage: sheepLiver,
            prise: 9.25,
            type: "sandwich"
        },

        {
            id: 4,
            prductName: "kabab turky",
            ProductImage: turkishKabab,
            prise: 6.5,
            type: "sandwich"
        }
    ]

    return (


        <div className="container mx-auto grid grid-cols-12 w-5/6 md:w-3/4 mt-20 scrol gap-x-5 gap-y-10 md:gap-x-10 md:gap-y-20 px-5 py-8">

            {sandwichData.map((item) => (

                <Item key={item?.id} name={item?.prductName} price={item?.prise} image={item?.ProductImage} />
            ))}
            
        </div>

    )
}