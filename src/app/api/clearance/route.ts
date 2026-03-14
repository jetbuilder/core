import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const formData = await request.json()
    
    // Send email to admin
    await resend.emails.send({
      from: 'JetBuilder Clearance <noreply@jetbuilder.io>',
      to: ['maksim.hajiyev@jetbuilder.io'],
      subject: `New Clearance Request - ${formData.accessTier} - ${formData.organizationName}`,
      html: `
        <h2>New Clearance Request</h2>
        
        <h3>Contact Information</h3>
        <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
        <p><strong>Job Title:</strong> ${formData.jobTitle}</p>
        
        <h3>Organization</h3>
        <p><strong>Organization:</strong> ${formData.organizationName}</p>
        <p><strong>Type:</strong> ${formData.organizationType}</p>
        
        <h3>Security & Access</h3>
        <p><strong>Access Tier:</strong> ${formData.accessTier}</p>
        <p><strong>Security Clearance:</strong> ${formData.securityClearance}</p>
        
        <h3>Use Case</h3>
        <p><strong>Primary Use Case:</strong> ${formData.primaryUseCase}</p>
        <p><strong>Timeline:</strong> ${formData.timeline}</p>
        <p><strong>Additional Notes:</strong></p>
        <p>${formData.additionalNotes || 'None provided'}</p>
        
        <p><em>Submitted: ${new Date().toLocaleString()}</em></p>
      `
    })
    
    // Confirmation to user
    await resend.emails.send({
      from: 'JetBuilder Platform <noreply@jetbuilder.io>',
      to: [formData.email],
      subject: 'Clearance Request Received',
      html: `
        <h2>Clearance Request Received</h2>
        <p>Dear ${formData.firstName},</p>
        <p>We've received your request for <strong>${formData.accessTier}</strong> tier access.</p>
        <p>Our security team will review your request and contact you within 2-3 business days to discuss the clearance process and next steps.</p>
        <br>
        <p>Best regards,<br>The Sovereign AI Security Team</p>
      `
    })
    
    return NextResponse.json({ 
      success: true, 
      message: 'Clearance request submitted successfully' 
    })
  } catch (error) {
    console.error('Error processing clearance request:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to submit request' },
      { status: 500 }
    )
  }
}

