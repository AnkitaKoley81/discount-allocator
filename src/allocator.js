
function allocateDiscounts(agents, totalDiscountKitty) {
  const totalScore = agents.reduce((sum, agent) => {
    const performance = agent.performanceScore ?? 0;
    const seniority = agent.seniorityMonths ?? 0;
    const targetAchieved = agent.targetAchievedPercent ?? 0;
    const clientCount = agent.activeClients ?? 0;

    return sum + performance + seniority + targetAchieved + clientCount;
  }, 0);

  const getJustification = (score) => {
    if (score > 200) return "Consistently high performance and long-term contribution";
    if (score > 100) return "Moderate performance with potential for growth";
    return "Needs improvement and closer performance tracking";
  };

  let allocations;

  if (totalScore === 0) {
    const equalShare = Math.floor(totalDiscountKitty / agents.length);
    let leftover = totalDiscountKitty - equalShare * agents.length;
    
    allocations = agents.map((agent, idx) => {
      const extra = leftover > 0 ? 1 : 0;
      leftover -= extra;
      return {
        id: agent.id,
        name: agent.name,
        assignedDiscount: equalShare + extra,
        justification: "Equal distribution due to lack of score data"
      };
    });
  } else {
    allocations = agents.map(agent => {
      const performance = agent.performanceScore ?? 0;
      const seniority = agent.seniorityMonths ?? 0;
      const targetAchieved = agent.targetAchievedPercent ?? 0;
      const clientCount = agent.activeClients ?? 0;

      const agentScore = performance + seniority + targetAchieved + clientCount;
      const share = (agentScore / totalScore) * totalDiscountKitty;

      return {
        id: agent.id,
        name: agent.name,
        assignedDiscount: Math.round(share),
        justification: getJustification(agentScore)
      };
    });

    // Adjust for rounding error
    const totalAllocated = allocations.reduce((sum, a) => sum + a.assignedDiscount, 0);
    let diff = totalDiscountKitty - totalAllocated;
    let i = 0;
    while (diff !== 0) {
      allocations[i % allocations.length].assignedDiscount += diff > 0 ? 1 : -1;
      diff += diff > 0 ? -1 : 1;
      i++;
    }
  }

  return { allocations };
}

module.exports = { allocateDiscounts };
