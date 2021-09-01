import React from 'react'
import Header from '../components/Header'
import Footer from "../components/Footer"
import { useRouter } from 'next/dist/client/router'
import { format } from 'date-fns'
import InfoCard from '../components/InfoCard'

const Search = ({data}) => {


console.log(data)


 const router = useRouter()
    const { location, debutDate, finDate,  guestnum} = router.query;
    // console.log(router.query)

     //const formattedStartDate = format(new Date(debutDate), "dd MMM yy")
    //  const formattedEndDate = format(new Date(finDate), "dd MMM yy")
     //const range = `${formattedStartDate}- ${formattedEndDate}`


    return (
        <div>
            <Header placeholder={`${location} | ${guestnum}`}/>
            <main className="max-w-7xl mx-auto">
                <section className="flex-grow pt-14 px-6">
                     <p className="text-xs p-2">300+ stays from  for {guestnum} number of guests</p> 
                    <h1 className="text-3xl font-semibold m-2">Stays in {location}</h1>
                    <div className="hidden lg:inline-flex transition duration-100 ease-in-outflex">

                        <p className="button">Cancellation flexibility</p>
                        <p className="button">Type of place</p>
                        <p className="button">Price</p>
                        <p className="button">Rooms and Beds</p>
                        <p className="button">More filters</p>  
                    </div>
                </section>
                {data.map(({img,location,title,description,lat,long,price,star,total}) =>(
                    <InfoCard img={img} location={location} description={description} total={total} title={title} star={star} long={long} lat={lat}/>
                ))}
            </main>
            <Footer />
        </div>
    )
}

export default Search




export const getServerSideProps =  async() =>{
        const searchResults = await fetch("https://links.papareact.com/isz");
        const data = await searchResults.json()
       
        return{
            props: {
                data
            }
        }
}