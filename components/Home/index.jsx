import Link from 'next/link';
export default function HomeComponent(){
    return(
        <>
        <div className="home-component  grid md:grid-cols-2">
            <div className="home-left-column">
                <div className="home-name font-semibold text-2xl xl:text-4xl xl:leading-tight ">
                    <h3>Hi,<br/>I am <span className='name-color'>Muthu Kumar</span> <br />Web devleoper</h3>
                </div>
                <div className="decripe-ourself mt-6">
                    <p>A developer who provides static and dynamic websites with <b>React js, NEXT.js, Tailwind CSS, Bootstrap, Node.js & MongoDB</b> as you preferable.</p>
                </div>
                <div className="home-buttons mt-5">
                    <Link href="/contact">Contact</Link>
                </div>
            </div>
            <div className="home-right-column mt-5 md:mt-1 mx-auto">
                <div className="profile-image md:ml-10">
                </div>
            </div>
        </div>
        </>
    )
}