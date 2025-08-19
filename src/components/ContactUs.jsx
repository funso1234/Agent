import React, { useEffect, useRef, useState } from 'react'
import Title from './Title'
import assets from '../assets/assets'
import { useForm, ValidationError } from "@formspree/react";

const ContactUs = () => {

 const [state, handleSubmit] = useForm("xpwlevre");
 const formRef = useRef(null);
 const [showSuccess, setShowSuccess] = useState(false);


  // Reset form when succeeded
  useEffect(() => {
    if (state.succeeded && formRef.current) {
      formRef.current.reset();
      setShowSuccess(true);

      // Hide success after 5s
      const timer = setTimeout(() => setShowSuccess(false), 5000);
      return () => clearTimeout(timer)
    }
  }, [state.succeeded]);
  

    // const onsubmit = async (event) => {
    //     event.preventDefault();
        
    //     const formData = new FormData(event.target);

    //     formData.append("access_key", "b7349c2a-109c-4d51-a156-0707d0c11ee9");

    //     try {
    //          const response = await fetch("https://web3forms.com/submit", {
    //          method: "POST",
    //          body: formData
    //          });

    //         const data = await response.json();

    //         if (data.success){
    //         toast.success('Thank you for your submission!')
    //         event.target.reset();
    //         } else {
    //          toast.error(data.message);
    //         }
    //         }catch (error){
    //         toast.error(error.message);
    //         }

       
    // }

  return (
    <div id='contact-us' className='flex flex-col items-center gap-7 px-4 sm:px-12
    lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
        <Title title='Reach out to us' desc='From strategy to execution, we craft
        digital solutions that move your business forward.'/>

        {showSuccess && (
        <p className="text-green-600 font-semibold py-2 px-2 mt-4 bg-gray-300 border dark:border-gray-900 rounded-lg">
          Thanks! We’ll get back to you soon.
        </p>
      )}

        <form ref={formRef} onSubmit={handleSubmit} className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'>
            
            <div>
                <p className='mb-2 text-sm font-medium'>Your name</p>
                <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                    <img src={assets.person_icon} alt="" />
                    <input name='name' type="text" placeholder='Enter your name' className='w-full
                    p-3 text-sm outline-none' required/>
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>
            </div>

             
            <div>
                <p className='mb-2 text-sm font-medium'>Email id</p>
                <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                    <img src={assets.email_icon} alt="" />
                    <input name='email' type="email" placeholder='Enter your email' className='w-full
                    p-3 text-sm outline-none' required/>
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
            </div>

            <div className='sm:col-span-2'>
                <p className='mb-2 text-sm font-medium'>Message</p>
                <textarea name='meassage' rows={8} placeholder='Enter your message' className='w-full
                p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600' required/>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <button type="submit" className='w-max flex gap-2 bg-primary text-white
            text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all'>
                {state.submitting ? "Sending..." : "Submit"}
                 <img src={assets.arrow_icon} alt=""  className='w-4'/>
                
            </button>

        </form>
    </div>
  )
}

export default ContactUs