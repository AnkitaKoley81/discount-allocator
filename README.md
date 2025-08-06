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

🧾 Sample Input----------->
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
    // More agents...
  ]
}

✅ Sample Output------------>
{
  "allocations": [
    {
      "id": "C1",
      "name": "Maya",
      "assignedDiscount": 3560,
      "justification": "Consistently high performance and long-term contribution"
    }
    // More agents...
  ]
}
📁 Project Structure
.
├── main.js              # Main script to read input, process, and print result
├── src/
│   ├── allocator.js         # Core logic for allocation and justification
│   └── utils.js             # JSON file read/write helpers
├── sampleInput.json         # Input data for testing
├── sampleOutput.json        # Generated output
└── test/
    |___ allocator.test.js   # Unit tests
    |___jest.config.js       # Tells Jest to run in Node.js


🚀 How to Run

1.Install Node.js

2.Run the script: node main.js

3.Output will be generated in sampleOutput.json and logged in the terminal.

🧪 Testing

Basic test included in allocator.test.js to validate:

Correct total allocation

Justification generation

Run using:  npm test

💡 Why This Project?

1.This small yet effective system showcases:

2.Practical application of business logic in code

3.Fairness through scoring and conditional justifications

4.Clean code, edge case handling, and testability


📝 Notes

Handles missing/null values gracefully

Adjusts rounding discrepancies automatically

Designed to be readable and maintainable

