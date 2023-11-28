import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { ServiceId, TemplateId } from '@/utils/formData';

export default function ContactIndex() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(null);
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(ServiceId, TemplateId, form.current, TemplateId).then(
      (result) => {
        console.log(result.text);
        setFormSubmitted(true);
      },
      (error) => {
        console.log(error.text);
        setFormError(true);
      }
    );
  };

  useEffect(() => {
    if (formSubmitted && form.current) {
      setTimeout(() => {
        form.current.reset();
        setFormSubmitted(false);
      }, 3000);
    }
  }, [formSubmitted]);
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col gap-10 justify-center items-center w-full  text-theme-base"
    >
      <h1 className=" text-4xl lg:text-6xl font-basement text-theme-accent">Ready to get in Touch?</h1>
      <hr className="w-full border-theme-base " />
      {formError && (
        <motion.div
          transition={{ duration: 0.5, delay: 0.5 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p className="text-center text-lg mt-5 text-rose-600">
            Something went wrong! Please try again later.
          </p>
        </motion.div>
      )}

      {formSubmitted ? (
        <motion.div
          transition={{ duration: 0.5, delay: 0.5 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p className="text-center text-green-500 text-xl lg:mt-40 mt-20 mb-20 ">
            Thank you for your message! We&apos;ll get back to you shortly!
          </p>
        </motion.div>
      ) : (
        <form
          method="POST"
          ref={form}
          onSubmit={() => sendEmail()}
          className="w-full flex-col flex gap-10"
        >
          <div className="border-b-theme-muted border-b">
            <label htmlFor="name" className="text-2xl">
              Whats your name?
            </label>
            <input
              name="user_name"
              require="required"
              type="text"
              className="w-full  h-16 p-2 text-xl focus:outline-none bg-theme-base rounded-md"
              id="name"
              placeholder="Judah Benjamin Sullivan"
            />
          </div>
          <div className="border-b-theme-muted border-b">
            <label htmlFor="email" className="text-2xl">
              Whats your email?
            </label>
            <input
              type="text"
              name="user_email"
              required="required"
              className="w-full  h-16 p-2 text-xl focus:outline-none bg-theme-base rounded-md"
              id="email"
              placeholder="judahsullivan.dev@gmail.com"
            />
          </div>
          <div className="border-b-theme-muted border-b">
            <label htmlFor="message" className="text-2xl">
              Your Message
            </label>
            <textarea
              rows="8"
              required="required"
              name="message"
              type="text"
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none bg-cool-darker text-cool-beige text-2xl font-bold"
              id="message"
              placeholder="Hello Judah, I would like to reach out..."
            />
          </div>
          <button type="submit">Send Your Message!</button>
        </form>
      )}
    </section>
  );
}
