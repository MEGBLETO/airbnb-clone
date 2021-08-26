import React from 'react'

const Footer = () => {
    return (
        <div className="grid gap-x-5 space-y-10 grid-cols-1 sm:flex  justify-evenly p-5 md:">
            
            <div className="space-y-4 text-xs text-gray-800 p-2">
                <h5 className="font-bold">About</h5>
                <p>How Airbnb Works</p>
                <p>Nesroom</p>
                <p>Investors</p>
                <p>Airbnb Plus</p>
                <p>Airbnb Luxe</p>
            </div>

            <div className="space-y-4 text-xs text-gray-800 p-2">
                <h5 className="font-bold">COMMUNITY</h5>
                <p>Diversity & Belonging</p>
                <p>Airbnb Associates</p>
                <p>Gift cards</p>
                <p>Frontline Stays</p>
                <p>Airbnb.org</p>
            </div>  

            <div className="space-y-4 text-xs text-gray-800 p-2">
                <h5 className="font-bold">SUPPORT</h5>
                <p>Our COVID-19 Response</p>
                <p>Neighborhood Support</p>
                <p>Investors</p>
                <p>Trust & Safety</p>
                <p>Cancellation options</p>
            </div>            

            <div className="space-y-4 text-xs text-gray-800 p-2">
                <h5 className="font-bold">HOST</h5>
                <p>Host your home</p>
                <p>Responsible hosting</p>
                <p>Host an Online Experience</p>
                <p>Resource Center</p>
                <p>Community Center</p>
            </div>         

        </div>
    )
}

export default Footer
