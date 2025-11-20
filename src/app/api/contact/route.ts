import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const formData = await request.json()
    
    // Send email notification to admin
    await resend.emails.send({
      from: 'JetBuilder Contact <contact@jetbuilder.io>',
      to: [process.env.ADMIN_EMAIL || 'admin@example.com'],
      subject: `New Contact Form Submission - ${formData.companyName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        
        <h3>Personal Information</h3>
        <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
        <p><strong>Job Title:</strong> ${formData.jobTitle}</p>
        
        <h3>Company Information</h3>
        <p><strong>Company:</strong> ${formData.companyName}</p>
        <p><strong>Size:</strong> ${formData.companySize}</p>
        <p><strong>Industry:</strong> ${formData.industry}</p>
        <p><strong>Country:</strong> ${formData.country}</p>
        <p><strong>Website:</strong> ${formData.website || 'Not provided'}</p>
        
        <h3>Project Information</h3>
        <p><strong>Interested In:</strong> ${formData.interestedIn.join(', ')}</p>
        <p><strong>Timeline:</strong> ${formData.projectTimeline}</p>
        <p><strong>Budget:</strong> ${formData.budget}</p>
        <p><strong>Current Challenges:</strong></p>
        <p>${formData.currentChallenges}</p>
        <p><strong>Specific Requirements:</strong></p>
        <p>${formData.specificRequirements}</p>
        
        <h3>Additional Information</h3>
        <p><strong>How They Heard:</strong> ${formData.howDidYouHear}</p>
        <p><strong>Preferred Contact Method:</strong> ${formData.preferredContactMethod}</p>
        <p><strong>Best Time to Contact:</strong> ${formData.preferredContactTime}</p>
        
        <p><em>Submitted: ${new Date().toLocaleString()}</em></p>
      `
    })
    
    // Send confirmation email to the user
    await resend.emails.send({
      from: 'JetBuilder Platform <noreply@jetbuilder.io>',
      to: [formData.email],
      subject: 'Thank You for Contacting JetBuilder',
      html: `
        <h2>Thank You for Your Interest</h2>
        <p>Dear ${formData.firstName},</p>
        <p>We've received your inquiry about our Sovereign AI Platform. Our team will review your information and contact you within 24 hours.</p>
        <p>In the meantime, feel free to explore our resources or schedule a demo at your convenience.</p>
        <br>
        <p>Best regards,<br>The Sovereign AI Team</p>
      `
    })
    
    return NextResponse.json({ 
      success: true, 
      message: 'Form submitted successfully'
    })
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to submit form' },
      { status: 500 }
    )
  }
}

