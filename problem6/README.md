# Problem 6: Architecture


### Overview
This document outlines the requirements and approach for implementing a live scoreboard system that displays the top 10 user scores and updates in real-time. The goal is to ensure functionality, performance, and security against unauthorized score manipulation.

### Specification

### 1. Update User Score:

+ Updates the user's score in the database.
+ Verifies the user's identity and authorization before updating the score.
+ Endpoint allows a user to perform an action that triggers a score update.

### 2. Fetch TOP 10 Score:

+ Endpoint retrieves the top 10 users's scores.
+ Ensures that data is fetched and delivered efficiently 

### 3. Realtime score updates:

+ Sends real-time updates to the scoreboard using WebSocket to ensure all connected clients see the latest changes instantly.

### 4. Prevent Unauthorized Access:

+ Ensures score updates are secure by implementing authentication mechanisms like JWT, allowing only authorized users to modify their scores.

### Improvement

+ Caching Top 10 score: Reduce database load and improve response time for frequently accessed leaderboard data.

+ Allow users to filter the leaderboard based on custom criteria (e.g., category, date range, user region) to display personalized top scores.


