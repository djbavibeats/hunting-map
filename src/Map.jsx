import mapboxgl from 'mapbox-gl' // eslint-disable-line import/no-webpack-loader-syntax
import { useRef, useEffect, useState } from 'react'
import WageWar from '../public/images/wage-war.png'

import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoianVzdGludm9sdGNyZWF0aXZlIiwiYSI6ImNrczY2eDFpYTBieXEzMGxoaDF1Nmd2aXgifQ.0HoSQyn8pH5coK4IxPRhrQ';

const HeaderBlock = () => {
    return (
        <div className="flex flex-col items-center justify-center mb-4 md:mb-0">
            <img className="w-[100px] md:w-[150px] mb-2" src={ WageWar } />
            <p className="font-geizer text-center text-[3rem] md:text-[4rem] leading-none">HAPPY HUNTING</p>
            <p className="font-tungsten text-center text-[1.5rem] md:text-[1.75rem] leading-none tracking-wide">INTERACTIVE EXPERIENCE</p>
        </div>
    )
}

const ButtonsBlock = ({ activeScreen, setActiveScreen }) => {
    return (
        <div className="flex flex-wrap items-center justify-center md:flex-col gap-4">
            <div className={`
                flex items-center justify-center gap-x-2 w-[350px] max-w-[100%] md:w-auto md:min-w-[200px]
                font-tungsten font-bold text-base md:text-xl tracking-wide rounded-full border-2 py-2 px-8
                hover:cursor-pointer md:hover:scale-110
                transition duration-150 ease-in-out
                ${ activeScreen === 'mapblock' ? 'bg-black text-yellow fill-yellow' : 'bg-none'}
            `}
                onClick={ () => setActiveScreen('mapblock') }
            >
                <div className="mt-[1.75px]"><p className="font-tungsten">MAP</p></div> 
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 512 512">
                    <path d="M217 401L345 273c9.4-9.4 9.4-24.6 0-33.9L217 111c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l87 87L24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l246.1 0-87 87c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0zM344 80l80 0c22.1 0 40 17.9 40 40l0 272c0 22.1-17.9 40-40 40l-80 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l80 0c48.6 0 88-39.4 88-88l0-272c0-48.6-39.4-88-88-88l-80 0c-13.3 0-24 10.7-24 24s10.7 24 24 24z"/>
                </svg>
            </div>
            <div className={`
                flex items-center justify-center gap-x-2 w-[167px] max-w-[100%] md:w-auto md:min-w-[200px]
                font-tungsten font-bold text-base md:text-xl tracking-wide rounded-full border-2 py-2 px-8
                hover:cursor-pointer md:hover:scale-110
                transition duration-150 ease-in-out
                ${ activeScreen === 'tourblock' ? 'bg-black text-yellow fill-yellow' : 'bg-none'}
            `}
                onClick={ () => setActiveScreen('tourblock') }
            >
                <div className="mt-[1.75px]"><p className="font-tungsten">TOUR DATES</p></div> 
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 512 512">
                    <path d="M217 401L345 273c9.4-9.4 9.4-24.6 0-33.9L217 111c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l87 87L24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l246.1 0-87 87c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0zM344 80l80 0c22.1 0 40 17.9 40 40l0 272c0 22.1-17.9 40-40 40l-80 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l80 0c48.6 0 88-39.4 88-88l0-272c0-48.6-39.4-88-88-88l-80 0c-13.3 0-24 10.7-24 24s10.7 24 24 24z"/>
                </svg>
            </div>
            <div className={`
                flex items-center justify-center gap-x-2 w-[167px] max-w-[100%] md:w-auto md:min-w-[200px]
                font-tungsten font-bold text-base md:text-xl tracking-wide rounded-full border-2 py-2 px-8
                hover:cursor-pointer md:hover:scale-110
                transition duration-150 ease-in-out
                ${ activeScreen === 'presaveblock' ? 'bg-black text-yellow fill-yellow' : 'bg-none'}
            `}
                onClick={ () => setActiveScreen('presaveblock') }
            >
                <div className="mt-[1.75px]"><p className="font-tungsten">PRESAVE</p></div> 
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 512 512">
                    <path d="M217 401L345 273c9.4-9.4 9.4-24.6 0-33.9L217 111c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l87 87L24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l246.1 0-87 87c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0zM344 80l80 0c22.1 0 40 17.9 40 40l0 272c0 22.1-17.9 40-40 40l-80 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l80 0c48.6 0 88-39.4 88-88l0-272c0-48.6-39.4-88-88-88l-80 0c-13.3 0-24 10.7-24 24s10.7 24 24 24z"/>
                </svg>
            </div>
        </div>)
}

const MapBlock = () => {
    const mapContainer = useRef(null)
    const map = useRef(null)
    const [lng, setLng] = useState(-70.9)
    const [lat, setLat] = useState(42.35)
    const [zoom, setZoom] = useState(9)

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/dark-v11',
            center: [lng, lat],
            zoom: zoom
        })

        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4))
            setLat(map.current.getCenter().lat.toFixed(4))
            setZoom(map.current.getZoom().toFixed(2))
        })
    })

    return (<div className="
        w-[350px] max-w-[100%] h-full
        md:col-span-5 md:w-full md:h-full
    ">
        <div ref={mapContainer} className="map-container h-[100%]" />
    </div>)
}

const TourBlock = () => {
    return (<div className="
        w-[350px] max-w-[100%] h-full p-4
        md:w-full md:col-span-5
        flex items-center justify-center bg-black
    ">
        <p className="text-yellow text-center font-tungsten text-[2.5rem] tracking-wide w-full">UPCOMING TOUR DATES</p>
    </div>)
}

const PresaveBlock = () => {
    return (<div className="
        w-[350px] max-w-[100%] h-full p-4
        md:w-full md:col-span-5
        flex items-center justify-center bg-black
    ">
        <p className="text-yellow text-center font-tungsten text-[2.5rem] tracking-wide w-full">PRESAVE SONG TITLE NOW</p>
    </div>)
}
function Map ({ user }) {
    const [ activeScreen, setActiveScreen ] = useState('mapblock')

    return (<>
        <div className="
                flex flex-col-reverse w-full h-full items-center justify-center
            ">
            {/* Mobile Layout */}
            <div className="
                flex flex-col h-full mt-20 gap-y-4 py-4 items-center justify-start
                md:grid md:gap-4 md:grid-cols-8 md:h-3/4 md:w-full md:p-16 md:m-8    
            ">
                
                {/* Map */}
                { activeScreen === 'mapblock' && <MapBlock /> }
                { activeScreen === 'tourblock' && <TourBlock /> }
                { activeScreen === 'presaveblock' && <PresaveBlock /> }
               

                <div className="col-span-3 flex flex-col justify-center items-center md:-order-1">
                    <HeaderBlock />
                    <p className="hidden md:block font-tungsten font-normal text-2xl text-center mb-8 mt-8 max-w-[350px]">
                        Instructions or promotional text. This is where you could put instructions or promotional text. Instructions or promotional text. This is where you could put instructions or promotional text.
                        <br/><br/>
                        Or promotional text. This is where you could put instructions or promotional text.
                    </p>
                    <ButtonsBlock activeScreen={ activeScreen } setActiveScreen={ setActiveScreen } />
                </div>
            </div>

        </div>
    </>)
}

export default Map