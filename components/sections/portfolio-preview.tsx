"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const portfolioItems = [
  {
    title: "Tech Review Channel",
    category: "Thumbnail Design",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Fitness Coach",
    category: "Video Editing",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Business Website",
    category: "Website Design",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Gaming Channel",
    category: "Thumbnail Design",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Educational Content",
    category: "Video Editing",
    color: "from-amber-500 to-orange-500",
  },
  {
    title: "E-commerce Store",
    category: "Website Design",
    color: "from-teal-500 to-green-500",
  },
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
          <Button asChild variant="outline" className="rounded-full w-fit">
            <Link href="/portfolio">
              View All Work
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href="/portfolio" className="group block">
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br shadow-lg">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-90`} />
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6bTAtMzBWMGgtMnY0aC00djJoNHY0aDJWNmg0VjRoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRoMnYtNGg0di0ySDZ6TTYgNFYwSDR2NEgwdjJoNHY0aDJWNmg0VjRINnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                    <span className="text-white font-medium">View Project</span>
                  </div>
                </div>
                <div className="mt-4">
                  <span className="text-xs font-medium text-accent uppercase tracking-wide">
                    {item.category}
                  </span>
                  <h3 className="font-display font-semibold text-lg mt-1 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
