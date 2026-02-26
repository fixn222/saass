import { Link } from "react-router";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { 
  Globe2, 
  Shield, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  FileCheck,
  Users,
  CreditCard,
  Star,
  Zap,
  Lock,
  Building2
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

export function Landing() {
  const countries = [
    { name: "United States", flag: "🇺🇸", types: "Tourist, Work, Student", time: "2-4 weeks", cost: "$299" },
    { name: "United Kingdom", flag: "🇬🇧", types: "Tourist, Work, Student", time: "3-6 weeks", cost: "$349" },
    { name: "Canada", flag: "🇨🇦", types: "Tourist, Work, Student", time: "2-8 weeks", cost: "$279" },
    { name: "Australia", flag: "🇦🇺", types: "Tourist, Work, Student", time: "4-8 weeks", cost: "$399" },
    { name: "Germany", flag: "🇩🇪", types: "Tourist, Work, Student", time: "2-6 weeks", cost: "$329" },
    { name: "France", flag: "🇫🇷", types: "Tourist, Work, Business", time: "2-4 weeks", cost: "$299" },
    { name: "Japan", flag: "🇯🇵", types: "Tourist, Work, Business", time: "1-3 weeks", cost: "$249" },
    { name: "Singapore", flag: "🇸🇬", types: "Tourist, Work, Business", time: "1-2 weeks", cost: "$199" },
  ];

  const steps = [
    {
      icon: Globe2,
      title: "Select Your Destination",
      description: "Choose from 150+ countries with real-time visa requirements"
    },
    {
      icon: Sparkles,
      title: "AI-Powered Guidance",
      description: "Our AI assistant walks you through every requirement step-by-step"
    },
    {
      icon: FileCheck,
      title: "Submit Documents",
      description: "Upload securely with automatic validation and formatting"
    },
    {
      icon: CheckCircle2,
      title: "Get Approved",
      description: "Track your application in real-time until approval"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Software Engineer",
      company: "Google",
      avatar: "SC",
      rating: 5,
      text: "CNI Global made my work visa process incredibly smooth. The AI assistant answered all my questions instantly, and I got approved in just 3 weeks!"
    },
    {
      name: "Michael Rodriguez",
      role: "Entrepreneur",
      company: "TechStartup Inc.",
      avatar: "MR",
      rating: 5,
      text: "As someone who travels constantly for business, CNI Global has been a game-changer. The platform is intuitive and their certified admins are top-notch."
    },
    {
      name: "Aisha Patel",
      role: "International Student",
      company: "MIT",
      avatar: "AP",
      rating: 5,
      text: "Getting my student visa was stress-free thanks to CNI Global. The step-by-step process and document checklist made everything crystal clear."
    }
  ];

  const plans = [
    {
      name: "Essential",
      price: "199",
      description: "Perfect for tourist visas",
      features: [
        "AI-powered guidance",
        "Document validation",
        "Email support",
        "Application tracking",
        "Standard processing"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "299",
      description: "Ideal for work visas",
      features: [
        "Everything in Essential",
        "Priority processing",
        "Certified admin review",
        "24/7 chat support",
        "Document preparation",
        "Interview preparation"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For teams and organizations",
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "Bulk applications",
        "Custom workflows",
        "API access",
        "Advanced analytics"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-['Inter']">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white border-0 px-4 py-1.5">
              <Sparkles className="w-3.5 h-3.5 mr-1.5" />
              AI-Powered Visa Platform
            </Badge>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-[#0F172A] mb-6 leading-tight">
              Apply for Your Visa
              <br />
              <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
                with Confidence
              </span>
            </h1>
            
            <p className="text-xl text-[#64748B] mb-10 max-w-2xl mx-auto leading-relaxed">
              Connect with certified visa administrators worldwide. Our AI-powered platform simplifies your visa application process from start to finish.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link to="/countries">
                <Button size="lg" className="bg-[#1E40AF] hover:bg-[#1E40AF]/90 text-white rounded-2xl px-8 h-14 text-lg">
                  Start Application
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/countries">
                <Button size="lg" variant="outline" className="rounded-2xl px-8 h-14 text-lg border-2">
                  Explore Countries
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-[#64748B]">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#059669]" />
                <span>Secure Payments</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#059669]" />
                <span>Global Offices</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-[#059669]" />
                <span>Certified Admins</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-[#059669]" />
                <span>256-bit Encryption</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Countries Grid */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-[#0F172A] mb-4">
              Popular Destinations
            </h2>
            <p className="text-lg text-[#64748B]">
              Apply for visas in 150+ countries worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {countries.map((country, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow cursor-pointer border-2 rounded-2xl">
                <div className="text-5xl mb-4">{country.flag}</div>
                <h3 className="text-xl font-semibold text-[#0F172A] mb-2">{country.name}</h3>
                <p className="text-sm text-[#64748B] mb-4">{country.types}</p>
                <div className="flex items-center justify-between text-sm mb-4">
                  <span className="flex items-center text-[#64748B]">
                    <Clock className="w-4 h-4 mr-1" />
                    {country.time}
                  </span>
                  <span className="font-semibold text-[#1E40AF]">{country.cost}</span>
                </div>
                <Link to="/countries">
                  <Button className="w-full bg-[#F1F5F9] text-[#1E40AF] hover:bg-[#E2E8F0] rounded-xl">
                    Apply Now
                  </Button>
                </Link>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/countries">
              <Button variant="outline" size="lg" className="rounded-2xl border-2">
                View All Countries
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-[#0F172A] mb-4">
              Simple 4-Step Process
            </h2>
            <p className="text-lg text-[#64748B]">
              From application to approval in just a few steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] flex items-center justify-center mb-4">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-[#E2E8F0] -z-10 hidden lg:block" 
                       style={{ display: index === steps.length - 1 ? 'none' : undefined }} />
                  <h3 className="text-lg font-semibold text-[#0F172A] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#64748B]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Assistant Highlight */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-white/20 border-0 text-white px-4 py-1.5">
                <Zap className="w-3.5 h-3.5 mr-1.5" />
                Powered by Advanced AI
              </Badge>
              <h2 className="text-4xl font-semibold mb-6">
                Your Personal Visa Assistant
              </h2>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                Our AI-powered assistant provides instant answers to your questions, guides you through complex requirements, and ensures your application is complete before submission.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "24/7 instant support in multiple languages",
                  "Document requirement analysis",
                  "Real-time application status updates",
                  "Personalized recommendations based on your profile"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to="/ai-assistant">
                <Button size="lg" className="bg-white text-[#4F46E5] hover:bg-white/90 rounded-2xl px-8">
                  Try AI Assistant
                  <Sparkles className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="space-y-4">
                  {/* AI Message */}
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div className="bg-white/20 rounded-2xl rounded-tl-sm p-4 flex-1">
                      <p className="text-sm text-white/90">
                        I can help you with your US work visa application. Based on your profile, you'll need an H-1B visa. Would you like me to walk you through the requirements?
                      </p>
                    </div>
                  </div>

                  {/* User Message */}
                  <div className="flex gap-3 justify-end">
                    <div className="bg-white rounded-2xl rounded-tr-sm p-4 max-w-[80%]">
                      <p className="text-sm text-[#0F172A]">
                        Yes please! What documents do I need?
                      </p>
                    </div>
                  </div>

                  {/* AI Typing */}
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div className="bg-white/20 rounded-2xl rounded-tl-sm p-4">
                      <div className="flex gap-1.5">
                        <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-[#0F172A] mb-4">
              Trusted by Thousands Worldwide
            </h2>
            <p className="text-lg text-[#64748B]">
              See what our customers have to say
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 rounded-2xl border-2">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>
                <p className="text-[#64748B] mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-[#0F172A]">{testimonial.name}</div>
                    <div className="text-sm text-[#64748B]">
                      {testimonial.role} • {testimonial.company}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-[#0F172A] mb-4">
              Transparent Pricing
            </h2>
            <p className="text-lg text-[#64748B]">
              Choose the plan that fits your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`p-8 rounded-3xl relative ${
                plan.popular 
                  ? 'border-2 border-[#1E40AF] shadow-xl' 
                  : 'border-2'
              }`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white border-0">
                    Most Popular
                  </Badge>
                )}
                
                <h3 className="text-2xl font-semibold text-[#0F172A] mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-[#64748B] mb-6">
                  {plan.description}
                </p>
                
                <div className="mb-6">
                  <span className="text-5xl font-semibold text-[#0F172A]">
                    {plan.price === "Custom" ? plan.price : `$${plan.price}`}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className="text-[#64748B] ml-2">per application</span>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#059669] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[#64748B]">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/countries">
                  <Button className={`w-full rounded-xl ${
                    plan.popular
                      ? 'bg-[#1E40AF] hover:bg-[#1E40AF]/90 text-white'
                      : 'bg-[#F1F5F9] text-[#1E40AF] hover:bg-[#E2E8F0]'
                  }`}>
                    {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 lg:px-8 bg-[#0F172A] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Join thousands of successful applicants who trusted CNI Global with their visa applications.
          </p>
          <Link to="/countries">
            <Button size="lg" className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] hover:opacity-90 text-white rounded-2xl px-8 h-14 text-lg border-0">
              Start Your Application
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
