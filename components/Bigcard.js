import React from 'react'
import Image from 'next/image'

const Bigcard = ({ img, title }) => {
    return (
        <div className="flex flex-col cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
            <div className="relative h-80 w-80">
                <Image src={img} layout="fill" className="rounded-xl" />
            </div>
            <div>
                <h2 className="text-2xl mt-3">{title}</h2>
            </div>
        </div>
    )
}

export default Bigcard
