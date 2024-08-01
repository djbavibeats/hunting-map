import mapboxgl from 'mapbox-gl' // eslint-disable-line import/no-webpack-loader-syntax
import { useRef, useEffect, useState } from 'react'
import WageWar from '../../../public/images/wage-war.png'
import TourDates from './TourDates'

import TourHeader from '../../../public/images/hero-magnetic.png'
import Logo from '../../../public/images/logo.png'

import 'mapbox-gl/dist/mapbox-gl.css'; 

mapboxgl.accessToken = 'pk.eyJ1IjoianVzdGludm9sdGNyZWF0aXZlIiwiYSI6ImNrczY2eDFpYTBieXEzMGxoaDF1Nmd2aXgifQ.0HoSQyn8pH5coK4IxPRhrQ';

import geojson from './geojson'
console.log(geojson)
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
        <div className="hidden md:flex flex-wrap items-center justify-center md:flex-col gap-4">
            <div className={`
                flex items-center justify-center gap-x-2 w-[350px] max-w-[100%] md:w-auto md:min-w-[200px]
                font-tungsten font-bold text-base md:text-xl tracking-wide rounded-full border-2 py-2 px-8
                hover:cursor-pointer md:hover:scale-110
                transition duration-150 ease-in-out
                ${ activeScreen === 'mapblock' ? 'bg-black text-yellow fill-yellow border-black' : 'bg-none'}
            `}
                onClick={ () => setActiveScreen('mapblock') }
            >
                <div className="mt-[1.75px]"><p className="font-tungsten">MAP</p></div> 
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 576 512">
                    <path d="M565.6 36.2C572.1 40.7 576 48.1 576 56V392c0 10-6.2 18.9-15.5 22.4l-168 64c-5.2 2-10.9 2.1-16.1 .3L192.5 417.5l-160 61c-7.4 2.8-15.7 1.8-22.2-2.7S0 463.9 0 456V120c0-10 6.1-18.9 15.5-22.4l168-64c5.2-2 10.9-2.1 16.1-.3L383.5 94.5l160-61c7.4-2.8 15.7-1.8 22.2 2.7zM48 136.5V421.2l120-45.7V90.8L48 136.5zM360 422.7V137.3l-144-48V374.7l144 48zm48-1.5l120-45.7V90.8L408 136.5V421.2z"/>
                </svg>
            </div>
            <div className={`
                flex items-center justify-center gap-x-2 w-[167px] max-w-[100%] md:w-auto md:min-w-[200px]
                font-tungsten font-bold text-base md:text-xl tracking-wide rounded-full border-2 py-2 px-8
                hover:cursor-pointer md:hover:scale-110
                transition duration-150 ease-in-out
                ${ activeScreen === 'tourblock' ? 'bg-black text-yellow fill-yellow border-black' : 'bg-none'}
            `}
                onClick={ () => setActiveScreen('tourblock') }
            >
                <div className="mt-[1.75px]"><p className="font-tungsten">TOUR DATES</p></div> 
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 448 512">
                    <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"/>
                </svg>
            </div>
            <div className={`
                flex items-center justify-center gap-x-2 w-[167px] max-w-[100%] md:w-auto md:min-w-[200px]
                font-tungsten font-bold text-base md:text-xl tracking-wide rounded-full border-2 py-2 px-8
                hover:cursor-pointer md:hover:scale-110
                transition duration-150 ease-in-out
                ${ activeScreen === 'setlistblock' ? 'bg-black text-yellow fill-yellow border-black' : 'bg-none'}
            `}
                onClick={ () => setActiveScreen('setlistblock') }
            >
                <div className="mt-[1.75px]"><p className="font-tungsten">STIGMA</p></div> 
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 512 512">
                    <path d="M256 80C149.9 80 62.4 159.4 49.6 262c9.4-3.8 19.6-6 30.4-6c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48c-44.2 0-80-35.8-80-80V384 336 288C0 146.6 114.6 32 256 32s256 114.6 256 256v48 48 16c0 44.2-35.8 80-80 80c-26.5 0-48-21.5-48-48V304c0-26.5 21.5-48 48-48c10.8 0 21 2.1 30.4 6C449.6 159.4 362.1 80 256 80z"/>
                </svg>
            </div>
        </div>)
}

const MobileButtonsBlock = ({ activeScreen, setActiveScreen }) => {
    return (<>
        <div className="flex md:hidden items-between w-[175px] justify-between mt-4 gap-4">
            {/* Map Button */}
            <div className="flex flex-col items-center w-[50px]">
                <div className={`
                    flex items-center justify-center gap-x-2
                    font-tungsten font-bold text-base tracking-wide rounded-full border-2 py-2 px-2
                    hover:cursor-pointer md:hover:scale-110
                    transition duration-150 ease-in-out
                    ${ activeScreen === 'mapblock' ? 'bg-black text-yellow fill-yellow border-black' : 'bg-none'}
                `}
                    onClick={ () => setActiveScreen('mapblock') }
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 576 512">
                        <path d="M565.6 36.2C572.1 40.7 576 48.1 576 56V392c0 10-6.2 18.9-15.5 22.4l-168 64c-5.2 2-10.9 2.1-16.1 .3L192.5 417.5l-160 61c-7.4 2.8-15.7 1.8-22.2-2.7S0 463.9 0 456V120c0-10 6.1-18.9 15.5-22.4l168-64c5.2-2 10.9-2.1 16.1-.3L383.5 94.5l160-61c7.4-2.8 15.7-1.8 22.2 2.7zM48 136.5V421.2l120-45.7V90.8L48 136.5zM360 422.7V137.3l-144-48V374.7l144 48zm48-1.5l120-45.7V90.8L408 136.5V421.2z"/>
                    </svg>
                </div>
                <p className="font-tungsten text-xl font-bold tracking-wide">MAP</p>
            </div>
            {/* Tour Button */}
            <div className="flex flex-col items-center w-[50px]">
                <div className={`
                    flex items-center justify-center gap-x-2
                    font-tungsten font-bold text-base tracking-wide rounded-full border-2 py-2 px-2
                    hover:cursor-pointer md:hover:scale-110
                    transition duration-150 ease-in-out
                    ${ activeScreen === 'tourblock' ? 'bg-black text-yellow fill-yellow border-black' : 'bg-none'}
                `}
                    onClick={ () => setActiveScreen('tourblock') }
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 448 512">
                        <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"/>
                    </svg>
                </div>
                <p className="font-tungsten text-xl font-bold tracking-wide">TOUR</p>
            </div>

            {/* Stream Button */}
            <div className="flex flex-col items-center w-[50px]">
                <div className={`
                    flex items-center justify-center gap-x-2
                    font-tungsten font-bold text-base tracking-wide rounded-full border-2 py-2 px-2
                    hover:cursor-pointer md:hover:scale-110
                    transition duration-150 ease-in-out
                    ${ activeScreen === 'setlistblock' ? 'bg-black text-yellow fill-yellow border-black' : 'bg-none'}
                `}
                    onClick={ () => setActiveScreen('setlistblock') }
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 512 512">
                        <path d="M256 80C149.9 80 62.4 159.4 49.6 262c9.4-3.8 19.6-6 30.4-6c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48c-44.2 0-80-35.8-80-80V384 336 288C0 146.6 114.6 32 256 32s256 114.6 256 256v48 48 16c0 44.2-35.8 80-80 80c-26.5 0-48-21.5-48-48V304c0-26.5 21.5-48 48-48c10.8 0 21 2.1 30.4 6C449.6 159.4 362.1 80 256 80z"/>
                    </svg>
                </div>
                <p className="font-tungsten text-xl font-bold tracking-wide">STIGMA</p>
            </div>
        </div>
        
        <div className="mt-[1.75px]"><p className="mt-2 text-2xl font-tungsten">
            No Locations Near You? <a href="#" className="underline">Enter To Win Here</a>
        </p></div> 
        </>)
}

const MapBlock = () => {
    const mapContainer = useRef(null)
    const map = useRef(null)
    const [ lng, setLng ] = useState(-120.0)
    const [ lat, setLat ] = useState(40.0)
    const [ posInitialized, setPosInitialzed ] = useState(false)
    const [ zoom, setZoom ] = useState(2)
    // const [ showMapKey, setShowMapKey ] = useState(false)

    useEffect(() => {
        if (map.current) return; // initialize map only once

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                // Success
                (position) => {
                    setLng(position.coords.longitude)
                    setLat(position.coords.latitude)
                    setPosInitialzed(true)
                    setZoom(9)
                }, 
                // Error
                () => {
                    // alert('Geolocation Error.')
                    console.log('Geolocation disabled in this browser')
                },
                // Options 
                { 
                    enableHighAccuracy: false, 
                    timeout: 5000, 
                    maximumAge: 0 
                } 
            )
        } else {
            console.log('Geolocation disabled in this browser')
        }

        
    })

    useEffect(() => {
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/justinvoltcreative/clxz3zpw5005w01qrf1wzau5a',
            center: [lng, lat],
            zoom: zoom
        })

        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4))
            setLat(map.current.getCenter().lat.toFixed(4))
            setZoom(map.current.getZoom().toFixed(2))
        })

        for (const feature of geojson.features) {
            // create a HTML element for each feature
          
            // make a marker for each feature and add to the map
            const el = document.createElement('div');
            el.className = 'tacklebox marker'
            
            // switch (feature.properties.type) {
            //     case ('tacklebox'):
            //         el.className = 'tacklebox marker'
            //         break
            //     case ('tourdate'):
            //         el.className = 'tourdate marker'
            //     default:
            //         break
            // }

            new mapboxgl.Marker(el)
                .setLngLat(feature.geometry.coordinates)
                .setPopup(
                    new mapboxgl.Popup({ offset: 25 }) // add popups
                        .setHTML(
                        `
                        <p>${feature.geometry.coordinates[1]}, ${feature.geometry.coordinates[0]}</p>
                        `
                        )
                )
                .addTo(map.current);
            
          }
    }, [ posInitialized ])

    // const toggleMapKey = () => {
    //     setShowMapKey(!showMapKey)
    // }

    return (<div className="
        w-full max-w-[100%] h-full
        md:w-full md:h-full
        relative
    ">
        {/* <div className="absolute top-2 left-2 z-50 flex items-center gap-x-2 hover:cursor-pointer" onClick={ () => toggleMapKey() }>
            <div className="rounded-full bg-yellow h-6 w-6 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='fill-black h-3 w-3'>
                <path d="M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17v80c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24V448h40c13.3 0 24-10.7 24-24V384h40c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z"/>
            </svg>
            </div>
            <p className="text-yellow font-tungsten tracking-wide text-xl">
                Map Key
            </p>
        </div>
        <div className={`absolute flex-col items-start justify-start p-4 left-0 right-0 bottom-0 h-full w-full md:h-1/2 md:w-1/2 bg-black border-2 border-black z-50
                ${ showMapKey ? 'flex' : 'hidden' }
            `}>
            <div className="text-yellow font-tungsten text-5xl mb-4 flex w-full justify-between items-center">
                <p>MAP KEY</p>
                <div className="rounded-full bg-yellow h-6 w-6 flex items-center justify-center hover:cursor-pointer" onClick={ () => toggleMapKey() }>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="fill-black h-4 w-4">
                        <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/>
                    </svg>
                </div>
            </div>
            <div className="flex items-center gap-x-4 mb-2">
                <div>
                    <img src='./images/map-icons/tacklebox.png' />
                </div>
                <div className="text-white font-tungsten">
                    <p className="text-3xl">TACKLEBOX</p>
                    <p className="text-xl text-yellow">This is a desription about what happens at this location.</p>
                </div>
            </div>
            {/* <div className="flex items-center gap-x-4 mb-2">
                <div>
                    <img src='./images/map-icons/fan-meetup.png' />
                </div>
                <div className="text-white font-tungsten">
                    <p className="text-3xl">FAN MEETUP</p>
                    <p className="text-xl text-yellow">This is a desription about what happens at this location.</p>
                </div>
            </div>
            <div className="flex items-center gap-x-4 mb-2">
                <div>
                    <img src='./images/map-icons/tourdate.png' />
                </div>
                <div className="text-white font-tungsten">
                    <p className="text-3xl">WAGE WAR SHOW</p>
                    <p className="text-xl text-yellow">This is a desription about what happens at this location.</p>
                </div>
            </div> 
        </div> */}
        <div ref={mapContainer} className="map-container h-[100%]" />
    </div>)
}

const TourBlock = () => {
    return (<>
        <img className="w-full max-w-[536px] pt-4 md:px-0 px-4" src={ TourHeader } />
        <p className="text-yellow text-center font-tungsten text-[2.5rem] tracking-wide w-full">UPCOMING TOUR DATES</p>
        <TourDates />
    </>)
}

const SetlistBlock = () => {
    const spotifyFunction = () => {
        window.open(
            'https://found.ee/ww_stigma',
            '_blank'    
        )
    }

    return (<div className="w-full flex flex-col items-center justify-between h-full px-2 pb-8">
        <p className="text-yellow text-center font-tungsten text-[2.5rem] tracking-wide w-full">STREAM STIGMA</p>
        <iframe 
        style={{ borderRadius: `0px`, maxWidth: `500px` }}
        src="https://open.spotify.com/embed/album/7tZHRFl7eypO0M1RzBwMfk?utm_source=generator&theme=0" 
        width="100%" height="450" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        <div className={`
            flex items-center justify-center gap-x-2 w-[250px] max-w-[100%] md:w-auto md:min-w-[200px]
            font-tungsten font-bold text-base md:text-xl tracking-wide rounded-full border-2 py-2 px-8
            hover:cursor-pointer md:hover:scale-110
            transition duration-150 ease-in-out mt-2 mb-2
            bg-black text-yellow fill-yellow border-yellow
        `}
            onClick={ () => spotifyFunction() }
        >
            <div className="mt-[1.75px]"><p className="font-tungsten">CHOOSE PLATFORM</p></div> 
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 448 512">
                <path d="M48 96V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V170.5c0-4.2-1.7-8.3-4.7-11.3l33.9-33.9c12 12 18.7 28.3 18.7 45.3V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H309.5c17 0 33.3 6.7 45.3 18.7l74.5 74.5-33.9 33.9L320.8 84.7c-.3-.3-.5-.5-.8-.8V184c0 13.3-10.7 24-24 24H104c-13.3 0-24-10.7-24-24V80H64c-8.8 0-16 7.2-16 16zm80-16v80H272V80H128zm32 240a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z"/>
            </svg>
        </div>
    </div>)
}
function Map ({ user }) {
    const [ activeScreen, setActiveScreen ] = useState('mapblock')
    const rightColumnRef = useRef(null)
    const [ rightColumnHeight, setRightColumnHeight ] = useState(0)

    useEffect(() => {
        if (window.innerWidth < 768) {
            setRightColumnHeight(500)
        } else {
            setRightColumnHeight(rightColumnRef.current.clientHeight)
        }
        console.log(rightColumnHeight)
    }, [ rightColumnRef ])

    return (<>
        <div className="
                flex flex-col-reverse w-full h-full items-center justify-center
            ">
            {/* Mobile Layout */}
            <div className="
                flex flex-col h-full mt-8 md:mt-20 gap-y-4 py-4 items-center md:items-start justify-start
                md:grid md:gap-4 md:grid-cols-8 md:h-3/4 md:w-full md:p-16 md:m-8    
            ">
                {/* Mobile */}
                <div className="md:hidden w-full flex flex-col justify-center items-center md:-order-1">
                    <HeaderBlock />
                    <p className="block md:hidden font-tungsten font-normal text-[1.35rem] leading-[1.5rem] text-center mb-4 mt-0 max-w-[360px]">
                        1. Using the map, find the marker nearest to you. The map view shows how close you are but won’t show you the best route to get to the secret location. 
                    </p>
                    <p className="block md:hidden font-tungsten font-normal text-[1.35rem] leading-[1.5rem] text-center mb-4 mt-0 max-w-[360px]">
                        2. Now you must sleuth out likely hiding places for the box holding your prize. Take your time and be observant.
                    </p>
                    <p className="block md:hidden font-tungsten font-normal text-[1.35rem] leading-[1.5rem] text-center mb-2 mt-0 max-w-[360px]">
                        3. Once you have found the box, you’ll find instructions inside on how to claim your prize. Be sure to take a picture and tag @wagewar #happyhunting on Instagram or Twitter.
                    </p>
                    <MobileButtonsBlock activeScreen={ activeScreen } setActiveScreen={ setActiveScreen } />
                </div>
                {/* End Mobile */}
                
                {/* Map */}
                <div className={`
                        w-[375px] m-auto
                        md:w-full md:col-span-5
                        flex flex-col items-center justify-start bg-[rgba(0,0,0,1.0)] rounded-md p-1 gap-y-4
                        h-full
                    `}
                    style={{ 
                        boxShadow: `0px 0px 7.5px #000`,
                        height: rightColumnHeight >= 33 ? rightColumnHeight + "px" : "none" 
                    }}
                    ref={ rightColumnRef }
                >
                    { activeScreen === 'mapblock' && <MapBlock /> }
                    { activeScreen === 'tourblock' && <TourBlock /> }
                    { activeScreen === 'setlistblock' && <SetlistBlock /> }
                </div>
               

                {/* Desktop Navigation */}
                <div className="col-span-3 flex flex-col justify-center items-center md:-order-1">
                    <div className="hidden md:flex md:flex-col">
                        <HeaderBlock />
                        <p className="hidden md:block font-tungsten font-normal text-2xl text-center mb-2 mt-8 max-w-[350px]">
                            1. Using the map, find the marker nearest to you. The map view shows how close you are but won’t show you the best route to get to the secret location. 
                        </p>
                        <p className="hidden md:block font-tungsten font-normal text-2xl text-center mb-2 mt-0 max-w-[350px]">
                            2. Now you must sleuth out likely hiding places for the box holding your prize. Take your time and be observant.
                        </p>
                        <p className="hidden md:block font-tungsten font-normal text-2xl text-center mb-8 mt-0 max-w-[350px]">
                            3. Once you have found the box, you’ll find instructions inside on how to claim your prize. Be sure to take a picture and tag @wagewar #happyhunting on Instagram or Twitter.
                        </p>
                    </div>
                    <ButtonsBlock activeScreen={ activeScreen } setActiveScreen={ setActiveScreen } />
                    <div className="h-20 flex items-center justify-center w-full m-auto">
                        <img className="w-[50px]" src={ Logo } />
                    </div>
                </div>
                {/* End Desktop Navigation */}
            </div>

        </div>
    </>)
}

export default Map