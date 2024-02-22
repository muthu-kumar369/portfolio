import Card from "../../components/Card";
import Slogam from "../../components/Slogam";
import TwoColumnWithGap from "../../components/TwoColumnWithGap";
import blog from "../../public/images/blog.png";
import portifolio from "../../public/images/portfolio.png";

const slogam={
    slogam:"The person can't be prove theirself, if that person don't get chance",
}
const twoColumnWithGapData={
    // title:"truth",
    content:[
        "I am the person who can finished project earlier to deadline.I request you believe in me.Give me the chance to develop your website as you like."
    ],
    image:portifolio,
    button:"Download Resume"
}
const cardData=[
    {
        link:"/",
        image:blog,
        cardTitle:"Project Title",
        content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    },
    {
        link:"/",
        image:blog,
        cardTitle:"Project Title",
        content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    },
    {
        link:"/",
        image:blog,
        cardTitle:"Project Title",
        content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    }
]
export default function Portfolio(){
    return (
        <>
            <Slogam data={slogam}/>
            <TwoColumnWithGap data={twoColumnWithGapData}/>
            <Card data={cardData} />
        </>
    )
}