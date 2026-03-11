"use client"

import { MessageSquare, ClipboardList, Palette, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Contact Us",
    description: "Reach out through our contact form or WhatsApp to discuss your project needs.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Discuss Requirements",
    description: "We will have a detailed conversation about your goals, style preferences, and timeline.",
  },
  {
    number: "03",
    icon: Palette,
    title: "Design & Production",
    description: "Our team gets to work creating your thumbnails, editing your videos, or building your website.",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Delivery & Revisions",
    description: "We deliver your project and make any necessary revisions until you are 100% satisfied.",
  },
]

export function ProcessSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Our Process
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4 text-balance">
            How We Work
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A simple, streamlined process that gets you results fast
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-full h-0.5 bg-border" />
              )}
              
              <div className="relative bg-card rounded-2xl p-6 border border-border">
                <span className="font-display text-5xl font-bold text-accent/20 absolute top-4 right-4">
                  {step.number}
                </span>
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
