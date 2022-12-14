import React from 'react'
import { PhoneIcon, EnvelopeIcon, MapIcon} from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";

type inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

type Props = {}

function ContactMe({}: Props) {

    const { register, handleSubmit} = useForm<inputs>();
    const onSubmit: SubmitHandler<inputs> = (formData) =>{
        window.location.href = `mailto:aleardotambi6@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}  ${formData.email}`;
    };
  
    return(
        <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row
        max-w-7xl px-10 justify-evenly mx-auto items-center '>
            <h3 className='absolute top-14 uppercase tracking-[20px] text-gray-500 text-2xl '>
                Contact
            </h3>

            <div className='flex flex-col space-y-5 mt-18 '>
                <h4 className='mt-16 text-2xl font-semibold text-center'>
                    I have got just what you need?{" "}
                    <span className=' decoration-[#F7AB0A]/50 underline'>Lets Talk.</span>
                </h4>



                <div className='space-y-5'>
                    <div className='flex items-center space-x-5 justify-center'>
                        <PhoneIcon className='text-[#F7AB0A] h- w-7 animate-pulse'/>
                        <p className='text-1xl'>+07754110440</p>
                    </div>

                    <div className='flex items-center space-x-5 justify-center'>
                        <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                        <p className='text-1xl'>aleardotambi6@gmail.com</p>
                    </div>

                    <div className='flex items-center space-x-5 justify-center'>
                        <MapIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                        <p className='text-1xl'>Liverpool</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}
                     className='flex flex-col space-y-2 mx-auto max-w-xs '
                     >
                        <div className='flex space-x-2 '>
                            <input {...register('name')} placeholder='Name' className='contactInput w-40' type="text" />
                            <input {...register('email')} placeholder='Email' className='contactInput w-36' type="email" />
                        </div>
                    
                    <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />

                    <textarea {...register('message')} placeholder="Message" className='contactInput'/>

                    <button
                        type='submit'
                        className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black
                        font-bold text-lg'
                    >
                        Submit
                    </button>
                </form>


            </div>
        </div>

    );
}

export default ContactMe