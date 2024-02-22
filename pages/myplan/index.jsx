import PriceCard from "../../components/PriceCard";
import Slogam from "../../components/Slogam";
import TwoColumnWithGap from "../../components/TwoColumnWithGap";
import pricing1 from "../../public/images/price.jpg";

const slogam={
    slogam:"If we are professional in our work, then money will chase us.We don't need to chase that"
}
const twoColumnWithGapData={
    // title:"hello",
    content:[
        "I given below my plan details, but it's sample to you understand which is included.",
        "We know prices are based on project. So we will discuss about breifly when we are on call."
    ],
    image:pricing1,
}
const priceData=[
    {
        plan:"backend",
        price:'9',
        details:[
            {
                detail:'React',
                valid:false
            },
            {
                detail:'NEXT.js',
                valid:false
            },
            {
                detail:'Tailwind CSS',
                valid:false
            },
            {
                detail:'Boostrap',
                valid:false
            },
            {
                detail:'Node.js',
                valid:true
            },
            {
                detail:'MongoDB',
                valid:true
            },
            {
                detail:'Deployment',
                valid:true
            }
        ]
    },
    {
        highlight:true,
        plan:"Fullstack",
        price:'18',
        details:[
            {
                detail:'React',
                valid:true
            },
            {
                detail:'NEXT.js',
                valid:true
            },
            {
                detail:'Tailwind CSS',
                valid:true
            },
            {
                detail:'Boostrap',
                valid:true
            },
            {
                detail:'Node.js',
                valid:true
            },
            {
                detail:'MongoDB',
                valid:true
            },
            {
                detail:'Deployment',
                valid:true
            }
        ]
    },
    {
        plan:"frontend",
        price:'9',
        details:[
            {
                detail:'React',
                valid:true
            },
            {
                detail:'NEXT.js',
                valid:true
            },
            {
                detail:'Tailwind CSS',
                valid:true
            },
            {
                detail:'Boostrap',
                valid:true
            },
            {
                detail:'Node.js',
                valid:false
            },
            {
                detail:'MongoDB',
                valid:false
            },
            {
                detail:'Deployment',
                valid:true
            }
        ]
    },
    
]
export default function MyPlan(){
    return (
        <>
            <Slogam data={slogam}/>
            <TwoColumnWithGap data={twoColumnWithGapData}/>
            <PriceCard data={priceData} />
        </>
    )
}