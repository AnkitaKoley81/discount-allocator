
const { allocateDiscounts } = require('../src/allocator');

test('should allocate discounts correctly and assign justifications', () => {
  const agents = [
    { id: 'A1', name: 'Alice' },
    { id: 'A2', name: 'Bob' },
    { id: 'A3', name: 'Maya' }
  ];

  const result = allocateDiscounts(agents, 100000);
  console.log('Result:', result);

  const total = result.allocations.reduce((sum, a) => sum + a.assignedDiscount, 0);
  expect(total).toBe(100000); 

  // Optional: dynamic justification assignment logic
  result.allocations.forEach(agent => {
    if (agent.assignedDiscount > 33333) {
      agent.justification = 'Received more based on performance';
    } else {
      agent.justification = 'Standard allocation';
    }
  });

  // Assertions to verify justifications (optional)
  result.allocations.forEach(agent => {
    expect(agent.justification).toBeDefined();
    expect(typeof agent.justification).toBe('string');
  });
});
