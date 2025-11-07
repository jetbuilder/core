# Contact Form Feature in Chatbot

## Overview

The chatbot automatically collects user information on EVERY interaction - whether they click "Learn More" on any solution, use the floating chatbot button, or ask any question.

## How It Works

### Always-On Form

The contact form appears in EVERY chat interaction:

1. **When chatbot opens** - Form appears immediately with the greeting
2. **On every question** - Form appears below every bot response
3. **Until submitted** - Form keeps appearing until user submits their information
4. **After submission** - Form no longer appears, user can ask questions freely

### Form Appears Automatically

No matter how the user starts the conversation:
- Click floating chatbot button → Form appears
- Click "Learn More" on Insurance → Form appears
- Click "Learn More" on Healthcare → Form appears  
- Click "Learn More" on ANY solution → Form appears
- Ask any question → Form appears after the answer

### Required Information

The form collects:
- **First Name** (required)
- **Last Name** (required)
- **Email Address** (required, validated)
- **Company Name** (required)
- **Country** (required)

### Form Validation

- All fields are required
- Email address must be valid format
- Alert shown if validation fails

## User Experience Examples

### Example 1: User Clicks "Learn More" on Insurance

**Bot Greeting:** "Hello! I'm here to help you learn more about our Insurance Claims Intelligence solution. Please share your contact information below so we can send you detailed materials and our team can provide personalized assistance."

**Action:** Contact form appears immediately below the greeting.

### Example 2: User Clicks Floating Chatbot Button

**Bot Greeting:** "Hello! I'm here to help you learn more about our Tactical AI solutions. Please share your contact information below so we can send you detailed materials and our team can provide personalized assistance."

**Action:** Contact form appears immediately.

### Example 3: User Asks a Question Before Submitting

**User:** "What's the pricing?"

**Bot Response:** "Pricing is customized based on your claim volume, deployment scale, and compliance requirements. Our enterprise team will design a private infrastructure deployment tailored to your needs. Please share your contact information below so our team can send you detailed technical documentation and case studies specific to your needs."

**Action:** Contact form appears below the response.

### Example 4: After Submitting Information

**User:** Fills out form and clicks "Submit Information"

**Bot Response:** "Thank you, John! I've received your information. Our team at JetBuilder will send detailed information about our Insurance Claims Intelligence to john@company.com. You can continue asking questions, and I'll provide more specific information now that I know your background."

**User:** "What about pricing?"

**Bot Response:** "Thank you for your interest! Pricing is customized based on your claim volume, deployment scale, and compliance requirements. Our enterprise team will reach out to you shortly with a detailed proposal tailored to your needs."

**Action:** No form shown (already submitted).

## After Form Submission

Once the user submits their information:

1. **Confirmation Message:** 
   - "Thank you, [FirstName]! I've received your information. Our team at JetBuilder will send detailed information about our [Solution] to [Email]. You can continue asking questions, and I'll provide more specific information now that I know your background."

2. **Data Storage:**
   - Information is logged to browser console
   - In production, this would send to your backend/CRM system

3. **Continued Conversation:**
   - User can continue asking questions
   - Bot knows they've already provided information
   - No duplicate forms will appear

4. **Form Reset:**
   - Form data is cleared when chat is closed
   - Fresh start for new conversations

## Integration with Different Topics

The form works with all 9 enterprise solutions:

- Insurance Claims Intelligence
- Healthcare Intelligence
- Banking Intelligence
- Legal Intelligence
- Energy & Utilities Intelligence
- Pharmaceutical Intelligence
- Telecom Intelligence
- Manufacturing Intelligence
- Government Intelligence

The confirmation message mentions the specific solution they're interested in.

## Technical Implementation

### Data Structure

```typescript
interface ContactInfo {
  firstName: string
  lastName: string
  email: string
  company: string
  country: string
}
```

### Storage Location

Currently logged to console:
```javascript
console.log('Contact Information Submitted:', contactInfo)
```

### Production Integration

To integrate with your backend:

1. **Update the submission handler** in `chatbot.tsx`:

```typescript
const handleSubmitContactInfo = async () => {
  // ... validation code ...
  
  // Send to backend
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...contactInfo,
        topic: topic,
        timestamp: new Date().toISOString()
      })
    })
    
    if (response.ok) {
      // Success handling
    }
  } catch (error) {
    console.error('Failed to submit contact info:', error)
  }
}
```

2. **Create API endpoint** at `/api/contact` to:
   - Store in database
   - Send to CRM (Salesforce, HubSpot, etc.)
   - Trigger email notifications
   - Add to mailing list

## Privacy & Security

- **Data Collection Notice:** "Your information is secure and will only be used to send you relevant materials."
- **One-time Collection:** Form only appears once per chat session
- **Clear Purpose:** Users know exactly why their information is needed
- **Validation:** Email format validated before submission

## Testing the Feature

1. Visit http://localhost:3001
2. Click the floating chatbot icon or "Learn More" on any solution
3. Type one of these questions:
   - "What's the pricing?"
   - "Can I get a demo?"
   - "Send me more information"
   - "I'd like to schedule a consultation"
4. See the contact form appear automatically
5. Fill in all fields and click "Submit Information"
6. See confirmation message
7. Ask another question like "What about pricing?"
8. Notice no form appears (already submitted)

## Customization Options

### Add More Trigger Keywords

Edit the `checkIfFormNeeded()` function in `chatbot.tsx`:

```typescript
const formTriggers = [
  // ... existing triggers ...
  'your-custom-trigger',
  'another-trigger'
]
```

### Change Required Fields

Modify the form in the component to add/remove fields as needed.

### Customize Confirmation Message

Edit the confirmation message in `handleSubmitContactInfo()` function.

### Style Customization

The form uses your tactical theme colors:
- Background: gunmetal-800
- Border: tactical-600
- Inputs: gunmetal-900
- Button: tactical-700

Adjust these classes to match your brand.

