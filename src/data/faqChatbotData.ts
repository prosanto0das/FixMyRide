export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  keywords: string[];
}

export const faqChatbotData: FAQItem[] = [
  {
    id: 1,
    question: 'What services does FixMyRide offer?',
    answer: 'FixMyRide offers a comprehensive range of automotive services including car wash, car repair, car paint, oil change & fluid check, tire services, battery replacement, doorstep servicing, and 24/7 emergency roadside assistance.',
    keywords: ['services', 'offer', 'what', 'do', 'provide', 'available', 'types']
  },
  {
    id: 2,
    question: 'Is FixMyRide available 24/7?',
    answer: 'Yes, we offer 24/7 customer support and emergency roadside assistance. You can reach us anytime for urgent automotive needs.',
    keywords: ['available', '24/7', 'hours', 'emergency', 'roadside', 'open', 'when']
  },
  {
    id: 3,
    question: 'Do you provide doorstep services?',
    answer: 'Yes, we offer convenient doorstep servicing for selected services in your area. Contact us to check if your location is covered.',
    keywords: ['doorstep', 'home', 'location', 'service', 'area', 'deliver']
  },
  {
    id: 4,
    question: 'How much do your services cost?',
    answer: 'All prices are transparent and displayed upfront before booking. We believe in no hidden charges. Contact us for a detailed quote for your specific service.',
    keywords: ['cost', 'price', 'how much', 'expensive', 'charge', 'money', 'payment', 'expensive']
  },
  {
    id: 5,
    question: 'Are your technicians certified?',
    answer: 'Yes, all our technicians are certified professionals with years of experience in automotive maintenance and repair.',
    keywords: ['certified', 'technician', 'professional', 'experience', 'qualified', 'expert']
  },
  {
    id: 6,
    question: 'Do you offer warranty on your services?',
    answer: 'Absolutely! We provide 100% satisfaction guarantee with warranty on all services performed. We stand behind our work.',
    keywords: ['warranty', 'guarantee', 'satisfaction', 'coverage', 'refund']
  },
  {
    id: 7,
    question: 'How do I book a service?',
    answer: 'You can book a service by calling us at 01715954503, emailing us, or using WhatsApp. Our team will assist you with scheduling.',
    keywords: ['book', 'booking', 'reserve', 'appointment', 'schedule', 'how']
  },
  {
    id: 8,
    question: 'What areas do you serve?',
    answer: 'We serve multiple areas in the region. For specific location inquiries, please contact us directly and we\'ll let you know if we can service your area.',
    keywords: ['area', 'serve', 'location', 'service', 'where', 'coverage']
  },
  {
    id: 9,
    question: 'How long does a typical service take?',
    answer: 'Service duration depends on the type of service. Basic services like oil change take 30-45 minutes, while major repairs may take a few hours. We\'ll provide you with an estimated timeline.',
    keywords: ['time', 'how long', 'duration', 'minutes', 'hours', 'fast', 'quick']
  },
  {
    id: 10,
    question: 'Do you offer payment plans?',
    answer: 'For major repairs and services, we can work out flexible payment arrangements. Please contact our team to discuss payment options that suit your needs.',
    keywords: ['payment', 'plan', 'installment', 'finance', 'credit']
  },
  {
    id: 11,
    question: 'Can I reschedule my appointment?',
    answer: 'Yes, absolutely! You can reschedule your appointment by contacting us at least 24 hours before your scheduled time. We\'ll be happy to find a time that works for you.',
    keywords: ['reschedule', 'change', 'appointment', 'modify', 'cancel', 'postpone']
  },
  {
    id: 12,
    question: 'What if I\'m not satisfied with the service?',
    answer: 'Your satisfaction is our priority. If you\'re not happy with the service, please contact us immediately. We\'ll work to resolve the issue and ensure you\'re completely satisfied.',
    keywords: ['satisfied', 'unhappy', 'problem', 'issue', 'complaint', 'not good', 'disappointed']
  },
  {
    id: 13,
    question: 'Do you use genuine parts?',
    answer: 'Yes, we exclusively use genuine and high-quality parts for all repairs and replacements. We believe in using the best materials to ensure your car\'s longevity and performance.',
    keywords: ['parts', 'genuine', 'quality', 'original', 'material']
  },
  {
    id: 14,
    question: 'How can I stay updated on my service?',
    answer: 'Our team will keep you updated throughout the service process via phone call or WhatsApp. You\'ll know exactly what\'s happening with your vehicle at every step.',
    keywords: ['update', 'status', 'progress', 'track', 'know', 'information']
  },
  {
    id: 15,
    question: 'What paint colors are available?',
    answer: 'For paint services, we can work with any color you prefer! Whether it\'s a custom color match, metallic finish, or matte finish - just let us know your requirements. Contact us to discuss color options and see samples.',
    keywords: ['paint', 'color', 'colours', 'shade', 'finish', 'metallic', 'matte']
  },
  {
    id: 16,
    question: 'What is the estimated time for car wash?',
    answer: 'A basic car wash typically takes 30-45 minutes. Premium wash with interior cleaning may take 45-60 minutes. Doorstep service timings are similar. Contact us for specific timing based on your car type.',
    keywords: ['wash', 'time', 'duration', 'minutes', 'how long']
  },
  {
    id: 17,
    question: 'What is the estimated time for car paint?',
    answer: 'Full body paint typically takes 2-4 days depending on the complexity. Scratch repair and touch-ups can be completed in 1-2 hours. We\'ll provide a detailed timeline after inspecting your vehicle.',
    keywords: ['paint', 'time', 'duration', 'days', 'how long', 'scratch']
  },
  {
    id: 18,
    question: 'Can I get a discount for multiple services?',
    answer: 'Yes! We offer package deals and discounts when you book multiple services together. Contact us to discuss bundle options that can save you money.',
    keywords: ['discount', 'offer', 'deal', 'multiple', 'package', 'bundle', 'save']
  }
];
