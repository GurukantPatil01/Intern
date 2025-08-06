import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const ADMIN_SECRET = 'consult2024'; // Change this to your own secret

export default function AdminPanel() {
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const searchParams = useSearchParams();
  const isAdmin = searchParams.get('admin') === ADMIN_SECRET;

  useEffect(() => {
    if (!isAdmin) return;
    fetch('/api/contact')
      .then((res) => res.json())
      .then((data) => {
        setSubmissions(data.submissions || []);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to load submissions');
        setLoading(false);
      });
  }, [isAdmin]);

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#EFECE6]">
        <div className="bg-white p-8 border-2 border-[#D4D0C8] shadow-lg max-w-md w-full text-center">
          <h1 className="text-2xl font-bold text-[#2C3E50] mb-4">Admin Access Required</h1>
          <p className="text-[#4A4A4A]">You must provide the correct admin secret in the URL to view this page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#EFECE6] pt-20 px-4">
      <div className="max-w-5xl mx-auto bg-white border-2 border-[#D4D0C8] shadow-lg p-8 mt-8">
        <h1 className="text-3xl font-bold text-[#2C3E50] mb-8">Contact Form Submissions</h1>
        {loading ? (
          <div className="text-[#2C3E50]">Loading...</div>
        ) : error ? (
          <div className="text-red-600">{error}</div>
        ) : submissions.length === 0 ? (
          <div className="text-[#4A4A4A]">No submissions found.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border border-[#D4D0C8]">
              <thead className="bg-[#EFECE6]">
                <tr>
                  <th className="px-4 py-2 border-b border-[#D4D0C8] text-left text-[#2C3E50]">Name</th>
                  <th className="px-4 py-2 border-b border-[#D4D0C8] text-left text-[#2C3E50]">Email</th>
                  <th className="px-4 py-2 border-b border-[#D4D0C8] text-left text-[#2C3E50]">Subject</th>
                  <th className="px-4 py-2 border-b border-[#D4D0C8] text-left text-[#2C3E50]">Message</th>
                  <th className="px-4 py-2 border-b border-[#D4D0C8] text-left text-[#2C3E50]">Timestamp</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((s) => (
                  <tr key={s.id} className="hover:bg-[#F8F8F8]">
                    <td className="px-4 py-2 border-b border-[#D4D0C8] align-top">{s.name}</td>
                    <td className="px-4 py-2 border-b border-[#D4D0C8] align-top">{s.email}</td>
                    <td className="px-4 py-2 border-b border-[#D4D0C8] align-top">{s.subject}</td>
                    <td className="px-4 py-2 border-b border-[#D4D0C8] align-top whitespace-pre-line">{s.message}</td>
                    <td className="px-4 py-2 border-b border-[#D4D0C8] align-top text-xs">{new Date(s.timestamp).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
} 