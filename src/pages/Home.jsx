import React from "react";

const Home = () => {
  return (
    <>
      <section className="min-h-screen bg-white dark:bg-gray-900 relative overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-full blur-3xl opacity-60 dark:from-blue-900/20 dark:to-indigo-900/20"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-emerald-50 to-teal-100 rounded-full blur-3xl opacity-40 dark:from-emerald-900/10 dark:to-teal-900/10"></div>

        {/* Main Content */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-12">
            {/* Left Content */}
            <div className="flex flex-col justify-center space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium w-fit">
                <span>🏆</span>
                Leading Staffing Excellence
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Connecting
                <span className="block text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text dark:from-blue-400 dark:to-indigo-400">
                Care
                </span>
                Excellence
              </h1>

              {/* Description */}
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
                Find top talent and reliable staffing services in Wales with Quality Staffing Care. 
                We specialise in recruitment, employment, and workforce solutions tailored to your business needs.
              </p>

              {/* Features List */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center dark:bg-green-900/30">
                    <svg
                      className="w-4 h-4 text-green-600 dark:text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    24/7 Staffing Support
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center dark:bg-green-900/30">
                    <svg
                      className="w-4 h-4 text-green-600 dark:text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Certified Professionals
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center dark:bg-green-900/30">
                    <svg
                      className="w-4 h-4 text-green-600 dark:text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Quick Placement
                  </span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="group relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-600/30 transition-all duration-300 hover:scale-105">
                  <span className="relative z-10">Find Staff Now</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                <button className="group flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-300 px-8 py-4 rounded-xl font-semibold hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-300">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  How It Works
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200 dark:border-gray-700">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    500+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Facilities
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    98%
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Satisfaction
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    24/7
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Support
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image/Illustration */}
            {/* Right Content - Modern Healthcare Staffing Visual */}
            <div className="relative">
              {/* Main Staff Showcase Card */}
              <div className="relative z-10 bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl shadow-blue-500/10 dark:shadow-blue-500/5 border border-gray-100 dark:border-gray-700">
                {/* Header with Search */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Available Professionals
                  </h3>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search specialties..."
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <svg
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>

                {/* Staff Cards Grid */}
                <div className="space-y-4">
                  {/* Nurse Card */}
                  <div className="flex items-center gap-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white text-xl">👩‍⚕️</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          Emily Stake
                        </h4>
                        <span className="text-xs bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 px-2 py-1 rounded-full">
                          Available
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Registered Nurse
                      </p>
                      <div className="flex items-center gap-4 mt-1">
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          5+ years
                        </span>
                        <span className="text-xs text-yellow-600 dark:text-yellow-400">
                          ★ 4.9
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Doctor Card */}
                  <div className="flex items-center gap-4 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-100 dark:border-emerald-800">
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white text-xl">👨‍⚕️</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          Dr. Michael Torres
                        </h4>
                        <span className="text-xs bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 px-2 py-1 rounded-full">
                          Available
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Emergency Medicine
                      </p>
                      <div className="flex items-center gap-4 mt-1">
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          8+ years
                        </span>
                        <span className="text-xs text-yellow-600 dark:text-yellow-400">
                          ★ 4.8
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Specialist Card */}
                  <div className="flex items-center gap-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-100 dark:border-purple-800">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white text-xl">👩‍💼</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          Sarah Johnson
                        </h4>
                        <span className="text-xs bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400 px-2 py-1 rounded-full">
                          Busy
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Physical Therapist
                      </p>
                      <div className="flex items-center gap-4 mt-1">
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          6+ years
                        </span>
                        <span className="text-xs text-yellow-600 dark:text-yellow-400">
                          ★ 4.7
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Stats Footer */}
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                        150+
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        Available
                      </div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                        24h
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        Avg. Response
                      </div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-purple-600 dark:text-purple-400">
                        98%
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        Satisfaction
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Notification Card */}
              <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl border border-gray-100 dark:border-gray-700 max-w-xs z-20">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-white"
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

              {/* Background Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-purple-200 dark:bg-purple-800 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute top-1/2 -left-4 w-24 h-24 bg-emerald-200 dark:bg-emerald-800 rounded-full opacity-15 blur-2xl"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
