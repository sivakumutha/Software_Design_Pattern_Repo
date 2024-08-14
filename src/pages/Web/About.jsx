// import React from 'react'

const About = () => {
  return (
    <section className="py-16 bg-gray-100">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Core Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white border border-red-300 p-6 rounded-lg shadow-lg hover:shadow-xl hover:border-red-400 transition-shadow duration-300 transform hover:scale-105">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Event Planning</h3>
                <p className="text-gray-700">Comprehensive event planning to ensure every detail is perfectly executed.</p>
              </div>
              <div className="bg-white border border-red-300 p-6 rounded-lg shadow-lg hover:shadow-xl hover:border-red-400 transition-shadow duration-300 transform hover:scale-105">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Venue Selection</h3>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <p className="text-gray-700">Finding and securing the ideal venue tailored to your event's requirements.</p>
              </div>
              <div className="bg-white border border-red-300 p-6 rounded-lg shadow-lg hover:shadow-xl hover:border-red-400 transition-shadow duration-300 transform hover:scale-105">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Catering Services</h3>
                <p className="text-gray-700">Delicious and diverse catering options to satisfy your guests.</p>
              </div>
              <div className="bg-white border border-red-300 p-6 rounded-lg shadow-lg hover:shadow-xl hover:border-red-400 transition-shadow duration-300 transform hover:scale-105">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Entertainment</h3>
                <p className="text-gray-700">A range of entertainment options to keep your event engaging and memorable.</p>
              </div>
              <div className="bg-white border border-red-300 p-6 rounded-lg shadow-lg hover:shadow-xl hover:border-red-400 transition-shadow duration-300 transform hover:scale-105">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Decoration</h3>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <p className="text-gray-700">Beautiful and thematic decorations to enhance your event's ambiance.</p>
              </div>
              <div className="bg-white border border-red-300 p-6 rounded-lg shadow-lg hover:shadow-xl hover:border-red-400 transition-shadow duration-300 transform hover:scale-105">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Logistics</h3>
                <p className="text-gray-700">Efficient logistics management to ensure everything runs smoothly.</p>
              </div>
            </div>
          </div>
        </section>
  )
}

export default About