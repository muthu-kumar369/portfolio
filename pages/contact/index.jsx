import Contact  from "../../components/Contact"
import TwoColumnWithGap from "../../components/TwoColumnWithGap"
import Slogam from "../../components/Slogam"
import truth from '../../public/images/truth.png'

const slogam={
    slogam:"We don't know about how nice persons that we are going to meet in life.I wish to be these nicest persons is you"
}
const twoColumnWithGapData={
    title:"truth",
    content:[
        "In life, we lost lot of people because of we don't know how to contact them.I wish you not to make that moment.",
        "We don't know the moment when we die,but before that we can create good connection with people as we can.Because these peoples only going to carry our thoughts.",
        "I don't know about our connection now. Atleast give me a feedback message, it help to improve myself."
    ],
    image:truth
}
export default function ContactPage(){
    return (
        <>
        <Slogam data={slogam} />
        <TwoColumnWithGap data={twoColumnWithGapData}/>
        <Contact/>
        </>
    )
}