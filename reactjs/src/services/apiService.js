/**
 * API Service
 * 
 * This service provides methods to interact with the EmploymentShift API.
 * In development mode, it returns mock data instead of making live API calls.
 */

import { API_ENDPOINTS, API_CONFIG } from '../config/api';
import { 
  mockHomeData, 
  mockAboutData, 
  mockContactData, 
  mockProductsData, 
  mockEventsData, 
  mockPodcastData, 
  mockAdmissionsData 
} from '../data/mockData';

/**
 * Check if we should use mock data (development mode)
 * @returns {boolean} True if using mock data
 */
const useMockData = () => {
  return import.meta.env.MODE === 'development' || import.meta.env.VITE_USE_MOCK_DATA === 'true';
};

/**
 * Simulate API delay for realistic development experience
 * @param {number} delay - Delay in milliseconds
 * @returns {Promise} Promise that resolves after delay
 */
const simulateDelay = (delay = 500) => {
  return new Promise(resolve => setTimeout(resolve, delay));
};

/**
 * Fetch data from the API with error handling and timeout
 * In development mode, returns mock data instead of making live API calls
 * 
 * @param {string} url - The API endpoint URL
 * @param {Object} options - Fetch options (method, headers, body, etc.)
 * @returns {Promise<any>} - The response data
 */
async function fetchWithTimeout(url, options = {}) {
  // Use mock data in development mode
  if (useMockData()) {
    await simulateDelay(300); // Simulate network delay
    
    // Return mock data based on endpoint
    if (url.includes('/home')) return mockHomeData;
    if (url.includes('/about')) return mockAboutData;
    if (url.includes('/contact')) return mockContactData;
    if (url.includes('/products')) return mockProductsData;
    if (url.includes('/events')) return mockEventsData;
    if (url.includes('/podcasts')) return mockPodcastData;
    if (url.includes('/admissions') || url.includes('/partnerships')) return mockAdmissionsData;
    
    // Default mock response for unknown endpoints
    return { message: 'Mock data not available for this endpoint', data: [] };
  }
  
  // Production API call logic
  const { timeout = API_CONFIG.timeout } = options;
  
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  
  const defaultOptions = {
    ...options,
    headers: {
      ...API_CONFIG.headers,
      ...options.headers,
    },
    signal: controller.signal,
  };
  
  try {
    const response = await fetch(url, defaultOptions);
    clearTimeout(id);
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new Error(`Request timeout after ${timeout}ms`);
    }
    throw error;
  }
}

/**
 * API Service object with methods for each endpoint
 */
const apiService = {
  /**
   * Get home page data
   * @returns {Promise<Object>} Home page data
   */
  getHomeData: () => fetchWithTimeout(API_ENDPOINTS.HOME),
  
  /**
   * Get products data
   * @returns {Promise<Object>} Products data
   */
  getProductsData: () => fetchWithTimeout(API_ENDPOINTS.PRODUCTS),
  
  /**
   * Get podcasts data
   * @param {Object} params - Query parameters
   * @returns {Promise<Object>} Podcasts data
   */
  getPodcastsData: (params = {}) => {
    const queryParams = new URLSearchParams(params).toString();
    const url = `${API_ENDPOINTS.PODCASTS}${queryParams ? `?${queryParams}` : ''}`;
    return fetchWithTimeout(url);
  },
  
  /**
   * Get events data
   * @param {Object} params - Query parameters
   * @returns {Promise<Object>} Events data
   */
  getEventsData: (params = {}) => {
    const queryParams = new URLSearchParams(params).toString();
    const url = `${API_ENDPOINTS.EVENTS}${queryParams ? `?${queryParams}` : ''}`;
    return fetchWithTimeout(url);
  },
  
  /**
   * Get insights data
   * @param {Object} params - Query parameters
   * @returns {Promise<Object>} Insights data
   */
  getInsightsData: (params = {}) => {
    const queryParams = new URLSearchParams(params).toString();
    const url = `${API_ENDPOINTS.INSIGHTS}${queryParams ? `?${queryParams}` : ''}`;
    return fetchWithTimeout(url);
  },
  
  /**
   * Get frameworks data
   * @returns {Promise<Object>} Frameworks data
   */
  getFrameworksData: () => fetchWithTimeout(API_ENDPOINTS.FRAMEWORKS),
  
  /**
   * Get partnerships data
   * @returns {Promise<Object>} Partnerships data
   */
  getPartnershipsData: () => fetchWithTimeout(API_ENDPOINTS.PARTNERSHIPS),
  
  /**
   * Search the website
   * @param {string} query - Search query
   * @returns {Promise<Object>} Search results
   */
  search: (query) => {
    const params = new URLSearchParams({ q: query }).toString();
    return fetchWithTimeout(`${API_ENDPOINTS.SEARCH}?${params}`);
  },
  
  /**
   * Get about page data
   * @returns {Promise<Object>} About page data
   */
  getAboutData: () => fetchWithTimeout(API_ENDPOINTS.ABOUT),
  
  /**
   * Get contact page data
   * @returns {Promise<Object>} Contact page data
   */
  getContactData: () => fetchWithTimeout(API_ENDPOINTS.CONTACT),
  

};

export default apiService;