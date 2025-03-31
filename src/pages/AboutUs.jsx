import React from 'react'

const AboutUs = () => {
  return (
    <div>
        <section className="py-16 px-6 md:px-12 lg:px-24 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-6">🏡 About Us</h2>
          <p className="text-lg text-gray-700 mb-6">
            We are an environmentally conscious organization committed to making the world a better place to live. Our mission focuses on <strong>environmental conservation, climate change mitigation, and sustainable development.</strong>
          </p>
          <ul className="text-lg text-gray-700 space-y-3 text-left mx-auto max-w-md">
            <li className="flex items-center gap-2">
              ✅ <span>Actively participating in environmental conservation</span>
            </li>
            <li className="flex items-center gap-2">
              ✅ <span>Raising public awareness to reduce pollution</span>
            </li>
            <li className="flex items-center gap-2">
              ✅ <span>Implementing afforestation and greening projects</span>
            </li>
            <li className="flex items-center gap-2">
              ✅ <span>Promoting sustainable living practices</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default AboutUs