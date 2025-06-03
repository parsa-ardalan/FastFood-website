import Item from "./Item"

import fishAndChips from "../../../../images/fish-images/fish-and-chips.jpg"
import grilledFish from "../../../../images/fish-images/kabab-fish.jpg"
import naggetFish from "../../../../images/fish-images/naget-fish.png"
import fishSteak from "../../../../images/fish-images/steik-mahi.jpg"    

export default function FishItems() {

    const fishData = [
        {
            id: 1,
            prductName: "fish and chips",
            ProductImage: fishAndChips,
            prise: 75000,
            type: "fish"
        },

        {
            id: 2,
            prductName: "grilled fish",
            ProductImage: grilledFish,
            prise: 75000,
            type: "fish"
        },

        {
            id: 3,
            prductName: "nagget fish",
            ProductImage: naggetFish,
            prise: 75000,
            type: "fish"
        },

        {
            id: 4,
            prductName: "fish steak",
            ProductImage: fishSteak,
            prise: 75000,
            type: "fish"
        },
        {
            id: 5,
            prductName: "grilled fish",
            ProductImage: grilledFish,
            prise: 75000,
            type: "fish"
        },
    ]

    return (

        <div className="w-screen h-screen px-5 py-10 md:px-32 md:py-40">
      
                  <div className="grid grid-cols-10 w-full h-auto md:gap-x-5 gap-y-6 px-10">
      
                      {
                          fishData.map((item) => (
      
                              <Item key={item?.id} name={item?.prductName} image={item?.ProductImage} price={item?.prise} category={item?.type} />
                          ))
                      }
      
                  </div>

              </div>
    )
}