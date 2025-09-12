"use client"

import { useState, useEffect } from "react"
import './DentistWebsite.css'
import sara from './assets/dentist/sara.jpg'
import mike from './assets/dentist/mike.jpg'
import kkk from './assets/dentist/kkk.jpg'
import dr from './assets/dentist/dr.jpg'
import d1 from './assets/dentist/d1.jpg'
import d2 from './assets/dentist/d2.jpg'
import d3 from './assets/dentist/d3.jpg'
import d4 from './assets/dentist/d4.jpg'
import d5 from './assets/dentist/d5.jpg'
import d6 from './assets/dentist/d6.jpg'
import logo from './assets/dentist/logo.png'


import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  Menu,
  X,
  SmileIcon as Tooth,
  Shield,
  Heart,
  Award,
  Calendar,
  Users,
  CheckCircle,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  Camera,
  CreditCard,
} from "lucide-react"

export default function DentistWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [appointmentForm, setAppointmentForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [expandedFAQ, setExpandedFAQ] = useState(null)
  const [isHeaderHidden, setIsHeaderHidden] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const handleAppointmentSubmit = (e) => {
    e.preventDefault()
    alert("Appointment request submitted! We'll contact you soon to confirm.")
    setAppointmentForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    })
    setSelectedDate("")
    setSelectedTime("")
  }

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index)
  }

  useEffect(() => {
    let lastScrollY = window.scrollY
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 80) {
        setIsHeaderHidden(true)
      } else {
        setIsHeaderHidden(false)
      }
      lastScrollY = window.scrollY
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Dr. Smith and her team are amazing! They made me feel comfortable during my root canal procedure. Highly recommend!",
      service: "Root Canal Treatment",
    },
    {
      name: "Michael Chen",
      rating: 5,
      text: "Best dental experience I've ever had. The office is modern and clean, and the staff is incredibly friendly.",
      service: "Teeth Cleaning",
    },
    {
      name: "Emily Rodriguez",
      rating: 5,
      text: "My smile transformation with veneers exceeded my expectations. Dr. Smith is truly an artist!",
      service: "Cosmetic Dentistry",
    },
    {
      name: "David Thompson",
      rating: 5,
      text: "Professional, caring, and efficient. They worked with my insurance and made the process seamless.",
      service: "Dental Implants",
    },
  ]
  const galleryImages = [
    { url: d1, alt: "Modern reception area", title: "Reception Area" },
    { url: d2, alt: "Treatment room", title: "Treatment Room" },
    { url: d3, alt: "Dental equipment", title: "State-of-the-art Equipment" },
    { url: d4, alt: "Waiting area", title: "Comfortable Waiting Area" },
    { url: d5, alt: "Sterilization room", title: "Sterilization Center" },
    { url: d6, alt: "Consultation room", title: "Consultation Room" },
    { url: d6, alt: "Consultation room", title: "Consultation Room" },
  ]

  const insuranceProviders = [
    "Delta Dental",
    "Blue Cross Blue Shield",
    "Cigna",
    "Aetna",
    "MetLife",
    "Guardian",
    "Humana",
    "United Healthcare",
    "Anthem",
    "Assurant",
    "Principal",
    "Sun Life",
  ]

  const faqData = [
    {
      question: "How often should I visit the dentist?",
      answer:
        "We recommend visiting every 6 months for routine cleanings and check-ups. However, some patients may need more frequent visits based on their oral health needs.",
    },
    {
      question: "Do you accept my insurance?",
      answer:
        "We accept most major dental insurance plans. Please call our office or check our insurance section below to see if we accept your specific plan.",
    },
    {
      question: "What should I expect during my first visit?",
      answer:
        "Your first visit includes a comprehensive exam, digital X-rays if needed, oral cancer screening, and a discussion of your dental health goals and any concerns.",
    },
    {
      question: "Do you offer emergency dental services?",
      answer:
        "Yes, we provide emergency dental care. If you have a dental emergency outside office hours, please call our emergency line at (555) 123-4567.",
    },
    {
      question: "What payment options do you offer?",
      answer:
        "We accept cash, credit cards, dental insurance, and offer flexible payment plans. We also work with CareCredit for financing options.",
    },
    {
      question: "Is teeth whitening safe?",
      answer:
        "Yes, professional teeth whitening is safe when performed by a dental professional. We use proven methods that protect your enamel while achieving excellent results.",
    },
  ]

  const timeSlots = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
  ]

  const services = [
    "General Cleaning",
    "Dental Exam",
    "Teeth Whitening",
    "Dental Fillings",
    "Root Canal",
    "Dental Crown",
    "Dental Implants",
    "Orthodontics",
    "Oral Surgery",
  ]

  return (
    <div>
      {/* Header */}
      <header className={`header${isHeaderHidden ? " header--hidden" : ""}`}>
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <img src={logo} alt="Dr. Smith Dental Logo" style={{ width: 150, height: 150, borderRadius: "50%" }} />
   
            </div>

            {/* Desktop Navigation */}
            <nav className="nav">
              <button onClick={() => scrollToSection("home")} className="nav-link">
                Home
              </button>
              <button onClick={() => scrollToSection("services")} className="nav-link">
                Services
              </button>
              <button onClick={() => scrollToSection("about")} className="nav-link">
                About
              </button>
              <button onClick={() => scrollToSection("testimonials")} className="nav-link">
                Reviews
              </button>
              <button onClick={() => scrollToSection("gallery")} className="nav-link">
                Gallery
              </button>
              <button onClick={() => scrollToSection("insurance")} className="nav-link">
                Insurance
              </button>
              <button onClick={() => scrollToSection("faq")} className="nav-link">
                FAQ
              </button>
              <button onClick={() => scrollToSection("contact")} className="nav-link">
                Contact
              </button>
            </nav>

            {/* Emergency Contact */}
       
            {/* Mobile Menu Button */}
            <button className="mobile-menu-btn" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`mobile-nav ${isMenuOpen ? "active" : ""}`}>
            <div className="mobile-nav-links">
              <button onClick={() => scrollToSection("home")} className="nav-link">
                Home
              </button>
              <button onClick={() => scrollToSection("services")} className="nav-link">
                Services
              </button>
              <button onClick={() => scrollToSection("about")} className="nav-link">
                About
              </button>
              <button onClick={() => scrollToSection("testimonials")} className="nav-link">
                Reviews
              </button>
              <button onClick={() => scrollToSection("gallery")} className="nav-link">
                Gallery
              </button>
              <button onClick={() => scrollToSection("insurance")} className="nav-link">
                Insurance
              </button>
              <button onClick={() => scrollToSection("faq")} className="nav-link">
                FAQ
              </button>
              <button onClick={() => scrollToSection("contact")} className="nav-link">
                Contact
              </button>
              <div style={{ paddingTop: "1rem", borderTop: "1px solid #e5e7eb" }}>
                <div className="emergency-contact">
                  <AlertCircle size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-grid">
              <div className="hero-text">
                <h2>Your Smile is Our Priority</h2>
                <p>
                  Experience exceptional dental care with our state-of-the-art facility and compassionate team. We're
                  committed to helping you achieve optimal oral health.
                </p>
                <div className="hero-buttons">
                  <button className="btn-primary" onClick={() => scrollToSection("appointment")}>
                    Book Appointment
                  </button>
                  <button className="btn-secondary" onClick={() => scrollToSection("services")}>
                    Our Services
                  </button>
                </div>
                <div className="hero-stats">
                  <div className="stat-item">
                    <Star size={20} style={{ color: "#fbbf24", fill: "#fbbf24" }} />
                    <span style={{ fontWeight: "600" }}>4.9/5</span>
                    <span style={{ color: "#6b7280" }}>(200+ reviews)</span>
                  </div>
                  <div className="stat-item">
                    <Users size={20} style={{ color: "#2C6975" }} />
                    <span style={{ color: "#6b7280" }}>5000+ Happy Patients</span>
                  </div>
                </div>
              </div>
              <div className="hero-image">
                <img src={kkk} alt="Modern dental office" />
                <div className="hero-badge">
                  <div className="badge-content">
                    <div className="badge-icon">
                      <CheckCircle size={24} style={{ color: "#16a34a" }} />
                    </div>
                    <div>
                      <p style={{ fontWeight: "600", color: "#1f2937" }}>15+ Years</p>
                      <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>Experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>Comprehensive dental care for the whole family</p>
          </div>
          <div className="services-grid">
            {[
              {
                icon: <Tooth size={32} />,
                title: "General Dentistry",
                desc: "Routine cleanings, fillings, and preventive care to maintain your oral health.",
                price: "Starting at $150",
              },
              {
                icon: <Star size={32} />,
                title: "Cosmetic Dentistry",
                desc: "Teeth whitening, veneers, and smile makeovers to enhance your appearance.",
                price: "Starting at $300",
              },
              {
                icon: <Shield size={32} />,
                title: "Orthodontics",
                desc: "Traditional braces and Invisalign to straighten your teeth and improve your bite.",
                price: "Starting at $3,500",
              },
              {
                icon: <Heart size={32} />,
                title: "Periodontal Care",
                desc: "Treatment and prevention of gum disease to maintain healthy gums.",
                price: "Starting at $200",
              },
              {
                icon: <Award size={32} />,
                title: "Oral Surgery",
                desc: "Tooth extractions, wisdom teeth removal, and other surgical procedures.",
                price: "Starting at $400",
              },
              {
                icon: <Tooth size={32} />,
                title: "Dental Implants",
                desc: "Permanent tooth replacement solutions that look and feel natural.",
                price: "Starting at $2,500",
              },
            ].map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <p className="service-price">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <img src={dr} alt="Dr. Smith" />
            </div>
            <div className="about-content">
              <h2>Meet Dr. Smith</h2>
              <p>
                With over 15 years of experience in dentistry, Dr. Smith is committed to providing exceptional dental
                care in a comfortable and welcoming environment. She graduated from Harvard School of Dental Medicine
                and has been serving the community with dedication and expertise.
              </p>
              <div className="credentials">
                <div className="credential-item">
                  <Award size={20} style={{ color: "#2C6975" }} />
                  <span>Harvard School of Dental Medicine Graduate</span>
                </div>
                <div className="credential-item">
                  <Star size={20} style={{ color: "#2C6975" }} />
                  <span>15+ Years of Experience</span>
                </div>
                <div className="credential-item">
                  <Heart size={20} style={{ color: "#2C6975" }} />
                  <span>Member of American Dental Association</span>
                </div>
                <div className="credential-item">
                  <Shield size={20} style={{ color: "#2C6975" }} />
                  <span>Board Certified in General Dentistry</span>
                </div>
              </div>

              <div className="team-section">
                <h3>Our Team</h3>
                <div className="team-grid">
                  <div className="team-member">
                    <img src={sara} alt="Sarah Johnson" />
                    <p style={{ fontWeight: "500" }}>Sarah Johnson</p>
                    <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>Dental Hygienist</p>
                  </div>
                  <div className="team-member">
                    <img src={mike} alt="Mike Chen" />
                    <p style={{ fontWeight: "500" }}>Mike Chen</p>
                    <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>Dental Assistant</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2>What Our Patients Say</h2>
            <p>Real reviews from real patients</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="star" style={{ fill: "#fbbf24" }} />
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div>
                  <p className="testimonial-author">{testimonial.name}</p>
                  <p className="testimonial-service">{testimonial.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery">
        <div className="container">
          <div className="section-header">
            <h2>Our Facility</h2>
            <p>Take a virtual tour of our modern dental office</p>
          </div>
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <div key={index} className="gallery-item">
                <img src={image.url || "/placeholder.svg"} alt={image.alt} />
                <div className="gallery-overlay">
                  <Camera size={24} style={{ color: "white" }} />
                </div>
                <div className="gallery-title">
                  <p>{image.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section id="insurance" className="insurance">
        <div className="container">
          <div className="section-header">
            <h2>Insurance & Payment</h2>
            <p>We accept most major insurance plans</p>
          </div>
          <div className="insurance-grid">
            <div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#1f2937", marginBottom: "1.5rem" }}>
                Accepted Insurance Plans
              </h3>
              <div className="insurance-providers">
                {insuranceProviders.map((provider, index) => (
                  <div key={index} className="provider-item">
                    <CheckCircle size={16} style={{ color: "#16a34a" }} />
                    <span>{provider}</span>
                  </div>
                ))}
              </div>
              <p style={{ marginTop: "1.5rem", color: "#6b7280" }}>
                Don't see your insurance? Call us at (555) 123-4567 to verify coverage.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#1f2937", marginBottom: "1.5rem" }}>
                Payment Options
              </h3>
              <div className="payment-options">
                <div className="payment-item">
                  <CreditCard size={20} style={{ color: "#2C6975" }} />
                  <div>
                    <p style={{ fontWeight: "600" }}>Credit Cards</p>
                    <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>
                      Visa, MasterCard, American Express, Discover
                    </p>
                  </div>
                </div>
                <div className="payment-item">
                  <CheckCircle size={20} style={{ color: "#16a34a" }} />
                  <div>
                    <p style={{ fontWeight: "600" }}>CareCredit</p>
                    <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>0% interest financing available</p>
                  </div>
                </div>
                <div className="payment-item">
                  <Calendar size={20} style={{ color: "#2C6975" }} />
                  <div>
                    <p style={{ fontWeight: "600" }}>Payment Plans</p>
                    <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>Flexible monthly payment options</p>
                  </div>
                </div>
                <div className="payment-item">
                  <Award size={20} style={{ color: "#2C6975" }} />
                  <div>
                    <p style={{ fontWeight: "600" }}>Cash Discount</p>
                    <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>5% discount for cash payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Get answers to common questions about our dental services</p>
          </div>
          <div className="faq-container">
            {faqData.map((faq, index) => (
              <div key={index} className="faq-item">
                <button className="faq-question" onClick={() => toggleFAQ(index)} style={{ color: '#bdb5b3' }}>
                  <span>{faq.question}</span>
                  {expandedFAQ === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {expandedFAQ === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Booking Section */}
      <section id="appointment" className="appointment">
        <div className="container">
          <div className="section-header">
            <h2>Book Your Appointment</h2>
            <p>Schedule your visit online - it's quick and easy!</p>
          </div>
          <div className="appointment-form">
            <form onSubmit={handleAppointmentSubmit} className="form-grid">
              <div className="form-row" style={{ gridTemplateColumns: "1fr 1fr" }}>
                <div className="form-group">
                  <label className="form-label" style={{ color: "var(--primary)" }}>First Name *</label>
                  <input
                    type="text"
                    required
                    value={appointmentForm.firstName}
                    onChange={(e) => setAppointmentForm({ ...appointmentForm, firstName: e.target.value })}
                    className="form-input"
                    style={{ background: "var(--background)" }}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" style={{ color: "var(--primary)" }}>Last Name *</label>
                  <input
                    type="text"
                    required
                    value={appointmentForm.lastName}
                    onChange={(e) => setAppointmentForm({ ...appointmentForm, lastName: e.target.value })}
                    className="form-input"
                    style={{ background: "var(--background)" }}
                  />
                </div>
              </div>

              <div className="form-row" style={{ gridTemplateColumns: "1fr 1fr" }}>
                <div className="form-group">
                  <label className="form-label" style={{ color: "var(--primary)" }}>Email *</label>
                  <input
                    type="email"
                    required
                    value={appointmentForm.email}
                    onChange={(e) => setAppointmentForm({ ...appointmentForm, email: e.target.value })}
                    className="form-input"
                    style={{ background: "var(--background)" }}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" style={{ color: "var(--primary)" }}>Phone *</label>
                  <input
                    type="tel"
                    required
                    value={appointmentForm.phone}
                    onChange={(e) => setAppointmentForm({ ...appointmentForm, phone: e.target.value })}
                    className="form-input"
                    style={{ background: "var(--background)" }}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" style={{ color: "var(--primary)" }}>Service Needed *</label>
                <select
                  required
                  value={appointmentForm.service}
                  onChange={(e) => setAppointmentForm({ ...appointmentForm, service: e.target.value })}
                  className="form-select"
                  style={{ background: "var(--background)" }}
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-row" style={{ gridTemplateColumns: "1fr 1fr" }}>
                <div className="form-group">
                  <label className="form-label" style={{ color: "var(--primary)" }}>Preferred Date *</label>
                  <input
                    type="date"
                    required
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                    className="form-input"
                    style={{ background: "var(--background)" }}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" style={{ color: "var(--primary)" }}>Preferred Time *</label>
                  <select
                    required
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="form-select"
                    style={{ background: "var(--background)" }}
                  >
                    <option value="">Select a time</option>
                    {timeSlots.map((time, index) => (
                      <option key={index} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" style={{ color: "var(--primary)" }}>Additional Message</label>
                <textarea
                  rows="4"
                  value={appointmentForm.message}
                  onChange={(e) => setAppointmentForm({ ...appointmentForm, message: e.target.value })}
                  placeholder="Any specific concerns or questions?"
                  className="form-textarea"
                  style={{ background: "var(--background)" }}
                ></textarea>
              </div>

              <button type="submit" className="form-submit">
                Book Appointment
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2>Contact Us</h2>
            <p>Get in touch with our friendly team</p>
          </div>
          <div className="contact-grid">
            <div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#1f2937", marginBottom: "1.5rem" }}>
                Get in Touch
              </h3>
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">
                    <Phone size={20} style={{ color: "#2C6975" }} />
                  </div>
                  <div>
                    <p style={{ fontWeight: "600" }}>Phone</p>
                    <p style={{ color: "#6b7280" }}>+212 123-456789</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <Mail size={20} style={{ color: "#2C6975" }} />
                  </div>
                  <div>
                    <p style={{ fontWeight: "600" }}>Email</p>
                    <p style={{ color: "#6b7280" }}>info@drsmithdental.com</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <MapPin size={20} style={{ color: "#2C6975" }} />
                  </div>
                  <div>
                    <p style={{ fontWeight: "600" }}>Address</p>
                    <p style={{ color: "#6b7280" }}>
                      123 Main Street  Anytown, ST 12345
                    </p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <Clock size={20} style={{ color: "#2C6975" }} />
                  </div>
                  <div>
                    <p style={{ fontWeight: "600" }}>Office Hours</p>
                    <div style={{ color: "#6b7280" }}>
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 3:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="contact-form">
                <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "1rem" }}>Send us a Message</h3>
                <form className="form-grid">
                  <div className="form-row" style={{ gridTemplateColumns: "1fr 1fr" }}>
                    <input placeholder="First Name" className="form-input" />
                    <input placeholder="Last Name" className="form-input" />
                  </div>
                  <input type="email" placeholder="Email" className="form-input" />
                  <input type="tel" placeholder="Phone" className="form-input" />
                  <select className="form-select">
                    <option>Select Subject</option>
                    <option>General Inquiry</option>
                    <option>Appointment Request</option>
                    <option>Insurance Question</option>
                    <option>Emergency</option>
                  </select>
                  <textarea placeholder="Message" rows="4" className="form-textarea"></textarea>
                  <button type="submit" className="form-submit">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <img src={logo} alt="Dr. Smith Dental Logo" style={{ width: 150, height: 150, borderRadius: "50%" }} />

              </div>
              <p style={{ color: "#d1d5db", marginBottom: "1rem" }}>
                Providing exceptional dental care with a gentle touch and modern technology for over 15 years.
              </p>
              <div style={{ display: "flex", gap: "1rem" }}>
                <div style={{ background: "#2C6975", padding: "0.5rem", borderRadius: "0.25rem" }}>
                  <Star size={16} style={{ color: "white" }} />
                </div>
                <div style={{ background: "#2C6975", padding: "0.5rem", borderRadius: "0.25rem" }}>
                  <Heart size={16} style={{ color: "white" }} />
                </div>
                <div style={{ background: "#2C6975", padding: "0.5rem", borderRadius: "0.25rem" }}>
                  <Shield size={16} style={{ color: "white" }} />
                </div>
              </div>
            </div>
            <div>
              <h4>Quick Links</h4>
              <div className="footer-links">
                <button onClick={() => scrollToSection("home")} className="footer-link">
                  Home
                </button>
                <button onClick={() => scrollToSection("services")} className="footer-link">
                  Services
                </button>
                <button onClick={() => scrollToSection("about")} className="footer-link">
                  About
                </button>
                <button onClick={() => scrollToSection("appointment")} className="footer-link">
                  Book Appointment
                </button>
              </div>
            </div>
            <div>
              <h4>Services</h4>
              <div className="footer-links">
                <p style={{ color: "#d1d5db" }}>General Dentistry</p>
                <p style={{ color: "#d1d5db" }}>Cosmetic Dentistry</p>
                <p style={{ color: "#d1d5db" }}>Orthodontics</p>
                <p style={{ color: "#d1d5db" }}>Dental Implants</p>
                <p style={{ color: "#d1d5db" }}>Emergency Care</p>
              </div>
            </div>
            <div>
              <h4>Contact Info</h4>
              <div style={{ color: "#d1d5db" }}>
                <p>123 Main Street</p>
                <p>Anytown, ST 12345</p>
                <p>(555) 123-4567</p>
                <p>info@drsmithdental.com</p>
                
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p style={{ color: "#d1d5db" }}>&copy; {new Date().getFullYear()} Dr. Smith Dental. All rights reserved.</p>
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">HIPAA Notice</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
