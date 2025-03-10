
## [Coding Challenge] Thu Zin Htet - Frontend Developer Internship

### Introduction

Welcome to the **Search Functionality Project**! This project is a React application built with **Vite** and **TypeScript**. It focuses on providing robust search functionality with efficient loading states, comprehensive error handling, responsive UI, dark mode/light mode based on the system, and optimized performance by preventing unnecessary re-renders using memo and useCallback.JsonPlaceHolder api does not support search query like ?search . So I make search feature in frontend using filter method of `JavaScript`

Key features include:
- **Search Functionality**: Allows users to search data efficiently.
- **Loading States**: Provides visual feedback during data fetching.
- **Error Handling**: Implements try-catch blocks and error boundaries to ensure a smooth user experience.
- **Performance Optimization**: Uses React’s performance optimization techniques like `useMemo` and `useCallback` to ensure a fast, responsive application.

Dive in to explore the code and see how these features are implemented!

---

## Setup Instructions

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/thuzinhtet04/searchFeatureCodeChallangeFrontend
cd searchFeatureCodeChallangeFrontend
```

### 2️⃣ Install Dependencies

```sh
npm install
```
### 3️⃣ Set up .env file 

```sh
VITE_BASE_URL = "https://jsonplaceholder.typicode.com"
```

### 34️⃣ Start the Development Server

```sh
npm run dev
```

### 5️⃣  Build for Production

```sh
npm run build
```

---

## Approach & Implementation

### Overview

- **Components**: Reusable and responsive UI elements.
- **Hooks**: Custom hooks for API fetching and state management.
- **Error Handling**: Try-catch blocks and error boundaries for robust error handling.

### API Handling

We use `fetch` inside a **custom hook** to separate concerns and enhance reusability.

### Performance Optimization

- **`memo`** and **`useCallback`** for memoizing expensive computations.
- **Error Boundaries** to catch component errors without breaking the whole app.

### UI/UX Enhancements

- **Loading states** to improve user experience.
- **Responsive design** for mobile and desktop compatibility.
