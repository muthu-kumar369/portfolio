import Link from "next/link"
import { useRouter } from "next/router"
import { FaStream, FaRegUser } from "react-icons/fa";
import { AiOutlineCloseCircle,AiFillHome } from "react-icons/ai";
import { CgBriefcase } from "react-icons/cg";
import { GiPriceTag } from "react-icons/gi";
import { MdOutlineContactMail } from "react-icons/md";
import { useState } from "react";
export default function Navbar() {
    const router = useRouter();
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(!open)
    }
    return (
        <>
            <section className="navbar ">
                <div className="navbar-desktop hidden lg:flex">
                    <div className="navbar-desktop-name">
                        <Link href="/" className="">
                            Muthu kumar
                        </Link>
                    </div>
                    <div className="navbar-desktop-links flex space-x-4 2xl:space-x-5 ">
                        <div className={router.pathname == '/' || '' ? 'navbar-desktop-link active  dark:bg-white dark:text-black ':"navbar-desktop-link dark:bg-white dark:text-black" }>
                            <Link href="/" className="">Home</Link>
                        </div>
                        <div className={router.pathname == '/about' ? 'navbar-desktop-link active  dark:bg-white dark:text-black ':"navbar-desktop-link dark:bg-white dark:text-black"}>
                            <Link href="/about" className="">About</Link>
                        </div>
                        <div className={router.pathname == '/portfolio' ? 'navbar-desktop-link active  dark:bg-white dark:text-black ':"navbar-desktop-link dark:bg-white dark:text-black"}>
                            <Link href="/portfolio" className="">Portfolio</Link>
                        </div>
                        <div className={router.pathname == '/myplan' ? 'navbar-desktop-link active  dark:bg-white dark:text-black ':"navbar-desktop-link dark:bg-white dark:text-black"}>
                            <Link href="/myplan" className="">Plan</Link>
                        </div>
                        <div className={router.pathname == '/contact' ? 'navbar-desktop-link active  dark:bg-white dark:text-black ':"navbar-desktop-link dark:bg-white dark:text-black"}>
                            <Link href="/contact" className="">Contact</Link>
                        </div>
                    </div>
                </div>
                <div className="navbar-mobile lg:hidden">
                    <div className="navbar-mobile-menu flex pb-3">
                        <div className="name">
                            <Link href="/" className="text-xl">
                                Muthu kumar
                            </Link>
                        </div>
                        <div className='menu'>
                            <button onClick={handleOpen}>
                                <span className={open ? 'hidden' : 'open-menu'}><FaStream /></span>
                                <span className={open ? 'open-menu' : 'hidden'}><AiOutlineCloseCircle size={24} /></span>
                            </button>
                        </div>
                    </div>
                    {open &&
                        <div className="navbar-mobile-menu-item block">
                            <div className="navbar-mobile-links grid grid-cols-3 sm:grid-cols-5 gap-2">
                                <div className={router.pathname == '/'||'' ? "navbar-mobile-link active  dark:bg-white dark:text-black":"navbar-mobile-link "}>
                                    <Link href='/' className="text-center">
                                            <div className="navbar-mobile-icons"><AiFillHome /></div>
                                            <div>Home</div>
                                    </Link>
                                </div>
                                <div className={router.pathname == '/about' ? "navbar-mobile-link active  dark:bg-white dark:text-black":"navbar-mobile-link "}>
                                    <Link href='/about'>
                                            <div className="navbar-mobile-icons"><FaRegUser /></div>
                                            <div>About</div>
                                    </Link>
                                </div>
                                <div className={router.pathname == '/portfolio' ? "navbar-mobile-link active  dark:bg-white dark:text-black":"navbar-mobile-link "}>
                                    <Link href='/portfolio'>
                                            <div className="navbar-mobile-icons"><CgBriefcase /></div>
                                            <div>Portfolio</div>
                                    </Link>
                                </div>
                                <div className={router.pathname == '/myplan' ? "navbar-mobile-link active  dark:bg-white dark:text-black":"navbar-mobile-link "}>
                                    <Link href='/myplan'>
                                            <div className="navbar-mobile-icons"><GiPriceTag /></div>
                                            <div>Plan</div>
                                    </Link>
                                </div>
                                <div className={router.pathname == '/contact' ? "navbar-mobile-link active  dark:bg-white dark:text-black":"navbar-mobile-link "}>
                                    <Link href='/contact'>
                                            <div className="navbar-mobile-icons"><MdOutlineContactMail /></div>
                                            <div>Contact</div>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    }
                </div>
            </section>
        </>

    )
}