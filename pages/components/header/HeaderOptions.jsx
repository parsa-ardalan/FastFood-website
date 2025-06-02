export default function Headeroptions(props) {

    return (


        <div className="hidden md:block col-span-1 text-center mt-5 h-8">

            <span className="text-white text-sm md:text-lg select-none duration-300 hover:text-amber-400">

                {props.innerHTML}

            </span >
            
        </div>


    )
}