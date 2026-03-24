# Product Search App (Angular)

## Overview

This project is a reactive product search application built using Angular. It demonstrates real-world frontend patterns such as debounced search, request cancellation, and UI state management using RxJS. The application fetches product data from an external API and allows users to search dynamically based on product titles.

---

## Features

- Reactive search input using Angular Reactive Forms
- Debounced input (500ms) to optimize API calls
- Distinct input handling to avoid redundant requests
- Request cancellation using switchMap to process only the latest search
- Loading state indication during API calls
- Error handling for failed API responses
- Empty state handling when no results are found
- Responsive product listing UI

---

## Tech Stack

- Angular (Standalone Components)
- RxJS
- TypeScript
- HTML / CSS

---

## API

This project uses the FakeStore API:

[https://fakestoreapi.com/products](https://fakestoreapi.com/products)

Note: The API does not support server-side filtering. All search functionality is implemented on the client side.

---

## Key Concepts Covered

- Reactive Forms (FormControl, valueChanges)
- RxJS operators: debounceTime, distinctUntilChanged, switchMap, catchError, finalize
- Handling asynchronous data streams
- Separation of concerns using a service layer
- UI state management (loading, error, empty states)

---

## Project Structure

```
src/
  app/
    product.model.ts
    product.service.ts
    app.component.ts
    app.component.html
    app.component.css
```

---

## Getting Started

### Prerequisites

- Node.js (v16 or above recommended)
- Angular CLI

### Installation

```bash
npm install
```

### Run the application

```bash
ng serve
```

Open your browser and navigate to:

[http://localhost:4200](http://localhost:4200)

---

## Future Improvements

- Server-side filtering and pagination
- Category-based filtering and sorting
- Caching of previous search results
- Unit and integration testing
- Improved UI with skeleton loaders

---
