import Item from "./Item";

import pizza from "../../../public/images/icons/pizza.png"
import burger from "../../../public/images/icons/burger.png"
import seaFood from "../../../public/images/icons/seaFood.png"
import dessert from "../../../public/images/icons/dessert.png"
import fish from "../../../public/images/icons/fish.png"
import others from "../../../public/images/icons/others.png"
import drinks from "../../../public/images/icons/drinks.png"
import salad from "../../../public/images/icons/salad.png"


export default function MenuPage() {

    const items = [

        {
            id: 1,
            name: "pizza",
            menuAddress: "../items/pizza/PizzaItems",
            imageAddress: pizza
        },
        {
            id: 2,
            name: "burger",
            menuAddress: "../items/burger/BurgerItems",
            imageAddress: burger
        },
        {
            id: 3,
            name: "seaFood",
            menuAddress: "../items/seaFood/SeaFoodItems",
            imageAddress: seaFood
        },
        {
            id: 4,
            name: "dessert",
            menuAddress: "../items/deserts/DesertItems",
            imageAddress: dessert
        },
        {
            id: 5,
            name: "fish",
            menuAddress: "../items/fish/FishItems",
            imageAddress: fish
        },
        {
            id: 6,
            name: "others",
            menuAddress: "../items/others/OtherItems",
            imageAddress: others
        },
        {
            id: 7,
            name: "drinks",
            menuAddress: "../items/drinks/DrinkItems",
            imageAddress: drinks
        },
        {
            id: 8,
            name: "salad",
            menuAddress: "../items/salads/SaladItems",
            imageAddress: salad
        },
    ]

    return (

        <div className="w-5/6 auto mx-auto border border-white mt-4 md:mt-14 rounded-lg backdrop-blur-md backdrop-brightness-50 grid grid-cols-8 py-10 px-4 gap-y-12">

            {

                items.map((item) => (

                    <Item key={item?.id} name={item?.name} link={item?.menuAddress} image={item?.imageAddress} alt={item?.name} />
                ))
            }

        </div>

    )
}   