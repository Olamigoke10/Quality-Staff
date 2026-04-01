import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ExpandableCard } from '@/components/ui/expandable-card'
import { SITE_NAME } from '@/lib/site'

const blogPosts = [
  {
    title: 'Staffing continuity before a CQC visit',
    src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=480&fit=crop',
    description: 'Practical steps for care providers',
    readTime: '6 min',
    tags: ['Compliance', 'Operations', 'Wales'],
    date: '2025-02-10',
    sections: [
      {
        heading: 'Why rota gaps show up in inspection reports',
        body:
          'Inspectors often look for safe staffing levels, medicines management, and how you respond when a key worker is off sick. Thin cover can ripple into missed tasks, rushed handovers, and incomplete documentation—even when your permanent team is strong.',
      },
      {
        heading: 'Build a short “what if” plan',
        body:
          'List your highest-risk times (weekends, nights, seasonal flu) and agree who approves agency use, spend limits, and escalation. Share the plan with team leaders so decisions are fast when someone phones in unwell at 6 a.m.',
      },
      {
        heading: 'Partner early, not only in a crisis',
        body:
          'A staffing partner who already knows your service, your documentation standards, and your preferred roles can fill shifts faster than a cold call. Brief them on infection control, supervision expectations, and any specialist equipment on site.',
      },
    ],
  },
  {
    title: 'What providers look for in Welsh care applicants',
    src: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=480&fit=crop',
    description: 'Stand out when you apply',
    readTime: '5 min',
    tags: ['Careers', 'Recruitment'],
    date: '2025-01-22',
    sections: [
      {
        heading: 'Clear work history and gaps explained',
        body:
          'Chronological CVs with months and years help compliance teams verify employment quickly. If you took a break for study or family, a single honest line avoids unnecessary back-and-forth.',
      },
      {
        heading: 'Training that matches the setting',
        body:
          'Adult residential, domiciliary, and clinical support roles need different competencies. Highlight moving and handling, medication, dementia care, or MAPA only where you have current, relevant certificates.',
      },
      {
        heading: 'Local availability and transport',
        body:
          'Rural parts of Wales can mean longer travel between calls. Being upfront about driving licence, mileage willingness, and the postcodes you can cover helps planners offer shifts you will actually accept.',
      },
    ],
  },
  {
    title: 'DBS and right-to-work: a quick refresher',
    src: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&h=480&fit=crop',
    description: 'For candidates and hiring managers',
    readTime: '4 min',
    tags: ['Safeguarding', 'HR'],
    date: '2024-12-05',
    sections: [
      {
        heading: 'Update service for existing staff',
        body:
          'Many roles require an enhanced DBS for the workforce’s barred list. If someone moves into regulated activity, check whether a new check or an update service subscription is required—policies differ by employer and role.',
      },
      {
        heading: 'Right to work after rule changes',
        body:
          'UK employers must follow Home Office guidance when verifying nationality and visas. Keep copies of what you checked and when; digital checks may be acceptable for some cohorts but not all.',
      },
      {
        heading: 'This article is not legal advice',
        body:
          'Always confirm requirements with your own HR, governance, or legal advisers. We summarise common practice to support conversations, not to replace your policies.',
      },
    ],
  },
]

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 px-4 py-8 dark:from-slate-900 dark:to-slate-800">
      <Helmet>
        <title>Blog — {SITE_NAME}</title>
        <meta
          name="description"
          content={`Insights on healthcare staffing, compliance, and careers in Wales from ${SITE_NAME}.`}
        />
      </Helmet>
      <div className="mx-auto max-w-7xl">
        <header className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-slate-800 dark:text-white">Insights</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Practical notes for care providers and professionals working in Wales.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div key={post.title} className="h-full">
              <ExpandableCard
                title={post.title}
                src={post.src}
                description={post.description}
                classNameExpanded="[&_h4]:text-black dark:[&_h4]:text-white [&_h4]:font-medium [&_h4]:mt-6 first:[&_h4]:mt-0 h-full"
              >
                <div className="space-y-6">
                  {post.sections.map((section) => (
                    <section key={section.heading}>
                      <h4 className="mb-3 text-xl font-semibold text-slate-800 dark:text-slate-200">
                        {section.heading}
                      </h4>
                      <p className="leading-relaxed text-slate-700 dark:text-slate-300">{section.body}</p>
                    </section>
                  ))}
                </div>

                <div className="mt-8 border-t border-slate-200 pt-6 dark:border-slate-700">
                  <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
                    <span>{post.readTime} read</span>
                    <span>{post.tags[0]}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </ExpandableCard>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-slate-800">
            <h3 className="mb-2 text-xl font-semibold text-slate-800 dark:text-white">Need cover or a new role?</h3>
            <p className="text-slate-600 dark:text-slate-300">
              <Link to="/contact" className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400">
                Contact our team
              </Link>{' '}
              — we are happy to discuss your service or your next move.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
