"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/sections/cta"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const mainCategories = ["All", "Thumbnails", "Video Editing", "Websites"]

// Thumbnail subcategories
const thumbnailCategories = ["All Thumbnails", "Finance", "Food", "Entertainment", "Health", "Gaming", "Documentary"]

// Video subcategories  
const videoCategories = ["All Videos", "Quiz / Interactive", "Head 2 Head", "Gaming Content", "Podcast", "Explainer / Educational", "Cooking", "Fitness"]

// Thumbnail portfolio items
const thumbnailItems = [
  { id: 1, title: "Fix Before You Invest", subcategory: "Finance", caption: "Finance Thumbnail", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1st-thumb-93hxw59OklVzp0ry15xJ0DlyBU6j8j.jpeg" },
  { id: 2, title: "Don't Fall in Trap", subcategory: "Finance", caption: "Finance Thumbnail", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2nd-thumb-uoj3iP17V2d8xPeOKbxAa24U5LHjoP.jpeg" },
  { id: 3, title: "Why Traders Fail", subcategory: "Finance", caption: "Finance Thumbnail", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3th-YfKe36kmczKg1YvBNChVV6EwkSHGr5.jpeg" },
  { id: 4, title: "Why Traders Fail", subcategory: "Finance", caption: "Finance Thumbnail", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4th-EPw76FkVpbB02LPqWvgEazzQrjQpRU.jpeg" },
  { id: 5, title: "Why Traders Fail", subcategory: "Finance", caption: "Finance Thumbnail", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5th-bkC0NphD2SwMrvBlkXjKcRpCM21mrz.jpeg" },
  { id: 6, title: "Why 90% Traders Fail", subcategory: "Finance", caption: "Finance Thumbnail", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6th-zvBWYpxVKMl9Z8qXuKAOvg3pgc4jAF.jpeg" },
  { id: 7, title: "Smashed Baby Potato", subcategory: "Food", caption: "Food Thumbnail", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7th-D8ZI61msr2kpftXMd5RjuBtdfWQDFn.jpeg" },
  { id: 8, title: "Crispy Smashed Potato", subcategory: "Food", caption: "Food Thumbnail", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8th-7WYdsqwqz81DN4iSxJ8R3b0nbBHSCc.jpeg" },
  { id: 9, title: "Mini Cookies Recipe", subcategory: "Food", caption: "Food Thumbnail", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9th-hscbKkSbdruMF0pAnj2RM5monpzXC3.jpeg" },
  { id: 10, title: "Roasted Tomato Soup", subcategory: "Food", caption: "Food Thumbnail", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10th-GnloakwXaaUKiI4izkb5ZEBTRik87a.jpeg" },
  { id: 11, title: "Chole Kulche Recipe", subcategory: "Food", caption: "Food Thumbnail", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11-MV7JCuZ4xYOKj3jLt4VEc4Na3Keddi.jpeg" },
  { id: 12, title: "Shinchan Not in Prime", subcategory: "Entertainment", caption: "Entertainment Thumbnail", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12-ZS1AdUB1uh0sVTnEAeLQg6RFoI1ImL.webp" },
  { id: 13, title: "Extreme Dares", subcategory: "Entertainment", caption: "Entertainment Thumbnail", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/13-1eYPrf90Bzc2ZoTvPpLxFx84Lh3gC4.webp" },
  { id: 14, title: "Weight Loss Tips", subcategory: "Health", caption: "Health Thumbnail", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14-PwqcJyY3Od1Qxse5aodSXu0LNy9MRn.webp" },
  { id: 15, title: "Blood Sugar Foods", subcategory: "Health", caption: "Health Thumbnail", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/15-L9dtzdZPDm4hGd3u7aJnDafJpdZRkd.jpeg" },
  { id: 16, title: "Would You Rather", subcategory: "Gaming", caption: "Gaming Thumbnail", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/16-E6z9RuZgsJXjJ2C5UptPTCcEzzyVtk.webp" },
  { id: 17, title: "Mystery of Ayodhya", subcategory: "Documentary", caption: "Documentary Thumbnail", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/17-9BPNoHgopqrzaMb38PE7JXYgJyGz9R.webp" },
  { id: 18, title: "California Burrito Story", subcategory: "Finance", caption: "Business Thumbnail", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/18-PHSWh1uym29DoMr67bpmdj7q5fSwLo.webp" },
]

// Video portfolio items with YouTube embeds
const videoItems = [
  { 
    id: 1, 
    title: "ThinkFast! Quiz Show",
    subcategory: "Quiz / Interactive",
    videoId: "p-1GNbNp_yQ",
    description: "Quiz Editing – engaging visuals, timer animations, and score tracking overlays."
  },
  { 
    id: 2, 
    title: "ThinkFast! Trivia Challenge",
    subcategory: "Quiz / Interactive",
    videoId: "WzsbUAie6w8",
    description: "Interactive editing with animated answer reveals and sound effects."
  },
  { 
    id: 3, 
    title: "Head 2 Head - Taresh Bhatia",
    subcategory: "Head 2 Head",
    videoId: "tcwPUQjY1kc",
    description: "Head 2 Head format editing with dynamic transitions and engaging visuals."
  },
  { 
    id: 4, 
    title: "Head 2 Head Debate",
    subcategory: "Head 2 Head",
    videoId: "DbsXI6oiGzs",
    description: "Professional debate editing with split screens and reaction shots."
  },
  { 
    id: 5, 
    title: "Captain Side Gaming",
    subcategory: "Gaming Content",
    videoId: "l-HqjfoJQYg",
    description: "Gaming editing – fast cuts, zoom effects, and epic moment highlights."
  },
  { 
    id: 6, 
    title: "Captain Side Gameplay",
    subcategory: "Gaming Content",
    videoId: "60GPXc_zfhw",
    description: "Full gameplay edit with facecam integration and on-screen graphics."
  },
  { 
    id: 7, 
    title: "Sriram Benur Podcast",
    subcategory: "Podcast",
    videoId: "QsbvJ57OhJk",
    description: "Podcast Editing – clean cuts, pacing optimization, and audio balancing."
  },
  { 
    id: 8, 
    title: "Gaming Podcast",
    subcategory: "Podcast",
    videoId: "zbcP72QFjXw",
    description: "Gaming podcast editing with visual enhancements and smooth transitions."
  },
  { 
    id: 9, 
    title: "Explainer Video",
    subcategory: "Explainer / Educational",
    videoId: "6v1lB5GP5AM",
    description: "Explainer editing – motion graphics, step-by-step visuals, and clear narration sync."
  },
  { 
    id: 10, 
    title: "Product Explainer",
    subcategory: "Explainer / Educational",
    videoId: "m6GGUdU8sVA",
    description: "Professional explainer video with animated diagrams and engaging visuals."
  },
  { 
    id: 11, 
    title: "Educational Content - Sunil Yadav",
    subcategory: "Explainer / Educational",
    videoId: "3csIOSBv8a8",
    description: "Educational editing with clear explanations and visual aids."
  },
  { 
    id: 12, 
    title: "Head 2 Head Educational",
    subcategory: "Explainer / Educational",
    videoId: "bYaE3JE6pOk",
    description: "Educational content with head 2 head format and engaging presentation."
  },
  { 
    id: 13, 
    title: "Cooking Video",
    subcategory: "Cooking",
    videoId: "g4tFGiUS3qs",
    description: "Cooking video editing with smooth transitions, close-ups, and appetizing visuals."
  },
  { 
    id: 14, 
    title: "Fitness Video",
    subcategory: "Fitness",
    videoId: "_Z5NvSiH0X0",
    description: "Fitness video editing with energetic cuts, workout overlays, and motivational visuals."
  },
]

// Website portfolio items - Coming Soon
const websiteItems: { id: number; title: string; description: string; desktopColor: string; mobileColor: string; liveUrl: string }[] = []

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
              <div className="flex items-center gap-4 mb-6">
                <h2 className="font-display text-2xl lg:text-3xl font-bold">
                  Thumbnail Design
                </h2>
                {thumbnailItems.length === 0 && (
                  <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                    Coming Soon
                  </span>
                )}
              </div>
              
              {thumbnailItems.length > 0 ? (
                <>
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
                              {item.image ? (
                                <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
                              ) : (
                                <>
                                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`} />
                                  <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-white font-display font-bold text-sm md:text-base text-center px-2 drop-shadow-lg">
                                      {item.title}
                                    </span>
                                  </div>
                                </>
                              )}
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
                </>
              ) : (
                <div className="bg-card rounded-2xl border border-border p-12 text-center">
                  <p className="text-muted-foreground">
                    Our thumbnail portfolio is being updated. Check back soon to see our work!
                  </p>
                </div>
              )}
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
              <div className="flex items-center gap-4 mb-8">
                <h2 className="font-display text-2xl lg:text-3xl font-bold">
                  Website Design
                </h2>
                <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                  Coming Soon
                </span>
              </div>

              <div className="bg-card rounded-2xl border border-border p-12 text-center">
                <p className="text-muted-foreground">
                  Our website design services are launching soon. Contact us for custom website projects!
                </p>
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
                
                <div className="aspect-video rounded-2xl shadow-2xl overflow-hidden">
                  {selectedThumbnail.image ? (
                    <img src={selectedThumbnail.image} alt={selectedThumbnail.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${selectedThumbnail.color || 'from-gray-500 to-gray-600'} flex items-center justify-center`}>
                      <span className="text-white font-display font-bold text-2xl md:text-4xl text-center px-4 drop-shadow-lg">
                        {selectedThumbnail.title}
                      </span>
                    </div>
                  )}
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
