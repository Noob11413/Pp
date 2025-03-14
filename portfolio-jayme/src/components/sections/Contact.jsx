import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from 'emailjs-com';
import { useState } from "react";

export const Contact = () => {
    const[formData, setformData] = useState ({
        name: "",
        email: "",
        message: ""
    });


    const SERVICE_ID = "service_i6xnnfd";
    const TEMPLATE_ID = "template_l56bw9w";
    const PUBLIC_KEY = "331oRxS09PEHJb1RH";
    const handleSubmit = (e) =>{

        e.preventDefault()

        emailjs.sendForm(SERVICE_ID,TEMPLATE_ID,e.target, PUBLIC_KEY).then ((result) => {   
            alert("Message sent!")
            setformData({name:"", email:"", message:""});
        }).catch(() => alert("Oops! Something went wront, Please Try again ᓚᘏᗢ"))
    }



  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 "
    >
      <RevealOnScroll>
        <div className="px-4 w-150 ">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get In touch
          </h2>
          <form className="space-y-6 " onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3
                             text-white teansition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Name..."
                onChange={(e) => setformData({...formData, name:e.target.value})}
              />
              
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3
                             text-white teansition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Example@gmail.com"
                onChange={(e) => setformData({...formData, email:e.target.value})}
              />
              
            </div>
            <div className="relative">
              <textarea
                type="message"
                id="message"
                name="message"
                value={formData.message}
                required
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3
                             text-white teansition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your Message..."
                onChange={(e) => setformData({...formData, message:e.target.value})}
              />
              
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]" >
                Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
