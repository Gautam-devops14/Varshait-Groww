"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/sections/cta"
import { motion } from "framer-motion"
import { Heart, Lightbulb, Users, Award, Target, Sparkles } from "lucide-react"

const values = [
  {
    icon: Lightbulb,
    title: "Creativity",
    description: "We bring fresh, innovative ideas to every project, ensuring your content stands out from the crowd.",
  },
  {
    icon: Award,
    title: "Quality",
    description: "We never compromise on quality. Every thumbnail, video, and website is crafted with attention to detail.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with our clients, treating every project as a partnership to achieve shared goals.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We are genuinely passionate about helping creators succeed and love what we do every day.",
  },
]

const stats = [
  { value: "500+", label: "Thumbnails Designed" },
  { value: "200+", label: "Videos Edited" },
  { value: "50+", label: "Websites Built" },
  { value: "98%", label: "Client Satisfaction" },
]

export default function AboutPage() {
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
              About Us
            </span>
            <h1 className="font-display text-4xl lg:text-5xl font-bold mb-6">
              The Creative Studio Behind Your Success
            </h1>
            <p className="text-lg text-muted-foreground">
              We are a passionate team of designers, editors, and developers dedicated to 
              helping creators and businesses build a powerful digital presence.
            </p>
          </motion.div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative aspect-square max-w-md">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-3xl" />
                  <div className="absolute inset-4 bg-primary rounded-2xl flex items-center justify-center">
                    <div className="text-center text-primary-foreground p-8">
                      <Target className="w-16 h-16 mx-auto mb-4 opacity-80" />
                      <p className="font-display text-xl font-semibold">Our Mission</p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-4 -right-4 w-24 h-24 bg-accent rounded-2xl flex items-center justify-center shadow-xl"
                  >
                    <Sparkles className="w-10 h-10 text-accent-foreground" />
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
                  Our Mission
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  At VARSHAIT Creative Studio, we believe every creator and business deserves 
                  access to professional-quality design and media services. Our mission is to 
                  empower our clients to stand out in the digital world.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We understand the challenges content creators face — the constant need for 
                  fresh thumbnails, engaging videos, and a professional online presence. That is 
                  why we have built a studio that specializes in these exact services, delivered 
                  with speed, quality, and a deep understanding of what works.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you are a YouTuber looking for thumbnails that get clicks, a business 
                  needing a website that converts, or a coach wanting professional video content, 
                  we are here to bring your vision to life.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <p className="font-display text-4xl lg:text-5xl font-bold text-accent mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                Our Values
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
                What Drives Us
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These core values guide everything we do and shape how we work with our clients.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-background rounded-2xl p-6 border border-border text-center hover:border-accent/50 transition-colors"
                >
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                Our Story
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
                From Passion to Purpose
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                VARSHAIT Creative Studio was born from a simple observation: too many talented 
                creators were struggling to get their content seen because they lacked 
                professional-quality visuals.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We started as a small team of designers and editors who were passionate about 
                helping creators succeed. Over time, we expanded our services to include website 
                design, recognizing that a strong online presence goes beyond just YouTube.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we are proud to have helped hundreds of creators and businesses achieve 
                their goals. But we are just getting started — and we would love to help you next.
              </p>
            </motion.div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
