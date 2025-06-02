import Item from "./Item";

// images

import chicken from "../../../../images/burger-images/chicken-burger.png"
import royale from "../../../../images/burger-images/royale-burger.png"
import double from "../../../../images/burger-images/double-burger.png"
import Italian from "../../../../images/burger-images/italian-burger.png"
import mashroom from "../../../../images/burger-images/mashroom-burger.png"
import coal from "../../../../images/burger-images/coalburger.png"
import Turkish from "../../../../images/burger-images/turkey-burger.png"
import vegan from "../../../../images/burger-images/vegan-burger.png"


export default function BurgerItems() {
    
    
    const BurgerData = [{
        id: 1,
        productName: "chicken burger",
        ProductImage: chicken,
        price: 75000,
        type: "burger"
    },
    
    {
        id: 6,
        productName: "royale burger",
        ProductImage: royale,
        price: 83000,
        type: "burger"

    },
    {
        id: 3,
        productName: "double burger",
        ProductImage: double,
        price: 75000,
        type: "burger"
    },
    
    {
        id: 4,
        productName: "Italian burger",
        ProductImage: Italian,
        price: 75000,
        type: "burger"
    },
    {
        id: 5,
        productName: "mashroom burger",
        ProductImage: mashroom,
        price: 83000,
        type: "burger"
    },

    {
        id: 2,
        productName: "coal burger",
        ProductImage: coal,
        price: 75000,
        type: "burger"
    },
    {
        id: 7,
        productName: "turkish burger",
        ProductImage: Turkish,
        price: 83000,
        type: "burger"
    },
    {
        id: 8,
        productName: "vegan burger",
        ProductImage: vegan,
        price: 83000,
        type: "burger"
    }

    ]

    return (

        <div className="container mx-auto grid grid-cols-12 w-5/6 md:w-3/4 mt-20 scrol gap-x-5 gap-y-10 md:gap-x-10 md:gap-y-20 px-5 py-8">

            {BurgerData.map((item) => (

                <Item key={item?.id} name={item?.productName} image={item?.ProductImage} price={item?.price} category={item?.type} />
            ))}

        </div>

    )
}