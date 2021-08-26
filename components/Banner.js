import React from 'react'
import Image from 'next/image'

const Banner = () => {
    return (
        <div className="relative h-[300px] sm:h-[400] lg:h-[500px]">
                <Image src="https://links.papareact.com/0fm"
                objectFit="cover" layout="fill"
                
                />


         <div className="absolute top-1/2 w-full text-center">
             <p className="py-3">Not sure Where to go? Perfect.</p>
             <p className="bg-white w-[200px] mx-auto p-4 text-purple-600 font-bold rounded-full shadow-md hover:shadow-xl cursor-pointer active:scale-90 transition duration-150">I'm flexible.</p>
         </div>

        </div>
    )
}

export default Banner
