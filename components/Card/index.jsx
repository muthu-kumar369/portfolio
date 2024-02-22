import Image from "next/image"
import Link from "next/link"

export default function Card({data}){
    return (
        <>
            <section   className="card-section">
                <div className="card-grid grid md:grid-cols-2 lg:grid-cols-3 ">
                    {data.map((item,index)=>{
                        return (
                            <>
                                <Link href={item.link} key={index}>
                                    <div className="card border rounded md:mt-4 mx-3">
                                        <div className="card-image">
                                            <Image  src={item.image.src} alt='image' width={650} height={250} />
                                        </div>
                                        <div className="card-content dark:text-white px-6 py-4">
                                            {item.cardTitle ?<p className="card-title">{item.cardTitle}</p>:''}
                                            {item.content ? <p className="text-justify">{item.content}</p> :''}
                                        </div>
                                    </div>
                                </Link>
                            </>
                        )
                    })}
                </div>
            </section>
        </>
    )
}