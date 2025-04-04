import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';




const AboutUsSection = () => {
    return (
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
    );
  };
  const Initiatives = () => {
    return (
      <section className="bg-green-100 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            🌱 Our Initiatives & Activities
          </h2>
          <p className="text-gray-700 text-lg mb-8">
            We organize various activities that contribute to our eco-friendly mission and help create a sustainable future.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg flex items-center">
              <span className="text-green-500 text-2xl mr-3">🌳</span>
              <p className="text-gray-800 font-medium">Tree Plantation Programs – Organizing afforestation campaigns in urban and rural areas.</p>
            </div>
  
            <div className="bg-white p-6 rounded-xl shadow-lg flex items-center">
              <span className="text-green-500 text-2xl mr-3">📢</span>
              <p className="text-gray-800 font-medium">Environmental Awareness Campaigns – Workshops & training to reduce pollution and promote sustainability.</p>
            </div>
  
            <div className="bg-white p-6 rounded-xl shadow-lg flex items-center">
              <span className="text-green-500 text-2xl mr-3">🤝</span>
              <p className="text-gray-800 font-medium">Volunteer Engagement – Providing opportunities for people to actively contribute to environmental conservation.</p>
            </div>
  
            <div className="bg-white p-6 rounded-xl shadow-lg flex items-center">
              <span className="text-green-500 text-2xl mr-3">⚡</span>
              <p className="text-gray-800 font-medium">Climate Change Action – Promoting renewable energy, waste reduction, and eco-friendly practices.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  const UpcomingEvents = () => {
    return (
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">
            📅 Join Our Upcoming Events!
          </h2>
          <p className="text-gray-700 text-lg mb-8">
            Participate in our events and contribute to environmental conservation.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-green-600">🌳 Tree Plantation Drive 2025</h3>
              <p className="text-gray-600">May 20 | Dhaka</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-green-600">📢 Climate Change Awareness Campaign</h3>
              <p className="text-gray-600">June 5 | Online Webinar</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-green-600">🛠️ Eco-Friendly Tech Exhibition</h3>
              <p className="text-gray-600">July 15 | Green Tech Fest</p>
            </div>
          </div>
  
          <div className="mt-8 flex justify-center flex-col md:flex-row gap-4">
            <Link to={"events"}><button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 cursor-pointer">
              View All Events
            </button></Link>
            <Link to={"/donate"} >
             <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 cursor-pointer"> Donate Now</button>
            </Link>
          </div>
        </div>
      </section>
    );
  };
  const OurImpact = () => {
    return (
      <section className="bg-green-100 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-4">🏆 Our Achievements & Impact</h2>
          <p className="text-gray-700 text-lg mb-8">
            Thanks to our community, we have achieved remarkable milestones in environmental conservation.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-green-600">50,000+</h3>
              <p className="text-gray-600">Trees Planted</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-green-600">100+</h3>
              <p className="text-gray-600">Awareness Workshops Conducted</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-green-600">20,000+</h3>
              <p className="text-gray-600">Volunteers Engaged</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-green-600">5,000+</h3>
              <p className="text-gray-600">Families Educated on Sustainable Living</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  
  
const Home = () => {
    
   
    
  return (
    <div>
        <Hero></Hero>
        <AboutUsSection></AboutUsSection>
        <Initiatives></Initiatives>
        <UpcomingEvents></UpcomingEvents>
        <OurImpact></OurImpact>
       
    </div>
  )
}

export default Home