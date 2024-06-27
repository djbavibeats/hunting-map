import { useState, useEffect } from "react"
import { format } from 'date-fns'

function TourDates () {
    const [ tourDates, setTourDates ] = useState()
    useEffect(() => {
        fetch('https://rest.bandsintown.com/artists/Wage%20War/events?app_id=Test')
        .then(response => response.json() )
        .then(tourDates => {
            setTourDates(tourDates)
        })
        
    }, [])
    return (<>
    <div className="w-[98%] overflow-y-scroll px-2 mb-2">
        { tourDates &&
            tourDates.map((show, index) => {
                return (<div key={ index } className="
                    flex flex-col items-center justify-center mb-
                    md:grid md:grid-cols-5 md:gap-x-4 w-full md:h-14 
                    text-white font-tungsten text-xl tracking-wide
                    ">
                    {/* Date */}
                    <div className="col-span-1 text-start">
                        <p>{ format(new Date(show.datetime), "eee, MMM d") }</p>
                    </div>

                    {/* Venue */}
                    <div className="col-span-2 text-start">
                        <p>{ show.venue.name }</p>
                    </div>

                    {/* City, State */}
                    <div className="col-span-1 text-end">
                        <p>{ show.venue.city }, { show.venue.region }</p>
                    </div>

                    {/* Ticket Link */}
                    <div className="col-span-1 text-end mt-4 mb-4">
                        <a className="
                            border-yellow text-yellow text-xl font-tungsten tracking-wide border px-4 py-2
                            hover:bg-yellow hover:text-black
                        " href={`${show.url}`} target="_blank">TICKETS</a>
                    </div>
                </div>)
            })
        }
    </div>
    </>)
}

export default TourDates