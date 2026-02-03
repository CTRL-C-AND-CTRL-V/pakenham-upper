import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  HardHat, 
  Ruler, 
  Home, 
  Users, 
  Clock, 
  Shield,
  ArrowRight,
  Building2,
  Hammer,
  PaintBucket,
  Wrench,
  Star,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { motion } from 'framer-motion';

const COMPANY_INFO = {
  name: "Pakenham Upper Constructions Pty Ltd",
  phone: "0452 489 321",
  abn: "53131295317",
  email: "info@pakenhamupperconstructions.com.au",
  address: "6 Clink Rd, Pakenham Upper VIC 3810"
};



const processSteps = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "We meet to discuss your project vision, requirements, and budget to establish a clear understanding of your goals."
  },
  {
    number: "02",
    title: "Design & Planning",
    description: "Our team creates detailed plans and manages all necessary permits and approvals for your project."
  },
  {
    number: "03",
    title: "Fixed Price Quote",
    description: "Receive a comprehensive, transparent quote with no hidden costs—what you see is what you pay."
  },
  {
    number: "04",
    title: "Contract & Build",
    description: "Once approved, we begin construction with regular updates and professional project management."
  },
  {
    number: "05",
    title: "Quality Handover",
    description: "Your completed project is delivered on time, thoroughly inspected, and ready for you to enjoy."
  }
];

const whyChooseUs = [
  {
    icon: Shield,
    title: "Fully Licensed & Insured",
    description: "Complete peace of mind with comprehensive insurance coverage and proper licensing."
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We respect your time with realistic schedules and commitment to meeting deadlines."
  },
  {
    icon: Users,
    title: "Experienced Team",
    description: "Skilled tradespeople with decades of combined experience in the construction industry."
  },
  {
    icon: CheckCircle2,
    title: "Quality Guaranteed",
    description: "Premium materials and superior craftsmanship backed by our quality guarantee."
  }
];

const testimonials = [
  {
    name: "Michael Thompson",
    location: "Pakenham",
    text: "Exceptional work on our home extension. The team was professional, communicative, and delivered exactly what we envisioned. Highly recommend!",
    rating: 5
  },
  {
    name: "Sarah & David Chen",
    location: "Officer",
    text: "From design to completion, the entire process was seamless. Our new kitchen and living area exceeded all expectations. True craftsmen.",
    rating: 5
  },
  {
    name: "Robert Williams",
    location: "Berwick",
    text: "Professional, reliable, and honest. They completed our renovation on time and on budget. The quality of workmanship is outstanding.",
    rating: 5
  }
];

const projects = [
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    title: "Modern Home Extension",
    location: "Pakenham"
  },
  {
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
    title: "Kitchen Renovation",
    location: "Officer"
  },
  {
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
    title: "New Build Project",
    location: "Berwick"
  }
];

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <HardHat className="w-6 h-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <p className="font-bold text-slate-900 text-lg leading-tight">PAKENHAM UPPER</p>
                <p className="text-xs text-slate-500 tracking-wider">CONSTRUCTIONS</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('process')} className="text-slate-600 hover:text-orange-500 transition-colors font-medium">Process</button>
              <button onClick={() => scrollToSection('projects')} className="text-slate-600 hover:text-orange-500 transition-colors font-medium">Projects</button>
              <button onClick={() => scrollToSection('about')} className="text-slate-600 hover:text-orange-500 transition-colors font-medium">About</button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-600 hover:text-orange-500 transition-colors font-medium">Contact</button>
            </div>

            {/* CTA & Phone */}
            <div className="hidden md:flex items-center gap-4">
              <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center gap-2 text-slate-700 font-semibold">
                <Phone className="w-4 h-4 text-orange-500" />
                {COMPANY_INFO.phone}
              </a>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6"
              >
                Contact Us
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t border-slate-100 py-4 px-4"
          >
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('process')} className="text-left text-slate-600 hover:text-orange-500 py-2">Process</button>
              <button onClick={() => scrollToSection('projects')} className="text-left text-slate-600 hover:text-orange-500 py-2">Projects</button>
              <button onClick={() => scrollToSection('about')} className="text-left text-slate-600 hover:text-orange-500 py-2">About</button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-slate-600 hover:text-orange-500 py-2">Contact</button>
              <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center gap-2 text-orange-500 font-semibold py-2">
                <Phone className="w-4 h-4" />
                {COMPANY_INFO.phone}
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=1080&fit=crop"
            alt="Construction site"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/60" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 pb-40 sm:pb-32">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                <HardHat className="w-3 h-3 sm:w-4 sm:h-4" />
                Licensed Building Practitioners
              </span>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-snug md:leading-normal mb-4 sm:mb-6">
                Building Your Vision,
                <br />
                <span className="text-orange-500">One Brick at a Time</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-6 sm:mb-8 leading-relaxed">
                Specialising in home extensions, renovations, and new builds across Melbourne's south-east. 
                Quality craftsmanship with transparent pricing and on-time delivery.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6">
                <Button 
                  size="lg"
                  onClick={() => scrollToSection('contact')}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg w-full sm:w-auto"
                >
                  Get In Touch
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </Button>
                <Button 
                  size="lg"
                  onClick={() => scrollToSection('projects')}
                  className="bg-white text-slate-900 hover:bg-slate-100 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-semibold w-full sm:w-auto"
                >
                  View Our Work
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm border-t border-white/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 text-center">
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-white">15+</p>
                <p className="text-slate-300 text-xs sm:text-sm">Years Experience</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-white">200+</p>
                <p className="text-slate-300 text-xs sm:text-sm">Projects Completed</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-white">100%</p>
                <p className="text-slate-300 text-xs sm:text-sm">Client Satisfaction</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-white">5★</p>
                <p className="text-slate-300 text-xs sm:text-sm">Google Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Process Section */}
      <section id="process" className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-semibold tracking-wider uppercase text-sm">How We Work</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
              Our Process
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              A straightforward, transparent approach that keeps you informed every step of the way.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-center">
                  <div className="relative inline-block mb-6">
                    <span className="text-6xl font-bold text-slate-800">{step.number}</span>
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-orange-500 rounded-full" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <ChevronRight className="hidden md:block absolute top-8 -right-4 w-8 h-8 text-slate-700" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-semibold tracking-wider uppercase text-sm">Our Portfolio</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-4">
              Featured Projects
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Take a look at some of our recent work showcasing our commitment to quality and craftsmanship.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl"
              >
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-slate-300 flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-orange-500 font-semibold tracking-wider uppercase text-sm">Why Choose Us</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-6">
                Your Trusted Building Partner
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                With years of experience in the construction industry, we've built our reputation on 
                quality workmanship, transparent communication, and delivering projects that exceed expectations.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {whyChooseUs.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-slate-600 text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=1000&fit=crop"
                alt="Construction team"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-orange-500 text-white p-6 rounded-xl shadow-xl">
                <p className="text-4xl font-bold">15+</p>
                <p className="text-orange-100">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-semibold tracking-wider uppercase text-sm">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                      ))}
                    </div>
                    <p className="text-slate-600 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                    <div>
                      <p className="font-semibold text-slate-900">{testimonial.name}</p>
                      <p className="text-slate-500 text-sm">{testimonial.location}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-orange-500 font-semibold tracking-wider uppercase text-sm">Get In Touch</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Contact us today for a free quote and consultation. We're here to bring your construction vision to life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <a href={`tel:${COMPANY_INFO.phone}`} className="group">
              <Card className="border-0 bg-slate-800 hover:bg-slate-700 transition-all h-full">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500 transition-colors">
                    <Phone className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-slate-400 text-sm mb-2">Call Us</p>
                  <p className="text-white font-bold text-xl">{COMPANY_INFO.phone}</p>
                </CardContent>
              </Card>
            </a>

            <div>
              <Card className="border-0 bg-slate-800 h-full">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-orange-500" />
                  </div>
                  <p className="text-slate-400 text-sm mb-2">Visit Us</p>
                  <p className="text-white font-bold text-lg">{COMPANY_INFO.address}</p>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="border-0 bg-slate-800 h-full">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-orange-500" />
                  </div>
                  <p className="text-slate-400 text-sm mb-2">ABN</p>
                  <p className="text-white font-bold text-xl">{COMPANY_INFO.abn}</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href={`tel:${COMPANY_INFO.phone}`}>
              <Button 
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-6 text-lg"
              >
                Call for a Free Quote
                <Phone className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <HardHat className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-bold text-white text-lg">{COMPANY_INFO.name}</p>
                <p className="text-slate-400 text-sm">ABN: {COMPANY_INFO.abn}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6 text-slate-400">
              <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-orange-500 transition-colors flex items-center gap-2">
                <Phone className="w-4 h-4" />
                {COMPANY_INFO.phone}
              </a>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}