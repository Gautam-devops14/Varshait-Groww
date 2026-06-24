"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { Video, ImageIcon, Film, ArrowRight, Mail } from "lucide-react"

const pricingItems = [
  {
    icon: Film,
    title: "Long Form Video Editing",
    price: "1499",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Video,
    title: "Short Form Video Editing",
    price: "999",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: ImageIcon,
    title: "Thumbnail Design",
    price: "499",
    color: "from-orange-500 to-red-500",
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

        {/* Simple Pricing Cards */}
        <section className="container mx-auto px-4 lg:px-8 pb-12">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {pricingItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl border border-border p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-6`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display font-bold text-lg mb-4">{item.title}</h3>
                <div className="mb-2">
                  <span className="text-sm text-muted-foreground">Starting from</span>
                </div>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="font-display text-4xl font-bold">&#8377;{item.price}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pricing Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center text-muted-foreground text-sm mt-8 max-w-2xl mx-auto"
          >
            Final pricing depends on project complexity, video length, and specific requirements.
          </motion.p>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 lg:px-8 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-primary text-primary-foreground rounded-3xl p-8 lg:p-12 text-center"
          >
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
              {"Let's Work Together"}
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
              {"Tell us about your project and we'll provide a custom quote."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="rounded-full px-8">
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
              <Button asChild size="lg" className="rounded-full px-8 bg-transparent border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors">
                <a href="mailto:gmkicoding159@gmail.com">
                  <Mail className="mr-2 w-5 h-5" />
                  Email Us
                </a>
              </Button>
            </div>
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

        {/* Bottom CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <Mail className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-display text-2xl lg:text-3xl font-bold mb-4">
                Need a Custom Quote?
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Have a larger project or specific requirements? We offer custom packages 
                tailored to your exact needs. Get in touch for a personalized quote.
              </p>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8">
                <Link href="/contact">
                  Contact for Custom Pricing & Meeting
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
