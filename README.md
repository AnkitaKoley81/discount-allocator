Discount Allocation Engine
---------------------------------

This project is a performance-based discount allocation system built using Node.js. It takes a total discount budget (kitty) and distributes it among sales agents based on multiple weighted performance factors.

Problem Statement

Goal: Fairly distribute a limited discount kitty across a team of sales agents based on their:

Performance Score

Seniority (in months)

Target Achievement (%)

Number of Active Clients

Solution Overview

The solution reads agent data from a JSON file, calculates a total score for each agent, and distributes the discount proportionally. Each agent also receives a justification based on their contribution.

🔢 Score Calculation Formula
score = performanceScore + seniorityMonths + targetAchievedPercent + activeClients

📊 Justification Logic

Score Range

Justification

Above 200

"Consistently high performance and long-term contribution"

101 - 200

"Moderate performance with potential for growth"

0 - 100

"Needs improvement and closer performance tracking"

All zero scores

"Equal distribution due to lack of score data"


📁 Project Structure
.
├── main.js              # Main script to read input, process, and print result
├── src/
│   ├── allocator.js         # Core logic for allocation and justification
│   └── utils.js             # JSON file read/write helpers
├── sampleInput.json         # Input data for testing
├── sampleOutput.json        # Generated output
└── test/
    ├── allocator.test.js    # Unit tests
    └── jest.config.js       # Tells Jest to run in Node.js


### 🧾 Sample Input
```json
{
  "siteKitty": 18000,
  "salesAgents": [
    {
      "id": "C1",
      "name": "Maya",
      "performanceScore": 90,
      "seniorityMonths": 24,
      "targetAchievedPercent": 80,
      "activeClients": 10
    }
  ]
}

✅ SAMPLE OUTPUT
{
  "allocations": [
    {
      "id": "C1",
      "name": "Maya",
      "assignedDiscount": 3560,
      "justification": "Consistently high performance and long-term contribution"
    }
  ]
}



