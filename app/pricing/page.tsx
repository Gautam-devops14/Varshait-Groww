"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { CheckCircle, ImageIcon, Video, Globe, ArrowRight, MessageCircle } from "lucide-react"

const pricingPlans = [
  {
    icon: ImageIcon,
    title: "Thumbnail Design",
    subtitle: "Starting at",
    price: "₹300",
    period: "per thumbnail",
    description: "Eye-catching thumbnails designed to maximize clicks and grow your channel.",
    color: "from-orange-500 to-red-500",
    features: [
      "High-resolution design (1280x720)",
      "Optimized for CTR",
      "2 revision rounds",
      "24-48 hour delivery",
      "Source files included",
    ],
    packages: [
      { name: "Single Thumbnail", price: "₹300" },
      { name: "Pack of 5", price: "₹1,250", save: "Save ₹250" },
      { name: "Pack of 10", price: "₹2,200", save: "Save ₹800" },
      { name: "Monthly (20/mo)", price: "₹3,500", save: "Best Value" },
    ],
  },
  {
    icon: Video,
    title: "Video Editing",
    subtitle: "Starting at",
    price: "₹500",
    period: "per video",
    description: "Professional editing that keeps viewers engaged and watching longer.",
    color: "from-blue-500 to-cyan-500",
    popular: true,
    features: [
      "Professional cuts & transitions",
      "Color grading & correction",
      "Background music & SFX",
      "Captions/subtitles",
      "Motion graphics",
    ],
    packages: [
      { name: "Short Video (up to 3 min)", price: "₹500" },
      { name: "Medium Video (3-10 min)", price: "₹1,500" },
      { name: "Long Video (10-20 min)", price: "₹3,000" },
      { name: "Monthly Package", price: "Custom", save: "Contact Us" },
    ],
  },
  {
    icon: Globe,
    title: "Website Design",
    subtitle: "Starting at",
    price: "₹8,000",
    period: "per project",
    description: "Modern, responsive websites that convert visitors into customers.",
    color: "from-green-500 to-emerald-500",
    features: [
      "Custom modern design",
      "Fully responsive layout",
      "SEO optimized structure",
      "Contact form integration",
      "Fast loading speed",
    ],
    packages: [
      { name: "Landing Page", price: "₹8,000" },
      { name: "Business Website (5 pages)", price: "₹15,000" },
      { name: "E-commerce Store", price: "₹25,000+" },
      { name: "Custom Project", price: "Custom", save: "Contact Us" },
    ],
  },
]

const faqs = [
  {
    question: "How long does delivery take?",
    answer: "Thumbnails are typically delivered within 24-48 hours. Video editing depends on the length and complexity, usually 3-7 days. Website projects take 1-3 weeks depending on scope.",
  },
  {
    question: "What if I need revisions?",
    answer: "All our packages include revision rounds. We work with you until you are completely satisfied with the result.",
  },
  {
    question: "Do you offer bulk discounts?",
    answer: "Yes! We offer significant savings on bulk packages and monthly retainers. Contact us for custom pricing for larger projects.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept UPI, bank transfers, and international payments via PayPal. Payment terms are discussed during the consultation.",
  },
]

export default function PricingPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 lg:pt-32">
        {/* Header */}
        <section className="container mx-auto px-4 lg:px-8 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Pricing
            </span>
            <h1 className="font-display text-4xl lg:text-5xl font-bold mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg text-muted-foreground">
              Affordable packages designed for creators and businesses of all sizes. 
              No hidden fees, no surprises.
            </p>
          </motion.div>
        </section>

        {/* Pricing Cards */}
        <section className="container mx-auto px-4 lg:px-8 pb-20">
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-card rounded-3xl border ${plan.popular ? 'border-accent shadow-xl' : 'border-border'} overflow-hidden`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-4 py-1 text-xs font-medium rounded-bl-xl">
                    Most Popular
                  </div>
                )}
                
                {/* Header */}
                <div className="p-8 pb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-6`}>
                    <plan.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-xl mb-1">{plan.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm text-muted-foreground">{plan.subtitle}</span>
                  </div>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="font-display text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="px-8 pb-6">
                  <p className="text-sm font-medium mb-4">Includes:</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Packages */}
                <div className="px-8 pb-6">
                  <p className="text-sm font-medium mb-4">Packages:</p>
                  <div className="space-y-2">
                    {plan.packages.map((pkg) => (
                      <div key={pkg.name} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                        <span className="text-sm">{pkg.name}</span>
                        <div className="text-right">
                          <span className="font-semibold text-sm">{pkg.price}</span>
                          {pkg.save && (
                            <span className="block text-xs text-accent">{pkg.save}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="p-8 pt-4">
                  <Button 
                    asChild 
                    className={`w-full rounded-full ${plan.popular ? 'bg-accent hover:bg-accent/90 text-accent-foreground' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    <Link href="/contact">
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Custom Quote CTA */}
        <section className="container mx-auto px-4 lg:px-8 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-3xl p-8 lg:p-12 border border-border text-center"
          >
            <MessageCircle className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="font-display text-2xl lg:text-3xl font-bold mb-4">
              Need a Custom Quote?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Have a larger project or specific requirements? We offer custom packages 
              tailored to your exact needs. Get in touch for a personalized quote.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8">
              <Link href="/contact">
                Contact for Custom Quote
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                FAQ
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold">
                Common Questions
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto grid gap-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-background rounded-2xl p-6 border border-border"
                >
                  <h4 className="font-display font-semibold text-lg mb-2">{faq.question}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
