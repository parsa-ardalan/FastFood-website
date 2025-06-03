import Item from "./Item"

export default function DrinkItems() {

    const DrinkItems = [{
        id: 1,
        prductName: "نوشابه کوکاکولا",
        ProductImage: "../../../../images/drink-images/coca-cola.JPG",
        prise: 75000,
        type: "drinks"
    },

    {
        id: 2,
        prductName: "نوشابه فانتا",
        ProductImage: "../../../../images/drink-images/fanta.JPG",
        prise: 75000,
        type: "drinks"
    },


    {
        id: 3,
        prductName: "نوشابه پپسی",
        ProductImage: "../../../../images/drink-images/pepsi.JPG",
        prise: 75000,
        type: "drinks"
    },

    {
        id: 4,
        prductName: "نوشابه زیروکولا",
        ProductImage: "../../../../images/drink-images/zero-cola.JPG",
        prise: 83000,
        type: "drinks"
    },
    ]

    return (

        <div className="container mx-auto grid grid-cols-12 w-5/6 mt-12 scroll gap-x-5 py-32 px-10 border">

            {DrinkItems.map((item) => (
                <Item key={item?.id}/>
            ))}

        </div>

    )
}