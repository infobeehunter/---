# 🐝 BeeHunter
Gamified treasure hunt app to discover Bari, Italy.
## Quick Start
```bash
npm install
npm run dev
Tech Stack
• React Native .
• Expo
• TypeScript
• Tailwind CSS (NativeWind)
• React Context (in)
Features
•  main screens (Home, Explore, Partners, Badges, Leaderboard, Profile)
• Multilingual support (Italian & English)
• Gamification system (points, badges, levels)
• Partner integration with discounts
• Light/Dark theme support
Project Structure
Plain Text
app/ # Screens and routing
components/ # Reusable components
lib/ # Libraries and utilities
hooks/ # Custom React hooks
constants/ # App constants
assets/ # Static assets
Available Scripts
• npm run dev - Start development server
• npm run check - TypeScript check
• npm run lint - Lint code
• npm run format - Format code
• npm run test - Run tests
Testing the App
Option : Test in Browser
Bash
npm run dev
Open http://localhost: in your browser
Option : Test on Phone
. Install Expo Go from your app store
. Run npm run dev
. Scan the QR code with your phone
. The app will open in Expo Go
🔧 Troubleshooting
Error: "npm: command not found"
Install Node.js from https://nodejs.org/
Error: "Metro bundler failed"
Bash
rm -rf node_modules
npm install
npm run dev
App doesn't load translations
Make sure LanguageProvider is in app/_layout.tsx
Error during git push
Bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
git push -u origin main
License
MIT
