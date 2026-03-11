"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ImageIcon, Video, Globe } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    icon: ImageIcon,
    title: "Thumbnail Design",
    description: "Eye-catching, high-CTR thumbnails designed to maximize your YouTube growth. We create visuals that make viewers click.",
    features: ["High CTR designs", "YouTube optimized", "Fast delivery"],
    href: "/services#thumbnails",
    color: "bg-orange-500/10 text-orange-600",
    hoverColor: "group-hover:bg-orange-500",
  },
  {
    icon: Video,
    title: "Video Editing",
    description: "Professional video editing for YouTube videos, Shorts, and Reels. We add subtitles, motion graphics, and engaging pacing.",
    features: ["YouTube videos", "Shorts & Reels", "Motion graphics"],
    href: "/services#video",
    color: "bg-blue-500/10 text-blue-600",
    hoverColor: "group-hover:bg-blue-500",
  },
  {
    icon: Globe,
    title: "Website Design",
    description: "Modern, responsive websites that convert visitors into customers. Clean designs optimized for speed and SEO.",
    features: ["Responsive design", "SEO optimized", "Fast loading"],
    href: "/services#website",
    color: "bg-green-500/10 text-green-600",
    hoverColor: "group-hover:bg-green-500",
    comingSoon: true,
  },
]

export function ServicesPreview() {
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
            Our Services
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4 text-balance">
            Everything You Need to Grow
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From thumbnails that grab attention to videos that keep viewers engaged 
            and websites that convert — we have got you covered.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card rounded-3xl p-8 border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-xl"
            >
              <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6 ${service.hoverColor} transition-colors`}>
                <service.icon className={`w-8 h-8 group-hover:text-white transition-colors`} />
              </div>
              
              <div className="flex items-center gap-3 mb-3">
                <h3 className="font-display font-bold text-xl">{service.title}</h3>
                {service.comingSoon && (
                  <span className="px-2 py-0.5 rounded-full bg-accent/10 text-accent text-xs font-medium">
                    Coming Soon
                  </span>
                )}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link 
                href={service.href}
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button asChild size="lg" variant="outline" className="rounded-full px-8">
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
