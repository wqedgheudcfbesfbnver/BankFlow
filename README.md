
# BankFlow

BankFlow is a web application for managing bank accounts. It allows users to organize and monitor different types of bank accounts.

The project is developed in stages, starting with a static HTML/CSS interface, continuing with JavaScript data logic, and then migrating to React using Vite.

## Data model

| Field | Type | Notes |
| --- | --- | --- |
| accountName | text | Required, maximum 100 characters |
| active | boolean | Indicates whether the account is active |
| accountType | fixed values | Current, Savings, Deposit |
| category | relation | Personal, Salary, Savings |
| user | relation | The owner of the bank account |

### Sample data used across all stages

1. Cont curent, active, Current
2. Cont economii, active, Savings
3. Depozit vacanta, inactive, Deposit

The initial dataset contains 3 bank accounts, of which 2 are active.

## Project structure

- `mockup/` – HTML, CSS and JavaScript files from Stages 1 and 2.
- `frontend/` – React application created with Vite in Stage 3.
- `frontend/src/components/` – Reusable React components created in Stage 4.
- `ai-log/` – Documentation of AI assistance for each stage.
- `README.md` – Project documentation and verification checklists.

## Stage 1: Static mockup

The first stage contains the static HTML and CSS interface for BankFlow.

The page displays the bank account management interface and the three sample bank accounts.

The implementation uses HTML for structure and CSS for styling.

The original files are preserved in the `mockup/` folder.

## Stage 2: Data logic

Stage 2 introduces plain JavaScript logic without DOM manipulation.

The file `mockup/conturi.js` contains the bank account array and functions that read and modify the data.

The JavaScript logic supports:

- Listing bank account names.
- Counting active accounts.
- Searching accounts by name.
- Adding new accounts with validation.
- Activating or deactivating accounts.
- Deleting accounts.
- Generating unique IDs.
- Immutable data updates.

The functions are tested using messages displayed in the browser console.

### Stage 2: Verification Checklist

| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S2-R1 | JS file linked, logs on page load | [index.html](https://github.com/wqedgheudcfbesfbnver/BankFlow/blob/f4994c2bff928a14a93603bde99620ef57808625/index.html) | Open the original HTML file and press F12 |
| S2-R2 | 3+ items with id, name, state, tag | [conturi.js L1-L22](https://github.com/wqedgheudcfbesfbnver/BankFlow/blob/f4994c2bff928a14a93603bde99620ef57808625/conturi.js#L1-L22) | Read the initial array |
| S2-R3 | List, count, search, add, toggle, delete | [conturi.js L24-L80](https://github.com/wqedgheudcfbesfbnver/BankFlow/blob/f4994c2bff928a14a93603bde99620ef57808625/conturi.js#L24-L80) | Check the functions and console output |
| S2-R4 | Add rejects empty name and invalid type | [conturi.js L47-L58](https://github.com/wqedgheudcfbesfbnver/BankFlow/blob/f4994c2bff928a14a93603bde99620ef57808625/conturi.js#L47-L58) | Check validation messages in console |
| S2-R5 | Original array unchanged after adding | [conturi.js L105-L121](https://github.com/wqedgheudcfbesfbnver/BankFlow/blob/f4994c2bff928a14a93603bde99620ef57808625/conturi.js#L105-L121) | Compare new list length with original |
| S2-R6 | README Stage 2 section and AI log | [README.md](https://github.com/wqedgheudcfbesfbnver/BankFlow/blob/f4994c2bff928a14a93603bde99620ef57808625/README.md), [AI log](https://github.com/wqedgheudcfbesfbnver/BankFlow/blob/f4994c2bff928a14a93603bde99620ef57808625/ai-log/etapa-02.md) | Read both files |
| S2-R7 | Stage 2 commit pushed to GitHub | [Stage 2 commit](https://github.com/wqedgheudcfbesfbnver/BankFlow/commit/f4994c2bff928a14a93603bde99620ef57808625) | Check commit history |

## Stage 3: Vite and React project

BankFlow was migrated to a React application using Vite.

The application is located in the `frontend/` folder.

The JavaScript data from Stage 2 was reused in the React component `frontend/src/App.jsx`.

In Stage 3, the application displayed:

- The BankFlow application name.
- The total number of bank accounts.
- The number of active bank accounts.
- The bank account data in JSON format.

The account counters are calculated dynamically from the data array.

The original CSS styles from Stage 1 were reused in `frontend/src/App.css`, with layout adjustments for the React interface.

The application contains 3 bank accounts, of which 2 are active.

## Stage 4: Components rendered from data

Stage 4 replaces the temporary JSON display from Stage 3 with reusable React components.

The bank accounts are displayed as individual cards generated dynamically from the data array.

Two components were created in `frontend/src/components/`:

- `ContCard.jsx` receives a single bank account through props and displays its name, account type and status.
- `ContList.jsx` receives the entire bank account array and renders one `ContCard` component for each account.

### React components and props

The main component `App.jsx` contains the bank account data and calculates the number of active accounts.

The complete array is passed to `ContList` through props.

`ContList` uses the JavaScript `map()` method to generate one card for each account.

Each card receives a unique and stable key using `key={cont.id}`.

The individual account data is passed to `ContCard` through props.

Adding another account to the array automatically generates another card without modifying the JSX structure.

### Conditional rendering

The application uses conditional rendering to display different content depending on the data.

If the account array is empty, the application displays:

`Nu exista niciun cont bancar.`

The header also updates automatically to display zero accounts and zero active accounts.

### Account status

Each account has an `activ` property.

- `true` indicates an active account.
- `false` indicates an inactive account.

The card appearance changes automatically depending on this property.

Inactive accounts are displayed with a different style and a crossed-out account name.

### Stage 4: Testing

The following tests were performed:

- Verified that three account cards are generated from the data array.
- Verified that each card displays the correct account name, type and status.
- Verified that the browser console contains no React errors or warnings.
- Tested an empty array and confirmed that the empty-list message appears.
- Verified that the account counters display zero when the array is empty.
- Changed the first account from active to inactive.
- Verified that the card appearance and active account counter update automatically.
- Restored the original bank account data after testing.

The final application contains 3 bank accounts, of which 2 are active.

The visual interface preserves the styling introduced in Stage 1.

## Technologies used

- HTML5
- CSS3
- JavaScript
- React
- Vite
- Node.js and npm
- Git and GitHub

## How to run

### Stages 1 and 2: Static mockup

Open `mockup/index.html` in a browser.

No installation or build step is required.

For Stage 2, open the browser developer tools using F12 to inspect the JavaScript console output.

### Stages 3 and 4: React application

Open a terminal in the main project directory and run:

```bash
cd frontend
npm install
npm run dev
```

Open the local address displayed by Vite, usually:

http://localhost:5173/

The React application displays the BankFlow interface, the bank account counters and dynamically generated account cards.

In Stage 4, the account cards are rendered using the `ContList` and `ContCard` components.

## Build verification

From the `frontend/` directory, run:

```bash
npm run build
```

The production build was tested successfully in Stages 3 and 4.

The generated `dist/` folder and the `node_modules/` folder are excluded from Git tracking through `.gitignore`.

## AI usage

| Tool | Used for |
| --- | --- |
| ChatGPT | Project structure, HTML and CSS implementation for Stage 1 |
| ChatGPT | JavaScript data logic, validation and console testing for Stage 2 |
| ChatGPT | Vite setup, React component development, CSS migration and Git workflow for Stage 3 |
| ChatGPT | React components, props, list rendering, conditional rendering and testing for Stage 4 |

Details for each stage are documented in the `ai-log/` folder.

## Project status

- [x] Stage 1: Static mockup
- [x] Stage 2: Data logic in JavaScript
- [x] Stage 3: Vite and React project
- [x] Stage 4: Components rendered from data
- [ ] Stage 5: Local state and events

## Stage 3: Verification Checklist

| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S3-R1 | npm run dev starts without errors | [package.json](https://github.com/wqedgheudcfbesfbnver/BankFlow/blob/49c1a4d/frontend/package.json) | Run npm install and npm run dev |
| S3-R2 | App name and counter computed from data | [App.jsx](https://github.com/wqedgheudcfbesfbnver/BankFlow/blob/49c1a4d/frontend/src/App.jsx) | Edit the data and verify that the counters update |
| S3-R3 | Data from README, not from example | [App.jsx](https://github.com/wqedgheudcfbesfbnver/BankFlow/blob/49c1a4d/frontend/src/App.jsx) | Compare the initial data with the README |
| S3-R4 | Stage 1 styles reused | [App.css](https://github.com/wqedgheudcfbesfbnver/BankFlow/blob/49c1a4d/frontend/src/App.css) | Compare the styling with the original mockup |
| S3-R5 | node_modules ignored, build passes | [.gitignore](https://github.com/wqedgheudcfbesfbnver/BankFlow/blob/49c1a4d/frontend/.gitignore) | Run npm run build and inspect Git status |
| S3-R6 | README Stage 3 section and AI log | [README](https://github.com/wqedgheudcfbesfbnver/BankFlow/blob/49c1a4d/README.md), [AI log](https://github.com/wqedgheudcfbesfbnver/BankFlow/blob/49c1a4d/ai-log/etapa-03.md) | Read the documentation |
| S3-R7 | Stage 3 commit pushed | [Stage 3 commit](https://github.com/wqedgheudcfbesfbnver/BankFlow/commit/49c1a4d) | Check the GitHub commit history |
