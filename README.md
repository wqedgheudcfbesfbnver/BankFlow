# BankFlow

BankFlow is a web application for managing bank accounts.
It allows users to organize and monitor different types of bank accounts.

## Data model

| Field | Type | Notes |
| --- | --- | --- |
| accountName | text | required, max 100 chars |
| active | boolean | indicates whether the account is active |
| accountType | fixed values | Current, Savings, Deposit |
| category | relation | Personal, Salary, Savings |
| user | relation | the owner of the bank account |

Sample data used across all stages:

1. Cont principal, active, Current
2. Cont economii, active, Savings
3. Depozit vacanta, inactive, Deposit

## How to run

Open `index.html` in a browser. No build step is required.

## Stage 1: static mockup

The first stage contains the static HTML and CSS interface for BankFlow.
The page displays the account form and the three sample bank accounts.

## Stage 2: data logic

Plain JavaScript, no DOM. `conturi.js` holds the array and the functions
that read and change it. Results are printed in the browser console (F12).

The JavaScript logic supports:

- listing bank account names;
- counting active accounts;
- searching accounts by name;
- adding a new account with validation;
- activating or deactivating an account;
- deleting an account;
- generating unique IDs;
- immutable data updates.

## AI usage

| Tool | Used for |
| --- | --- |
| ChatGPT | Project structure, HTML and CSS implementation for Stage 1 |
| ChatGPT | JavaScript data logic, validation and console testing for Stage 2 |

Details per stage: see the `ai-log/` folder.

## Status

- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [ ] Stage 3: Vite and React project
## Stage 2 checklist

| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S2-R1 | JS file linked, logs on page load | [index.html](https://github.com/wqedgheudcfbesfbnver/BankFlow/blob/f4994c2bff928a14a93603bde99620ef57808625/index.html) | Open index.html in browser and press F12 |
| S2-R2 | 3+ items with id, name, state, tag | [conturi.js L1-L22](https://github.com/wqedgheudcfbesfbnver/BankFlow/blob/f4994c2bff928a14a93603bde99620ef57808625/conturi.js#L1-L22) | Read the initial array |
| S2-R3 | List, count, search, add, toggle, delete | [conturi.js L24-L80](https://github.com/wqedgheudcfbesfbnver/BankFlow/blob/f4994c2bff928a14a93603bde99620ef57808625/conturi.js#L24-L80) | Check the functions and console output |
| S2-R4 | Add rejects empty name and invalid type | [conturi.js L47-L58](https://github.com/wqedgheudcfbesfbnver/BankFlow/blob/f4994c2bff928a14a93603bde99620ef57808625/conturi.js#L47-L58) | Check validation messages in console |
| S2-R5 | Original array unchanged after adding | [conturi.js L105-L121](https://github.com/wqedgheudcfbesfbnver/BankFlow/blob/f4994c2bff928a14a93603bde99620ef57808625/conturi.js#L105-L121) | Compare new list length with original |
| S2-R6 | README Stage 2 section and AI log | [README.md](README.md), [AI log](ai-log/etapa-02.md) | Read both files |
| S2-R7 | Stage 2 commit pushed to GitHub | [Stage 2 commit](https://github.com/wqedgheudcfbesfbnver/BankFlow/commit/f4994c2bff928a14a93603bde99620ef57808625) | Check commit history |

## Stage 3: Vite and React project

BankFlow is now a React application created with Vite.

The application is located in the `frontend/` folder.

The data from Stage 2 has been moved into the main
React component (`App.jsx`).

The application displays:
- The BankFlow application name
- The total number of bank accounts
- The number of active bank accounts
- The bank account data in JSON format

The original CSS styles from Stage 1 have been reused.

The application currently contains 3 bank accounts,
of which 2 are active.

## How to run

Open a terminal in the project folder and run:

```bash
cd frontend
npm install
npm run dev
```

Then open the local address displayed in the terminal:

http://localhost:5173/

## Build verification

To verify that the application builds successfully:

```bash
cd frontend
npm run build
```

The build was completed successfully.
