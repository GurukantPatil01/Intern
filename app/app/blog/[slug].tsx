import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

const blogPosts = [
  {
    slug: 'strategic-planning-for-business-growth',
    title: 'Strategic Planning for Business Growth',
    excerpt: 'Learn the essential strategies and frameworks for developing comprehensive business growth plans that drive sustainable success.',
    author: 'John Doe',
    date: 'March 15, 2024',
    category: 'Strategy',
    content: `
      <p>Strategic planning is the cornerstone of business growth. In this article, we explore proven frameworks and actionable steps to help your organization achieve sustainable success.</p>
      <h2>Key Steps</h2>
      <ul>
        <li>Assess your current position</li>
        <li>Define clear objectives</li>
        <li>Develop actionable strategies</li>
        <li>Monitor and adapt</li>
      </ul>
      <p>By following these steps, businesses can position themselves for long-term growth and resilience.</p>
    `
  },
  {
    slug: 'operational-excellence-in-modern-organizations',
    title: 'Operational Excellence in Modern Organizations',
    excerpt: 'Discover proven methodologies for optimizing business operations and improving organizational efficiency.',
    author: 'Jane Smith',
    date: 'March 10, 2024',
    category: 'Operations',
    content: `
      <p>Operational excellence is about continuous improvement and efficiency. This article covers methodologies such as Lean, Six Sigma, and Agile for modern organizations.</p>
      <h2>Best Practices</h2>
      <ul>
        <li>Implement process mapping</li>
        <li>Foster a culture of innovation</li>
        <li>Leverage technology</li>
      </ul>
      <p>Adopting these practices can lead to significant improvements in productivity and quality.</p>
    `
  },
  // ... more posts as needed ...
];

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <div className="min-h-screen pt-24 pb-16 flex justify-center items-start" style={{ backgroundColor: '#EFECE6' }}>
      <article className="bg-white border-2 border-[#D4D0C8] shadow-lg max-w-2xl w-full mx-4 p-10 md:p-16">
        <div className="mb-8">
          <span className="bg-[#EFECE6] text-[#2C3E50] text-xs font-semibold px-3 py-1 border-2 border-[#D4D0C8] mr-2">
            {post.category}
          </span>
          <span className="text-[#4A4A4A] text-sm">{post.date}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-6 leading-tight">{post.title}</h1>
        <div className="mb-8 text-[#4A4A4A] text-base md:text-lg" dangerouslySetInnerHTML={{ __html: post.content }} />
        <div className="flex items-center mt-10 pt-6 border-t border-[#D4D0C8]">
          <div className="w-12 h-12 bg-[#2C3E50] flex items-center justify-center text-white font-bold text-lg mr-4">
            {post.author.split(' ').map((n) => n[0]).join('')}
          </div>
          <div>
            <div className="font-semibold text-[#2C3E50]">{post.author}</div>
            <div className="text-xs text-[#4A4A4A]">Author</div>
          </div>
        </div>
      </article>
    </div>
  );
} 