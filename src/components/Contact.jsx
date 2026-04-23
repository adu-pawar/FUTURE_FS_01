import React, { useState } from 'react';
import { SectionTitle, Reveal } from './ScrollReveal';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState(null); // 'loading', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus(null), 5000);
      } else {
        throw new Error(data.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Submission Error:', error);
      setStatus('error');
      setTimeout(() => setStatus(null), 5000);
    }
  };

  const contactInfo = [
    { icon: HiOutlineMail, label: 'Email', value: 'adu.pawar.1@gmail.com', href: 'mailto:adu.pawar.1@gmail.com' },
    { icon: HiOutlinePhone, label: 'Phone', value: '9226962791', href: 'tel:9226962791' },
    { icon: HiOutlineLocationMarker, label: 'Location', value: 'Baramati, Pune', href: '#' },
  ];

  return (
    <section id="contact" className="section-padding bg-slate-50 dark:bg-surface-dark/30">
      <div className="max-w-7xl mx-auto">
        <SectionTitle subtitle="Get in Touch">Contact Me</SectionTitle>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Info Side */}
          <div className="lg:col-span-1 space-y-8">
            <Reveal>
              <h3 className="text-3xl font-bold mb-6">Let's Talk!</h3>
              <p className="text-text-secondary-light dark:text-text-secondary-dark mb-8">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, idx) => (
                  <a 
                    key={idx} 
                    href={info.href}
                    className="flex items-center gap-4 glass p-4 rounded-2xl hover:border-primary-light border border-transparent transition-all"
                  >
                    <div className="p-3 rounded-xl bg-primary-light/10 text-primary-light dark:bg-primary-dark/10 dark:text-primary-dark">
                      <info.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest opacity-60">{info.label}</p>
                      <p className="font-semibold">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="pt-8">
                <p className="text-sm font-bold uppercase tracking-widest opacity-60 mb-4">Follow Me</p>
                <div className="flex gap-4">
                  {[
                    { icon: FaGithub, href: 'https://github.com/adu-pawar' },
                    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/aditya-pawar-b66b5b383/' },
                    { icon: FaInstagram, href: 'https://www.instagram.com/0_0___aadu_/' },
                  ].map((social, idx) => (
                    <a 
                      key={idx} 
                      href={social.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-4 rounded-full glass hover:bg-primary-light hover:text-white transition-all text-xl"
                    >
                      <social.icon />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-2">
            <Reveal delay={0.3}>
              <form onSubmit={handleSubmit} className="glass p-8 md:p-12 rounded-3xl space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold opacity-70 ml-1">Name</label>
                    <input
                      required
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-slate-100 dark:bg-slate-800 rounded-2xl px-6 py-4 outline-none focus:ring-2 ring-primary-light transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold opacity-70 ml-1">Email</label>
                    <input
                      required
                      type="email"
                      placeholder="email@example.com"
                      className="w-full bg-slate-100 dark:bg-slate-800 rounded-2xl px-6 py-4 outline-none focus:ring-2 ring-primary-light transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold opacity-70 ml-1">Subject</label>
                  <input
                    required
                    type="text"
                    placeholder="Project Inquiry"
                    className="w-full bg-slate-100 dark:bg-slate-800 rounded-2xl px-6 py-4 outline-none focus:ring-2 ring-primary-light transition-all"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold opacity-70 ml-1">Message</label>
                  <textarea
                    required
                    rows="6"
                    placeholder="Your message starts here..."
                    className="w-full bg-slate-100 dark:bg-slate-800 rounded-2xl px-6 py-4 outline-none focus:ring-2 ring-primary-light transition-all resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                
                <button 
                  disabled={status === 'loading'}
                  className={`w-full py-5 rounded-2xl font-bold text-lg shadow-xl transition-all ${
                    status === 'success' 
                    ? 'bg-green-500 text-white' 
                    : status === 'error'
                    ? 'bg-red-500 text-white'
                    : 'bg-primary-light text-white dark:bg-primary-dark dark:text-background-dark hover:scale-[1.02] active:scale-95'
                  }`}
                >
                  {status === 'loading' ? 'Sending...' : status === 'success' ? 'Message Sent!' : status === 'error' ? 'Failed to Send' : 'Send Message'}
                </button>

                {status === 'success' && (
                  <p className="text-center text-green-500 font-semibold animate-fade-in">
                    Thank you! I will get back to you soon.
                  </p>
                )}

                {status === 'error' && (
                  <p className="text-center text-red-500 font-semibold animate-fade-in">
                    Failed to send message. Please try again.
                  </p>
                )}
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
