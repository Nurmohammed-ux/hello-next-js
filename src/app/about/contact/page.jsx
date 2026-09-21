import Title from "@/components/Title";
import { FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="px-4 py-12 space-y-12 text-slate-300">
      
      {/* Header Banner */}
      <div className="relative bg-linear-to-r from-indigo-950/60 via-black to-slate-950 border border-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden text-center md:text-left">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black border border-slate-900 text-indigo-400 font-mono text-xs shadow-inner">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            GET_IN_TOUCH
          </div>
          <Title>Contact Info</Title>
          <p className="text-sm md:text-base text-slate-300 leading-relaxed">
            Have a question, feedback, or want to collaborate on a tech story? Reach out via the form below or drop a direct message.
          </p>
        </div>
      </div>

      {/* Main Grid: Info Cards + Contact Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Contact Details Info Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-black/80 border border-slate-900 rounded-3xl p-6 shadow-xl space-y-6">
            <h3 className="text-sm font-bold uppercase font-mono tracking-wider text-white border-b border-slate-900 pb-3">
              Direct Channels
            </h3>

            <div className="space-y-4 text-xs font-medium text-slate-400">
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-black border border-slate-900">
                <div className="w-8 h-8 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center border border-indigo-500/20">
                  <FiMail size={16} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-mono">Email</p>
                  <span className="text-slate-200">support@devstory.io</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-black border border-slate-900">
                <div className="w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20">
                  <FiMapPin size={16} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-mono">Location</p>
                  <span className="text-slate-200">San Francisco, CA</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-black border border-slate-900">
                <div className="w-8 h-8 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center border border-indigo-500/20">
                  <FiPhone size={16} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-mono">Response Time</p>
                  <span className="text-slate-200">Within 24 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-8 bg-black/80 border border-slate-900 rounded-3xl p-8 md:p-10 shadow-xl space-y-6">
          <h3 className="text-xl font-bold text-white border-b border-slate-900 pb-3">
            Send a Message
          </h3>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase tracking-wider text-slate-400">Your Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full bg-black border border-slate-900 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition shadow-inner"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase tracking-wider text-slate-400">Your Email</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full bg-black border border-slate-900 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition shadow-inner"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase tracking-wider text-slate-400">Subject</label>
              <input 
                type="text" 
                placeholder="Collaboration / Inquiry" 
                className="w-full bg-black border border-slate-900 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition shadow-inner"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase tracking-wider text-slate-400">Message</label>
              <textarea 
                rows={4} 
                placeholder="Write your message here..." 
                className="w-full bg-black border border-slate-900 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition shadow-inner resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto text-sm font-medium bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl shadow-lg shadow-indigo-600/25 transition cursor-pointer"
            >
              <FiSend size={16} />
              Send Message
            </button>
          </form>
        </div>

      </div>

    </div>
  );
};

export default Contact;