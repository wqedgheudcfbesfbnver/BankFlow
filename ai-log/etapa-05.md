# AI Log – Stage 5: Local State and Events

## Project

**Project name:** BankFlow  
**Technology:** React, Vite, JavaScript, CSS  
**Stage:** 5 – Local State and Events  
**AI tool:** ChatGPT

## 1. Purpose of AI assistance

ChatGPT was used to assist with implementing local state management, event handling, immutable updates and theme switching in the BankFlow React application.

The objective was to transform the static interface developed in Stage 4 into an interactive application.

## 2. Tasks completed with AI assistance

### React state management

ChatGPT helped implement the `useState` hook in `App.jsx`.

The bank account list was moved into React state, allowing the interface to update automatically when data changes.

### Account activation and deactivation

ChatGPT assisted with implementing the `handleToggle` function.

The function uses `map()` and the spread operator to update the selected bank account without directly modifying the original state.

Each account card contains a controlled checkbox connected to the account's active status.

### Account deletion

ChatGPT helped implement the `handleDelete` function using `filter()`.

The function removes an account based on its unique ID.

After deletion, React automatically updates the account list and counters.

### React props and events

ChatGPT assisted with passing callback functions from `App.jsx` to `ContList.jsx` and `ContCard.jsx`.

The application uses `onChange` for checkboxes and `onClick` for deletion buttons.

### Theme switching

ChatGPT helped implement a light/dark theme toggle using React state.

The application detects the initial operating system theme preference and allows the user to switch themes manually.

The selected theme is applied through the `data-theme` attribute and CSS variables.

### Documentation

ChatGPT assisted with updating the project README and preparing the Stage 5 AI log.

## 3. Files modified

- `frontend/src/App.jsx`
- `frontend/src/App.css`
- `frontend/src/components/ContList.jsx`
- `frontend/src/components/ContCard.jsx`
- `README.md`

## 4. Important concepts

The main concepts addressed during this stage were:

- React `useState`
- Local component state
- Controlled inputs
- Event handling
- Callback functions
- Props
- Immutable updates
- JavaScript `map()` and `filter()`
- Derived values
- Conditional rendering
- CSS variables
- Light and dark themes

## 5. Limitations

The application currently stores data only in React local state.

Account modifications are not persistent and are lost when the page is refreshed.

The theme preference is also not permanently saved.

Future stages will introduce additional data management functionality.

## 6. Conclusion

AI assistance supported the implementation and documentation of Stage 5.

The resulting code allows bank accounts to be activated, deactivated and deleted through the React interface.

The application also includes a theme toggle and dynamically calculated account counters.