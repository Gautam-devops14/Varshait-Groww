"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/sections/cta"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  ImageIcon, 
  Video, 
  Globe, 
  CheckCircle, 
  Zap, 
  Clock, 
  Target, 
  Smartphone, 
  BarChart, 
  Palette,
  ArrowRight
} from "lucide-react"

const services = [
  {
    id: "thumbnails",
    icon: ImageIcon,
    title: "Thumbnail Design",
    subtitle: "Get More Clicks",
    description: "Eye-catching thumbnails that make viewers stop scrolling and click. We understand the YouTube algorithm and design thumbnails optimized for maximum CTR.",
    color: "from-orange-500 to-red-500",
    features: [
      {
        icon: Target,
        title: "High CTR Design",
        description: "Data-driven designs that maximize click-through rates and get your videos seen by more people.",
      },
      {
        icon: Palette,
        title: "Custom Concepts",
        description: "Unique, branded thumbnails tailored to your channel's style and target audience.",
      },
      {
        icon: Clock,
        title: "Fast Delivery",
        description: "Quick turnaround times so you can publish your content on schedule.",
      },
      {
        icon: Zap,
        title: "Unlimited Revisions",
        description: "We work with you until the thumbnail is exactly what you envisioned.",
      },
    ],
    deliverables: [
      "High-resolution thumbnail (1280x720)",
      "Source files (PSD/AI)",
      "Alternative versions",
      "A/B testing variants",
    ],
  },
  {
    id: "video",
    icon: Video,
    title: "Video Editing",
    subtitle: "Professional Edits",
    description: "Transform your raw footage into engaging, professional videos that keep viewers watching. From YouTube long-form to Shorts and Reels, we handle it all.",
    color: "from-blue-500 to-cyan-500",
    features: [
      {
        icon: Video,
        title: "YouTube Videos",
        description: "Full editing for long-form content including cuts, transitions, color grading, and audio mixing.",
      },
      {
        icon: Smartphone,
        title: "Shorts & Reels",
        description: "Vertical video editing optimized for TikTok, YouTube Shorts, and Instagram Reels.",
      },
      {
        icon: Palette,
        title: "Motion Graphics",
        description: "Custom animations, lower thirds, intros, and visual effects to elevate your content.",
      },
      {
        icon: BarChart,
        title: "Engaging Pacing",
        description: "Strategic editing that maintains viewer attention and improves watch time.",
      },
    ],
    deliverables: [
      "Edited video in your preferred format",
      "Captions/subtitles (SRT file)",
      "Separate audio track",
      "Project files on request",
    ],
  },
  {
    id: "website",
    icon: Globe,
    title: "Website Design",
    subtitle: "Modern Websites",
    description: "Beautiful, responsive websites that convert visitors into customers. We build modern sites optimized for speed, SEO, and user experience.",
    color: "from-green-500 to-emerald-500",
    comingSoon: true,
    features: [
      {
        icon: Palette,
        title: "Clean Modern Design",
        description: "Contemporary designs that reflect your brand and impress your visitors.",
      },
      {
        icon: Smartphone,
        title: "Fully Responsive",
        description: "Looks perfect on all devices - desktop, tablet, and mobile.",
      },
      {
        icon: Zap,
        title: "Fast Loading",
        description: "Optimized performance for quick load times and better user experience.",
      },
      {
        icon: BarChart,
        title: "SEO Optimized",
        description: "Built with best practices for search engine visibility.",
      },
    ],
    deliverables: [
      "Complete website design",
      "Mobile-responsive layout",
      "Basic SEO setup",
      "Contact forms and integrations",
    ],
  },
]

export default function ServicesPage() {
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
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Our Services
            </span>
            <h1 className="font-display text-4xl lg:text-5xl font-bold mb-6">
              Everything You Need to Grow
            </h1>
            <p className="text-lg text-muted-foreground">
              From eye-catching thumbnails to professional video editing and modern websites — 
              we provide comprehensive creative services for creators and businesses.
            </p>
          </motion.div>
        </section>

        {/* Services */}
        {services.map((service, serviceIndex) => (
          <section 
            key={service.id} 
            id={service.id}
            className={`py-20 ${serviceIndex % 2 === 1 ? 'bg-card' : ''}`}
          >
            <div className="container mx-auto px-4 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                {/* Service Info */}
                <motion.div
                  initial={{ opacity: 0, x: serviceIndex % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={serviceIndex % 2 === 1 ? 'lg:order-2' : ''}
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-accent uppercase tracking-wide">
                      {service.subtitle}
                    </span>
                    {service.comingSoon && (
                      <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  <h2 className="font-display text-3xl lg:text-4xl font-bold mt-2 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {service.description}
                  </p>
                  
                  {/* Deliverables */}
                  <div className="bg-background rounded-2xl p-6 border border-border mb-8">
                    <h4 className="font-display font-semibold mb-4">What You Get:</h4>
                    <ul className="space-y-3">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-center gap-3 text-sm">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8">
                    <Link href="https://calendly.com/varshaittrade/30min">
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                  initial={{ opacity: 0, x: serviceIndex % 2 === 0 ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className={`grid sm:grid-cols-2 gap-6 ${serviceIndex % 2 === 1 ? 'lg:order-1' : ''}`}
                >
                  {service.features.map((feature, index) => (
                    <div 
                      key={feature.title}
                      className="bg-background rounded-2xl p-6 border border-border hover:border-accent/50 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                        <feature.icon className="w-6 h-6 text-accent" />
                      </div>
                      <h3 className="font-display font-semibold mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </section>
        ))}

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
