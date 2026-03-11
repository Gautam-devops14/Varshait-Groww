"use client"

import { Zap, Clock, Users, Award } from "lucide-react"
import { motion } from "framer-motion"

const trustItems = [
  {
    icon: Award,
    title: "Professional Studio",
    description: "Expert designers and editors delivering premium quality work",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Quick turnaround times without compromising on quality",
  },
  {
    icon: Users,
    title: "Creator-Focused",
    description: "We understand what content creators need to grow",
  },
  {
    icon: Zap,
    title: "High Quality Work",
    description: "Every project is crafted with attention to detail",
  },
]

export function TrustSection() {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-balance">
            Trusted by Creators Worldwide
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-background rounded-2xl p-6 lg:p-8 border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <item.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
