import React from 'react'
import { ExpandableCard } from '@/components/ui/expandable-card'

const Blog = () => {
  const blogPosts = [
    {
      title: "Whispering Forest",
      src: "https://cdn.badtz-ui.com/images/components/expandable-card/haunted-house.webp",
      description: "A Yokai Tale",
      readTime: "5 min",
      tags: ["Japanese Folklore", "Yokai", "Spirits"],
      date: "2024-10-26",
      content: {
        sections: [
          {
            heading: "The Village's Secret",
            text: "Deep within the mist-covered mountains of Japan, there lies a small, secluded village known as <i>Yamadori</i>. For centuries, the villagers have lived in harmony with nature, but they also harbor a dark secret—an ancient pact with the spirits of the forest, the <i>yokai</i>."
          },
          {
            heading: "The Mysterious Disappearances",
            text: "Recently, strange occurrences have unsettled the peace of <i>Yamadori</i>. People have started to disappear without a trace, vanishing into the dense forest at night. Some say it is the work of the <i>yurei</i>, the vengeful spirits of those who died unjustly."
          }
        ]
      }
    },
    {
      title: "Moonlit Temple",
      src: "https://images.unsplash.com/photo-1545569341-9c0d4d3d7a36?w=500&h=300&fit=crop",
      description: "A Ghost Story",
      readTime: "7 min",
      tags: ["Ghosts", "Temples", "Supernatural"],
      date: "2024-10-19",
      content: {
        sections: [
          {
            heading: "The Abandoned Sanctuary",
            text: "Perched on a misty mountainside stands an ancient temple, forgotten by time. Locals speak of faint chanting that echoes through the halls long after midnight, and shadowy figures that move between the pillars when the moon is full."
          },
          {
            heading: "The Weeping Nun",
            text: "Legend tells of a young nun who still tends to the temple gardens, her spectral form visible only in the pale moonlight. Those who have seen her say she weeps for a love lost centuries ago, forever bound to the grounds she vowed to protect."
          }
        ]
      }
    },
    {
      title: "River of Shadows",
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop",
      description: "An Urban Legend",
      readTime: "4 min",
      tags: ["Urban Legend", "River Spirits", "Modern Folklore"],
      date: "2024-10-12",
      content: {
        sections: [
          {
            heading: "The City's Dark Water",
            text: "Beneath the modern bridges and bustling city life flows a river with a dark secret. Every year, on the anniversary of a great tragedy, the water turns black as ink, and voices can be heard calling from the depths."
          },
          {
            heading: "The Bridge Keeper's Warning",
            text: "Old-timers warn never to cross the river after midnight. They speak of a figure who appears on the bridge, offering warnings to those destined to meet a watery fate—if only they would listen."
          }
        ]
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Quality Staffing
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
          Read our blogs....
          </p>
        </header>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <div key={index} className="h-full">
              <ExpandableCard
                title={post.title}
                src={post.src}
                description={post.description}
                classNameExpanded="[&_h4]:text-black dark:[&_h4]:text-white [&_h4]:font-medium [&_h4]:mt-6 first:[&_h4]:mt-0 h-full"
              >
                <div className="space-y-6">
                  {post.content.sections.map((section, sectionIndex) => (
                    <section key={sectionIndex}>
                      <h4 className="text-xl font-semibold mb-3 text-slate-800 dark:text-slate-200">
                        {section.heading}
                      </h4>
                      <p 
                        className="text-slate-700 dark:text-slate-300 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: section.text }}
                      />
                    </section>
                  ))}
                </div>
                
                {/* Additional blog metadata */}
                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
                  <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
                    <span>📖 {post.readTime} read</span>
                    <span>🏷️ {post.tags[0]}</span>
                    <span>📅 {post.date}</span>
                  </div>
                </div>
              </ExpandableCard>
            </div>
          ))}
        </div>

        {/* Newsletter signup */}
        <div className="mt-12 text-center">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
              More blogs Coming Soon
            </h3>
            {/* <p className="text-slate-600 dark:text-slate-300">
              Subscribe to never miss a new folklore tale
            </p> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog