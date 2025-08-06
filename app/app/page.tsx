import Link from 'next/link';

const blogPosts = [
  {
    slug: 'strategic-planning-for-business-growth',
    title: "Strategic Planning for Business Growth",
    excerpt: "Learn the essential strategies and frameworks for developing comprehensive business growth plans that drive sustainable success.",
    author: "John Doe",
    date: "March 15, 2024",
    category: "Strategy"
  },
  {
    slug: 'operational-excellence-in-modern-organizations',
    title: "Operational Excellence in Modern Organizations",
    excerpt: "Discover proven methodologies for optimizing business operations and improving organizational efficiency.",
    author: "Jane Smith",
    date: "March 10, 2024",
    category: "Operations"
  },
  {
    slug: 'financial-advisory-best-practices',
    title: "Financial Advisory Best Practices",
    excerpt: "Expert insights into financial planning, risk management, and investment strategies for business success.",
    author: "Mike Johnson",
    date: "March 5, 2024",
    category: "Finance"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#EFECE6' }}>
      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center pt-20" style={{ backgroundColor: '#EFECE6' }}>
        <div className="text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-12 border-2 border-[#D4D0C8] shadow-lg">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-[#2C3E50]">
              Professional Consultancy
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-[#4A4A4A] max-w-4xl mx-auto">
              Strategic solutions for modern businesses. We help organizations achieve their goals through expert guidance and innovative approaches.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-[#2C3E50] text-white hover:bg-[#34495E] font-semibold py-4 px-8 border-2 border-[#2C3E50] hover:border-[#34495E] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                Get Started
              </button>
              <button className="bg-transparent text-[#2C3E50] hover:bg-[#2C3E50] hover:text-white font-semibold py-4 px-8 border-2 border-[#2C3E50] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20" style={{ backgroundColor: '#EFECE6' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2C3E50] mb-6">Our Services</h2>
            <p className="text-xl text-[#4A4A4A] max-w-3xl mx-auto">
              Comprehensive consultancy services tailored to your business needs and objectives.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border-2 border-[#D4D0C8] shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-[#2C3E50] flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#2C3E50] mb-4 text-center">Strategic Planning</h3>
              <p className="text-[#4A4A4A] text-center">
                Develop comprehensive strategies that align with your business objectives and market opportunities.
              </p>
            </div>
            
            <div className="bg-white p-8 border-2 border-[#D4D0C8] shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-[#2C3E50] flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#2C3E50] mb-4 text-center">Financial Advisory</h3>
              <p className="text-[#4A4A4A] text-center">
                Expert financial guidance to optimize your business performance and growth potential.
              </p>
            </div>
            
            <div className="bg-white p-8 border-2 border-[#D4D0C8] shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-[#2C3E50] flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#2C3E50] mb-4 text-center">Operations Management</h3>
              <p className="text-[#4A4A4A] text-center">
                Streamline your operations and improve efficiency through proven management methodologies.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Global Services Section */}
      <div className="py-20" style={{ backgroundColor: '#EFECE6' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border-2 border-[#D4D0C8] shadow-lg p-10 md:p-16 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-6 text-center">Our Global Services & Capabilities</h2>
            <ul className="text-[#4A4A4A] text-lg space-y-6 max-w-3xl mx-auto">
              <li>
                <span className="font-semibold text-[#2C3E50]">Encompassing various Geographies and Technologies</span> in collaboration with <span className="font-semibold text-[#2C3E50]">MGS Technologies</span>.
              </li>
              <li>
                Providing an array of <span className="font-semibold text-[#2C3E50]">Digital Transformation Solutions</span>, <span className="font-semibold text-[#2C3E50]">Enterprise Solutions</span> and <span className="font-semibold text-[#2C3E50]">Business Process Management Solutions</span> to an array of clientele across the globe.
              </li>
              <li>
                <span className="font-semibold text-[#2C3E50]">300+ highly qualified and experienced</span> Business Analytics, Domain/Functional Consultants, Technical Consultants and Project Management personnel
              </li>
              <li>
                <span className="font-semibold text-[#2C3E50]">State-of-the-art facility & IT infrastructure.</span>
              </li>
              <li>
                <span className="font-semibold text-[#2C3E50]">Global customer footprint</span> spanning across GCC, Europe, Africa, Asia-Pacific, Australia and India
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20" style={{ backgroundColor: '#F8F8F8' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2C3E50] mb-6">Client Testimonials</h2>
            <p className="text-xl text-[#4A4A4A]">
              Trusted by leading organizations across various industries.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 border-2 border-[#D4D0C8] shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#2C3E50] rounded-none mr-4 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">SJ</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#2C3E50]">Sarah Johnson</h4>
                  <p className="text-[#4A4A4A] text-sm">CEO, TechCorp</p>
                </div>
              </div>
              <p className="text-[#4A4A4A] italic">
                "The consultancy team delivered exceptional results, helping us achieve our strategic objectives ahead of schedule."
              </p>
            </div>
            
            <div className="bg-white p-8 border-2 border-[#D4D0C8] shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#2C3E50] rounded-none mr-4 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">MC</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#2C3E50]">Mike Chen</h4>
                  <p className="text-[#4A4A4A] text-sm">CTO, StartupXYZ</p>
                </div>
              </div>
              <p className="text-[#4A4A4A] italic">
                "Professional expertise combined with practical solutions. They truly understand our business challenges."
              </p>
            </div>
            
            <div className="bg-white p-8 border-2 border-[#D4D0C8] shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#2C3E50] rounded-none mr-4 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">ED</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#2C3E50]">Emily Davis</h4>
                  <p className="text-[#4A4A4A] text-sm">Product Manager, InnovateCo</p>
                </div>
              </div>
              <p className="text-[#4A4A4A] italic">
                "Outstanding strategic guidance that transformed our approach to market expansion and growth."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Preview Section */}
      <div className="py-20" style={{ backgroundColor: '#EFECE6' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2C3E50] mb-6">Latest Insights</h2>
            <p className="text-xl text-[#4A4A4A] max-w-3xl mx-auto">
              Explore our latest blog posts on strategy, operations, and digital transformation.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <article className="bg-white border-2 border-[#D4D0C8] shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer h-full flex flex-col">
                  <div className="h-40 bg-[#2C3E50] flex items-center justify-center">
                    <div className="text-white text-center p-4">
                      <div className="text-3xl font-bold mb-2">{post.category.charAt(0)}</div>
                      <div className="text-sm">{post.category}</div>
                    </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex items-center mb-4">
                      <span className="bg-[#EFECE6] text-[#2C3E50] text-xs font-semibold px-3 py-1 border-2 border-[#D4D0C8]">
                        {post.category}
                      </span>
                      <span className="text-[#4A4A4A] text-sm ml-auto">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#2C3E50] mb-4 group-hover:text-[#34495E] transition-colors cursor-pointer">
                      {post.title}
                    </h3>
                    <p className="text-[#4A4A4A] mb-6 line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-sm text-[#4A4A4A]">By {post.author}</span>
                      <span className="text-[#2C3E50] group-hover:text-[#34495E] font-medium text-sm transition-colors border-b-2 border-[#2C3E50] group-hover:border-[#34495E]">
                        Read More →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/blog" className="inline-block bg-[#2C3E50] text-white font-semibold py-3 px-8 border-2 border-[#2C3E50] hover:bg-[#34495E] hover:border-[#34495E] transition-all duration-300">
              View All Blog Posts
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20" style={{ backgroundColor: '#EFECE6' }}>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-12 border-2 border-[#D4D0C8] shadow-lg">
            <h2 className="text-4xl font-bold text-[#2C3E50] mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-[#4A4A4A] mb-10">
              Partner with us to achieve sustainable growth and operational excellence.
            </p>
            <button className="bg-[#2C3E50] text-white hover:bg-[#34495E] font-semibold py-4 px-8 border-2 border-[#2C3E50] hover:border-[#34495E] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
              Start Your Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
