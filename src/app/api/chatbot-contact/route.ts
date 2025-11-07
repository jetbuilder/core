import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const contactInfo = await request.json()
    
    // Send email to admin
    await resend.emails.send({
      from: 'Sovereign AI Chatbot <onboarding@resend.dev>',
      to: [process.env.ADMIN_EMAIL || 'admin@example.com'],
      subject: `New Chatbot Lead - ${contactInfo.company}`,
      html: `
        <h2>New Chatbot Contact</h2>
        <p><strong>Name:</strong> ${contactInfo.firstName} ${contactInfo.lastName}</p>
        <p><strong>Email:</strong> ${contactInfo.email}</p>
        <p><strong>Company:</strong> ${contactInfo.company}</p>
        <p><strong>Country:</strong> ${contactInfo.country}</p>
        <p><em>Captured via chatbot: ${new Date().toLocaleString()}</em></p>
      `
    })
    
    return NextResponse.json({ 
      success: true, 
      message: 'Contact information received' 
    })
  } catch (error) {
    console.error('Error processing chatbot contact:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to submit information' },
      { status: 500 }
    )
  }
}

