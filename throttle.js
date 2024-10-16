export const throttle = (callbackFunction, delay) => {
  let isTicking = false;
  return function (...args) {
    if (!isTicking) {
      isTicking = true;

      callbackFunction(...args);
      setTimeout(() => {
        isTicking = false;
      }, delay);
    }
  };
};
