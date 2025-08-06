const { allocateDiscounts } = require('./src/allocator');
const fs = require('fs');

function main() {
  let rawData;
  try {
    rawData = fs.readFileSync('./sampleInput.json', 'utf-8');
    console.log(" File read successfully", rawData);
  } catch (err) {
    console.error(" Failed to read file:", err.message);
    return;
  }

  const sampleInput = JSON.parse(rawData);

  // const agents = sampleInput.salesAgents.map(agent => ({
  //   id: agent.id,
  //   name: agent.name || agent.id,
  //   performance: agent.performanceScore,
  //   seniority: agent.seniorityMonths,       IN THIS PART--->i MADE A MISTAKE
  //   targetAchieved: agent.targetAchievedPercent,
  //   clientCount: agent.activeClients
  // }));

  const agents = sampleInput.salesAgents.map(agent => ({
  id: agent.id,
  name: agent.name || agent.id,
  performanceScore: agent.performanceScore,
  seniorityMonths: agent.seniorityMonths,
  targetAchievedPercent: agent.targetAchievedPercent,
  activeClients: agent.activeClients
}));


  const kitty = sampleInput.siteKitty;

  const result = allocateDiscounts(agents, kitty);

  fs.writeFileSync('sampleOutput.json', JSON.stringify(result, null, 2));
  console.log(" Discount Allocation Done\n");
  console.table(result.allocations, ['id', 'name', 'assignedDiscount', 'justification']);
}

main();
