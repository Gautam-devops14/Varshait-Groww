"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-balance">
            We Help <span className="text-accent">Creators</span>
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            High-performing thumbnails, professional video editing, and modern 
            websites designed to grow your brand and captivate your audience.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 h-12">
              <Link href="/portfolio">
                View Portfolio
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-12">
              <Link href="/contact">
                <Calendar className="mr-2 w-4 h-4" />
                Book a Call
              </Link>
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-border max-w-2xl mx-auto">
            <div>
              <p className="font-display text-3xl lg:text-4xl font-bold text-foreground">350+</p>
              <p className="text-sm text-muted-foreground mt-1">Thumbnails Created</p>
            </div>
            <div>
              <p className="font-display text-3xl lg:text-4xl font-bold text-foreground">100+</p>
              <p className="text-sm text-muted-foreground mt-1">Videos Edited</p>
            </div>
            <div>
              <p className="font-display text-3xl lg:text-4xl font-bold text-foreground">35+</p>
              <p className="text-sm text-muted-foreground mt-1">Happy Clients</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
