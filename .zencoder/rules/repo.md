---
description: Repository Information Overview
alwaysApply: true
---

# First React Site Information

## Summary
This project is a React application bootstrapped with Create React App. It serves as a web development project with React components, routing, and styling.

## Structure
- **public/**: Contains static assets and the HTML entry point
- **src/**: Main source code directory
  - **components/**: Reusable React components
  - **Pages/**: Page components for routing
  - **styles/**: CSS styling files
- **node_modules/**: Dependencies (not tracked in git)

## Language & Runtime
**Language**: JavaScript/React
**Version**: React 19.0.0
**Build System**: Create React App
**Package Manager**: npm/yarn (both package-lock.json and yarn.lock present)

## Dependencies
**Main Dependencies**:
- react: ^19.0.0
- react-dom: ^19.0.0
- react-router: ^7.1.5
- react-bootstrap: ^2.10.9
- bootstrap: ^5.3.3
- react-scripts: 5.0.1
- web-vitals: ^4.2.4

## Build & Installation
```bash
# Install dependencies
npm install
# or
yarn install

# Start development server
npm start
# or
yarn start

# Build for production
npm run build
# or
yarn build
```

## Testing
**Framework**: Jest with React Testing Library
**Test Location**: `src/` directory alongside components
**Naming Convention**: `*.test.js`
**Configuration**: Jest configuration in package.json and setupTests.js
**Run Command**:
```bash
npm test
# or
yarn test
```

## Main Entry Points
**HTML**: public/index.html
**JavaScript**: src/index.js (renders App component)
**Main Component**: src/App.js

## Browser Compatibility
**Production**:
- Browsers with >0.2% market share
- Not dead browsers
- Not Opera Mini

**Development**:
- Latest Chrome, Firefox, and Safari versions