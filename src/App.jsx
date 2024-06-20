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

const Introduction = ({ user, setUser, setScreen }) => {
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
    <div className="
          flex items-center justify-center gap-x-2
          font-tungsten font-bold text-xl tracking-wide rounded-full border-2 py-2 px-8
          hover:cursor-pointer hover:scale-110
          transition duration-150 ease-in-out
      " onClick={ () => setScreen('map') }>
          <div className="mt-[1.75px]"><p className="font-tungsten">BYPASS SPOTIFY AUTHENTCATION</p></div> 
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 512 512">
              <path d="M217 401L345 273c9.4-9.4 9.4-24.6 0-33.9L217 111c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l87 87L24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l246.1 0-87 87c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0zM344 80l80 0c22.1 0 40 17.9 40 40l0 272c0 22.1-17.9 40-40 40l-80 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l80 0c48.6 0 88-39.4 88-88l0-272c0-48.6-39.4-88-88-88l-80 0c-13.3 0-24 10.7-24 24s10.7 24 24 24z"/>
          </svg>
      </div>
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
        { screen === 'introduction' && <Introduction user={ user } setUser={ setUser } setScreen={ setScreen } /> }
        { screen === 'map' && <Map user={ user } /> }
      </div>
    </>
  )
}

export default App
