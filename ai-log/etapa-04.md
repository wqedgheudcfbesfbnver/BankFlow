
# AI Log – Stage 4: Components rendered from data

## Project

- Project name: BankFlow
- Course: Web Technologies
- Stage: 4
- Technology: React, JavaScript, JSX, CSS
- AI tool: ChatGPT

## 1. Objective

The objective of Stage 4 was to replace the temporary JSON display from Stage 3 with reusable React components.

The application displays bank accounts as individual cards generated dynamically from the data array.

## 2. AI assistance

ChatGPT was used to:

- Understand the requirements of Stage 4.
- Organize the React component structure.
- Create the ContCard component.
- Create the ContList component.
- Implement data transmission using props.
- Render the bank account list using map().
- Use unique keys for React list elements.
- Implement conditional rendering for an empty list.
- Display different styles for active and inactive accounts.
- Identify and fix a favicon 404 error.
- Test the application in the browser.
- Update the project documentation.

## 3. Implementation

Two React components were created in:

`frontend/src/components/`

### ContCard.jsx

The ContCard component receives a single bank account through props.

It displays:

- Account name.
- Account type.
- Account status.

Conditional rendering determines whether the account is active or inactive.

Inactive accounts are displayed with a different visual style.

### ContList.jsx

The ContList component receives the complete array of bank accounts through props.

It uses map() to generate one ContCard component for each account.

Each component uses a unique key based on the account ID.

If the array is empty, the component displays:

`Nu exista niciun cont bancar.`

### App.jsx

The App component stores the initial bank account data.

It calculates the total number of accounts and the number of active accounts.

The account array is passed to ContList through props.

## 4. Testing

The following tests were performed:

### Test 1: Normal list

The application displayed three bank accounts:

1. Cont curent – Active
2. Cont economii – Active
3. Depozit vacanta – Inactive

The header displayed three accounts, including two active accounts.

### Test 2: Empty list

The account array was temporarily replaced with an empty array.

The application displayed the empty-list message.

The header displayed zero accounts and zero active accounts.

### Test 3: Account status

The first account was temporarily changed from active to inactive.

The application updated the account card appearance and displayed one active account.

The original data was restored after testing.

### Test 4: Browser console

The browser console was checked using F12.

A missing favicon resource initially caused a 404 error.

The issue was resolved by updating frontend/index.html.

The final console contained no React errors or warnings.

## 5. AI-generated code review

The generated code was integrated into the existing BankFlow project.

The component names and data fields were adapted to the bank account theme.

The original account data and existing CSS styling were preserved.

The application was tested manually in the browser.

## 6. Conclusions

Stage 4 introduced reusable React components, props, list rendering and conditional rendering.

The application now generates bank account cards dynamically from the data array instead of displaying JSON.

The implementation prepares the project for Stage 5, where local state and user events will be introduced.
