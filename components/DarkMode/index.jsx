import { useState } from "react"
import {MdLightMode,MdDarkMode} from 'react-icons/md';
import {useTheme} from 'next-themes';
export default function DarkMode(){
    const [dark,setDark]=useState(false);
    const {theme,setTheme}=useTheme('light');
    const handleDark=()=>{
        setDark(prev=>!prev);
        setTheme(theme==='dark' ? 'light':'dark')
    }
    return (
        <>
            <section className="dark-mode-section">
                <div onClick={handleDark}  className={!dark ? "dark-mode bg-gray-400 p-2 md:px-5 2xl:px-7 ":"dark-mode  bg-black p-2 md:px-5 2xl:px-7 "}>
                    <button>
                        {dark && <span className="2xl:text-4xl  text-white"> <MdLightMode/></span>}
                        {!dark && <span className={!dark ? "text-white 2xl:text-4xl":"2xl:text-4xl"}><MdDarkMode/></span>}
                    </button>
                </div>
            </section>
        </>
    )
}