# Standalone Contact Form Page

## Overview

A comprehensive, dedicated contact form page (`/contact`) that extracts detailed customer information for lead qualification and CRM integration.

## Access Points

**Header Navigation:**
- Desktop: "Contact" button (top right)
- Mobile: "Contact" button in mobile menu

**Direct URL:**
- `http://localhost:3001/contact`
- In production: `https://your-domain.com/contact`

## Form Sections & Fields

### 1. Personal Information
Extracts individual contact details:

- **First Name*** (required)
- **Last Name*** (required) 
- **Email Address*** (required, validated)
- **Phone Number** (optional)
- **Job Title*** (required)
  - Used to identify decision-maker level

### 2. Company Information
Qualifies the organization:

- **Company Name*** (required)
- **Company Size*** (required)
  - Options: 1-50, 51-200, 201-500, 501-1000, 1001-5000, 5001+, Government Agency
  - Helps determine deployment scale
- **Industry*** (required)
  - Options: Defense & Military, Law Enforcement, Intelligence Services, Healthcare, Banking & Finance, Insurance, Legal Services, Energy & Utilities, Pharmaceutical, Telecommunications, Manufacturing, Government & Public Sector, Other
  - Routes to appropriate sales specialist
- **Country*** (required)
  - For compliance and data sovereignty requirements
- **Company Website** (optional)
  - For background research

### 3. Project Information
Understands requirements and urgency:

- **Solutions Interested In*** (checkboxes, select multiple)
  - Voice Intelligence & Transcription
  - Real-Time Communications Analysis
  - Multi-Modal Intelligence
  - Threat Detection & Analysis
  - Healthcare Intelligence
  - Banking Intelligence
  - Insurance Intelligence
  - Legal Intelligence
  - Government Intelligence
  - Custom Solution
  
- **Project Timeline*** (required)
  - Immediate (0-1 month)
  - 1-3 months
  - 3-6 months
  - 6-12 months
  - 12+ months
  - Research phase
  - Prioritizes hot leads

- **Budget Range*** (required)
  - Under $100K
  - $100K - $250K
  - $250K - $500K
  - $500K - $1M
  - $1M - $5M
  - $5M+
  - Flexible
  - Qualifies deal size

- **Current Challenges*** (textarea, required)
  - Free-form description of problems
  - Helps understand pain points

- **Specific Requirements** (textarea, optional)
  - Technical requirements
  - Compliance needs
  - Integration requirements
  - Any special considerations

### 4. Additional Information
Marketing and communication preferences:

- **How Did You Hear About Us?** (optional)
  - Web Search
  - Referral
  - Conference/Event
  - Social Media
  - Industry Publication
  - Partner/Reseller
  - Other
  - Tracks marketing effectiveness

- **Preferred Contact Method*** (required)
  - Email (default)
  - Phone
  - Video Call
  - Respects communication preference

- **Preferred Contact Time** (optional)
  - Free-form field
  - e.g., "Weekdays 9am-5pm EST"

## Data Captured (Complete Structure)

```typescript
{
  // Personal
  firstName: string
  lastName: string
  email: string (validated)
  phone: string
  jobTitle: string
  
  // Company
  companyName: string
  companySize: string (dropdown value)
  industry: string (dropdown value)
  country: string
  website: string (URL)
  
  // Project
  interestedIn: string[] (array of selected solutions)
  projectTimeline: string (dropdown value)
  budget: string (dropdown value)
  currentChallenges: string (long text)
  specificRequirements: string (long text)
  
  // Additional
  howDidYouHear: string (dropdown value)
  preferredContactMethod: string (dropdown value)
  preferredContactTime: string
  
  // Metadata (auto-generated)
  submittedAt: timestamp
  source: "contact-form"
}
```

## User Experience

### Form Flow

1. **User clicks "Contact"** in header
2. **Lands on `/contact` page**
   - Professional tactical-themed layout
   - Clear sections with icons
   - Sidebar with benefits and quick contact info

3. **Fills out form progressively**
   - Organized in logical sections
   - Required fields marked with *
   - Helpful placeholders
   - Validation on submit

4. **Submits form**
   - Shows "Submitting..." state
   - Form data logged to console
   - Validation checks

5. **Success confirmation screen**
   - Thank you message with their name
   - What happens next (24-hour response)
   - What will be discussed
   - Email confirmation sent
   - "Return to Home" button

### Success Screen Details

Shows:
- Checkmark icon
- "Thank You, [FirstName]!"
- Confirmation they'll be contacted within 24 hours
- Their preferred contact method
- What will be discussed:
  - Specific requirements for their company
  - Custom deployment options
  - Security and compliance
  - Proof of concept and demonstration
- Email confirmation sent to their address
- Return to Home button

## Lead Qualification Score

Based on the form data, you can calculate a lead score:

**High Priority (Hot Lead):**
- Budget: $1M+
- Timeline: Immediate or 1-3 months
- Company Size: 1001+ or Government
- Industry: Defense, Intelligence, Banking, Healthcare
- Multiple solutions selected
- Detailed current challenges

**Medium Priority (Warm Lead):**
- Budget: $250K - $1M
- Timeline: 3-6 months
- Company Size: 201-1000
- Industry: Any enterprise
- 1-2 solutions selected
- Some challenges described

**Low Priority (Cold Lead):**
- Budget: Under $250K
- Timeline: 12+ months or research
- Company Size: Under 200
- Industry: Other
- Vague or minimal information

## CRM Integration Example

### Salesforce Integration

```javascript
// On form submission
const leadData = {
  // Standard Fields
  FirstName: formData.firstName,
  LastName: formData.lastName,
  Email: formData.email,
  Phone: formData.phone,
  Title: formData.jobTitle,
  Company: formData.companyName,
  
  // Custom Fields
  Company_Size__c: formData.companySize,
  Industry: formData.industry,
  Country__c: formData.country,
  Website: formData.website,
  
  // Project Details
  Solutions_Interest__c: formData.interestedIn.join('; '),
  Project_Timeline__c: formData.projectTimeline,
  Budget_Range__c: formData.budget,
  Current_Challenges__c: formData.currentChallenges,
  Specific_Requirements__c: formData.specificRequirements,
  
  // Marketing
  LeadSource: 'Website - Contact Form',
  Lead_Source_Detail__c: formData.howDidYouHear,
  Preferred_Contact_Method__c: formData.preferredContactMethod,
  Preferred_Contact_Time__c: formData.preferredContactTime,
  
  // Status
  Status: 'New',
  Priority__c: calculateLeadPriority(formData),
  Lead_Score__c: calculateLeadScore(formData),
  
  // Metadata
  Submitted_At__c: new Date().toISOString(),
  Form_Type__c: 'Detailed Contact Form'
}

// Send to Salesforce
await salesforce.sobject('Lead').create(leadData)
```

### HubSpot Integration

```javascript
// On form submission
const hubspotContact = {
  properties: {
    firstname: formData.firstName,
    lastname: formData.lastName,
    email: formData.email,
    phone: formData.phone,
    jobtitle: formData.jobTitle,
    company: formData.companyName,
    company_size: formData.companySize,
    industry: formData.industry,
    country: formData.country,
    website: formData.website,
    solutions_interest: formData.interestedIn.join('; '),
    project_timeline: formData.projectTimeline,
    budget_range: formData.budget,
    current_challenges: formData.currentChallenges,
    specific_requirements: formData.specificRequirements,
    lead_source: formData.howDidYouHear,
    preferred_contact_method: formData.preferredContactMethod,
    hs_lead_status: 'NEW'
  }
}

await hubspot.crm.contacts.basicApi.create(hubspotContact)
```

## Email Automation Workflows

### 1. Immediate Confirmation Email (< 1 minute)

**To: Customer**
```
Subject: We received your inquiry - JetBuilder Tactical AI

Hi [FirstName],

Thank you for contacting JetBuilder about our Tactical AI solutions.

We've received your inquiry regarding:
[List of selected solutions]

What happens next:
• A solutions architect will review your requirements
• You'll receive a call/email within 24 hours
• We'll schedule a detailed discussion about your needs
• You'll receive relevant case studies and documentation

If you have any immediate questions, reply to this email or call us at +1 (555) TACTICAL.

Best regards,
The JetBuilder Team

---
JetBuilder - Tactical AI for Voice & Unstructured Data Intelligence
```

### 2. Internal Notification (Immediate)

**To: Sales Team**
```
Subject: 🔥 New Contact Form Submission - [Company Name]

Lead Details:
Name: [FirstName] [LastName]
Title: [JobTitle]
Company: [CompanyName] ([CompanySize])
Industry: [Industry]
Country: [Country]
Email: [Email]
Phone: [Phone]

Project Info:
Solutions: [InterestedIn]
Timeline: [ProjectTimeline]
Budget: [BudgetRange]

Challenges:
[CurrentChallenges]

Requirements:
[SpecificRequirements]

Contact Preferences:
Method: [PreferredContactMethod]
Time: [PreferredContactTime]

Lead Score: [CalculatedScore]
Priority: [Priority Level]

[View Full Lead in CRM]
[Assign to Me]
```

### 3. Follow-up Email (24 hours if not contacted)

**To: Customer**
```
Subject: Quick question about your [FirstSolution] needs

Hi [FirstName],

I'm [SalesRep], Solutions Architect at JetBuilder.

I reviewed your inquiry about [Solutions]. Based on your industry 
([Industry]) and the challenges you mentioned, I'd love to discuss 
how we can help [CompanyName].

I have some ideas on how our [RelevantSolution] could address your 
needs, particularly around [KeyChallenge].

Are you available for a quick 15-minute call this week?

[Calendar Booking Link]

Best regards,
[SalesRep Name]
Solutions Architect
JetBuilder
```

## Backend API Endpoint

Create an API endpoint to handle form submissions:

```typescript
// app/api/contact/route.ts
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const formData = await request.json()
    
    // Validate data
    if (!formData.firstName || !formData.email || !formData.companyName) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }
    
    // Calculate lead score
    const leadScore = calculateLeadScore(formData)
    
    // Store in database
    await db.leads.create({
      data: {
        ...formData,
        leadScore,
        submittedAt: new Date(),
        status: 'new'
      }
    })
    
    // Send to CRM
    await sendToSalesforce(formData, leadScore)
    
    // Send confirmation email
    await sendConfirmationEmail(formData)
    
    // Send internal notification
    await sendInternalNotification(formData, leadScore)
    
    // Trigger automation workflows
    await triggerWorkflows(formData)
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    )
  }
}
```

## Current Implementation Status

**Frontend: COMPLETE** ✓
- Full contact form page
- All fields and validation
- Success confirmation screen
- Professional design
- Mobile responsive

**Backend: PENDING**
- Currently logs to browser console
- Need to create `/api/contact` endpoint
- Need database integration
- Need email service integration
- Need CRM integration

## Testing

Visit **http://localhost:3001/contact**

Try:
1. Click "Contact" button in header
2. Fill out minimal required fields
3. Fill out complete form with all details
4. Test validation (try submitting without required fields)
5. Test email validation
6. Submit form
7. See success confirmation
8. Check browser console for submitted data
9. Click "Return to Home"

## Benefits

### For Lead Quality
- **Rich Data**: 18+ fields of information
- **Qualification**: Budget, timeline, company size
- **Context**: Detailed challenges and requirements
- **Intent**: Specific solutions they're interested in

### For Sales Efficiency
- **Pre-Qualified**: Know it's a serious inquiry
- **Prepared**: Have all context before calling
- **Targeted**: Route to right specialist
- **Prioritized**: Focus on high-value leads first

### For Marketing
- **Attribution**: Know how they found you
- **Effectiveness**: Track which sources convert
- **Nurturing**: Have preferences for follow-up
- **Analytics**: Rich data for reporting

## Next Steps for Production

1. **Create API endpoint** (`/api/contact`)
2. **Set up database** (PostgreSQL, MongoDB)
3. **Integrate CRM** (Salesforce, HubSpot)
4. **Set up email service** (SendGrid, AWS SES)
5. **Add reCAPTCHA** (prevent spam)
6. **Set up monitoring** (track submissions, errors)
7. **Create dashboards** (visualize lead data)
8. **Set up alerts** (notify sales of hot leads)

Your website now has a professional, comprehensive contact form that captures everything needed to qualify and convert leads!

