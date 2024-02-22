import Link from "next/link";
import { useRouter } from "next/router";
export default function Footer() {
    const router=useRouter();
    return (
        <>
            <section className="footer p-10 bg-gray-700 text-lg">
                <div className="footer-desktop-links  md:flex md:space-x-4 md:float-right 2xl:space-x-5">
                    <div className={router.pathname == '/' || '' ?'footer-desktop-link active 2xl:px-2':'footer-desktop-link 2xl:px-2'}>
                        <Link href="/">Home</Link>
                    </div>
                    <div className={router.pathname == '/about' ?'footer-desktop-link active 2xl:px-2':'footer-desktop-link 2xl:px-2'}>
                        <Link href="/about">About</Link>
                    </div>
                    <div className={router.pathname == '/portfolio' ?'footer-desktop-link active 2xl:px-2':'footer-desktop-link 2xl:px-2'}>
                        <Link href="/portfolio">Portfolio</Link>
                    </div>
                    <div className={router.pathname == '/myplan' ?'footer-desktop-link active 2xl:px-2':'footer-desktop-link 2xl:px-2'}>
                        <Link href="/myplan">Plan</Link>
                    </div>
                    <div className={router.pathname == '/contact' ?'footer-desktop-link active 2xl:px-2':'footer-desktop-link 2xl:px-2'}>
                        <Link href="/contact">Contact</Link>
                    </div>
                </div>
                <div className="copyright">
                    <p>copyright<span className="copyright-year">&#169;2023</span></p>
                </div>
            </section>
        </>
    )
}