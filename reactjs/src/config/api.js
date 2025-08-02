/**
 * API Configuration for EmploymentShift
 * This file contains the configuration for the EmploymentShift API endpoints.
 */

// Base API URL from environment variables
const API_BASE_URL = import.meta.env.VITE_WP_API_URL || 'https://employmentshift.com/wp-json/wp/v2';
const WORDPRESS_BASE_URL = import.meta.env.VITE_WORDPRESS_BASE_URL || 'https://employmentshift.com';

// EmploymentShift API namespace
const API_NAMESPACE = 'employmentshift/v1';

// Full base URL for EmploymentShift API endpoints
const EMPLOYMENTSHIFT_API_BASE = `${API_BASE_URL}/${API_NAMESPACE}`;

// API endpoints
const API_ENDPOINTS = {
  HOME: `${EMPLOYMENTSHIFT_API_BASE}/home`,
  ABOUT: `${EMPLOYMENTSHIFT_API_BASE}/about`,
  CONTACT: `${EMPLOYMENTSHIFT_API_BASE}/contact`,
  PRODUCTS: `${EMPLOYMENTSHIFT_API_BASE}/products`,
  EVENTS: `${EMPLOYMENTSHIFT_API_BASE}/events`,
  PODCASTS: `${EMPLOYMENTSHIFT_API_BASE}/podcasts`,
  ADMISSIONS: `${EMPLOYMENTSHIFT_API_BASE}/admissions`,
  PARTNERSHIPS: `${EMPLOYMENTSHIFT_API_BASE}/partnerships`,
  INSIGHTS: `${EMPLOYMENTSHIFT_API_BASE}/insights`,
  FRAMEWORKS: `${EMPLOYMENTSHIFT_API_BASE}/frameworks`,
  SEARCH: `${EMPLOYMENTSHIFT_API_BASE}/search`,
  
  // WordPress standard endpoints (if needed)
  WP_POSTS: `${API_BASE_URL}/wp/v2/posts`,
  WP_PAGES: `${API_BASE_URL}/wp/v2/pages`,
  WP_MEDIA: `${API_BASE_URL}/wp/v2/media`,
};

// API configuration
const API_CONFIG = {
  // Default headers for API requests
  headers: {
    'Content-Type': 'application/json',
    'X-API-Key': import.meta.env.VITE_API_KEY,
  },
  
  // Default timeout for API requests (in milliseconds)
  timeout: 10000,
};

export { API_BASE_URL, API_NAMESPACE, EMPLOYMENTSHIFT_API_BASE, API_ENDPOINTS, API_CONFIG, WORDPRESS_BASE_URL };