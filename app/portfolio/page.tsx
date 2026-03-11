"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/sections/cta"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

const categories = ["All", "Thumbnails", "Video Editing", "Websites"]

const portfolioItems = [
  {
    id: 1,
    title: "Tech Review Channel",
    category: "Thumbnails",
    description: "High-CTR thumbnails designed for a popular tech review channel, resulting in 40% increase in click-through rates.",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 2,
    title: "Fitness Influencer",
    category: "Video Editing",
    description: "Complete video editing package including motion graphics, transitions, and captions for a fitness influencer's YouTube channel.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "SaaS Landing Page",
    category: "Websites",
    description: "Modern, conversion-focused landing page for a B2B SaaS startup, increasing sign-ups by 65%.",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    title: "Gaming Channel",
    category: "Thumbnails",
    description: "Vibrant, eye-catching thumbnails for a gaming content creator that doubled their average view counts.",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 5,
    title: "Educational Content",
    category: "Video Editing",
    description: "Engaging educational video editing with animations, graphics, and professional pacing for online courses.",
    color: "from-amber-500 to-orange-500",
  },
  {
    id: 6,
    title: "E-commerce Store",
    category: "Websites",
    description: "Full e-commerce website with custom product pages, checkout flow, and mobile-optimized design.",
    color: "from-teal-500 to-green-500",
  },
  {
    id: 7,
    title: "Finance Channel",
    category: "Thumbnails",
    description: "Professional, trust-building thumbnails for a personal finance YouTube channel.",
    color: "from-slate-500 to-zinc-600",
  },
  {
    id: 8,
    title: "Travel Vlogger",
    category: "Video Editing",
    description: "Cinematic video editing with color grading, smooth transitions, and engaging storytelling.",
    color: "from-rose-500 to-red-500",
  },
  {
    id: 9,
    title: "Coaching Business",
    category: "Websites",
    description: "Personal brand website for a business coach with booking integration and testimonial sections.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    id: 10,
    title: "Cooking Channel",
    category: "Thumbnails",
    description: "Appetizing, colorful thumbnails that make viewers hungry and ready to click.",
    color: "from-yellow-500 to-amber-500",
  },
  {
    id: 11,
    title: "Podcast Series",
    category: "Video Editing",
    description: "Professional podcast video editing with animated captions, soundwave visualizations, and clip highlights.",
    color: "from-fuchsia-500 to-pink-500",
  },
  {
    id: 12,
    title: "Digital Agency",
    category: "Websites",
    description: "Creative agency portfolio website showcasing work with interactive elements and smooth animations.",
    color: "from-cyan-500 to-blue-500",
  },
]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null)

  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory)

  return (
    <>
      <Navigation />
      <main className="pt-24 lg:pt-32">
        {/* Header */}
        <section className="container mx-auto px-4 lg:px-8 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Our Portfolio
            </span>
            <h1 className="font-display text-4xl lg:text-5xl font-bold mb-6">
              See Our Work
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore our collection of thumbnails, video editing projects, and websites 
              we have created for creators and businesses worldwide.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap gap-3 mt-10"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                  activeCategory === category
                    ? "bg-accent text-accent-foreground shadow-lg"
                    : "bg-card border border-border text-muted-foreground hover:bg-secondary"
                )}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </section>

        {/* Portfolio Grid */}
        <section className="container mx-auto px-4 lg:px-8 pb-20">
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <button
                    onClick={() => setSelectedItem(item)}
                    className="group block w-full text-left"
                  >
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`} />
                      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6bTAtMzBWMGgtMnY0aC00djJoNHY0aDJWNmg0VjRoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRoMnYtNGg0di0ySDZ6TTYgNFYwSDR2NEgwdjJoNHY0aDJWNmg0VjRINnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                        <span className="text-white font-medium px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm">
                          View Details
                        </span>
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
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-2xl bg-card rounded-3xl overflow-hidden shadow-2xl"
              >
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
                
                <div className={`aspect-video bg-gradient-to-br ${selectedItem.color}`}>
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6bTAtMzBWMGgtMnY0aC00djJoNHY0aDJWNmg0VjRoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRoMnYtNGg0di0ySDZ6TTYgNFYwSDR2NEgwdjJoNHY0aDJWNmg0VjRINnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />
                </div>
                
                <div className="p-8">
                  <span className="text-xs font-medium text-accent uppercase tracking-wide">
                    {selectedItem.category}
                  </span>
                  <h3 className="font-display font-bold text-2xl mt-2 mb-4">
                    {selectedItem.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedItem.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
