const { processOrder } = require('./app');

console.log('Running Order Workflow Verification Tests...');

// Test 1: Valid Order
const test1 = processOrder('ORD-1001', 250);
if (test1.status !== 'SUCCESS') {
  console.error('? Test 1 Failed: Valid order was rejected');
  process.exit(1);
}

// Test 2: Invalid Amount
const test2 = processOrder('ORD-1002', -50);
if (test2.status !== 'FAILED') {
  console.error('? Test 2 Failed: Negative amount should fail');
  process.exit(1);
}

console.log('? All Order Processing Tests Passed Successfully!');
process.exit(0);
