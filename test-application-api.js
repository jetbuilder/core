// Test script for career application API
// Run with: node test-application-api.js

const testData = {
  firstName: 'Test',
  lastName: 'Applicant',
  email: 'test@example.com',
  phone: '+1234567890',
  location: 'Toronto, ON, Canada',
  linkedIn: 'https://linkedin.com/in/test',
  portfolio: '',
  jobId: 'test-job-001',
  jobTitle: 'Senior ML Engineer - Small Language Models',
  currentCompany: 'Tech Corp',
  yearsExperience: '5+ years',
  coverLetter: 'This is a test application to verify the career application system is working correctly.',
  expectedSalary: '',
  availability: '',
  securityClearance: '',
  willingToRelocate: '',
  howHeard: '',
  additionalInfo: '',
  resumeName: 'test-resume.pdf',
  resumeData: null // No attachment for basic test
};

const API_URL = 'https://www.jetbuilder.io/api/applications';

console.log('🧪 Testing Career Application API...\n');
console.log('📍 API Endpoint:', API_URL);
console.log('👤 Test Applicant:', testData.firstName, testData.lastName);
console.log('💼 Position:', testData.jobTitle);
console.log('\n⏳ Sending request...\n');

fetch(API_URL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(testData),
})
  .then(async (response) => {
    console.log('📊 Response Status:', response.status, response.statusText);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ Error Response:', errorText);
      throw new Error(`HTTP ${response.status}: ${errorText}`);
    }
    
    return response.json();
  })
  .then((data) => {
    console.log('\n✅ Response Data:', JSON.stringify(data, null, 2));
    
    if (data.success) {
      console.log('\n✅ SUCCESS! Application submitted successfully.');
      console.log('📧 Email should be sent to: hrm@jetbuilder.io');
      console.log('📧 Confirmation email should be sent to:', testData.email);
      console.log('\n🎉 Test PASSED!');
    } else {
      console.log('\n❌ FAILED! Application submission returned success=false');
      console.log('Error message:', data.message);
      console.log('\n⚠️ Test FAILED!');
    }
  })
  .catch((error) => {
    console.error('\n❌ ERROR:', error.message);
    console.error('\n⚠️ Test FAILED!');
    console.error('\nPossible issues:');
    console.error('1. RESEND_API_KEY not set in Vercel environment variables');
    console.error('2. Network/connection issue');
    console.error('3. API endpoint not deployed correctly');
    console.error('4. Server error (check Vercel logs)');
  });

