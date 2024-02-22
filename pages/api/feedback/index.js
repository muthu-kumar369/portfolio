import axios from 'axios';

const app=axios.create({
    // baseURL:'http://localhost:3002',
    baseURL:'https://muthu-portfolio.onrender.com'
})
export default async function handler(req,res){
    if(req.method=='POST'){
        const response=await app.post('feedback/send',req.body.data);
        // console.log(response)
        return res.status(200).json(response.data);
    }
}