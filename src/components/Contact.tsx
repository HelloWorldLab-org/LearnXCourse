import { CheckCircle, Mail, MapPin, Phone, Send } from 'lucide-react';
import React, { useState } from 'react';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      if (res.ok) {
        setIsSubmitted(true);
        setForm({ firstName: '', lastName: '', email: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        alert('❌ Failed to send message.');
      }
    } catch (err) {
      console.error(err);
      alert('❌ Something went wrong.');
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We'd love to hear from you. Let's discuss how we can help bring
            your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl animate-fade-in">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Send us a message
            </h3>

            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2 text-green-800 animate-fade-in">
                <CheckCircle size={20} />
                <span>
                  Message sent successfully! We'll get back to you soon.
                </span>
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                    placeholder="Enter your surname"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300 resize-none"
                  placeholder="Any feedback?"
                  required
                ></textarea>
              </div>
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1">
                Send Message
                <Send size={20} />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div
            className="text-white space-y-8 animate-fade-in"
            style={{ animationDelay: '200ms' }}
          >
            <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>

            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  title: 'Email',
                  info: 'support@teamhelloworld.com'
                },
                {
                  icon: MapPin,
                  title: 'Address',
                  info:
                    'Sector V\nWest Bengal, Kolkata 700091\nIndia'
                },
                {
                  icon: Phone,
                  title: 'Phone No.',
                  info: ['+91 75959 21809', '+91 62905 83117']
                }
              ].map((contact, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 group hover:bg-white/10 p-4 rounded-xl transition-all duration-300"
                >
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl group-hover:bg-white/30 transition-colors">
                    <contact.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{contact.title}</h4>
                    {Array.isArray(contact.info) ? (
                      <p className="text-blue-100">{contact.info.join(', ')}</p>
                    ) : (
                      <p className="text-blue-100 whitespace-pre-line">
                        {contact.info}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
