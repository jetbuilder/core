// Direct test with cache busting
const testData = {
  firstName: 'TestDirect',
  lastName: 'User' + Date.now(),
  email: 'test@example.com',
  phone: '+1234567890',
  location: 'Toronto, ON',
  jobId: 'test-' + Date.now(),
  jobTitle: 'Test Position',
  coverLetter: 'Direct test at ' + new Date().toISOString(),
  yearsExperience: '3-5'
};

console.log('🧪 Direct Test - Career Application');
console.log('📧 Should send to: maksim.hajiyev@jetbuilder.io');
console.log('⏰ Timestamp:', new Date().toISOString());
console.log('\n⏳ Sending...\n');

fetch('https://www.jetbuilder.io/api/applications?' + Date.now(), {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache'
  },
  body: JSON.stringify(testData),
})
  .then(async (response) => {
    console.log('📊 Status:', response.status, response.statusText);
    const data = await response.json();
    console.log('📄 Response:', JSON.stringify(data, null, 2));
    
    if (data.success) {
      console.log('\n✅ SUCCESS! Check maksim.hajiyev@jetbuilder.io for the email.');
    } else {
      console.log('\n❌ FAILED:', data.message);
    }
  })
  .catch((error) => {
    console.error('\n❌ ERROR:', error.message);
  });



