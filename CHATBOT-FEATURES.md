# Chatbot Features

## Always-Available Floating Button

A floating chatbot icon is now visible on every page of the website:

- **Location**: Bottom-right corner of the screen
- **Design**: Tactical orange circular button with a message icon
- **Animation**: Pulse effect to draw attention
- **Hover Effect**: Scales up slightly on hover

## Two Ways to Start a Chat

### 1. Click the Floating Button
- Available on every page
- Opens general Tactical AI assistant
- Can answer questions about any solution

### 2. Click "Learn More" on Enterprise Solutions
- Opens chatbot with specific context
- Greeting mentions the exact solution
- All responses tailored to that industry

## Context-Aware Intelligence

The chatbot provides specialized responses for each of the 9 enterprise offerings:

1. **Insurance Claims Intelligence**
   - Fraud detection
   - HIPAA compliance
   - Claims processing at scale
   - Integration with claims systems

2. **Healthcare Intelligence**
   - HIPAA compliance
   - EHR integration (Epic, Cerner, Meditech)
   - Clinical insights from voice data
   - Patient data privacy

3. **Banking Intelligence**
   - PCI-DSS, SOX, GLBA compliance
   - Fraud detection and AML
   - Transaction monitoring
   - Financial regulatory requirements

4. **Legal Intelligence**
   - Attorney-client privilege protection
   - Depositions and court recordings
   - Air-gapped deployment options
   - Confidentiality guarantees

5. **Energy & Utilities Intelligence**
   - NERC-CIP compliance
   - SCADA integration
   - Critical infrastructure protection
   - Field operations monitoring

6. **Pharmaceutical Intelligence**
   - FDA 21 CFR Part 11 compliance
   - Clinical trial data processing
   - IP protection
   - GxP-ready deployment

7. **Telecom Intelligence**
   - Carrier-grade scale
   - Billions of voice minutes
   - Real-time call analysis
   - Network operations intelligence

8. **Manufacturing Intelligence**
   - MES, ERP, SCADA integration
   - Shop floor operations
   - Quality control monitoring
   - Supply chain intelligence

9. **Government Intelligence**
   - FedRAMP High and IL-5
   - Classified data handling
   - NIST 800-53 compliance
   - Air-gapped deployment

## Key Chatbot Capabilities

### Security Emphasis
- Every response emphasizes Rust-powered security
- Memory safety guarantees
- Private infrastructure deployment
- Zero cloud dependencies

### Performance Highlights
- Microsecond latency
- Massive scale processing
- Real-time intelligence extraction
- Zero-cost abstractions

### Common Questions Handled
- "How does it work?"
- "What about security/compliance?"
- "How does it integrate?"
- "What's the pricing?"
- "Can I get a demo?"
- "What about fraud detection?" (industry-specific)
- "How does it scale?"

## Technical Details

### Message Reset
- Messages clear when you close the chat
- Fresh conversation when switching topics
- Context automatically updates based on "Learn More" click

### Visual Design
- Matches tactical AI theme
- Gunmetal background with tactical orange accents
- Professional military-style interface
- Mobile-responsive design

### User Experience
- Typing indicators show bot is "thinking"
- Timestamps on all messages
- Smooth animations
- Easy to close and reopen

## Testing the Chatbot

1. **Visit**: http://localhost:3001
2. **See the floating button**: Bottom-right corner with pulse animation
3. **Click it**: Opens general assistant
4. **Try asking**: "Tell me about Rust" or "How does it work?"
5. **Close and scroll**: Go to Enterprise section
6. **Click "Learn More"**: On Insurance Claims Intelligence
7. **Notice**: Greeting changes to insurance-specific context
8. **Ask**: "How does fraud detection work?"
9. **Get**: Detailed insurance-specific response
10. **Close and try another**: Click "Learn More" on Healthcare
11. **See**: Completely different context and responses

## Customization

The chatbot responses can be easily extended in:
- `professional-ai-website/src/components/ui/chatbot.tsx`
- Look for the `generateBotResponse()` function
- Add more industry-specific responses
- Customize greetings and default messages

