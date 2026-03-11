"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/sections/cta"
import { motion, AnimatePresence } from "framer-motion"
import { X, ExternalLink, Monitor, Smartphone } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const mainCategories = ["All", "Thumbnails", "Video Editing", "Websites"]

// Thumbnail subcategories
const thumbnailCategories = ["All Thumbnails", "Gaming", "Educational", "Podcast", "Finance / Business"]

// Video subcategories  
const videoCategories = ["All Videos", "Quiz / Interactive", "Podcast / Interview", "Gaming Content", "Explainer / Educational", "Short Form / Reels"]

// Thumbnail portfolio items with subcategories
const thumbnailItems = [
  { id: 1, title: "Epic Gaming Moments", subcategory: "Gaming", caption: "High CTR YouTube Thumbnail Design", color: "from-purple-600 to-pink-500" },
  { id: 2, title: "Battle Royale Highlights", subcategory: "Gaming", caption: "High CTR YouTube Thumbnail Design", color: "from-red-500 to-orange-500" },
  { id: 3, title: "Minecraft Build Challenge", subcategory: "Gaming", caption: "High CTR YouTube Thumbnail Design", color: "from-green-500 to-emerald-500" },
  { id: 4, title: "Learn Python Basics", subcategory: "Educational", caption: "High CTR YouTube Thumbnail Design", color: "from-blue-500 to-cyan-500" },
  { id: 5, title: "Math Made Easy", subcategory: "Educational", caption: "High CTR YouTube Thumbnail Design", color: "from-indigo-500 to-purple-500" },
  { id: 6, title: "History Documentary", subcategory: "Educational", caption: "High CTR YouTube Thumbnail Design", color: "from-amber-500 to-orange-500" },
  { id: 7, title: "Tech Talk Episode", subcategory: "Podcast", caption: "High CTR YouTube Thumbnail Design", color: "from-slate-600 to-zinc-500" },
  { id: 8, title: "Entrepreneur Stories", subcategory: "Podcast", caption: "High CTR YouTube Thumbnail Design", color: "from-teal-500 to-cyan-500" },
  { id: 9, title: "Stock Market Analysis", subcategory: "Finance / Business", caption: "High CTR YouTube Thumbnail Design", color: "from-green-600 to-emerald-500" },
  { id: 10, title: "Crypto Explained", subcategory: "Finance / Business", caption: "High CTR YouTube Thumbnail Design", color: "from-yellow-500 to-orange-500" },
  { id: 11, title: "Real Estate Tips", subcategory: "Finance / Business", caption: "High CTR YouTube Thumbnail Design", color: "from-blue-600 to-indigo-500" },
  { id: 12, title: "Budget Planning Guide", subcategory: "Finance / Business", caption: "High CTR YouTube Thumbnail Design", color: "from-emerald-500 to-teal-500" },
]

// Video portfolio items with YouTube embeds
const videoItems = [
  { 
    id: 1, 
    title: "Interactive Quiz Show",
    subcategory: "Quiz / Interactive",
    videoId: "dQw4w9WgXcQ", // Placeholder - replace with actual video IDs
    description: "Quiz Editing – engaging visuals, timer animations, and score tracking overlays."
  },
  { 
    id: 2, 
    title: "Trivia Challenge",
    subcategory: "Quiz / Interactive",
    videoId: "dQw4w9WgXcQ",
    description: "Interactive editing with animated answer reveals and sound effects."
  },
  { 
    id: 3, 
    title: "Business Insights Podcast",
    subcategory: "Podcast / Interview",
    videoId: "dQw4w9WgXcQ",
    description: "Podcast Editing – clean cuts, pacing optimization, and audio balancing."
  },
  { 
    id: 4, 
    title: "Creator Interview",
    subcategory: "Podcast / Interview",
    videoId: "dQw4w9WgXcQ",
    description: "Interview editing with smooth transitions and visual enhancements."
  },
  { 
    id: 5, 
    title: "Gaming Highlights Reel",
    subcategory: "Gaming Content",
    videoId: "dQw4w9WgXcQ",
    description: "Gaming editing – fast cuts, zoom effects, and epic moment highlights."
  },
  { 
    id: 6, 
    title: "Gameplay Commentary",
    subcategory: "Gaming Content",
    videoId: "dQw4w9WgXcQ",
    description: "Full gameplay edit with facecam integration and on-screen graphics."
  },
  { 
    id: 7, 
    title: "Product Tutorial",
    subcategory: "Explainer / Educational",
    videoId: "dQw4w9WgXcQ",
    description: "Explainer editing – motion graphics, step-by-step visuals, and clear narration sync."
  },
  { 
    id: 8, 
    title: "Online Course Module",
    subcategory: "Explainer / Educational",
    videoId: "dQw4w9WgXcQ",
    description: "Educational editing with animated diagrams and professional pacing."
  },
  { 
    id: 9, 
    title: "Trending Reel Edit",
    subcategory: "Short Form / Reels",
    videoId: "dQw4w9WgXcQ",
    description: "Short form editing – punchy cuts, trending transitions, and hook optimization."
  },
  { 
    id: 10, 
    title: "Viral Shorts",
    subcategory: "Short Form / Reels",
    videoId: "dQw4w9WgXcQ",
    description: "Reels editing with captions, effects, and attention-grabbing edits."
  },
]

// Website portfolio items
const websiteItems = [
  {
    id: 1,
    title: "SaaS Landing Page",
    description: "Modern, conversion-focused landing page for a B2B SaaS startup.",
    desktopColor: "from-blue-500 to-indigo-600",
    mobileColor: "from-blue-400 to-indigo-500",
    liveUrl: "#",
  },
  {
    id: 2,
    title: "E-commerce Store",
    description: "Full e-commerce website with custom product pages and checkout.",
    desktopColor: "from-green-500 to-emerald-600",
    mobileColor: "from-green-400 to-emerald-500",
    liveUrl: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Creative portfolio for a digital artist with gallery and contact.",
    desktopColor: "from-purple-500 to-pink-600",
    mobileColor: "from-purple-400 to-pink-500",
    liveUrl: "#",
  },
  {
    id: 4,
    title: "Restaurant Website",
    description: "Elegant restaurant site with menu, reservations, and location.",
    desktopColor: "from-orange-500 to-red-600",
    mobileColor: "from-orange-400 to-red-500",
    liveUrl: "#",
  },
]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [thumbnailFilter, setThumbnailFilter] = useState("All Thumbnails")
  const [videoFilter, setVideoFilter] = useState("All Videos")
  const [selectedThumbnail, setSelectedThumbnail] = useState<typeof thumbnailItems[0] | null>(null)

  const filteredThumbnails = thumbnailFilter === "All Thumbnails" 
    ? thumbnailItems 
    : thumbnailItems.filter(item => item.subcategory === thumbnailFilter)

  const filteredVideos = videoFilter === "All Videos"
    ? videoItems
    : videoItems.filter(item => item.subcategory === videoFilter)

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

          {/* Main Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap gap-3 mt-10"
          >
            {mainCategories.map((category) => (
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

        {/* Thumbnails Section */}
        {(activeCategory === "All" || activeCategory === "Thumbnails") && (
          <section className="container mx-auto px-4 lg:px-8 pb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-display text-2xl lg:text-3xl font-bold mb-6">
                Thumbnail Design
              </h2>
              
              {/* Thumbnail Subcategory Filter */}
              <div className="flex flex-wrap gap-2 mb-8">
                {thumbnailCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setThumbnailFilter(cat)}
                    className={cn(
                      "px-4 py-2 rounded-full text-xs font-medium transition-all duration-300",
                      thumbnailFilter === cat
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Thumbnail Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <AnimatePresence mode="popLayout">
                  {filteredThumbnails.map((item, index) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3, delay: index * 0.03 }}
                    >
                      <button
                        onClick={() => setSelectedThumbnail(item)}
                        className="group block w-full text-left"
                      >
                        <div className="relative aspect-video rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                          <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`} />
                          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6bTAtMzBWMGgtMnY0aC00djJoNHY0aDJWNmg0VjRoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRoMnYtNGg0di0ySDZ6TTYgNFYwSDR2NEgwdjJoNHY0aDJWNmg0VjRINnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-white font-display font-bold text-sm md:text-base text-center px-2 drop-shadow-lg">
                              {item.title}
                            </span>
                          </div>
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                            <span className="text-white font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 px-3 py-1 rounded-full">
                              View Larger
                            </span>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2 text-center">
                          {item.caption}
                        </p>
                      </button>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>
          </section>
        )}

        {/* Video Editing Section */}
        {(activeCategory === "All" || activeCategory === "Video Editing") && (
          <section className="container mx-auto px-4 lg:px-8 pb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-display text-2xl lg:text-3xl font-bold mb-6">
                Video Editing
              </h2>
              
              {/* Video Subcategory Filter */}
              <div className="flex flex-wrap gap-2 mb-8">
                {videoCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setVideoFilter(cat)}
                    className={cn(
                      "px-4 py-2 rounded-full text-xs font-medium transition-all duration-300",
                      videoFilter === cat
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Video Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                <AnimatePresence mode="popLayout">
                  {filteredVideos.map((item, index) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="bg-card rounded-2xl overflow-hidden border border-border"
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
                      <div className="p-5">
                        <span className="text-xs font-medium text-accent uppercase tracking-wide">
                          {item.subcategory}
                        </span>
                        <h3 className="font-display font-semibold text-lg mt-1 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>
          </section>
        )}

        {/* Website Design Section */}
        {(activeCategory === "All" || activeCategory === "Websites") && (
          <section className="container mx-auto px-4 lg:px-8 pb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-display text-2xl lg:text-3xl font-bold mb-8">
                Website Design
              </h2>

              {/* Website Cards */}
              <div className="grid md:grid-cols-2 gap-8">
                {websiteItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card rounded-2xl overflow-hidden border border-border"
                  >
                    {/* Screenshots Preview */}
                    <div className="p-6 bg-secondary/30">
                      <div className="flex gap-4 items-end justify-center">
                        {/* Desktop Screenshot */}
                        <div className="relative flex-1 max-w-[280px]">
                          <div className="flex items-center gap-2 mb-2">
                            <Monitor className="w-4 h-4 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">Desktop</span>
                          </div>
                          <div className={`aspect-[16/10] rounded-lg bg-gradient-to-br ${item.desktopColor} shadow-lg`}>
                            <div className="w-full h-full flex items-center justify-center">
                              <span className="text-white/80 text-xs font-medium">Desktop Preview</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Mobile Screenshot */}
                        <div className="relative w-16">
                          <div className="flex items-center gap-1 mb-2">
                            <Smartphone className="w-3 h-3 text-muted-foreground" />
                            <span className="text-[10px] text-muted-foreground">Mobile</span>
                          </div>
                          <div className={`aspect-[9/16] rounded-lg bg-gradient-to-br ${item.mobileColor} shadow-lg`}>
                            <div className="w-full h-full flex items-center justify-center">
                              <span className="text-white/80 text-[8px] font-medium">Mobile</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Info */}
                    <div className="p-5">
                      <h3 className="font-display font-semibold text-lg mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {item.description}
                      </p>
                      {item.liveUrl !== "#" && (
                        <Button asChild variant="outline" size="sm" className="rounded-full">
                          <a href={item.liveUrl} target="_blank" rel="noopener noreferrer">
                            View Website
                            <ExternalLink className="ml-2 w-3 h-3" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>
        )}

        {/* Thumbnail Modal */}
        <AnimatePresence>
          {selectedThumbnail && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedThumbnail(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-4xl"
              >
                <button
                  onClick={() => setSelectedThumbnail(null)}
                  className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
                
                <div className={`aspect-video rounded-2xl bg-gradient-to-br ${selectedThumbnail.color} shadow-2xl overflow-hidden`}>
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6bTAtMzBWMGgtMnY0aC00djJoNHY0aDJWNmg0VjRoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRoMnYtNGg0di0ySDZ6TTYgNFYwSDR2NEgwdjJoNHY0aDJWNmg0VjRINnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-white font-display font-bold text-2xl md:text-4xl text-center px-4 drop-shadow-lg">
                      {selectedThumbnail.title}
                    </span>
                  </div>
                </div>
                
                <div className="mt-4 text-center">
                  <p className="text-white/80 text-sm">{selectedThumbnail.caption}</p>
                  <p className="text-white/60 text-xs mt-1">{selectedThumbnail.subcategory}</p>
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
