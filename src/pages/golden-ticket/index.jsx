import { useState, useEffect, useRef } from 'react'
import Youtube from 'react-youtube'

import Logo from '../../../public/images/logo.png'
import WageWar from '../../../public/images/wage-war.png'

const VideoPlayer = () => {
    const [ size, setSize ] = useState({ x: 0, y: 0 })
    const [ videoDimensions, setVideoDimensions ] = useState({ x: 350, y: 196.875 })
    const VIDEO_URL = import.meta.env.VITE_VIDEO_URL

    const handleSizeChange = () => { setSize({ x: window.innerWidth, y: window.innerHeight }) }

    useEffect(() => {
        // Set default window size
        setSize({ x: window.innerWidth, y: window.innerHeight })

        // Add event listener for resize
        window.addEventListener('resize', handleSizeChange)

        // Remove event listener
        return () => { window.removeEventListener('resize', handleSizeChange) }
    }, [])

    useEffect(() => { 
        // Desktop video size
        if (size.x > 1024) {
            setVideoDimensions({
                x: 800,
                y: 450
            })
        // Tablet video size
        } else if (size.x < 1024 && size.x > 800) {
            setVideoDimensions({
                x: 600,
                y: 337.5
            })
        // Mobile video size
        } else {
            setVideoDimensions({
                x: 350,
                y: 196.875
            })
        }
    }, [ size ])
    return (<>   
        <p className="font-tungsten font-bold text-[1.75rem] tracking-normal mb-0">
            THANK YOU
        </p>
        <p className="font-tungsten font-normal text-2xl text-center mb-2">
            Enjoy the video.
        </p>
        <div style={{
            height: videoDimensions.y + 'px',
            width: videoDimensions.x + 'px'
        }}
        >
            <video controls="controls" controlsList="nodownload" height={ `100%` } width={ `100%` } className="h-full w-full">
                <source src={ VIDEO_URL } type="video/mp4"></source>
            </video> 
        </div>
    </>)
}

const SubmissionForm = ({ setFormSubmitted }) => {
    const [ loading, setLoading ] = useState(false)
    const file = useRef()
    const [ formFields, setFormFields ] = useState({
        "firstName": "",
        "lastName": "",
        "location": "",
        "email": "",
        "imageFileName": "default",
        "optin": false
    })
    const [ error, setError ] = useState(false)
    const [ errorText, setErrorText ] = useState("")
    console.log('this is line 39')
    const DROPBOX_REFRESH_TOKEN = import.meta.env.VITE_DROPBOX_REFRESH_TOKEN
    const DROPBOX_APP_KEY = import.meta.env.VITE_DROPBOX_APP_KEY
    const DROPBOX_APP_SECRET = import.meta.env.VITE_DROPBOX_APP_SECRET
    const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL
    function submitForm() {
        if (!formFields.firstName || !formFields.lastName || !formFields.location || !formFields.email || !file.current.files[0]) {
            setError(true)
            setErrorText("Please make sure you've filled out the whole form!")
        } else {
            const formElement = document.querySelector("form")
            const formData = new FormData(formElement)
            setLoading(true)
            fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                body: formData
            })
            .then((res) => { res.text() })
            .then((data) => {
                fetch("https://api.dropbox.com/oauth2/token", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Authorization': 'Basic ' + btoa(`${DROPBOX_APP_KEY}:${DROPBOX_APP_SECRET}`)
                    },
                    body: `grant_type=refresh_token&refresh_token=${DROPBOX_REFRESH_TOKEN}`
                }).then(data => data.json())
                    .then(response => {
                        fetch("https://content.dropboxapi.com/2/files/upload", {
                            method: "POST",
                            mode: "cors",
                            headers: {
                                "Authorization": `Bearer ${response.access_token}`,
                                "Content-Type": "application/octet-stream",
                                "Dropbox-API-Arg": JSON.stringify({
                                    "path": `/Wage War Hunting Uploads/${formFields.firstName}-${formFields.lastName}-${file.current.files[0].name}`,
                                    "mode": "add",
                                    "autorename": true,
                                    "mute": false,
                                    "strict_conflict": false
                                })
                            },
                            body: file.current.files[0]
                        })
                        .then(resp => {
                            if (resp.status === 200) {
                                setLoading(false)
                                setFormSubmitted(true)
                                window.localStorage.setItem('form_submitted', true)
                            } else {
                                alert("Something went wrong and we were unable to process your request. Please try again")
                                setLoading(false)
                            }
                        })
                    })
            })
        }
    }

    return (<div className="">
        <p className="font-tungsten font-bold text-[1.75rem] tracking-normal text-center mb-0">
            FILL OUT THE FORM
        </p>
        <p className="font-tungsten font-normal text-2xl text-center mb-2">
            Then you can enjoy the video.
        </p>
        {
            error &&
            <p className="text-red font-bold font-tungsten text-2xl text-center mb-2">
                { errorText }
            </p>
        }
        {
            loading &&
                <div className="z-50 min-h-[250px] h-screen w-screen flex items-center justify-center absolute top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.4)] text-yellow text-center">
                    <div role="status">
                        <svg aria-hidden="true" className="w-8 h-8 text-black animate-spin fill-yellow" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
        } 
        <form id="form-container" className="min-h-[250px] ">
            <div className="flex gap-x-2 mb-2">
                <input 
                    className="w-1/2 bg-[rgba(0,0,0,0)] border px-2 py-2 outline-none font-tungsten font-normal text-2xl placeholder-black"
                    required 
                    placeholder="First Name"
                    name="firstName" 
                    value={ formFields.firstName } 
                    onChange={ (e) => setFormFields({ ...formFields, firstName: e.target.value }) } 
                />
                <input 
                    className="w-1/2 bg-[rgba(0,0,0,0)] border px-2 py-2 outline-none font-tungsten font-normal text-2xl placeholder-black"
                    required 
                    placeholder="Last Name"
                    name="lastName" 
                    value={ formFields.lastName } 
                    onChange={ (e) => setFormFields({ ...formFields, lastName: e.target.value }) } 
                />
            </div>
            <div className="flex gap-x-2 mb-2">
                <input
                    className="w-full bg-[rgba(0,0,0,0)] border px-2 py-2 outline-none font-tungsten font-normal text-2xl placeholder-black"
                    required
                    placeholder="Location"
                    name="location"
                    value={ formFields.location }
                    onChange={ (e) => setFormFields({ ...formFields, location: e.target.value }) }
                />
            </div>
            <div className="flex gap-x-2 mb-4">
                <input 
                    className="w-full bg-[rgba(0,0,0,0)] border px-2 py-2 outline-none font-tungsten font-normal text-2xl placeholder-black"
                    required
                    placeholder="Email"
                    name="email"
                    value={ formFields.email }
                    onChange={ (e) => setFormFields({ ...formFields, email: e.target.value }) }
                />
            </div>
            <div className="flex flex-col gap-x-2 gap-y-2 mb-4 items-start">
                <p className="font-tungsten text-2xl">Please upload a photo of the box you found.</p>
                <div className={`input-group max-w-[350px]`}>
                    {/* <label 
                        className="input-group-text font-tungsten px-8 py-2 rounded-full text-2xl text-[#d2c551] bg-black" 
                        htmlFor="file"
                    >
                        Browse
                    </label> */}
                    <input 
                        required
                        ref={ file } 
                        id="file" 
                        type="file" 
                        name="file"
                        onChange={() => {
                            setFormFields({ ...formFields, 
                                imageFileName: `${formFields.firstName}-${formFields.lastName}-${file.current.files[0].name}`
                            })
                        }}
                        className="form-control font-tungsten text-2xl"
                    >
                    </input>
                </div>
            </div>
            <input name="imageFileName" value={ formFields.imageFileName } hidden readOnly />
            <div className="flex gap-x-2 mb-4 items-center">
                <input 
                    name="optin"
                    value={ formFields.optin }
                    checked={ formFields.optin }
                    type="checkbox"
                    onChange={ (e) => {
                        setFormFields({ ...formFields, optin: !formFields.optin })
                    }}
                    className="
                        relative peer shrink-0
                        appearance-none
                        w-4 h-4 border-2 rounded-sm bg-transparent
                        mt-1
                        checked:bg-black checked:fill-yellow
                        hover:cursor-pointer
                    "
                />
                <svg
                    className="absolute w-4 h-4 mt-[0.3rem] hidden peer-checked:block pointer-events-none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#f4ee3e"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <p className="font-tungsten text-2xl mt-[0.20rem]">Send me cool updates and stuff from Wage War.</p>
            </div>
            <div className="flex justify-center gap-x-2 mb-2">
                <div
                    className="
                        flex items-center justify-center gap-x-2
                        font-tungsten font-bold text-xl tracking-wide rounded-full border-2 py-2 px-8
                        hover:cursor-pointer hover:scale-110
                        transition duration-150 ease-in-out
                    " 
                    onClick={ submitForm }>
                        <div className="mt-[1.75px]"><p className="font-tungsten">SUBMIT</p></div> 
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 512 512">
                            <path d="M217 401L345 273c9.4-9.4 9.4-24.6 0-33.9L217 111c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l87 87L24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l246.1 0-87 87c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0zM344 80l80 0c22.1 0 40 17.9 40 40l0 272c0 22.1-17.9 40-40 40l-80 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l80 0c48.6 0 88-39.4 88-88l0-272c0-48.6-39.4-88-88-88l-80 0c-13.3 0-24 10.7-24 24s10.7 24 24 24z"/>
                        </svg>
                    </div>
            </div>
        </form>
    </div>)
}
function GoldenTicket() {
    const [ formSubmitted, setFormSubmitted ] = useState(false)
    useEffect(() => {
        if (localStorage.getItem('form_submitted') === 'true') {
            setFormSubmitted(true)
        }
    }, [])
    
    return (<div className="w-full flex items-center justify-center content-body">
        <div>
            <div className="flex flex-col gap-y-4 items-center justify-center max-w-[375px] mt-8 h-full">
            
                <div className="flex flex-col items-center justify-center mb-0 md:mb-0">
                    <img className="w-[100px] md:w-[150px] mb-2" src={ WageWar } />
                    <p className="font-geizer text-center text-[3rem] md:text-[4rem] leading-none">HAPPY HUNTING</p>
                    <p className="font-tungsten text-center text-[1.5rem] md:text-[1.75rem] leading-none tracking-wide">INTERACTIVE EXPERIENCE</p>
                </div>
                {
                    formSubmitted ? 
                        <VideoPlayer /> 
                        : <SubmissionForm setFormSubmitted={ setFormSubmitted } />
                }
            </div>
            <div className="h-20 flex items-center justify-center bottom-0 left-0 right-0 m-auto">
                <img className="w-[50px]" src={ Logo } />
            </div>
        </div>
    </div>)
}

export default GoldenTicket