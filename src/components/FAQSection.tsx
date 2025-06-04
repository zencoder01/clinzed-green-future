
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: "What areas do you serve?",
      answer: "We currently provide waste management services throughout Lusaka, Zambia. Our professional team ensures reliable collection and disposal services across residential, commercial, and industrial areas in the city."
    },
    {
      question: "What's included in the Individual Plan?",
      answer: "The Individual Plan at K90/month includes weekly waste collection, basic recycling service, customer support, and flexible scheduling. It's perfect for single individuals or smaller households with minimal waste generation."
    },
    {
      question: "How does the Family Plan differ from the Individual Plan?",
      answer: "The Family Plan at K190/month offers bi-weekly waste collection, full recycling service, priority customer support, large container options, and emergency pickup service. It's designed for larger households with more waste generation needs."
    },
    {
      question: "What services are included in the Business Plan?",
      answer: "Our Business Plan at K2939/month includes daily waste collection, commercial recycling, waste audits & reporting, a dedicated account manager, custom pickup schedules, and compliance management. It's tailored for businesses of all sizes."
    },
    {
      question: "Do you offer emergency or one-time cleanup services?",
      answer: "Yes! We offer an Instant Cleaner & Gardener service at K50 per hour for one-time cleanup needs. We also provide 24/7 emergency cleanup services for urgent waste removal and environmental cleanup situations."
    },
    {
      question: "What types of waste do you handle?",
      answer: "We handle residential waste, commercial waste, industrial waste (including hazardous materials with proper protocols), organic waste for composting, and recyclable materials. Our specialized services ensure safe and compliant handling of all waste types."
    },
    {
      question: "How do I sign up for services?",
      answer: "You can easily sign up by contacting us through WhatsApp at +260773813759, calling our 24/7 support line, or emailing us at info@clinzed.com. We'll help you choose the right plan and schedule your service start date."
    },
    {
      question: "Do you provide recycling services?",
      answer: "Absolutely! Recycling is a core part of our sustainability mission. We offer recycling programs with material sorting, processing facilities, and environmental reporting. Our goal is to maximize material recovery and minimize landfill waste."
    },
    {
      question: "What are your business hours?",
      answer: "Our business hours are Monday to Friday, 8AM to 6PM. However, we offer 24/7 emergency services and weekend services are available. Our support team is always ready to assist with urgent waste management needs."
    },
    {
      question: "Can I customize my pickup schedule?",
      answer: "Yes! We offer flexible scheduling options across all our plans. Whether you need weekly, bi-weekly, daily, or custom pickup frequencies, we can accommodate your specific needs and preferences."
    },
    {
      question: "How do you ensure environmental responsibility?",
      answer: "Environmental responsibility is at the core of everything we do. We employ cutting-edge technologies, maintain a 95% recycling rate, focus on sustainable practices, and continuously develop innovative solutions to reduce environmental impact."
    },
    {
      question: "Do you provide containers or bins?",
      answer: "Yes, we provide appropriate containers based on your service plan. Family and Business plans include large container options, and we ensure you have the right equipment for efficient waste collection and management."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get answers to common questions about our waste management services, 
            pricing plans, and coverage areas in Lusaka, Zambia.
          </p>
        </div>

        <div className="bg-gray-800/50 rounded-2xl p-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-gray-600 bg-gray-800/80 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-white hover:text-clinzed-green transition-colors duration-200 py-6">
                  <span className="text-lg font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-300 mb-4">
            Still have questions? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/260773813759" 
              className="bg-clinzed-green hover:bg-clinzed-darkGreen text-black font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
            >
              Chat on WhatsApp
            </a>
            <a 
              href="tel:+260773813759"
              className="bg-gray-700 hover:bg-gray-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
            >
              Call Us: +260773813759
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
