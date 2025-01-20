

import React, { useState } from 'react';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What is SecureAI?',
      answer: 'SecureAI specializes in advanced AI-driven security solutions designed to enhance safety and provide peace of mind. Our technology includes features like person detection, real-time alerts, video recording, and surrounding photo capture.'
    },
    {
      question: 'How does SecureAI\'s person detection work?',
      answer: 'Our AI technology uses sophisticated algorithms to accurately identify and distinguish individuals within the monitored area, ensuring precise detection and alerts.'
    },
    {
      question: 'What happens when a person is detected?',
      answer: 'When our system detects a person, it triggers an immediate alarm to notify you of potential threats. Additionally, a 30-second video clip and surrounding photos are recorded for review.'
    },
    {
      question: 'How do I receive alerts from SecureAI?',
      answer: 'Alerts are sent directly to your smartphone or other designated devices via our user-friendly app, allowing you to respond quickly to any potential threats.'
    },
    {
      question: 'Can SecureAI\'s system be integrated with other smart home devices?',
      answer: 'Yes, our systems can integrate seamlessly with other smart home devices, creating a cohesive and comprehensive security ecosystem.'
    },
    
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-black py-10 px-4 lg:px-20">
      <h2 className="text-center text-[#5CC2BC] text-2xl lg:text-3xl font-extrabold mb-8">Frequently Asked Questions</h2>
      <div className="max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 border-2 border-[#5CC2BC]  hover:border-[#fd607f] rounded-xl">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full p-4  text-white rounded-t-xl text-left font-bold text-lg  transition-all"
            >
              {faq.question}
            </button>
            {activeIndex === index && (
              <div className="p-4  text-gray-300 rounded-b-xl">
                <p className="text-base">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
