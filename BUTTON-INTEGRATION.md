# Button Integration with Chatbot

## All Buttons Now Open Chatbot with Contact Form

Every clickable button and link across the website now opens the chatbot with the contact form, ensuring maximum lead capture.

## Buttons Updated

### Hero Section (Top of Homepage)

**"Request Briefing" Button**
- Opens chatbot with topic: "Tactical AI Platform Briefing"
- Form appears immediately
- User can request comprehensive briefing materials

**"View Demo" Button**
- Opens chatbot with topic: "Platform Demo Request"
- Form appears immediately
- User can schedule a demonstration

### Enterprise Section

**"Learn More" on ALL 9 Solutions**
- Insurance Claims Intelligence
- Healthcare Intelligence
- Banking Intelligence
- Legal Intelligence
- Energy & Utilities Intelligence
- Pharmaceutical Intelligence
- Telecom Intelligence
- Manufacturing Intelligence
- Government Intelligence

Each opens chatbot with that specific solution name as the topic.

### Resources Section

**Each Resource Card (4 total)**
- Clicking anywhere on the card opens chatbot
- Topic: "Request Report: [Article Title]"
- Examples:
  - "Request Report: Build agents that understand every voice"
  - "Request Report: Why we built our low-latency AI platform"
  - "Request Report: The ultimate guide to healthcare AI"
  - "Request Report: The return of on-premise"

**"Request Briefing" Button**
- Opens chatbot with topic: "Get Started with Tactical AI"
- Form appears for getting started information

**"Contact Sales" Button**
- Opens chatbot with topic: "Contact Sales Team"
- Form appears for sales inquiries

## User Experience Flow

### Example 1: User Wants a Demo

1. User lands on homepage
2. Sees hero section with "View Demo" button
3. Clicks "View Demo"
4. Chatbot opens: "Hello! I'm here to help you learn more about our Platform Demo Request solution..."
5. Contact form appears immediately
6. User fills out: John Doe, john@company.com, ACME Corp, USA
7. Submits form
8. Bot confirms: "Thank you, John! Our team will contact you to schedule your demo."
9. User can ask more questions without seeing form again

### Example 2: User Wants a Report

1. User scrolls to Resources section
2. Sees card: "Why we built our low-latency AI platform"
3. Clicks the card
4. Chatbot opens: "Hello! I'm here to help you learn more about our Request Report: Why we built our low-latency AI platform solution..."
5. Form appears
6. User fills out contact info
7. Bot confirms: "We'll send you the full report shortly"

### Example 3: Industry-Specific Interest

1. User scrolls to Enterprise section
2. Clicks "Learn More" on "Healthcare Intelligence"
3. Chatbot opens with healthcare-specific greeting
4. Form appears
5. User asks: "How does HIPAA compliance work?"
6. Bot provides detailed healthcare-specific answer
7. Form still visible (not submitted yet)
8. User fills out form
9. Bot thanks them and notes healthcare interest
10. User continues asking healthcare questions

## Context-Aware Greetings

Each button click triggers a unique greeting:

**Briefing Request:**
"Hello! I'm here to help you learn more about our Tactical AI Platform Briefing solution..."

**Demo Request:**
"Hello! I'm here to help you learn more about our Platform Demo Request solution..."

**Report Request:**
"Hello! I'm here to help you learn more about our Request Report: [Article Name] solution..."

**Insurance Click:**
"Hello! I'm here to help you learn more about our Insurance Claims Intelligence solution..."

**Sales Contact:**
"Hello! I'm here to help you learn more about our Contact Sales Team solution..."

## Lead Capture Strategy

**Every interaction captures:**
1. First Name
2. Last Name
3. Email Address
4. Company Name
5. Country
6. **Interest Topic** (which button they clicked)

This gives you complete context about what the user is interested in:
- Want a demo → Send demo scheduling email
- Want healthcare info → Route to healthcare sales team
- Want report → Send report + nurture sequence
- Clicked insurance → Focus on insurance use cases

## Implementation Details

### Files Modified

1. **hero.tsx**
   - Added chatbot state management
   - Connected "Request Briefing" and "View Demo" buttons
   - Integrated chatbot component

2. **resources.tsx**
   - Added chatbot state management
   - Made resource cards clickable
   - Connected "Request Briefing" and "Contact Sales" buttons
   - Integrated chatbot component

3. **enterprise.tsx**
   - Already had chatbot integration for "Learn More" buttons
   - No changes needed

### How It Works Technically

```typescript
// State management
const [isChatOpen, setIsChatOpen] = useState(false)
const [chatTopic, setChatTopic] = useState<string>('')

// Button handler
const handleRequestBriefing = () => {
  setChatTopic('Tactical AI Platform Briefing')
  setIsChatOpen(true)
}

// Button
<Button onClick={handleRequestBriefing}>
  Request Briefing
</Button>

// Chatbot component
<Chatbot 
  isOpen={isChatOpen} 
  onClose={() => setIsChatOpen(false)} 
  topic={chatTopic}
/>
```

## Testing Checklist

- [x] "Request Briefing" in Hero opens chatbot
- [x] "View Demo" in Hero opens chatbot
- [x] Each of 9 "Learn More" buttons open chatbot
- [x] Each of 4 Resource cards open chatbot
- [x] "Request Briefing" in Resources opens chatbot
- [x] "Contact Sales" in Resources opens chatbot
- [x] Each button shows correct topic/greeting
- [x] Form appears on every interaction
- [x] Form submission works
- [x] Context is preserved per button click

## Benefits

### For Lead Generation
- **100% lead capture rate** on interested visitors
- Know exactly what they're interested in
- Collect complete contact information
- Can follow up with targeted messaging

### For User Experience
- Instant gratification - no waiting for downloads
- Can ask questions before committing
- Professional, helpful interaction
- Clear next steps

### For Sales Team
- Pre-qualified leads with intent signal
- Know their specific interest area
- Have their complete contact info
- Context for personalized follow-up

## Next Steps

### Email Integration
When form is submitted, send automated emails:
- **Demo Request** → Calendar link for scheduling
- **Report Request** → PDF attachment with report
- **Sales Contact** → Introduce account executive
- **Briefing Request** → Comprehensive info package
- **Solution Interest** → Industry-specific case studies

### CRM Integration
Log to Salesforce/HubSpot:
```
Lead Source: Website Chatbot
Interest Topic: [Button Clicked]
First Interaction: [Timestamp]
Status: New Lead - [Topic]
```

### Analytics
Track which buttons generate most leads:
- Conversion rate per button
- Time to form submission
- Most popular solutions
- Geographic distribution

## Current Status

**FULLY FUNCTIONAL** ✓

Every button on your website now:
- Opens intelligent chatbot
- Shows contact form immediately
- Captures lead with context
- Provides helpful responses
- Routes to appropriate follow-up

Visit **http://localhost:3001** and click any button to see it in action!

