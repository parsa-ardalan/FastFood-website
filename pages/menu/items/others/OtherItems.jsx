export default function OtherItems() {

    const saladData = [
        {
            id: 1,
            prductName: "سالاد یونانی",
            ProductImage: "../../../../images/salad-images/greek-salad.jpg",
            prise: 75000,
            type: "salad"
        },

        {
            id: 2,
            prductName: "سالاد اندونزی",
            ProductImage: "../../../../images/salad-images/Indonasian-salad.jpg.webp",
            prise: 75000,
            type: "salad"
        },

        {
            id: 3,
            prductName: "سالاد الویه",
            ProductImage: "../../../../images/salad-images/olovieh-salad.jpg",
            prise: 75000,
            type: "salad"
        },

        {
            id: 4,
            prductName: "سالاد فصل",
            ProductImage: "../../../../images/salad-images/salad-fasl.jpg",
            prise: 75000,
            type: "salad"
        },

        {
            id: 5,
            prductName: "سالاد ماکارونی",
            ProductImage: "../../../../images/salad-images/salad-makaroni-min.webp",
            prise: 83000,
            type: "salad"
        }
    ]

    return (

        <div className="container mx-auto grid grid-cols-12 w-5/6 mt-12 scroll gap-y-4">

            {saladData.map((item) => (

                <div className="border-white border-2 border-solid h-48 col-span-12 backdrop-blur-lg rounded-lg grid grid-cols-12 hover:backdrop-blur-none mock-container">

                    <div className="col-span-3 h-full border-r border-r-white border-r-solid">

                        <img src={item?.ProductImage} className="w-full h-full" />

                    </div>

                    <div className="col-span-6 h-full grid grid-cols-10">

                        <h1 className="text-white text-4xl col-span-10 mt-6 ml-4"> {item?.prductName} </h1>

                        <button className="col-span-5 mt-3 bg-orange-400 ml-4 rounded-md h-12"> </button>

                    </div>

                    <div className="col-span-3 h-full">

                    </div>

                </div>

            ))}

        </div>

    )
}