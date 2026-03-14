import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
  // Check if Resend API key is configured
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not configured')
    return NextResponse.json(
      { success: false, message: 'Email service not configured. Please contact support.' },
      { status: 500 }
    )
  }

  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const data = await request.json()
    
    console.log('Received application data. Has resume:', !!data.resumeData)
    if (data.resumeData) {
      const resumeSizeKB = Math.round(data.resumeData.length / 1024)
      console.log('Resume size:', resumeSizeKB, 'KB')
      
      // Vercel has a 4.5MB payload limit for serverless functions
      if (resumeSizeKB > 4500) {
        console.error('Resume file too large:', resumeSizeKB, 'KB')
        return NextResponse.json(
          { success: false, message: 'Resume file is too large. Please upload a file smaller than 4MB.' },
          { status: 413 }
        )
      }
    }
    
    // Prepare email options - Career applications go to HRM
    // Using maksim email because Resend test mode only allows sending to verified address
    const recipientEmail = 'maksim.hajiyev@jetbuilder.io' // Works in Resend test mode
    console.log('Sending career application email to:', recipientEmail)
    console.log('Resend API Key configured:', !!process.env.RESEND_API_KEY)
    
    const emailOptions: any = {
      from: 'JetBuilder Careers <noreply@jetbuilder.io>',
      to: [recipientEmail], // Hardcoded to HRM email - do not use env var
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
        <p><strong>Availability:</strong> ${data.availability || 'Not provided'}</p>
        <p><strong>Security Clearance:</strong> ${data.securityClearance || 'Not provided'}</p>
        <p><strong>Willing to Relocate:</strong> ${data.willingToRelocate || 'Not provided'}</p>
        
        <h3>Application Details</h3>
        <p><strong>How They Heard:</strong> ${data.howHeard || 'Not provided'}</p>
        <p><strong>Cover Letter:</strong></p>
        <p style="white-space: pre-wrap;">${data.coverLetter || 'Not provided'}</p>
        <p><strong>Additional Info:</strong></p>
        <p style="white-space: pre-wrap;">${data.additionalInfo || 'Not provided'}</p>
        
        <p><strong>Resume:</strong> ${data.resumeName || 'No resume attached'} ${data.resumeData ? '(attached)' : ''}</p>
        
        <p><em>Submitted: ${new Date().toLocaleString()}</em></p>
      `
    }

    // Add attachment if resume data exists
    if (data.resumeData && data.resumeName) {
      // Extract base64 content (remove data:type;base64, prefix)
      const base64Content = data.resumeData.split(',')[1]
      emailOptions.attachments = [{
        filename: data.resumeName,
        content: base64Content,
      }]
    }
    
    // Log the email options before sending
    console.log('Email options before send:', {
      to: emailOptions.to,
      subject: emailOptions.subject,
      hasAttachments: !!emailOptions.attachments
    })
    
    // Send email to HRM - hardcoded recipient
    try {
      const emailResult = await resend.emails.send(emailOptions)
      console.log('Resend API response:', JSON.stringify(emailResult, null, 2))
      
      if (emailResult.error) {
        console.error('Resend API error:', emailResult.error)
        throw new Error(`Resend API error: ${JSON.stringify(emailResult.error)}`)
      }
      
      console.log('Email sent successfully to HRM. Email ID:', emailResult.data?.id)
    } catch (emailError: any) {
      console.error('Failed to send email to HRM:', emailError)
      // Log detailed error information
      if (emailError.message) {
        console.error('Error message:', emailError.message)
      }
      if (emailError.response) {
        console.error('Error response:', emailError.response)
      }
      throw emailError // Re-throw to be caught by outer catch
    }
    
    // Confirmation to applicant (don't fail if this fails)
    try {
      await resend.emails.send({
        from: 'JetBuilder Careers <noreply@jetbuilder.io>',
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
      console.log('Confirmation email sent to applicant:', data.email)
    } catch (confirmationError) {
      console.error('Failed to send confirmation email (non-critical):', confirmationError)
      // Don't fail the whole request if confirmation email fails
    }
    
    return NextResponse.json({ 
      success: true, 
      message: 'Application submitted successfully' 
    })
  } catch (error: any) {
    console.error('Error processing application:', error)
    const errorMessage = error?.message || 'Failed to submit application'
    const errorDetails = error?.response?.data || error?.response || error
    
    console.error('Full error details:', JSON.stringify(errorDetails, null, 2))
    
    return NextResponse.json(
      { 
        success: false, 
        message: errorMessage,
        error: process.env.NODE_ENV === 'development' ? errorDetails : undefined
      },
      { status: 500 }
    )
  }
}

