import {TiTick} from 'react-icons/ti';
import {TbCurrencyDollar} from 'react-icons/tb'
export default function PriceCard({data}){
    return (
        <>
            <section className='plan-section'>
                <div className='plan grid md:grid-cols-3 mb-5'>
                    {data.map((item,index)=>{
                        return(
                            <>
                                <div className={item.highlight ? "plan-card-highlight mt-5 py-3 border xl:leading-tight mx-2":"plan-card mt-5 py-3 border xl:leading-tight mx-2"} key={index}>
                                    <p className='uppercase plan-name text-center'>{item.plan}</p>
                                    <div className="price flex text-center">
                                        <span className='mt-3'><TbCurrencyDollar/></span>
                                        <p className='card-price mt-2'>{item.price}</p>
                                        <p className='mr-2 mt-2'>p/h</p>
                                    </div>
                                    <div className="price-details">
                                        {item.details.map((items,i)=>{
                                            return(
                                                <>
                                                    <div className="price-detail flex mt-1" key={i}>
                                                        <span className='mt-1'><TiTick size={24} color={items.valid ? 'green':'red'}/></span>
                                                        <p>{items.detail}</p>
                                                    </div>
                                                </>
                                            )
                                        })}
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </section>
        </>
    )
}