export default function FishItems() {

    const fishData = [
        {
            id: 1,
            prductName: "فیش اند چسپس",
            ProductImage: "../../../../images/fish-images/fish-and-chips.jpg",
            prise: 75000,
            type: "fish"
        },

        {
            id: 2,
            prductName: "ماهی کبابی",
            ProductImage: "../../../../images/fish-images/kabab-fish.jpg",
            prise: 75000,
            type: "fish"
        },

        {
            id: 3,
            prductName: "ناگت ماهی",
            ProductImage: "../../../../images/fish-images/naget-fish.png",
            prise: 75000,
            type: "fish"
        },

        {
            id: 4,
            prductName: "استیک ماهی",
            ProductImage: "../../../../images/fish-images/steik-mahi.jpg",
            prise: 75000,
            type: "fish"
        },
    ]

    return (

        <div className="container mx-auto grid grid-cols-12 w-5/6 mt-12 scroll gap-y-4">

            {fishData.map((item) => (

                <div className="border-white border-2 border-solid h-48 col-span-12 backdrop-blur-lg rounded-lg grid grid-cols-12 hover:backdrop-blur-none mock-container">

                    <div className="col-span-3 h-full border-r border-r-white border-r-solid">

                        <img src={item?.ProductImage} className="w-full h-full" />

                    </div>

                    <div className="col-span-6 h-full grid grid-cols-10">

                        <h1 className="text-white text-4xl col-span-10 mt-6 ml-4"> {item?.prductName} </h1>

                        <button className="col-span-5 mt-3 bg-orange-400 ml-4 font-bold rounded-md h-12"> add to cart </button>

                    </div>

                    <div className="col-span-3 h-full">

                    </div>

                </div>

            ))}

        </div>

    )
}