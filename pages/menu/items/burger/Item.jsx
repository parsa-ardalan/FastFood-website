import Image from "next/image"

export default function Item(props) {

    return (

        <div className="col-span-6 md:col-span-3 border border-white rounded-2xl md:rounded-3xl backdrop-blur-lg backdrop-brightness-50">

            <div className="flex items-center fixed justify-center w-full h-20 md:h-26 md:-mt-12">
                <Image src={props?.image} className="w-32 h-full" alt={props?.name}/>
            </div>


            <h1 className="w-full text-center mt-20 md:mt-14 text-white text-sm md:text-lg font-semibold"> {props?.name} </h1>

            <div className="w-full" dir="rtl">

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mr-3 text-white mt-3 mb-2 md:size-7 md:mr-4 md:mt-6 hover:text-amber-400 duration-150">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>

            </div>

        </div>
    )
}