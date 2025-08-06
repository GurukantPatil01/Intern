'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
        console.error('Form submission error:', result.error);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Network error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-20" style={{ backgroundColor: '#EFECE6' }}>
      <div className="py-20" style={{ backgroundColor: '#EFECE6' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white p-8 border-2 border-[#D4D0C8] shadow-lg">
              <h2 className="text-3xl font-bold text-[#2C3E50] mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#2C3E50] mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-[#D4D0C8] focus:outline-none focus:ring-2 focus:ring-[#2C3E50] focus:border-[#2C3E50]"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#2C3E50] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-[#D4D0C8] focus:outline-none focus:ring-2 focus:ring-[#2C3E50] focus:border-[#2C3E50]"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#2C3E50] mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-[#D4D0C8] focus:outline-none focus:ring-2 focus:ring-[#2C3E50] focus:border-[#2C3E50]"
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Consultation Request">Consultation Request</option>
                    <option value="Partnership Opportunity">Partnership Opportunity</option>
                    <option value="Career Opportunities">Career Opportunities</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#2C3E50] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-[#D4D0C8] focus:outline-none focus:ring-2 focus:ring-[#2C3E50] focus:border-[#2C3E50]"
                    placeholder="Tell us about your business needs and how we can help..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#2C3E50] hover:bg-[#34495E] disabled:bg-[#B8B4AC] text-white font-semibold py-4 px-6 border-2 border-[#2C3E50] hover:border-[#34495E] disabled:border-[#B8B4AC] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg disabled:transform-none disabled:shadow-none"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                {submitStatus === 'success' && (
                  <div className="text-green-600 text-center font-medium p-4 bg-green-50 border-2 border-green-200">
                    ✓ Message sent successfully! We'll get back to you within 24-48 hours.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="text-red-600 text-center font-medium p-4 bg-red-50 border-2 border-red-200">
                    ✗ There was an error sending your message. Please try again or contact us directly.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div className="bg-white p-8 border-2 border-[#D4D0C8] shadow-lg">
              <h1 className="text-3xl font-bold text-[#2C3E50] mb-6">Get in Touch</h1>
              <p className="text-lg text-[#4A4A4A] mb-10">
                We're here to help you navigate your business challenges and achieve your strategic objectives. Reach out to us for expert guidance and support.
              </p>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#2C3E50] flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#2C3E50] mb-2">Address</h3>
                    <p className="text-[#4A4A4A]">
                      123 Business Street<br />
                      Suite 100<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#2C3E50] flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#2C3E50] mb-2">Phone</h3>
                    <p className="text-[#4A4A4A]">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#2C3E50] flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#2C3E50] mb-2">Email</h3>
                    <p className="text-[#4A4A4A]">gurukantpatil07@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="mt-16 max-w-4xl mx-auto w-full">
            <div className="w-full h-96 border-2 border-[#D4D0C8] shadow-lg overflow-hidden rounded-lg">
              <iframe
                title="Business Location"
                width="100%"
                height="100%"
                style={{ border: 0, width: '100%', height: '100%' }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBOZHJuTrKWEf9F7B97OjJ1dtAL1LrttwU&q=123+Business+Street+New+York+NY+10001"
              ></iframe>
            </div>
          </div>
          {/* End Google Map */}
        </div>
      </div>
    </div>
  );
} 