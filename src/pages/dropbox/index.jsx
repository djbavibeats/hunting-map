import { useEffect } from "react"

export default function Dropbox() {
    const DROPBOX_APP_KEY = import.meta.env.VITE_DROPBOX_APP_KEY
    const DROPBOX_APP_SECRET = import.meta.env.VITE_DROPBOX_APP_SECRET

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search)
        let code = urlParams.get('code')

        if (code) {
            console.log('this is a redirect', code)
            fetch('https://api.dropbox.com/oauth2/token', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
                  'Authorization': 'Basic ' + btoa(`${DROPBOX_APP_KEY}:${DROPBOX_APP_SECRET}`)
                },
                body: `code=${code}&grant_type=authorization_code&redirect_uri=http://localhost:5173/dropbox`
            }).then(data => data.json())
                .then(response => {
                    console.log("Response", response)
                })
        } else {
            console.log('no code')
        }
    }, [])

    const openDropboxAuthWindow = () => {
        const authUrl = new URL("https://www.dropbox.com/oauth2/authorize")
        const params =  {
            client_id:              DROPBOX_APP_KEY,
            redirect_uri:           'http://localhost:5173/dropbox',
            response_type:          'code',
            token_access_type:      'offline'
        }
        authUrl.search = new URLSearchParams(params).toString()
        window.location.href = authUrl.toString()
    }

    const dropboxAuthentication = () => {
      console.log('test')
      const urlParams = new URLSearchParams(window.location.search)
      let code = urlParams.get('code')
    }
    
    return (<div className="w-full flex-col flex items-center justify-center content-body">
        <button 
            className="bg-black border text-white px-4 py-2 rounded-full" 
            onClick={ openDropboxAuthWindow }
        >
            Authenticate Dropbox
        </button>
    </div>)
}