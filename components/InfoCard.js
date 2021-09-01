import React from 'react'
import Image from "next/image"
import {HeartIcon, StarIcon } from '@heroicons/react/outline'

const InfoCard = ({ img, location, title, description, lat, long, price, star, total }) => {
    return (
        <div className="flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition transform duration-100 ease-in-out first:border-t ">
            <div className=" relative m-2 p-4 h-24 w-40  md:w-80 md:h-52 flex-shrink-0">
                <Image className="h-3" layout="fill" objectFit="cover" src={img}/>
                </div>
                <div className="flex flex-col flex-grow pl-5">
                    <div className="flex justify-between">
                        <p>{location}</p>
                        <HeartIcon className="h-7 cursor-pointer" />
                    </div>

                    <h4 className="text-xl">{title}</h4>
                    <div className="border-b w-10 pt-2"/>

                    <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>

                    <div className="flex justify-between pt-5 items-end">
                        <p className="flex items-center">
                            <StarIcon className="h-5 text-red-400"/>
                            {star}
                        </p>

                        <div>
                            <p className="text-lg font-semibold lg:text-2xl">{price}</p>
                            <p className="text-right font-extralight">{total}</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default InfoCard
