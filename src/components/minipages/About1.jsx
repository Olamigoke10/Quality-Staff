import React from 'react'

const About1 = () => {
  return (
    <>
      {/* Hero Section */}
      <section className='bg-gray-800 py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center space-y-6 max-w-4xl mx-auto'>
            <p className='text-sm font-semibold tracking-wide uppercase text-blue-400'>
              Quality Staffing Care
            </p>
            <h5 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight'>
              Delivering Compassionate,{' '}
              <span className='text-blue-400'>Reliable</span> & Skilled Care Professionals Across the UK
            </h5>
            <p className='text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto'>
              
              Quality Staffing Care is a leading staffing provider based in Wales, specialising in supplying high-quality staff that includes support worksers, Care Assistants, and Senior Carers to supported living homes, residential care homes, and nursing services.
              We were founded on a simple mission:
              To improve care quality by connecting dedicated care staff with care providers who need them—quickly, professionally, and ethicallyOur staff are highly skilled professionals dedicated to ensuring top-quality results. 
              We strive to deliver exceptional service and support for all your staffing needs.
            </p>
            <div className='pt-4'>
              <a 
                href="#contact" 
                className='inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg'
              >
                Work with Us
              </a>
            </div>
          </div>
        </div>



<div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl border border-gray-100 dark:border-gray-700 max-w-xs z-20">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white text-sm">
                      Match Found!
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      3 qualified nurses for your shift
                    </div>
                  </div>
                </div>
              </div>



      </section>

      {/* Story Section */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12'>
            <div className='lg:col-span-1'>
              <span className='inline-block bg-blue-100 text-blue-700 text-sm font-semibold py-2 px-4 rounded-lg mb-4'>
                Our Story
              </span>
              <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 leading-tight'>
                Building a Legacy of Excellence
              </h2>
            </div>
            
            <div className='lg:col-span-2'>
              <div className='space-y-4 text-gray-700'>
                <p className='text-lg leading-relaxed'>
                  We understand the pressures care providers face: staff shortages, demanding workloads, strict compliance, and ensuring residents receive continuous, person-centred support.
                  QSC was created to be part of the solution offering 24/7 staffing support, highly trained professionals, and a partnership approach built on trust.
                </p>
                <p className='text-lg leading-relaxed'>
                  Our journey began with a simple mission: to provide exceptional staffing solutions 
                  that bridge the gap between talent and opportunity. Today, we continue to build 
                  on that foundation with unwavering commitment.
                </p>
              </div>
              
              {/* Additional Features */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
                <div className='flex items-start space-x-4'>
                  <div className='flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center'>
                    <span className='text-blue-600 font-bold'>✓</span>
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-900 mb-2'>Quality Assurance</h3>
                    <p className='text-gray-600 text-sm'>Rigorous screening and vetting process</p>
                  </div>
                </div>
                
                <div className='flex items-start space-x-4'>
                  <div className='flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center'>
                    <span className='text-blue-600 font-bold'>✓</span>
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-900 mb-2'>24/7 Support</h3>
                    <p className='text-gray-600 text-sm'>Round-the-clock customer service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About1