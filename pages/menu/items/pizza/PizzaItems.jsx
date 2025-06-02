import Item from "./Item"

import chicken from "../../../../images/pizza-images/chicken-pizza.jpg"
import pepperoni from "../../../../images/pizza-images/pepperoni-pizza.jpg"
import steak from "../../../../images/pizza-images/steak-pizza.jpg"
import napoli from "../../../../images/pizza-images/napoliten-pizza.jpg"
import mixed from "../../../../images/pizza-images/mixed-pizza.jpg"
import margaita from "../../../../images/pizza-images/margaita-pizza.jpg"

export default function PizzaItems() {

    const PizzaData = [{
        id: 1,
        prductName: "chicken pizza",
        about: "here it is. your circle chicken",
        ProductImage: chicken,
        prise: 75000,
        type: "pizza"
    },

    {
        id: 2,
        prductName: "pepperoni pizza",
        about: "common and popular",
        ProductImage: pepperoni,
        prise: 75000,
        type: "pizza"
    },

    {
        id: 3,
        prductName: "steak pizza",
        about: "meat, slice of a meat!",
        ProductImage: steak,
        prise: 75000,
        type: "pizza"
    },

    {
        id: 4,
        prductName: "napoli pizza",
        about: " not usual but crucial!",
        ProductImage: napoli,
        prise: 75000,
        type: "pizza"
    },

    // {
    //     id: 5,
    //     prductName: "پیتزا سیسیلی",
    //     ProductImage: "../../../../images/pizza-images/sisili-pizza.jpg",
    //     prise: 83000,
    //     type: "pizza"
    // },
    {
        id: 6,
        prductName: "mixed pizza",
        about: "delicious, crispy and royal!",
        ProductImage: mixed,
        prise: 83000,
        type: "pizza"
    },
    {
        id: 7,
        prductName: "margarita pizza",
        ProductImage: margaita,
        about: "as yummy as the name!",
        prise: 83000,
        type: "pizza"
    }

    ]

    return (

        <div className="container w-5/6 mx-auto grid grid-cols-6 py-10 md:mt-12 scroll md:gap-x-16 gap-y-4 md:gap-y-8 md:px-32">

            {PizzaData.map((item) => (

                <Item  key={item?.id} name={item?.prductName} image={item?.ProductImage} prise={item?.prise} about={item?.about} id={item?.id}/>

            ))}

        </div>

    )
}