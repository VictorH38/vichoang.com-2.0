// components
import Circles from '/components/Circles';

// icons
import { BsArrowRight } from 'react-icons/bs';

// framer
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../../variants';

// react
import React, { useState } from 'react';

// EmailJS
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_qh0n5t8',
      'template_qxetvvr',
      e.target,
      'z8dSSxIkmmNpUjEqS'
    ).then((result) => {
      console.log(result.text);
      setConfirmationMessage('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, (error) => {
      console.log(error.text);
      setConfirmationMessage('Failed to send the message, please try again.');
    });
  };
  
  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        {/* text & form */}
        <div className='flex flex-col w-full max-w-[700px]'>
          {/* text */}
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 text-center mb-12'
          >
            Let&apos;s <span className='text-accent'>connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex-1 flex flex-col gap-6 w-full mx-auto'
          >
            {/* input group */}
            <div className='flex gap-x-6 w-full'>
              <input
                type='text'
                name='name'
                placeholder='name'
                className='input'
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type='email'
                name='email'
                placeholder='email'
                className='input'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <input
              type='text'
              name='subject'
              placeholder='subject'
              className='input'
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name='message'
              placeholder='message'
              className='textarea'
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button
              type='submit'
              className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'
            >
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
                Let&apos;s talk
              </span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
            </button>
          </motion.form>
          {confirmationMessage && (
            <div className='mt-4 text-center text-white'>
              {confirmationMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
