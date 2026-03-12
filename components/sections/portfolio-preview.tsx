"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

// Featured thumbnails to show on home page
const featuredThumbnails = [
  { title: "Fix Before You Invest", category: "Finance", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1st-thumb-93hxw59OklVzp0ry15xJ0DlyBU6j8j.jpeg" },
  { title: "Why Traders Fail", category: "Finance", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3th-YfKe36kmczKg1YvBNChVV6EwkSHGr5.jpeg" },
  { title: "Chole Kulche Recipe", category: "Food", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11-MV7JCuZ4xYOKj3jLt4VEc4Na3Keddi.jpeg" },
]

// Featured videos to show on home page
const featuredVideos = [
  { title: "ThinkFast! Quiz Show", category: "Quiz / Interactive", videoId: "p-1GNbNp_yQ" },
  { title: "Head 2 Head - Taresh Bhatia", category: "Head 2 Head", videoId: "tcwPUQjY1kc" },
  { title: "Captain Side Gaming", category: "Gaming Content", videoId: "l-HqjfoJQYg" },
]

export function PortfolioPreview() {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Our Work
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-balance">
              Recent Projects
            </h2>
          </div>
          <Button asChild variant="outline" className="rounded-full w-fit hover:bg-primary hover:text-primary-foreground transition-colors">
            <Link href="/portfolio">
              View All Work
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </motion.div>

        {/* Thumbnails Row */}
        <div className="mb-12">
          <h3 className="font-display text-xl font-semibold mb-6">Thumbnail Design</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredThumbnails.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href="/portfolio" className="group block">
                  <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  </div>
                  <div className="mt-3">
                    <span className="text-xs font-medium text-accent uppercase tracking-wide">
                      {item.category}
                    </span>
                    <h4 className="font-display font-semibold text-lg mt-1 group-hover:text-accent transition-colors">
                      {item.title}
                    </h4>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Videos Row */}
        <div>
          <h3 className="font-display text-xl font-semibold mb-6">Video Editing</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredVideos.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background rounded-2xl overflow-hidden border border-border shadow-sm"
              >
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${item.videoId}`}
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <span className="text-xs font-medium text-accent uppercase tracking-wide">
                    {item.category}
                  </span>
                  <h4 className="font-display font-semibold text-lg mt-1">
                    {item.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
