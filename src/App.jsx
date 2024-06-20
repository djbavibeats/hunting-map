import { useEffect, useState } from "react"

import Navbar from './Navbar'
import Spotify from "./Spotify"
import Map from "./Map"

import Logo from '../public/images/logo.png'
import WageWar from '../public/images/wage-war.png'

const Loading = () => {
  return (<>
  </>)
}

const Introduction = ({ user, setUser }) => {
  return (<div>
  <div className="flex flex-col gap-y-4 items-center justify-center max-w-[375px]">
    <div className="flex flex-col items-center">
      <img className="w-[150px] mb-2" src={ WageWar } />
      <p className="font-geizer text-[4rem] leading-none">HAPPY HUNTING</p>
      <p className="font-tungsten text-[1.75rem] leading-none tracking-wide">INTERACTIVE EXPERIENCE</p>
    </div>

    <p className="font-tungsten font-bold text-[1.75rem] tracking-normal mb-0">
      HOW IT WORKS
    </p>
    <p className="font-tungsten font-normal text-xl text-center mb-2">
      Instructions or promotional text. This is where you could put instructions or promotional text. Instructions or promotional text. This is where you could put instructions or promotional text.
    </p>
    <Spotify user={ user } setUser={ setUser } />

  </div>
  <div className="h-20 absolute flex items-center justify-center bottom-0 left-0 right-0 m-auto">
    <img className="w-[50px]" src={ Logo } />
  </div>
  </div>)
}

function App() {
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


  return (
    <>
      <Navbar />
      <div className="h-screen w-full flex items-center justify-center">
        { screen === 'loading' && <Loading /> }
        { screen === 'introduction' && <Introduction user={ user } setUser={ setUser } /> }
        { screen === 'map' && <Map user={ user } /> }
      </div>
    </>
  )
}

export default App
