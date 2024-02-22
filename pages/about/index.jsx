import Slogam from "../../components/Slogam";
import TwoColumnWithGap from "../../components/TwoColumnWithGap";
import {FaReact,FaBootstrap,FaNodeJs} from 'react-icons/fa';
import {TbBrandNextjs} from 'react-icons/tb';
import {SiTailwindcss,SiMongodb} from 'react-icons/si';
import TwoColumn from "../../components/TwoColumn";
import learning1 from "../../public/images/learning1.png";
import life from "../../public/images/life.png"
const slogam={
    slogam:"The man's character created by their enviroment"
}
const date=new Date();
const age=date.getFullYear()-2001;
const twoColumnWithGapData={
    title:"learning",
    content:[
        "We don't need to afraid to technology when we are know the learning strategy.",
        "In this case, I am good learner at",
     ],
    skills:[
        {
            icon:<FaBootstrap color="darkviolet"/>,
            skill:"Boostrap"
        },
        {
            icon:<FaReact color="skyblue"/>,
            skill:"React"
        },
        {
            icon:<SiTailwindcss color="darkskyblue"/>,
            skill:"Tailwind CSS"
        },
        {
            icon:<TbBrandNextjs color="black"/>,
            skill:"NEXT.js"
        },
        {
            icon:<FaNodeJs color="darkgreen"/>,
            skill:"Node.js"
        },
        {
            icon:<SiMongodb color="darkgreen"/>,
            skill:"MongoDB"
        }
    ],
    image:learning1,
    order:"2"
}
const TwoColumnData={
    title:"My life",
    content:[
        `I'm ${age} now.When we handled hard part in life, it is the moment to make a next step in life.`,
        "But we are the one, who decided to make a next step or struck in hard part.",
        "So in this case, I am one who learn in hard part and make a next step.",
        "And I like the hardest part in life. Because, it is one which is take forward in life."
    ],
    image:life
}
export default function About(){
    return (
        <>
            <Slogam data={slogam}/>
            <TwoColumnWithGap data={twoColumnWithGapData}/>
            <TwoColumn data={TwoColumnData}/>
        </>
    )
}