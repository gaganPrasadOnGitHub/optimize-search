# Optimize Search Demo

This project demonstrates the differences in API call handling between three methods: normal searching, debouncing, and throttling. It showcases how each method impacts the number of API requests made during user input in a search field.

- Normal Searching: Makes an API call with every keystroke.
- Debouncing: Reduces the number of API calls by waiting for the user to stop typing before making a request.
- Throttling: Limits the number of API calls to a fixed rate, ensuring that requests are spaced out over time.

## Getting Started

- Clone the repository.
- Open `index.html` in your browser.
- Start typing in the search input to see how many API calls are made under each method.
