import React,{useState} from 'react'
import Image from 'next/image'
import {GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon, UsersIcon} from '@heroicons/react/outline'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Calendar } from 'react-date-range';
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/dist/client/router';





const Header = ({placeholder}) => {


    const [searchInput, setSearchInput] = useState('')

    const [startDate, setStarDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [numberOfGuess, setNumberOfGuess] = useState(1)

  const router = useRouter()

  
  const resetInput= () =>{
      setSearchInput("")
    }
    
    const handleSearch = () =>{
        router.push({
            pathname: "/search",
            query: {
                location:searchInput,
                debutDate: startDate.toISOString,
                finDate: endDate.toISOString,
                guestnum: numberOfGuess,
                
            }
        })
    }
   


    const selectionRange = {
        startDate:  startDate,
        endDate:  endDate,
        key: 'selection',
      }


      //apres selection d'une date

      const handleSelect = (ranges) =>{
                 setStarDate(ranges.selection.startDate)
                 setEndDate(ranges.selection.endDate)

      }

    return (
        <header className="sticky bg-red-30  top-0 z-50 grid grid-cols-3  px-5 bg-white shadow-md p-3 text-center items-center  md:px-10">
            {/* left side */}
            <div onClick={() => router.push("/")} className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image
                    src="https://links.papareact.com/qd3"
                    layout="fill" 
                    objectFit="contain" 
                    objectPosition="left"
                />
            </div>

            {/* Middle */}
            <div className="flex hidden sm:inline-flex relative text-center items-center border-2 rounded-full px-2 lg:w-4/6">
                <input value={searchInput}
                onChange={(e)=>{setSearchInput(e.target.value)}} className="p-2 bg-transparent  outline-none  flex-grow font-bold placeholder-gray-400" type="text" placeholder={placeholder || "Start Your Search"} />
                <SearchIcon className="h-8 right-2 bg-red-400 text-white p-2 rounded-full items-center cursor-pointer hidden lg:inline-flex"/>
            </div>

            {/* Right */}
            <div className="flex justify-end p-4 text-center items-center space-x-2">
              <p className="cursor-pointer hidden md:inline p-3 hover:bg-gray-100 rounded-full">Become a Host</p>
              <GlobeAltIcon className="h-7  cursor-pointer hover:bg-gray-100 rounded-full"/>
              <div className="flex justify-between text-center items-center p-2 border rounded-full hover:shadow-md cursor-pointer">
                 <MenuIcon className="h-6 px-2 "/> 
                 <UserCircleIcon className="h-6"/>
              </div>
            </div>
     
              {searchInput && (
                  <div className="hidden    sm:flex flex-col col-span-3 items-center">
            <DateRangePicker ranges={[selectionRange]} 
            minDate={new Date()}
            rangeColors={['#FD5B61']}
        onChange={handleSelect}
        />
        <div className=" flex items-center border-b mb-4">
            <h2 className="text-2xl pl-2 flex-grow font-semibold pr-12">Number of guests</h2>
            <UsersIcon className="h-5"/>
            <input type="mumber" value={numberOfGuess} onChange={(e)=>{setNumberOfGuess(e.target.value)}} className="w-12 pl-2 text-lg outline-none text-red-400" />
        </div>
             <div className="flex items-center">
                 <button className="space-x-10 mr-10 text-gray-500" onClick={resetInput}>Cancel</button>
                 <button onClick={ handleSearch} className="text-red-400">Search</button>

             </div>
                  </div>
              )}


        </header>
    )
}

export default Header
