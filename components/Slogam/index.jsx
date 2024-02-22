export default function Slogam({data}){
    return (
        <>
            <section className="slogam-section">
                <div className="slogam">
                    <div className='slogam-text'>
                        <h2><span className="text-xl 2xl:text-2xl">&ldquo;</span>{data?.slogam}<span className="text-xl">&rdquo;</span></h2>
                    </div>
                </div>
            </section>
        </>
    )
}