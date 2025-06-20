import React, { useState } from 'react';
import { Mail, Phone, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';

const Contact = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Do I need a team to participate?",
      answer: "You can register individually and form teams at the event, or register with a pre-formed team of 2-5 members."
    },
    {
      question: "Is there a registration fee?",
      answer: "No, participation is completely free. We want to make this opportunity accessible to all qualified participants."
    },
    {
      question: "What resources will be provided?",
      answer: "We'll provide API access, computing resources, datasets, mentorship, and meals for in-person attendees."
    },
    {
      question: "How will projects be judged?",
      answer: "Projects will be evaluated based on innovation, technical complexity, completeness, presentation, and business potential."
    },
    {
      question: "What is the prize pool?",
      answer: "We have a total prize pool of ₹1 Lakh distributed among winning teams, along with certificates and internship opportunities."
    },
    {
      question: "Will I get a certificate?",
      answer: "Yes, all participants will receive a certificate from Nhancio, an IIT-based startup, recognizing their participation in the hackathon."
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-cyan-500 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 right-1/3 w-16 h-16 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          title="Get in Touch"
          subtitle="Have questions? We're here to help you with any inquiries about the hackathon"
        />
        
        <div className="mt-16 grid md:grid-cols-2 gap-12">
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start group hover:transform hover:scale-105 transition-all duration-300">
                  <Mail className="h-6 w-6 text-blue-400 mt-0.5 mr-4 group-hover:text-cyan-400 transition-colors" />
                  <div>
                    <p className="font-medium text-lg">Email Us</p>
                    <a href="mailto:hello@nhancio.com" className="text-blue-400 hover:text-cyan-400 hover:underline transition-colors">hello@nhancio.com</a>
                  </div>
                </div>
                
                <div className="flex items-start group hover:transform hover:scale-105 transition-all duration-300">
                  <Phone className="h-6 w-6 text-blue-400 mt-0.5 mr-4 group-hover:text-cyan-400 transition-colors" />
                  <div>
                    <p className="font-medium text-lg">Call Us</p>
                    <a href="tel:+917095288950" className="text-blue-400 hover:text-cyan-400 hover:underline transition-colors">+91 7095288950</a>
                  </div>
                </div>
                
                <div className="flex items-start group hover:transform hover:scale-105 transition-all duration-300">
                  <MapPin className="h-6 w-6 text-blue-400 mt-0.5 mr-4 group-hover:text-cyan-400 transition-colors" />
                  <div>
                    <p className="font-medium text-lg">Visit Us</p>
                    <p className="text-slate-300">Nhancio Technologies Private Limited</p>
                    <p className="text-slate-300">G2, RamLalla, Alkapuri, Manikonda</p>
                    <p className="text-slate-300">Hyderabad - 500089</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/nhancio.ai/" target="_blank" rel="noopener noreferrer" className="h-12 w-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-pink-500/25">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/nhancio/" target="_blank" rel="noopener noreferrer" className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-blue-500/25">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.youtube.com/@nhancioai" target="_blank" rel="noopener noreferrer" className="h-12 w-12 rounded-full bg-red-600 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-red-500/25">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800/50 rounded-xl p-8 backdrop-blur border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-6">Need Support?</h3>
            <p className="text-slate-300 mb-6">
              For any technical support or general inquiries, feel free to reach out to us directly.
            </p>
            <a 
              href="mailto:hello@nhancio.com" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Support
            </a>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h3>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-slate-800/30 rounded-lg border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-slate-700/20 transition-colors duration-300"
                >
                  <h4 className="font-semibold text-lg">{faq.question}</h4>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-cyan-400 transform transition-transform duration-300" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-slate-400 transform transition-transform duration-300" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 animate-fade-in">
                    <p className="text-slate-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;