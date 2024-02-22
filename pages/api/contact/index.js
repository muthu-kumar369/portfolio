import axios from 'axios';
const app=axios.create({
   // baseURL:'http://localhost:3002',
  baseURL:'https://muthu-portfolio.onrender.com'
})

export default async function handler(req,res) {
  if(req.method=='POST'){
    let response=await app.post('/contact/send',req.body.data);
   return res.status(200).json(response.data)
  }
}
