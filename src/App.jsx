import { useEffect, useState } from "react"

// Utility Functions
const generateRandomString = (length) => {
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const values = crypto.getRandomValues(new Uint8Array(length))
  return values.reduce((acc, x) => acc + possible[x % possible.length], "")
}

const sha256 = async (plain) => {
  const encoder = new TextEncoder()
  const data = encoder.encode(plain)
  return window.crypto.subtle.digest('SHA-256', data)
}

const base64encode = (input) => {
  return btoa(String.fromCharCode(...new Uint8Array(input)))
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
}
// End Utility Functions

function App() {
  // Spotify API Info
  const clientId = '8084186b1b844ed0a02cb4962bd3d728'
  const redirectUri = 'http://localhost:5173/'
  const scope = 'user-read-private user-read-email'

  useEffect(() => {
    if (!window.localStorage.getItem('code_verifier')) {
      window.localStorage.setItem('code_verifier', generateRandomString(64))
    }
  }, [])

  // Trigger Spotify Authentication Window
  const spotifyAuthentication = async () => {
    const hashed = await sha256(window.localStorage.getItem('code_verifier'))
    const codeChallenge = base64encode(hashed)

    const authUrl = new URL("https://accounts.spotify.com/authorize")

    const params =  {
      response_type: 'code',
      client_id: clientId,
      scope,
      code_challenge_method: 'S256',
      code_challenge: codeChallenge,
      redirect_uri: redirectUri,
    }

    authUrl.search = new URLSearchParams(params).toString()
    window.location.href = authUrl.toString()
  }

  // Get Spotify Access Token
  const getToken = async code => {
    const payload = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: clientId,
        grant_type: 'authorization_code',
        code,
        redirect_uri: redirectUri,
        code_verifier: localStorage.getItem('code_verifier'),
      }),
    }
  
    const url = 'https://accounts.spotify.com/api/token'
    const body = await fetch(url, payload)
    const response = await body.json()
  
    localStorage.setItem('access_token', response.access_token)
    getUserData()
      .then(user => console.log(user))
  }

  // Get Spotify Account Info for Current User
  const getUserData = async () => {
    const response = await fetch("https://api.spotify.com/v1/me", {
      method: 'GET',
      headers: { 'Authorization': 'Bearer ' + localStorage.getItem('access_token') },
    })
  
    return response.json().then(data => {
      return data
    })
  }

  // Check for any Spotify Authentication info then initialize auth flow
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    let code = urlParams.get('code')
    if (!localStorage.getItem('access_token')) {
      if (code) {
        getToken(code)
      }
    } else {
      getUserData()
        .then(user => console.log(user))
    }
  }, [])

  return (
    <>
      <div className="h-screen w-full flex items-center justify-center">
        <div className="flex flex-col gap-y-4 items-center justify-center max-w-[375px]">
          <p className="font-tungsten font-bold text-4xl tracking-wide mb-0">
            HOW IT WORKS
          </p>
          <p className="font-tungsten font-normal text-xl text-center mb-2">
            Instructions or promotional text. This is where you could put instructions or promotional text. Instructions or promotional text. This is where you could put instructions or promotional text.
          </p>
          <button className="
            font-tungsten font-bold text-xl tracking-wide rounded-full border-2 py-2 px-8
            hover:cursor-pointer hover:scale-110
            transition duration-150 ease-in-out
          "
            onClick={ spotifyAuthentication }
          >
            LOGIN WITH SPOTIFY
          </button>
        </div>
      </div>
    </>
  )
}

export default App
