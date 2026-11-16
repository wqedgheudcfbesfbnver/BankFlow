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

## Stage 5: Local state and events

Stage 5 transforms BankFlow from a static React interface into an interactive bank account management application.

The application now uses React local state to manage bank accounts dynamically.

Users can activate, deactivate and delete bank accounts directly from the interface without modifying the source code.

The application also includes a button for switching between light mode and dark mode.

### React useState

The bank account list is stored in the App component using React `useState`.

The initial data contains three bank accounts:

1. Cont curent - active - Current
2. Cont economii - active - Savings
3. Depozit vacanta - inactive - Deposit

The initial array is defined as `CONTURI_INITIALE`.

The `useState` hook creates two variables:

- `conturi`: stores the current bank account list.
- `setConturi`: updates the bank account list.

Whenever the state changes, React automatically updates the interface.

### Activating and deactivating accounts

Each bank account card contains a controlled checkbox.

The checkbox reflects the current value of the `activ` property.

The `handleToggle` function activates or deactivates an account using its unique ID.

The function uses `map()` to create a new array and the spread operator to create an updated account object.

The original state is not modified directly.

When an account is deactivated:

- The checkbox becomes unchecked.
- The account status changes to Inactiv.
- The account name appears crossed out.
- The active account counter decreases automatically.

When an account is activated, the opposite changes occur.

### Deleting bank accounts

Each account card contains a Delete button.

The `handleDelete` function removes the selected account using its unique ID.

The function uses `filter()` to create a new array without the deleted account.

The account disappears immediately from the interface.

The total number of accounts and the active account counter update automatically.

If all accounts are deleted, the application displays:

`Nu exista niciun cont bancar.`

### Derived values

The number of active bank accounts is calculated directly from the current state.

The application uses `filter()` to count accounts where `activ` is `true`.

The active account counter is not stored in a separate `useState` variable.

This prevents inconsistencies between the account list and the displayed counter.

### Props and event handling

The `App` component manages the application state.

The `ContList` component receives the account list and event handler functions through props.

The `ContCard` component receives:

- `cont`: the bank account data.
- `onToggle`: the function used to activate or deactivate an account.
- `onDelete`: the function used to delete an account.

The checkbox uses the `onChange` event.

The Delete button uses the `onClick` event.

The Delete button also includes an `aria-label` attribute for accessibility.

The data flow follows this structure:

`App.jsx -> ContList.jsx -> ContCard.jsx`

The state is managed in `App.jsx`, while child components communicate user actions through callback functions.

### Immutable state updates

All state updates are performed immutably.

The application uses:

- `map()` to update an account.
- `filter()` to delete an account.
- The spread operator to create updated objects.
- Functional state updates with `setConturi((prev) => ...)`.

The application does not use `push()`, `splice()` or direct assignments to modify React state.

### Light mode and dark mode

Stage 5 introduces a theme toggle button in the application header.

Users can switch between light mode and dark mode without reloading the page.

The current theme is stored using React `useState`.

The initial theme is determined by the operating system preference using `matchMedia()`.

The `handleTema` function changes the current theme.

The selected theme is applied to the HTML element using the `data-theme` attribute.

CSS variables control the background, card, text and border colors.

The button also uses `aria-pressed` for accessibility.

The selected theme takes priority over the operating system preference.

### Local state limitations

The bank account list and selected theme are stored only in React local state.

Changes are not permanently saved.

When the page is refreshed:

- The original three bank accounts are restored.
- The initial active account counter is restored.
- The theme returns to the operating system preference.

Persistent data storage will be introduced in later stages.

### Stage 5: Testing

The following functionality should be verified in the browser:

- The three initial bank accounts are displayed correctly.
- Each account contains a controlled checkbox.
- Activating an account updates its status and appearance.
- Deactivating an account updates its status and appearance.
- The active account counter updates automatically.
- The Delete button removes the selected account.
- Deleting all accounts displays the empty-list message.
- The total account counter displays zero when the list is empty.
- The light mode and dark mode button changes the application theme.
- The theme can be switched in both directions.
- Refreshing the page restores the initial data.
- The browser console contains no React errors or warnings.

### Stage 5: Files modified

The following files were modified:

- `frontend/src/App.jsx`
- `frontend/src/App.css`
- `frontend/src/components/ContList.jsx`
- `frontend/src/components/ContCard.jsx`

The following documentation files are updated:

- `README.md`
- `ai-log/etapa-05.md`

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

### Stages 3–5: React application

Open a terminal in the main project directory and run:

```bash
cd frontend
npm install
npm run dev
```

Open the local address displayed by Vite, usually:

`http://localhost:5173/`

The React application displays the BankFlow interface, the bank account counters and dynamically generated account cards.

In Stage 4, the account cards are rendered using the `ContList` and `ContCard` components.

In Stage 5, users can activate, deactivate and delete bank accounts, and switch between light and dark themes.

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
| ChatGPT | React useState, immutable state updates, event handling, controlled checkboxes, account deletion, theme switching and documentation for Stage 5 |

Details for each stage are documented in the `ai-log/` folder.

## Project status

- [x] Stage 1: Static mockup
- [x] Stage 2: Data logic in JavaScript
- [x] Stage 3: Vite and React project
- [x] Stage 4: Components rendered from data
- [x] Stage 5: Local state and events
- [ ] Stage 6: Loading data from a mock API

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

## Stage 4: Verification Checklist

| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S4-R1 | Reusable React components | [ContCard.jsx](https://github.com/wqedgheudcfbesfbnver/BankFlow/blob/ea039bc/frontend/src/components/ContCard.jsx), [ContList.jsx](https://github.com/wqedgheudcfbesfbnver/BankFlow/blob/ea039bc/frontend/src/components/ContList.jsx) | Check the two React components |
| S4-R2 | Props used to pass account data | [App.jsx](https://github.com/wqedgheudcfbesfbnver/BankFlow/blob/ea039bc/frontend/src/App.jsx), [ContList.jsx](https://github.com/wqedgheudcfbesfbnver/BankFlow/blob/ea039bc/frontend/src/components/ContList.jsx) | Verify data transmission through props |
| S4-R3 | List rendering using map() and unique keys | [ContList.jsx](https://github.com/wqedgheudcfbesfbnver/BankFlow/blob/ea039bc/frontend/src/components/ContList.jsx) | Check map() and key={cont.id} |
| S4-R4 | Empty list handled correctly | [ContList.jsx](https://github.com/wqedgheudcfbesfbnver/BankFlow/blob/ea039bc/frontend/src/components/ContList.jsx) | Replace the account array with [] and verify the message |
| S4-R5 | Account status changes card appearance | [ContCard.jsx](https://github.com/wqedgheudcfbesfbnver/BankFlow/blob/ea039bc/frontend/src/components/ContCard.jsx) | Change activ to false and verify the style |
| S4-R6 | README and AI documentation | [README.md](https://github.com/wqedgheudcfbesfbnver/BankFlow/blob/ea039bc/README.md), [AI log](https://github.com/wqedgheudcfbesfbnver/BankFlow/blob/ea039bc/ai-log/etapa-04.md) | Read both documentation files |
| S4-R7 | Stage 4 commit pushed to GitHub | [Stage 4 commit](https://github.com/wqedgheudcfbesfbnver/BankFlow/commit/ea039bc) | Check the GitHub commit history |
## Stage 5: Verification Checklist

| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S5-R1 | Bank accounts stored in React local state using useState | [App.jsx](https://github.com/wqedgheudcfbesfbnver/BankFlow/blob/3ea59d28dc99880b6236bbe5dd5d1d91e716a214/frontend/src/App.jsx) | Check the useState hook and initial bank account data |
| S5-R2 | Controlled checkboxes activate and deactivate accounts | [ContCard.jsx](https://github.com/wqedgheudcfbesfbnver/BankFlow/blob/3ea59d28dc99880b6236bbe5dd5d1d91e716a214/frontend/src/components/ContCard.jsx) | Click a checkbox and verify that the account status changes |
| S5-R3 | Immutable state updates using map() and filter() | [App.jsx](https://github.com/wqedgheudcfbesfbnver/BankFlow/blob/3ea59d28dc99880b6236bbe5dd5d1d91e716a214/frontend/src/App.jsx) | Check handleToggle and handleDelete |
| S5-R4 | Delete button removes accounts from the interface | [ContCard.jsx](https://github.com/wqedgheudcfbesfbnver/BankFlow/blob/3ea59d28dc99880b6236bbe5dd5d1d91e716a214/frontend/src/components/ContCard.jsx) | Click Delete and verify that the selected account disappears |
| S5-R5 | Account counters update automatically from state | [App.jsx](https://github.com/wqedgheudcfbesfbnver/BankFlow/blob/3ea59d28dc99880b6236bbe5dd5d1d91e716a214/frontend/src/App.jsx) | Activate, deactivate or delete accounts and verify the counters |
| S5-R6 | Light and dark theme switching | [App.jsx](https://github.com/wqedgheudcfbesfbnver/BankFlow/blob/3ea59d28dc99880b6236bbe5dd5d1d91e716a214/frontend/src/App.jsx), [App.css](https://github.com/wqedgheudcfbesfbnver/BankFlow/blob/3ea59d28dc99880b6236bbe5dd5d1d91e716a214/frontend/src/App.css) | Click the theme toggle button and verify the interface colors |
| S5-R7 | README documentation and AI log | [README.md](https://github.com/wqedgheudcfbesfbnver/BankFlow/blob/3ea59d28dc99880b6236bbe5dd5d1d91e716a214/README.md), [AI log](https://github.com/wqedgheudcfbesfbnver/BankFlow/blob/3ea59d28dc99880b6236bbe5dd5d1d91e716a214/ai-log/etapa-05.md) | Read the Stage 5 documentation |
| S5-R8 | Stage 5 implementation committed and pushed to GitHub | [Stage 5 commit](https://github.com/wqedgheudcfbesfbnver/BankFlow/commit/3ea59d28dc99880b6236bbe5dd5d1d91e716a214) | Check the GitHub commit history |

---

## Stage 6: Data from a Mock API

In Stage 6, BankFlow was connected to a REST API
using json-server.

The bank accounts are no longer stored directly
inside the React component. They are loaded
from db.json through HTTP requests.

### Technologies used

- React
- useState
- useEffect
- Fetch API
- Async / Await
- json-server 0.17.4
- Vite environment variables

### API Configuration

The API runs on port 3001.

Endpoint:
http://localhost:3001/conturi

The database contains 5 bank accounts:
- 3 active accounts
- 2 inactive accounts

### Running the Application

Open two terminals inside the frontend folder.

Terminal 1 - Start the API:

    npm run api

Terminal 2 - Start React:

    npm run dev

Open the application:

http://localhost:5173

### Application States

BankFlow handles three possible states:

1. Loading - displays a loading message while
   the application waits for the API response.

2. Success - displays the bank accounts received
   from the API.

3. Error - displays an error message when
   the API is unavailable.

### Functionalities

- Load bank accounts from an API
- Display active and inactive accounts
- Activate or deactivate accounts locally
- Delete accounts locally
- Switch between light and dark mode
- Display loading and error messages
- Configure the API URL using VITE_API_URL

Account modifications remain local in Stage 6.
Server persistence will be implemented in Stage 7.

### Project Status

- [x] Stage 1: Static HTML and CSS
- [x] Stage 2: JavaScript data logic
- [x] Stage 3: UI improvements
- [x] Stage 4: React and Vite
- [x] Stage 5: Components and local state
- [x] Stage 6: Data from a mock API
- [ ] Stage 7: Forms, validation and API persistence

---

## Stage 6 Checklist

| ID | Requirement | Where (permalink) | How to check |
|---|---|---|---|
| S6-R1 | npm run api starts and the API returns JSON | [package.json](https://github.com/wqedgheudcfbesfbnver/BankFlow/blob/4550a38/frontend/package.json#L6-L12), [db.json](https://github.com/wqedgheudcfbesfbnver/BankFlow/blob/4550a38/frontend/db.json) | Run npm run api and open localhost:3001/conturi |
| S6-R2 | Data is no longer hardcoded in React | [App.jsx](https://github.com/wqedgheudcfbesfbnver/BankFlow/blob/4550a38/frontend/src/App.jsx) | Check useState([]) and useEffect |
| S6-R3 | Loading message is displayed while waiting | [App.jsx](https://github.com/wqedgheudcfbesfbnver/BankFlow/blob/4550a38/frontend/src/App.jsx) | Start API with --delay 4000 and refresh |
| S6-R4 | Error message appears when API is unavailable | [App.jsx](https://github.com/wqedgheudcfbesfbnver/BankFlow/blob/4550a38/frontend/src/App.jsx) | Stop the API and refresh the page |
| S6-R5 | Fetch is isolated in api.js and API URL uses environment variables | [api.js](https://github.com/wqedgheudcfbesfbnver/BankFlow/blob/4550a38/frontend/src/api.js#L1-L13), [.env.example](https://github.com/wqedgheudcfbesfbnver/BankFlow/blob/4550a38/frontend/.env.example) | Check fetch, res.ok and VITE_API_URL |
| S6-R6 | README Stage 6 section and AI log are completed | [README.md](https://github.com/wqedgheudcfbesfbnver/BankFlow/blob/main/README.md), [AI log](https://github.com/wqedgheudcfbesfbnver/BankFlow/blob/4550a38/ai-log/etapa-06.md) | Read the documentation |
| S6-R7 | Stage 6 commit is pushed to GitHub | [Stage 6 commit](https://github.com/wqedgheudcfbesfbnver/BankFlow/commit/4550a38) | Check commit history |



## Stage 7: Form and Validation – BankFlow

### Overview

In Stage 7, BankFlow was extended with a controlled
React form for creating bank accounts.

The application now supports all four CRUD operations
using a mock REST API powered by json-server.

All changes are saved on the server before the
React interface is updated.

### Implemented Features

1. Add bank accounts using a controlled React form.
2. Validate the account name before submitting.
3. Select the account type:
   - Current
   - Savings
   - Deposit
4. Save new accounts using HTTP POST.
5. Activate or deactivate accounts using HTTP PATCH.
6. Delete accounts using HTTP DELETE.
7. Load accounts from the server using HTTP GET.
8. Preserve changes after refreshing the page.
9. Display validation and server errors in the interface.
10. Disable the submit button while saving.
11. Keep form values when a server request fails.
12. Support light and dark mode.
13. Provide data-testid attributes for automated testing.

### CRUD Operations

| Operation | HTTP Method | Endpoint |
|-----------|-------------|----------|
| Read accounts | GET | /conturi |
| Create account | POST | /conturi |
| Update account | PATCH | /conturi/:id |
| Delete account | DELETE | /conturi/:id |

### Form Validation

The form validates the account name before sending data.

Validation rules:
- Account name is required.
- Maximum account name length: 100 characters.
- Account type must be valid.
- Error messages are displayed inside the form.
- Invalid data is not submitted to the server.

### Server Communication

All HTTP requests are handled in:

frontend/src/api.js

The API uses a common request function.

The React state is updated only after the server
confirms that the operation was successful.

### Automated Testing

The tw.json file is located in the repository root.

It defines:
- resource: conturi
- title: accountName
- done: active
- sample: accountType = Savings

The application uses data-testid attributes
for automated verification.

### Testing Results

The following scenarios were tested manually:

- Empty account name displays a validation error.
- A new account is added successfully.
- The new account remains after refreshing the page.
- Changing account status persists after refresh.
- Deleting an account persists after refresh.
- Stopping the API displays an error message.
- The form keeps its values when saving fails.
- Restarting the API allows the operation to be retried.

### Files Modified or Created

- frontend/src/api.js
- frontend/src/App.jsx
- frontend/src/App.css
- frontend/src/components/ContForm.jsx
- frontend/src/components/ContCard.jsx
- frontend/src/components/ContList.jsx
- tw.json

### Technologies Used

- React
- JavaScript
- Vite
- CSS
- JSON Server
- REST API
- Git and GitHub

### Conclusion

Stage 7 adds complete CRUD functionality to BankFlow.

The application can create, display, update and delete
bank accounts, with persistent data storage through
a mock REST API.

The interface includes form validation, error handling,
controlled inputs and automated testing attributes.

## Status

- [x] Stage 1: Static mockup
- [x] Stage 2: JavaScript logic
- [x] Stage 3: User interface styling
- [x] Stage 4: React and Vite
- [x] Stage 5: React components
- [x] Stage 6: Mock API integration
- [x] Stage 7: Form and validation
- [ ] Stage 8: Routing and detail page


## Stage 7 – Verification Checklist

| ID | Requirement | Where (permalink) | How to check |
|---|---|---|---|
| S7-R1 | Controlled form: value and onChange on every field | [ContForm.jsx - controlled fields](https://github.com/wqedgheudcfbesfbnver/BankFlow/blob/9f428a8/frontend/src/components/ContForm.jsx#L105-L144) | Read the input and select implementation |
| S7-R2 | Empty account name shows an error and no request is sent | [ContForm.jsx - validation](https://github.com/wqedgheudcfbesfbnver/BankFlow/blob/9f428a8/frontend/src/components/ContForm.jsx#L40-L71) | Submit an empty form and check the Network tab |
| S7-R3 | Added account appears in the list and survives refresh | [App.jsx - handleAdd](https://github.com/wqedgheudcfbesfbnver/BankFlow/blob/9f428a8/frontend/src/App.jsx#L115-L138), [api.js - POST](https://github.com/wqedgheudcfbesfbnver/BankFlow/blob/9f428a8/frontend/src/api.js#L42-L47) | Add an account and refresh the page |
| S7-R4 | Toggle and delete operations survive refresh | [App.jsx - handleToggle and handleDelete](https://github.com/wqedgheudcfbesfbnver/BankFlow/blob/9f428a8/frontend/src/App.jsx#L144-L188) | Toggle or delete an account and refresh |
| S7-R5 | Submit button is disabled while saving and the form clears only on success | [ContForm.jsx - handleSubmit](https://github.com/wqedgheudcfbesfbnver/BankFlow/blob/9f428a8/frontend/src/components/ContForm.jsx#L60-L98), [Submit button](https://github.com/wqedgheudcfbesfbnver/BankFlow/blob/9f428a8/frontend/src/components/ContForm.jsx#L154-L160) | Use API delay, then stop API and retry |
| S7-R6 | tw.json and required data-testid attributes are implemented | [tw.json](https://github.com/wqedgheudcfbesfbnver/BankFlow/blob/9f428a8/tw.json), [ContCard.jsx](https://github.com/wqedgheudcfbesfbnver/BankFlow/blob/9f428a8/frontend/src/components/ContCard.jsx#L18-L70), [ContList.jsx](https://github.com/wqedgheudcfbesfbnver/BankFlow/blob/9f428a8/frontend/src/components/ContList.jsx#L16-L24) | Inspect the attributes using querySelectorAll |
| S7-R7 | README Stage 7 documentation and AI log are complete | [README.md](https://github.com/wqedgheudcfbesfbnver/BankFlow/blob/9f428a8/README.md), [AI log](https://github.com/wqedgheudcfbesfbnver/BankFlow/blob/9f428a8/ai-log/etapa-07.md) | Read both documentation files |
| S7-R8 | Stage 7 commit is published on GitHub | [Stage 7 commit](https://github.com/wqedgheudcfbesfbnver/BankFlow/commit/9f428a8b1708d374d3fb91e5ce1614a2199f5546) | Check the repository commit history |

### Stage 7 – Final Results

- [x] S7-R1 – Controlled React form
- [x] S7-R2 – Form validation
- [x] S7-R3 – Persistent account creation
- [x] S7-R4 – Persistent toggle and delete
- [x] S7-R5 – Submit state and error handling
- [x] S7-R6 – Automated testing attributes
- [x] S7-R7 – README and AI documentation
- [x] S7-R8 – Stage 7 commit published

### Build Verification

The application was successfully built using:

`npm run build`

Result: Build successful, 20 modules transformed.

### Stage 7 Conclusion

BankFlow Stage 7 implements a controlled form,
validation, persistent CRUD operations, REST API
communication, error handling and automated testing
attributes.

All main functionality was manually tested.

## Stage 8: Routing and Component Styling – BankFlow

### Overview

In Stage 8, BankFlow was extended with
client-side navigation using React Router.

The application now includes multiple pages,
a dedicated detail page for every bank account,
an About page and a custom 404 page.

Component-specific styles were reorganized
using CSS Modules.

All CRUD functionality implemented in Stage 7
was preserved.

### Implemented Features

1. Navigation between pages using React Router.
2. Shared layout with header and footer.
3. Navigation menu using NavLink.
4. Bank account list on the homepage.
5. Individual detail pages for bank accounts.
6. Dynamic routes using account IDs.
7. Loading account details directly from the API.
8. Error handling for nonexistent accounts.
9. Custom 404 page for invalid URLs.
10. CSS Modules for component styling.
11. Light and dark mode support.
12. Preservation of CRUD operations.
13. Automated testing attributes.

### Application Routes

| Route | Description |
|-------|-------------|
| / | Bank account list and creation form |
| /conturi/:id | Individual bank account details |
| /despre | About BankFlow |
| * | Custom 404 page |

### React Router

React Router was installed using:

npm install react-router-dom

BrowserRouter was added to main.jsx.

App.jsx contains the route configuration.

The Layout component uses Outlet to render
the currently selected page.

NavLink is used for the navigation menu,
while Link is used for account details
and navigation back to the homepage.

### Bank Account Detail Page

Each bank account has its own detail page.

Example:

/conturi/1

The account ID is obtained using useParams().

The page requests account data from the API
using the fetchCont(id) function.

Displayed information includes:

- Account name
- Account type
- Account status
- Account category
- Account owner
- Account ID

### API Communication

The API was extended with:

GET /conturi/:id

The fetchCont(id) function retrieves an
individual account from json-server.

The existing CRUD operations remain available:

- GET /conturi
- POST /conturi
- PATCH /conturi/:id
- DELETE /conturi/:id

### Error Handling

If an account does not exist, the API
returns HTTP 404.

The detail page displays an error message
and a link back to the account list.

Unknown application URLs are handled by
NotFoundPage.jsx.

### CSS Modules

Component styles were separated into
individual CSS Module files.

These include:

- Layout.module.css
- ContForm.module.css
- ContCard.module.css
- ContList.module.css
- ConturiPage.module.css
- ContDetaliuPage.module.css

The global index.css contains shared styles,
theme variables, buttons, badges and panels.

### Light and Dark Mode

The application preserves the light/dark
theme functionality introduced previously.

The theme button is now located in Layout.jsx
and is available on every page.

### Automated Testing

Stage 8 introduces additional data-testid
attributes:

- nav
- item-link
- detail
- detail-title
- not-found

The attributes from Stage 7 are preserved.

The detail route matches the resource
defined in tw.json:

/conturi/:id

### Manual Testing

The following scenarios were tested:

1. Navigation from the homepage to account details.
2. Displaying the correct bank account information.
3. Returning to the homepage using Link.
4. Opening the About page.
5. Using the light/dark theme.
6. Opening a nonexistent account (/conturi/999).
7. Displaying the custom 404 page (/ceva).
8. Creating a bank account using POST.
9. Preserving account creation after refresh.
10. Updating account status using PATCH.
11. Deleting an account using DELETE.
12. Preserving CRUD changes after refresh.

### Project Structure

frontend/src/
- App.jsx
- main.jsx
- api.js
- constants.js
- index.css
- components/
  - Layout.jsx
  - Layout.module.css
  - ContForm.jsx
  - ContForm.module.css
  - ContCard.jsx
  - ContCard.module.css
  - ContList.jsx
  - ContList.module.css
- pages/
  - ConturiPage.jsx
  - ConturiPage.module.css
  - ContDetaliuPage.jsx
  - ContDetaliuPage.module.css
  - DesprePage.jsx
  - NotFoundPage.jsx

### Technologies Used

- React
- JavaScript
- Vite
- React Router
- CSS Modules
- JSON Server
- REST API
- Git
- GitHub

### Conclusion

Stage 8 transforms BankFlow into a
multi-page React application.

Navigation is handled by React Router,
account details are loaded dynamically
from the API, and component styles
are organized using CSS Modules.

The application maintains the CRUD
functionality developed in Stage 7.

### Stage 8 Status

- [x] React Router integration
- [x] Shared application layout
- [x] Homepage and account list
- [x] Dynamic bank account detail page
- [x] About page
- [x] Custom 404 page
- [x] CSS Modules
- [x] Light and dark mode
- [x] CRUD functionality preserved
- [x] Manual navigation tests
- [ ] GitHub publication and checklist

### Next Stage

Stage 9: Own backend with Node.js and Express.
