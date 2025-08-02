/**
 * Data Service - Controls data source based on environment mode
 * Modes: 'proto' (mock data) or 'live' (API data)
 */

import { 
  mockHomeData, 
  mockAboutData, 
  mockContactData, 
  mockEventsData,
  mockProductsData,
  mockPodcastData,
  mockAdmissionsData 
} from '../data/mockData.js';

// Get data mode from environment variables
const APP_MODE = import.meta.env.VITE_APP_MODE || 'proto';
const API_BASE_URL = import.meta.env.VITE_WORDPRESS_BASE_URL;
const WP_API_URL = import.meta.env.VITE_WP_API_URL;

/**
 * Generic API fetch function with error handling
 * @param {string} endpoint - API endpoint
 * @param {object} options - Fetch options
 * @returns {Promise<object>} API response data
 */
async function fetchFromAPI(endpoint, options = {}) {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API fetch error:', error);
    throw error;
  }
}

/**
 * Data service class that handles both mock and live data
 */
class DataService {
  constructor() {
    this.mode = APP_MODE;
    console.log(`DataService initialized in ${this.mode} mode`);
  }

  /**
   * Get current data mode
   * @returns {string} Current mode ('proto' or 'live')
   */
  getMode() {
    return this.mode;
  }

  /**
   * Check if using mock data
   * @returns {boolean} True if using mock data
   */
  isProtoMode() {
    return this.mode === 'proto';
  }

  /**
   * Get home page data
   * @returns {Promise<object>} Home page data
   */
  async getHomeData() {
    if (this.isProtoMode()) {
      return Promise.resolve(mockHomeData);
    }
    
    try {
      return await fetchFromAPI('/pages/home');
    } catch (error) {
      console.warn('Falling back to mock data due to API error:', error);
      return mockHomeData;
    }
  }

  /**
   * Get about page data
   * @returns {Promise<object>} About page data
   */
  async getAboutData() {
    if (this.isProtoMode()) {
      return Promise.resolve(mockAboutData);
    }
    
    try {
      return await fetchFromAPI('/pages/about');
    } catch (error) {
      console.warn('Falling back to mock data due to API error:', error);
      return mockAboutData;
    }
  }

  /**
   * Get contact page data
   * @returns {Promise<object>} Contact page data
   */
  async getContactData() {
    if (this.isProtoMode()) {
      return Promise.resolve(mockContactData);
    }
    
    try {
      return await fetchFromAPI('/pages/contact');
    } catch (error) {
      console.warn('Falling back to mock data due to API error:', error);
      return mockContactData;
    }
  }

  /**
   * Get products/services data
   * @returns {Promise<object>} Products data
   */
  async getProductsData() {
    if (this.isProtoMode()) {
      return Promise.resolve(mockProductsData);
    }
    
    try {
      return await fetchFromAPI('/products');
    } catch (error) {
      console.warn('Falling back to mock data due to API error:', error);
      return mockProductsData;
    }
  }

  /**
   * Get events data
   * @returns {Promise<object>} Events data
   */
  async getEventsData() {
    if (this.isProtoMode()) {
      return Promise.resolve(mockEventsData);
    }
    
    try {
      return await fetchFromAPI('/events');
    } catch (error) {
      console.warn('Falling back to mock data due to API error:', error);
      return mockEventsData;
    }
  }

  /**
   * Get podcast data
   * @returns {Promise<object>} Podcast data
   */
  async getPodcastData() {
    if (this.isProtoMode()) {
      return Promise.resolve(mockPodcastData);
    }
    
    try {
      return await fetchFromAPI('/podcasts');
    } catch (error) {
      console.warn('Falling back to mock data due to API error:', error);
      return mockPodcastData;
    }
  }

  /**
   * Get admissions data
   * @returns {Promise<object>} Admissions data
   */
  async getAdmissionsData() {
    if (this.isProtoMode()) {
      return Promise.resolve(mockAdmissionsData);
    }
    
    try {
      return await fetchFromAPI('/admissions');
    } catch (error) {
      console.warn('Falling back to mock data due to API error:', error);
      return mockAdmissionsData;
    }
  }

  /**
   * Register for an event
   * @param {string} eventId - Event ID
   * @param {object} registrationData - Registration form data
   * @returns {Promise<object>} Registration response
   */
  async registerForEvent(eventId, registrationData) {
    if (this.isProtoMode()) {
      // Simulate registration success in proto mode
      return Promise.resolve({
        success: true,
        message: 'Registration successful (proto mode)',
        registrationId: `proto_${Date.now()}`,
      });
    }
    
    try {
      return await fetchFromAPI(`/events/${eventId}/register`, {
        method: 'POST',
        body: JSON.stringify(registrationData),
      });
    } catch (error) {
      console.error('Event registration failed:', error);
      throw error;
    }
  }

  /**
   * Submit contact form
   * @param {object} contactData - Contact form data
   * @returns {Promise<object>} Submission response
   */
  async submitContactForm(contactData) {
    if (this.isProtoMode()) {
      // Simulate form submission success in proto mode
      return Promise.resolve({
        success: true,
        message: 'Message sent successfully (proto mode)',
        submissionId: `proto_${Date.now()}`,
      });
    }
    
    try {
      return await fetchFromAPI('/contact', {
        method: 'POST',
        body: JSON.stringify(contactData),
      });
    } catch (error) {
      console.error('Contact form submission failed:', error);
      throw error;
    }
  }
}

// Export singleton instance
export const dataService = new DataService();
export default dataService;