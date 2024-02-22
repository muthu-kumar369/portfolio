import { BsFillChatTextFill } from 'react-icons/bs';
import { SlArrowDown } from 'react-icons/sl';
import { useState} from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BiLoaderAlt } from 'react-icons/bi';
import { FaHandPeace } from 'react-icons/fa';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const schema = yup.object({
    email: yup.string().email().required('enter your mail!').matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'enter valid email !'),
    message: yup.string().required('give your feedback!')
})
export default function FeedbackWidget() {
    const [open, setOpen] = useState(false);
    const [popup, setPopup] = useState(false);
    const [success, setSuccess] = useState();
    const [message, setMessage] = useState();
    const [loading, setLoading] = useState(false);
    const handleOpen = () => {
        setOpen(prev => !prev)
        reset();
    }
    const { register, handleSubmit, formState: { errors }, clearErrors, reset } = useForm({
        resolver: yupResolver(schema)
    })
    const handleFormSubmit = async (data) => {
        setLoading(true);
        const res = await fetch('api/feedback', {
            method: 'POST',
            body: JSON.stringify({ data }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const resData = await res.json()
        console.log(resData)
        if (resData) {
            reset();
            setSuccess(resData.status);
            setMessage(resData.message);
            setLoading(false)
            setPopup(true);
            setTimeout(() => {
                setPopup(false);
            }, 4000)
        }
    }
    //close popup message
    const closePopup = () => {
        setPopup(false)
    }

    //handle errors
    const handleErrors = () => {
        setTimeout(() => {
            clearErrors()
        }, 2000)
    }
    return (
        <>
            <section className='feedback-widget-section'>
                {popup && <div className={success ? 'p-1 popup success flex' : 'p-1 popup error inline-flex'}>
                    <p>{message}</p>
                    <p className='popup-close-button text-xl ' onClick={closePopup}><AiOutlineCloseCircle /></p>
                </div>}
                <div className="feedback-widget">
                    <div className="feedback-button p-2">
                        <button type="button" onClick={handleOpen}>
                            {!open && <div className="flex">
                                <span className='feedback-icon text-white text-xl md:mx-2'><BsFillChatTextFill /></span>
                                <span className='feedback-spell my-auto'>Feedback</span>
                            </div>}
                            {open && <span className='feedback-icon-down-arrow text-white text-lg '><SlArrowDown /></span>}
                        </button>
                    </div>
                    {open && <div className='modal'>
                        <div className="modal-form w-56 xl:w-72 ">
                            <div className="modal-content block">
                                <div className="modal-header justify-between flex py-4">
                                    <h3 className='flex mx-auto'>Hi friend  <FaHandPeace color='yellow' className='mt-1 ml-1' />!</h3>
                                    <button onClick={handleOpen}>
                                        <span className='text-white text-2xl '><AiOutlineCloseCircle /></span>
                                        <span className='sr-only'>Close modal</span>
                                    </button>
                                </div>
                                <form  onSubmit={handleSubmit(handleFormSubmit)}>
                                    <div className="modal-body 2xl:leading-10">
                                        <div className="form-input">
                                            <label htmlFor="email" className='form-label '>Email:</label>
                                            <input className='form-control' placeholder='enter your mail' {...register('email')} />
                                            <p className='form-error'>{errors?.email?.message}</p>
                                        </div>
                                        <div className="form-input">
                                            <label htmlFor="message" className='form-label '>Mesaage:</label>
                                            <textarea className='form-control mt-2' rows={1} placeholder='enter your feedback' {...register('message')} />
                                            <p className='form-error'>{errors?.message?.message}</p>
                                        </div>
                                        <div className='form-submit'>
                                            <button className="form-button flex " type="submit" onClick={handleErrors}>
                                                {loading && <span className='form-spinner text-xl my-auto'><BiLoaderAlt /></span>}
                                                Send
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>}
                </div>
            </section>
        </>
    )
}