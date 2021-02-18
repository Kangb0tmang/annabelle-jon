import { useRef, useEffect } from 'react';
import { window } from 'browser-monads';

// Use browser-monads to fix the "window" is not available during server side rendering error
// https://medium.com/@Jense5_/use-document-and-window-with-gatsby-e9a92ee31f36
// https://www.interglobalmedianetwork.com/blog/2019-12-29-the-window-object-react-hooks-and-gatsbyjs/

// useEventListener - solved eventListeners not being removed on unmount/return
// Reference: https://usehooks.com/useEventListener/
const useEventListener = (eventName, handler, element = window) => {
  // Create a ref that stores handler
  const savedHandler = useRef();

  // Update ref.current value if handler changes.
  // This allows our effect below to always get latest handler ...
  // ... without us needing to pass it in effect deps array ...
  // ... and potentially cause effect to re-run every render.
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(
    () => {
      // Make sure element supports addEventListener
      // On
      const isSupported = element && element.addEventListener;
      if (!isSupported) return;

      // Create event listener that calls handler function stored in ref
      const eventListener = (event) => savedHandler.current(event);

      // Add event listener
      element.addEventListener(eventName, eventListener);

      // Remove event listener on cleanup
      return () => {
        element.removeEventListener(eventName, eventListener);
      };
    },
    [eventName, element] // Re-run if eventName or element changes
  );
};

// General helper functions
const debounce = (func, wait = 5, immediate = false) => {
  let timeout;

  return (...rest) => {
    const context = this;
    const args = rest;
    const later = () => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

export { debounce, useEventListener };
