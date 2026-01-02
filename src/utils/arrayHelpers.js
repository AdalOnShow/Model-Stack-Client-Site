/**
 * Utility functions for safe array operations
 */

/**
 * Ensures a value is an array, returns empty array if not
 * @param {any} value - The value to check
 * @returns {Array} - The value if it's an array, otherwise empty array
 */
export const ensureArray = (value) => {
  return Array.isArray(value) ? value : [];
};

/**
 * Safe map function that checks if the value is an array before mapping
 * @param {any} value - The value to map
 * @param {Function} callback - The mapping function
 * @returns {Array} - Mapped array or empty array if value is not an array
 */
export const safeMap = (value, callback) => {
  return Array.isArray(value) ? value.map(callback) : [];
};

/**
 * Validates API response data and ensures it's an array
 * @param {any} data - The API response data
 * @param {string} fallbackMessage - Optional error message for logging
 * @returns {Array} - The data if it's an array, otherwise empty array
 */
export const validateArrayResponse = (data, fallbackMessage = 'Invalid array data received') => {
  if (!Array.isArray(data)) {
    console.warn(fallbackMessage, data);
    return [];
  }
  return data;
};