import React, { useState } from 'react';
import { CalendarDays, Clock, MapPin, AlertCircle } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import Button from './ui/Button';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    experience: '',
    motivation: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        role: '',
        experience: '',
        motivation: ''
      });
    }, 1500);
  };

  return (
    <section id="register" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Register for Nhancio Hackathon 1.0"
          subtitle="Secure your spot for this exclusive AI coding event"
        />
        
        <div className="mt-16 grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2 space-y-8">
            <div className="bg-slate-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">Event Details</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <CalendarDays className="h-5 w-5 text-blue-600 mt-0.5 mr-3" />
                  <div>
                    <p className="font-medium">November 15-17, 2025</p>
                    <p className="text-sm text-gray-600">Friday to Sunday</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-blue-600 mt-0.5 mr-3" />
                  <div>
                    <p className="font-medium">48 Hours</p>
                    <p className="text-sm text-gray-600">Starts at 6:00 PM PST</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-blue-600 mt-0.5 mr-3" />
                  <div>
                    <p className="font-medium">Hybrid Format</p>
                    <p className="text-sm text-gray-600">Virtual & In-person (San Francisco)</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">Prerequisites</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Basic programming knowledge (Python/JavaScript)
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Familiarity with machine learning concepts
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Laptop with development environment
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Passion for AI and innovation
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-amber-400 to-amber-600 text-white rounded-xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4">
                <AlertCircle className="h-32 w-32 text-amber-300/30" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Early Bird Benefits</h3>
              <p className="mb-4">Register before October 15th to receive:</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Exclusive pre-hackathon workshops
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  1-on-1 mentoring session
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Priority project review
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Special swag package
                </li>
              </ul>
            </div>
          </div>
          
          <div className="md:col-span-3 bg-slate-50 rounded-xl p-6 sm:p-8 border border-gray-100">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-600 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Registration Successful!</h3>
                <p className="text-gray-600 mb-6">Thank you for registering for Nhancio's AI Hackathon 1.0. We've sent a confirmation email with further details.</p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  variant="secondary"
                >
                  Register Another Participant
                </Button>
              </div>
            ) : (
              <>
                <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center text-gray-900">
                  <span className="text-blue-600">Limited Spots Available</span> - Register Now!
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Role *
                    </label>
                    <select
                      id="role"
                      name="role"
                      required
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select your role</option>
                      <option value="developer">Software Developer</option>
                      <option value="data_scientist">Data Scientist</option>
                      <option value="designer">UX/UI Designer</option>
                      <option value="product_manager">Product Manager</option>
                      <option value="student">Student</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                      AI/ML Experience Level *
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      required
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select experience level</option>
                      <option value="beginner">Beginner (0-1 years)</option>
                      <option value="intermediate">Intermediate (1-3 years)</option>
                      <option value="advanced">Advanced (3-5 years)</option>
                      <option value="expert">Expert (5+ years)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-1">
                      Why do you want to join this hackathon? *
                    </label>
                    <textarea
                      id="motivation"
                      name="motivation"
                      rows={4}
                      required
                      value={formData.motivation}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    ></textarea>
                  </div>
                  
                  <div className="flex justify-center">
                    <Button
                      type="submit"
                      className="w-full sm:w-auto px-8"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        'Secure Your Spot'
                      )}
                    </Button>
                  </div>
                  
                  <p className="text-xs text-center text-gray-500">
                    By registering, you agree to our <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;