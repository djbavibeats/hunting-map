import { useEffect, useState } from "react"

import Spotify from "./Spotify"
import Map from "./Map"

import Logo from '../../../public/images/logo.png'
import WageWar from '../../../public/images/wage-war.png'

const Loading = () => {
  return (<>
  </>)
}

const Introduction = ({ user, setUser, setScreen }) => {
  return (<div>
  <div className="flex flex-col gap-y-4 items-center justify-center max-w-[375px] mt-8 h-full">
    
    <div className="flex flex-col items-center justify-center mb-0 md:mb-0">
        <img className="w-[100px] md:w-[150px] mb-2" src={ WageWar } />
        <p className="font-geizer text-center text-[3rem] md:text-[4rem] leading-none">HAPPY HUNTING</p>
        <p className="font-tungsten text-center text-[1.5rem] md:text-[1.75rem] leading-none tracking-wide">INTERACTIVE EXPERIENCE</p>
    </div>

    <p className="font-tungsten font-bold text-[1.75rem] tracking-normal mb-0">
      HOW IT WORKS
    </p>
    <p className="font-tungsten font-normal text-2xl text-center mb-2">
      Hunting season has started early. Join the hunt for a chance to win an exclusive Wage War package and tickets to one of our headline shows.
    </p>
 
    <Spotify user={ user } setUser={ setUser } />

  </div>
  <div className="h-20 flex items-center justify-center bottom-0 left-0 right-0 m-auto">
    <img className="w-[50px]" src={ Logo } />
  </div>
  </div>)
}

function Home () {
    const [ user, setUser ] = useState({
        loggedIn: false,
        id: '',
        display_name: '',
        product: ''
    })
    const [ screen, setScreen ] = useState('loading')

    useEffect(() => {
        if (user.loggedIn) {
        setScreen('map')
        } else {
        setScreen('introduction')
        }
    }, [ user ])

    return (<div className="w-full flex items-center justify-center content-body">
        { screen === 'loading' && <Loading /> }
        { screen === 'introduction' && <Introduction user={ user } setUser={ setUser } setScreen={ setScreen } /> }
        { screen === 'map' && <Map user={ user } /> }
    </div>)
}

export default Home