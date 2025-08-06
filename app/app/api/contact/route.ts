import { NextRequest, NextResponse } from 'next/server';

// In a real application, you'd use a database like MongoDB, PostgreSQL, etc.
// For now, we'll simulate storage and use a simple email service
const contactSubmissions: any[] = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Create submission object
    const submission = {
      id: Date.now().toString(),
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
      status: 'new'
    };

    // Store the submission (in real app, save to database)
    contactSubmissions.push(submission);

    // Send automated email to admin
    await sendEmailToAdmin(submission);

    // Send confirmation email to user
    await sendConfirmationEmail(submission);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your message! We will get back to you soon.',
        submissionId: submission.id 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Function to send email to admin
async function sendEmailToAdmin(submission: any) {
  try {
    const adminEmail = 'gurukantpatil07@gmail.com';
    const htmlContent = `
      <h2>New Contact Form Submission</h2>
      <table style="border-collapse:collapse;">
        <tr><td style="font-weight:bold;padding:4px 8px;">Name:</td><td style="padding:4px 8px;">${submission.name}</td></tr>
        <tr><td style="font-weight:bold;padding:4px 8px;">Email:</td><td style="padding:4px 8px;">${submission.email}</td></tr>
        <tr><td style="font-weight:bold;padding:4px 8px;">Subject:</td><td style="padding:4px 8px;">${submission.subject}</td></tr>
        <tr><td style="font-weight:bold;padding:4px 8px;">Message:</td><td style="padding:4px 8px;white-space:pre-line;">${submission.message}</td></tr>
        <tr><td style="font-weight:bold;padding:4px 8px;">Submitted:</td><td style="padding:4px 8px;">${submission.timestamp}</td></tr>
      </table>
      <p>You can respond to this inquiry at: <a href="mailto:${submission.email}">${submission.email}</a></p>
    `;
    console.log('Sending HTML email to admin:', adminEmail);
    console.log('HTML content:', htmlContent);
    // Integrate with your email service here
  } catch (error) {
    console.error('Error sending admin email:', error);
  }
}

// Function to send confirmation email to user
async function sendConfirmationEmail(submission: any) {
  try {
    const userEmail = submission.email;
    const htmlContent = `
      <div style="font-family:Inter,Tahoma,sans-serif;max-width:600px;margin:auto;">
        <h2 style="color:#2C3E50;">Thank you for contacting us, ${submission.name}!</h2>
        <p>We have received your message and will get back to you within 24-48 hours.</p>
        <h3 style="color:#2C3E50;">Your Message Details</h3>
        <table style="border-collapse:collapse;">
          <tr><td style="font-weight:bold;padding:4px 8px;">Subject:</td><td style="padding:4px 8px;">${submission.subject}</td></tr>
          <tr><td style="font-weight:bold;padding:4px 8px;">Message:</td><td style="padding:4px 8px;white-space:pre-line;">${submission.message}</td></tr>
        </table>
        <p>If you have any urgent questions, please call us at <a href="tel:+15551234567">+1 (555) 123-4567</a>.</p>
        <p style="margin-top:24px;">Best regards,<br/>Your Consultancy Team</p>
      </div>
    `;
    console.log('Sending HTML confirmation email to:', userEmail);
    console.log('HTML confirmation content:', htmlContent);
    // Integrate with your email service here
  } catch (error) {
    console.error('Error sending confirmation email:', error);
  }
}

// GET endpoint to retrieve submissions (for admin panel)
export async function GET() {
  try {
    return NextResponse.json(
      { submissions: contactSubmissions },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 