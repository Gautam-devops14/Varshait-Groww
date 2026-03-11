"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle, Calendar } from "lucide-react"
import { motion } from "framer-motion"

export function CTASection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-primary p-12 lg:p-20"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

          <div className="relative text-center">
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-primary-foreground mb-6 text-balance">
              Let&apos;s Work Together
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-10">
              Tell us about your project and we&apos;ll provide a custom quote.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                asChild 
                size="lg" 
                variant="secondary"
                className="rounded-full px-8 h-12"
              >
                <Link href="/contact">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Contact Us
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                className="rounded-full px-8 h-12 bg-transparent border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors"
              >
                <Link href="/contact">
                  <Calendar className="mr-2 w-5 h-5" />
                  Book a Meeting
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
