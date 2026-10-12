
# AI Log – Stage 3: Vite and React

## Project
BankFlow – Bank Account Management Application

## Objective
Initialize a React application using Vite and migrate
the existing BankFlow project from HTML, CSS and
JavaScript to React.

## AI Tool Used
ChatGPT

## Questions Asked

### 1. How do I initialize a React project with Vite?
AI explained how to create the frontend folder,
select ESLint and install the required dependencies.

### 2. How do I organize the existing project files?
AI explained how to move the files from Stages 1
and 2 into the mockup folder while keeping the
README and AI logs in the repository root.

### 3. How do I reuse my existing CSS in React?
AI explained how to copy the original styles into
App.css and change the container layout to one column.

### 4. How do I create the main React component?
AI provided an App.jsx example adapted to BankFlow,
using the bank account data from Stage 2.

### 5. How do I calculate the number of active accounts?
AI explained how to use filter() and length to
calculate the number of active bank accounts.

### 6. How do I verify that the application works?
AI explained how to start the development server
and verify the project using npm run build.

## Changes Made
- Created the frontend folder using Vite and React.
- Moved the original files into mockup.
- Removed the Vite demonstration files.
- Reused the CSS styles from Stage 1.
- Created the main App.jsx component.
- Displayed the bank account data as JSON.
- Added a dynamically calculated active account counter.
- Updated the page title to BankFlow.
- Successfully executed npm run build.

## Verification
The application runs locally using npm run dev.

The interface displays 3 bank accounts,
of which 2 are active.

The production build completed successfully.

## Reflection
AI helped me understand the structure of a React
project and the role of Vite, JSX and npm.

I verified the generated code by running the
application locally and checking the displayed data.

I also verified that the project builds without errors.
