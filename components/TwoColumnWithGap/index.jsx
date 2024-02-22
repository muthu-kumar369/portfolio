import Image from "next/image";
import Link from "next/link"
import {saveAs} from 'file-saver';
export default function TwoColumnWithGap({data}){
    return (
        <>
            <section className="two-column-with-gap-section">
                <div className="two-column-with-gap md:flex ">
                    <div className="left-column">
                        <div className="left-column-heading text-xl text-center uppercase">
                            <h3 className="underline">{data?.title}</h3>
                        </div>
                        <div className="left-column-contents">
                            {data?.content.map((item,index)=>{
                                return(
                                    <>
                                        <div className="left-column-content" key={index}>
                                            <p>{item}</p>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                        <div className="grid grid-cols-2 icon-with-skill">
                            {data.skills ? data.skills.map((item,index)=>{
                                    return(
                                        <>
                                            <div className="flex " key={index}>
                                                <span className='skills-icon mt-1'>{item.icon}</span>
                                                <p>{item.skill}</p>
                                            </div>
                                        </>
                                    )
                            }):""}
                        </div>
                        {data.button ? <div>
                            <Link className="left-column-button uppercase p-2 2xl:p-3" href='/files/MuthuKumar.pdf' target='_blank' download>{data.button}</Link>
                        </div>:""}
                    </div>
                    <div className="right-column w-full 2xl:w-6/12 hidden lg:block ml-8" >
                        <Image src={data.image.src} alt='image' width={650} height={250} className='h-full'></Image>
                    </div>
                </div>
            </section>
        </>
    )
}