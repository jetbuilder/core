// Resend Configuration Diagnostic Test
// This will test different email endpoints to see what's working

const tests = [
  {
    name: 'Test 1: Career Application (noreply@jetbuilder.io → hrm@jetbuilder.io)',
    endpoint: 'https://www.jetbuilder.io/api/applications',
    data: {
      firstName: 'Test',
      lastName: 'User',
      email: 'test@example.com',
      phone: '1234567890',
      location: 'Test City',
      jobId: 'test-job',
      jobTitle: 'Test Position',
      coverLetter: 'Test application',
      yearsExperience: '3-5'
    }
  },
  {
    name: 'Test 2: Demo Request (noreply@jetbuilder.io → ADMIN_EMAIL or maksim)',
    endpoint: 'https://www.jetbuilder.io/api/demo-request',
    data: {
      name: 'Test User',
      email: 'test@example.com',
      company: 'Test Company',
      phone: '1234567890',
      solution: 'General platform demo',
      message: 'This is a test'
    }
  }
];

async function runTest(test) {
  console.log('\n' + '='.repeat(80));
  console.log('🧪', test.name);
  console.log('='.repeat(80));
  console.log('📍 Endpoint:', test.endpoint);
  console.log('⏳ Sending request...\n');

  try {
    const response = await fetch(test.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(test.data),
    });

    console.log('📊 Response Status:', response.status, response.statusText);
    
    const responseText = await response.text();
    let responseData;
    
    try {
      responseData = JSON.parse(responseText);
      console.log('📄 Response:', JSON.stringify(responseData, null, 2));
    } catch {
      console.log('📄 Response (raw):', responseText);
    }

    if (response.ok && responseData?.success) {
      console.log('✅ SUCCESS - This endpoint is working!');
      return { success: true, test: test.name };
    } else {
      console.log('❌ FAILED - This endpoint has issues');
      if (responseData?.message) {
        console.log('💬 Error Message:', responseData.message);
        
        // Parse Resend error if present
        if (responseData.message.includes('Resend API error')) {
          console.log('\n🔍 Resend Error Details:');
          const match = responseData.message.match(/\{.*\}/);
          if (match) {
            try {
              const resendError = JSON.parse(match[0]);
              console.log('   - Status Code:', resendError.statusCode);
              console.log('   - Error Name:', resendError.name);
              console.log('   - Message:', resendError.message);
              
              if (resendError.message.includes('not verified')) {
                console.log('\n⚠️  ISSUE: Domain not verified in Resend');
              } else if (resendError.statusCode === 403 && resendError.message.includes('testing emails')) {
                console.log('\n⚠️  ISSUE: Resend is in test mode - can only send to verified email');
              }
            } catch (e) {
              console.log('   Raw:', match[0]);
            }
          }
        }
      }
      return { success: false, test: test.name, error: responseData?.message };
    }
  } catch (error) {
    console.log('❌ REQUEST FAILED');
    console.log('💬 Error:', error.message);
    return { success: false, test: test.name, error: error.message };
  }
}

async function runAllTests() {
  console.log('\n╔════════════════════════════════════════════════════════════════════════════╗');
  console.log('║                     RESEND CONFIGURATION DIAGNOSTIC                         ║');
  console.log('╚════════════════════════════════════════════════════════════════════════════╝\n');

  const results = [];
  
  for (const test of tests) {
    const result = await runTest(test);
    results.push(result);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 sec between tests
  }

  // Summary
  console.log('\n' + '='.repeat(80));
  console.log('📊 TEST SUMMARY');
  console.log('='.repeat(80));
  
  results.forEach((result, index) => {
    const status = result.success ? '✅ PASSED' : '❌ FAILED';
    console.log(`${status} - ${result.test}`);
    if (result.error) {
      console.log(`   Error: ${result.error.substring(0, 100)}...`);
    }
  });

  const allPassed = results.every(r => r.success);
  const somePassed = results.some(r => r.success);

  console.log('\n' + '='.repeat(80));
  if (allPassed) {
    console.log('🎉 ALL TESTS PASSED! Resend is configured correctly.');
  } else if (somePassed) {
    console.log('⚠️  PARTIAL SUCCESS - Some endpoints work, others don\'t.');
    console.log('\n💡 Possible Issues:');
    console.log('   1. Different "from" addresses have different verification status');
    console.log('   2. Some recipient emails work in test mode, others don\'t');
    console.log('   3. Domain verification is incomplete');
  } else {
    console.log('❌ ALL TESTS FAILED - Resend needs configuration.');
    console.log('\n💡 Next Steps:');
    console.log('   1. Verify jetbuilder.io domain in Resend Dashboard');
    console.log('   2. Add DNS records (SPF, DKIM) to your domain');
    console.log('   3. Check RESEND_API_KEY is set in Vercel');
    console.log('   4. Ensure you\'re not in Resend test mode');
  }
  console.log('='.repeat(80) + '\n');
}

runAllTests();

