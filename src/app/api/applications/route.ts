import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const data = await request.json()
    
    // Send email to admin
    await resend.emails.send({
      from: 'Sovereign AI Careers <onboarding@resend.dev>',
      to: [process.env.ADMIN_EMAIL || 'admin@example.com'],
      subject: `New Job Application - ${data.jobTitle} - ${data.firstName} ${data.lastName}`,
      html: `
        <h2>New Job Application</h2>
        
        <h3>Position</h3>
        <p><strong>Job Title:</strong> ${data.jobTitle}</p>
        <p><strong>Job ID:</strong> ${data.jobId}</p>
        
        <h3>Personal Information</h3>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Location:</strong> ${data.location}</p>
        <p><strong>LinkedIn:</strong> ${data.linkedIn || 'Not provided'}</p>
        <p><strong>Portfolio:</strong> ${data.portfolio || 'Not provided'}</p>
        
        <h3>Professional Background</h3>
        <p><strong>Current Company:</strong> ${data.currentCompany || 'Not provided'}</p>
        <p><strong>Years of Experience:</strong> ${data.yearsExperience}</p>
        <p><strong>Expected Salary:</strong> ${data.expectedSalary || 'Not provided'}</p>
        <p><strong>Availability:</strong> ${data.availability}</p>
        <p><strong>Security Clearance:</strong> ${data.securityClearance}</p>
        <p><strong>Willing to Relocate:</strong> ${data.willingToRelocate}</p>
        
        <h3>Application Details</h3>
        <p><strong>How They Heard:</strong> ${data.howHeard || 'Not provided'}</p>
        <p><strong>Cover Letter:</strong></p>
        <p>${data.coverLetter || 'Not provided'}</p>
        <p><strong>Additional Info:</strong></p>
        <p>${data.additionalInfo || 'Not provided'}</p>
        
        <p><strong>Resume:</strong> ${data.resume || 'File attached to application'}</p>
        
        <p><em>Submitted: ${new Date().toLocaleString()}</em></p>
      `
    })
    
    // Confirmation to applicant
    await resend.emails.send({
      from: 'Sovereign AI Careers <onboarding@resend.dev>',
      to: [data.email],
      subject: `Application Received - ${data.jobTitle}`,
      html: `
        <h2>Application Received</h2>
        <p>Dear ${data.firstName},</p>
        <p>Thank you for applying for the <strong>${data.jobTitle}</strong> position at Sovereign AI Platform.</p>
        <p>We've successfully received your application and resume. Our talent acquisition team will review your qualifications and contact you within 5-7 business days.</p>
        <p>If you have any questions in the meantime, please don't hesitate to reach out.</p>
        <br>
        <p>Best regards,<br>The Sovereign AI Talent Team</p>
      `
    })
    
    return NextResponse.json({ 
      success: true, 
      message: 'Application submitted successfully' 
    })
  } catch (error) {
    console.error('Error processing application:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to submit application' },
      { status: 500 }
    )
  }
}

