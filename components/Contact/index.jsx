// Import neccessary pakages
import { useForm } from "react-hook-form"
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup'
import { useEffect,useState } from "react";
import { HiLocationMarker } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaWhatsappSquare } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { AiOutlineCloseCircle } from "react-icons/ai";
import {BiLoaderAlt} from 'react-icons/bi';

// schema for validate form
const schema=yup.object({
    name:yup.string().required('enter your good name !'),
    email:yup.string().email().required('enter valid email !').matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,'enter valid email !'),
    message:yup.string().required('enter message here !')
})

export default function Contact(){
    const [count,setCount]=useState(0);
    const [popup,setPopup]=useState();
    const[success,setSuccess]=useState();
    const [message,setMessage]=useState();
    const [loading,setLoading]=useState(false);
    const {register,handleSubmit,formState:{errors},reset,clearErrors}=useForm({
        resolver:yupResolver(schema)
    })

    //handle data while submit form
    const handleOnSubmit=async(data)=>{
        setLoading(true);
        const res=await fetch('/api/contact',{
            method:'POST',
            body:JSON.stringify({data}),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const resData=await res.json();
        console.log(resData)
        if(resData){
            reset();
            setSuccess(resData.status);
            setMessage(resData.message);
            setLoading(false);
            setPopup(true)
            setTimeout(()=>{
                setPopup(false)
            },4000)
        }
    }

    // Close popup
    const closePopup=()=>{
        setPopup(false)
    }
    
    const handleErrors=()=>{
        setTimeout(()=>{
            clearErrors()
        },3000)
    }
    //useeffect
    useEffect(()=>{
       const interval= setInterval(()=>{
            setCount(count+1)
        },2500)
        return ()=>clearInterval(interval)
    },[count]);
    return (
        <>
            <section className="contact-section">
                {popup &&   <div className={success ? 'p-1 popup success flex':'p-1 popup error inline-flex'}>
                                <span>{message}</span>
                                <span className='popup-close-button text-xl ' onClick={closePopup}><AiOutlineCloseCircle/></span>
                        </div>}
                <div className="grid md:grid-cols-2 contact-page ">
                    <div className="contact-details ">
                        <p className="contact-heading uppercase underline pb-5">let&apos;s connect</p>
                        <div className="flex contact-info">
                            <span className="contact-icon"><HiLocationMarker color="white" size={20}/></span>
                            <div className="address ">
                                <p className="captialize">17/109,pillaiyar kovil st</p>
                                <p className="captialize">Thachanvillai</p>
                                <p className="captialize">Tamil nadu</p>
                                <p className="captialize">India -628656</p>
                            </div>
                        </div>
                        <div className="phone flex contact-info">
                            <span className="contact-icon">{count%2==0 ? <p><BsFillTelephoneFill color="white" size={18}/></p> : <p><FaWhatsappSquare color="white" size={20}/></p>}</span>
                            <p className="phone-no uppercase">+91 63836 78796</p>
                        </div>
                        <div className="contact-mail flex contact-info">
                            <span className="contact-icon"><GrMail color="white" size={18}/></span>
                            <p className="">muthuwebdevelop@gmail.com</p>
                        </div>
                    </div>
                    <div className="form">
                        <form onSubmit={handleSubmit(handleOnSubmit)}>
                            <div className="form-input">
                                <label className="form-label" htmlFor="name">Name:</label>
                                <input {...register('name')} placeholder='enter your name' className='form-control'/>
                                <p  className="form-error">{errors?.name?.message}</p>
                            </div>
                            <div className="form-input">
                                <label className="form-label" htmlFor="email">Email</label>
                                <input className="form-control" placeholder="enter your mail" {...register('email')} />
                                <p className="form-error">{errors?.email?.message}</p>
                            </div>
                            <div className="form-input">
                                <label className="form-label" htmlFor="message">Message: </label>
                                <textarea className="form-control" placeholder="your message here" rows={1} {...register('message')} />
                                <p className="form-error">{errors?.message?.message}</p>
                            </div>
                            <div className="form-submit">
                                <button className='form-button py-2 flex' type="submit" onClick={handleErrors} >
                                    {loading && <span className="form-spinner my-auto"><BiLoaderAlt/></span>}
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}