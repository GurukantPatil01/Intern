export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20" style={{ backgroundColor: '#EFECE6' }}>
      {/* Hero Section */}
      <div className="py-20" style={{ backgroundColor: '#EFECE6' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-12 border-2 border-[#D4D0C8] shadow-lg">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#2C3E50]">About Our Consultancy</h1>
              <p className="text-xl md:text-2xl text-[#4A4A4A] max-w-3xl mx-auto">
                We are a team of experienced professionals dedicated to helping businesses achieve their strategic objectives through expert guidance and innovative solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-white p-8 border-2 border-[#D4D0C8] shadow-lg">
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-6">Our Story</h2>
            <p className="text-lg text-[#4A4A4A] mb-6">
              Founded in 2020, our consultancy has been at the forefront of business transformation. 
              We believe in creating sustainable solutions that not only solve immediate challenges but also 
              position organizations for long-term success.
            </p>
            <p className="text-lg text-[#4A4A4A] mb-8">
              Our team consists of seasoned professionals who bring decades of combined experience across 
              various industries. From strategic planning to operational excellence, we ensure that every 
              engagement delivers measurable results.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 border-2 border-[#D4D0C8]">
                <div className="text-3xl font-bold text-[#2C3E50]">50+</div>
                <div className="text-[#4A4A4A] text-sm">Projects Completed</div>
              </div>
              <div className="text-center p-4 border-2 border-[#D4D0C8]">
                <div className="text-3xl font-bold text-[#2C3E50]">100+</div>
                <div className="text-[#4A4A4A] text-sm">Happy Clients</div>
              </div>
              <div className="text-center p-4 border-2 border-[#D4D0C8]">
                <div className="text-3xl font-bold text-[#2C3E50]">2+</div>
                <div className="text-[#4A4A4A] text-sm">Years Experience</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 border-2 border-[#D4D0C8] shadow-lg">
            <h3 className="text-2xl font-bold text-[#2C3E50] mb-6">Our Mission</h3>
            <p className="text-[#4A4A4A] mb-8">
              To empower businesses through strategic guidance, operational excellence, and innovative 
              solutions that drive sustainable growth and competitive advantage.
            </p>
            <h3 className="text-2xl font-bold text-[#2C3E50] mb-6">Our Vision</h3>
            <p className="text-[#4A4A4A] mb-8">
              To be the trusted partner for organizations seeking transformation, recognized for our 
              expertise, integrity, and commitment to delivering exceptional value.
            </p>
            <h3 className="text-2xl font-bold text-[#2C3E50] mb-6">Our Values</h3>
            <ul className="text-[#4A4A4A] space-y-2">
              <li className="flex items-center">
                <div className="w-3 h-3 bg-[#2C3E50] mr-3"></div>
                Excellence in everything we do
              </li>
              <li className="flex items-center">
                <div className="w-3 h-3 bg-[#2C3E50] mr-3"></div>
                Integrity and transparency
              </li>
              <li className="flex items-center">
                <div className="w-3 h-3 bg-[#2C3E50] mr-3"></div>
                Client-focused approach
              </li>
              <li className="flex items-center">
                <div className="w-3 h-3 bg-[#2C3E50] mr-3"></div>
                Continuous innovation
              </li>
            </ul>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-6">Our Leadership Team</h2>
            <p className="text-xl text-[#4A4A4A] max-w-3xl mx-auto">
              Meet the experienced professionals who lead our consultancy and drive our success.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border-2 border-[#D4D0C8] shadow-lg text-center">
              <div className="w-32 h-32 bg-[#2C3E50] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">RS</span>
              </div>
              <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">RANBIR SINGH</h3>
              <p className="text-[#4A4A4A] mb-4">Partner</p>
              <p className="text-[#4A4A4A] text-sm">
                Strategic leader with 15+ years of experience in business transformation and growth strategies.
              </p>
            </div>
            <div className="bg-white p-8 border-2 border-[#D4D0C8] shadow-lg text-center">
              <div className="w-32 h-32 bg-[#2C3E50] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">AS</span>
              </div>
              <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">Abhishek Kumar Singh</h3>
              <p className="text-[#4A4A4A] mb-4">Partner</p>
              <p className="text-[#4A4A4A] text-sm">
                Operations expert specializing in process optimization and organizational efficiency.
              </p>
            </div>
            <div className="bg-white p-8 border-2 border-[#D4D0C8] shadow-lg text-center">
              <div className="w-32 h-32 bg-[#2C3E50] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">MJ</span>
              </div>
              <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">--</h3>
              <p className="text-[#4A4A4A] mb-4">Senior Consultant</p>
              <p className="text-[#4A4A4A] text-sm">
                Financial advisory specialist with expertise in strategic planning and market analysis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 