import { debounce } from './debounce.js';
import { throttle } from './throttle.js';

const searchInput = document.getElementById('searchInput');
const clearAllButton = document.getElementById('clearAll');
const normalAPICount = document.getElementById('normalAPICount');
const debounceAPICount = document.getElementById('debounceAPICount');
const throttleAPICount = document.getElementById('throttleAPICount');
const normalAPICalls = document.getElementById('normalAPICalls');
const debounceAPICalls = document.getElementById('debounceAPICalls');
const throttleAPICalls = document.getElementById('throttleAPICalls');

const simulateAPICall = (countElement, logElement, searchTerm) => {
  const count = (parseInt(countElement.textContent) + 1).toString().padStart(2, '0');
  countElement.textContent = count;

  const logItem = document.createElement('p');
  logItem.textContent = `${count} ${searchTerm}`;
  logElement.appendChild(logItem);
};

const debouncedSearch = debounce(() => {
  simulateAPICall(debounceAPICount, debounceAPICalls, searchInput.value);
}, 300);

const throttledSearch = throttle(() => {
  simulateAPICall(throttleAPICount, throttleAPICalls, searchInput.value);
}, 300);

searchInput.addEventListener('input', () => {
  if (searchInput.value) {
    clearAllButton.src = './clear.svg';
  } else {
    clearAllButton.src = './search.svg';
  }

  simulateAPICall(normalAPICount, normalAPICalls, searchInput.value);
  debouncedSearch();
  throttledSearch();
});

clearAllButton.addEventListener('click', () => {
  normalAPICount.textContent = '00';
  debounceAPICount.textContent = '00';
  throttleAPICount.textContent = '00';

  normalAPICalls.innerHTML = '';
  debounceAPICalls.innerHTML = '';
  throttleAPICalls.innerHTML = '';

  searchInput.value = '';
  clearAllButton.src = './search.svg';
});
