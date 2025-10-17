import React from 'react'

const About1 = () => {
  return (
    <>
      {/* Hero Section */}
      <section className='bg-gray-800 py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center space-y-6 max-w-4xl mx-auto'>
            <p className='text-sm font-semibold tracking-wide uppercase text-blue-400'>
              About Us
            </p>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight'>
              WE'RE QUALITY STAFFING CARE,{' '}
              <span className='text-blue-400'>COMMITTED TO EXCELLENCE</span> AND YOUR SUCCESS EVERY STEP OF THE WAY
            </h1>
            <p className='text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto'>
              Our staff are highly skilled professionals dedicated to ensuring top-quality results. 
              We strive to deliver exceptional service and support for all your staffing needs.
            </p>
            <div className='pt-4'>
              <a 
                href="#contact" 
                className='inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg'
              >
                Looking for Help?
              </a>
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
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, animi, 
                  similique quaerat dicta id eos velit rem nisi ea totam eius itaque aliquam. 
                  Explicabo, dolores neque ratione voluptatem recusandae qui?
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