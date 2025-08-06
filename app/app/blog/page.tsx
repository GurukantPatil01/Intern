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
  },
  {
    slug: 'digital-transformation-strategies',
    title: "Digital Transformation Strategies",
    excerpt: "Navigate the complexities of digital transformation with proven strategies and implementation frameworks.",
    author: "Sarah Wilson",
    date: "February 28, 2024",
    category: "Technology"
  },
  {
    slug: 'leadership-development-in-consulting',
    title: "Leadership Development in Consulting",
    excerpt: "Build effective leadership capabilities and develop high-performing teams in consulting environments.",
    author: "David Brown",
    date: "February 20, 2024",
    category: "Leadership"
  },
  {
    slug: 'market-analysis-and-competitive-intelligence',
    title: "Market Analysis and Competitive Intelligence",
    excerpt: "Master the art of market research and competitive analysis to inform strategic decision-making.",
    author: "Lisa Chen",
    date: "February 15, 2024",
    category: "Research"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-20" style={{ backgroundColor: '#EFECE6' }}>
      {/* Hero Section */}
      <div className="py-20" style={{ backgroundColor: '#EFECE6' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-12 border-2 border-[#D4D0C8] shadow-lg">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#2C3E50]">Consultancy Insights</h1>
              <p className="text-xl md:text-2xl text-[#4A4A4A] max-w-3xl mx-auto">
                Expert perspectives, industry analysis, and strategic insights to help you navigate business challenges and opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <article className="bg-white border-2 border-[#D4D0C8] shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer h-full flex flex-col">
                <div className="h-48 bg-[#2C3E50] flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <div className="text-4xl font-bold mb-2">{post.category.charAt(0)}</div>
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
                  <h2 className="text-xl font-bold text-[#2C3E50] mb-4 group-hover:text-[#34495E] transition-colors cursor-pointer">
                    {post.title}
                  </h2>
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

        {/* Newsletter Signup */}
        <div className="mt-20 bg-white border-2 border-[#D4D0C8] shadow-lg p-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-4">Stay Informed</h2>
            <p className="text-[#4A4A4A] mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest insights, industry updates, and strategic guidance delivered to your inbox.
            </p>
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border-2 border-[#D4D0C8] focus:outline-none focus:ring-2 focus:ring-[#2C3E50] focus:border-[#2C3E50]"
              />
              <button className="bg-[#2C3E50] hover:bg-[#34495E] text-white px-6 py-3 font-medium transition-all duration-300 border-2 border-[#2C3E50] hover:border-[#34495E]">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 