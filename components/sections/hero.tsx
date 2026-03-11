"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              Creative Studio for Creators
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-balance">
              We Help Creators{" "}
              <span className="text-accent">Stand Out</span> Online
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
              High-performing thumbnails, professional video editing, and modern 
              websites designed to grow your brand and captivate your audience.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 h-12">
                <Link href="/portfolio">
                  View Portfolio
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-12">
                <Link href="/contact">
                  Get a Free Consultation
                </Link>
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-border">
              <div>
                <p className="font-display text-3xl lg:text-4xl font-bold text-foreground">500+</p>
                <p className="text-sm text-muted-foreground mt-1">Thumbnails Created</p>
              </div>
              <div>
                <p className="font-display text-3xl lg:text-4xl font-bold text-foreground">200+</p>
                <p className="text-sm text-muted-foreground mt-1">Videos Edited</p>
              </div>
              <div>
                <p className="font-display text-3xl lg:text-4xl font-bold text-foreground">50+</p>
                <p className="text-sm text-muted-foreground mt-1">Happy Clients</p>
              </div>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Main showcase card */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80 rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-primary-foreground p-8">
                    <Play className="w-16 h-16 mx-auto mb-4 opacity-80" />
                    <p className="font-display text-xl font-semibold">Creative Showcase</p>
                    <p className="text-sm opacity-70 mt-2">Thumbnails, Videos & Websites</p>
                  </div>
                </div>
              </div>
              
              {/* Floating cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-32 h-24 bg-card rounded-2xl shadow-xl p-4 border border-border"
              >
                <div className="w-full h-full bg-accent/20 rounded-lg flex items-center justify-center">
                  <span className="text-xs font-medium text-accent">Thumbnail</span>
                </div>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 w-36 h-28 bg-card rounded-2xl shadow-xl p-4 border border-border"
              >
                <div className="w-full h-full bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-xs font-medium text-primary">Video Edit</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
