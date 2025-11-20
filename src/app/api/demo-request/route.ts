import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()
    const { name, email, company, phone, solution, message } = formData

    // Send email to admin
    await resend.emails.send({
      from: 'Platform Demo Request <noreply@jetbuilder.io>',
      to: 'maksim.hajiyev@jetbuilder.io',
      subject: `Platform Demo Request - ${company}`,
      html: `
        <h2>New Platform Demo Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Solution Interest:</strong> ${solution || 'General platform demo'}</p>
        <p><strong>Message:</strong></p>
        <p>${message || 'No additional message'}</p>
      `
    })

    // Send confirmation to user
    await resend.emails.send({
      from: 'JetBuilder Deployment Team <noreply@jetbuilder.io>',
      to: email,
      subject: 'Platform Demo Request Received',
      html: `
        <h2>Thank you for your interest in Sovereign AI Platform</h2>
        <p>Hi ${name},</p>
        <p>We have received your platform demo request. Our deployment team will review your requirements and contact you within 1-2 business days.</p>
        <p><strong>Your Request Details:</strong></p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Solution Interest:</strong> ${solution || 'General platform demo'}</p>
        <br>
        <p>Best regards,<br>JetBuilder Deployment Team</p>
      `
    })

    return NextResponse.json({ success: true, message: 'Demo request submitted successfully' })
  } catch (error) {
    console.error('Error processing demo request:', error)
    return NextResponse.json({ success: false, message: 'Failed to submit demo request' }, { status: 500 })
  }
}

