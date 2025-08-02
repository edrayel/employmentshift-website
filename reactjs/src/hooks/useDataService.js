/**
 * React hook for data service integration
 * Provides easy access to data service methods with React state management
 */

import { useState, useEffect } from 'react';
import { dataService } from '../services/dataService.js';

/**
 * Custom hook for fetching data with loading and error states
 * @param {Function} dataFetcher - Function that returns a promise with data
 * @param {Array} dependencies - Dependencies array for useEffect
 * @returns {Object} { data, loading, error, refetch }
 */
export function useAsyncData(dataFetcher, dependencies = []) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await dataFetcher();
      setData(result);
    } catch (err) {
      setError(err.message || 'An error occurred while fetching data');
      console.error('Data fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, dependencies);

  return {
    data,
    loading,
    error,
    refetch: fetchData,
  };
}

/**
 * Hook for home page data
 * @returns {Object} { data, loading, error, refetch }
 */
export function useHomeData() {
  return useAsyncData(() => dataService.getHomeData());
}

/**
 * Hook for about page data
 * @returns {Object} { data, loading, error, refetch }
 */
export function useAboutData() {
  return useAsyncData(() => dataService.getAboutData());
}

/**
 * Hook for contact page data
 * @returns {Object} { data, loading, error, refetch }
 */
export function useContactData() {
  return useAsyncData(() => dataService.getContactData());
}

/**
 * Hook for products/services data
 * @returns {Object} { data, loading, error, refetch }
 */
export function useProductsData() {
  return useAsyncData(() => dataService.getProductsData());
}

/**
 * Hook for events data
 * @returns {Object} { data, loading, error, refetch }
 */
export function useEventsData() {
  return useAsyncData(() => dataService.getEventsData());
}

/**
 * Hook for podcast data
 * @returns {Object} { data, loading, error, refetch }
 */
export function usePodcastData() {
  return useAsyncData(() => dataService.getPodcastData());
}

/**
 * Hook for admissions data
 * @returns {Object} { data, loading, error, refetch }
 */
export function useAdmissionsData() {
  return useAsyncData(() => dataService.getAdmissionsData());
}

/**
 * Hook for event registration
 * @returns {Object} { register, loading, error, success }
 */
export function useEventRegistration() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const register = async (eventId, registrationData) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);
      
      const result = await dataService.registerForEvent(eventId, registrationData);
      setSuccess(true);
      return result;
    } catch (err) {
      setError(err.message || 'Registration failed');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    register,
    loading,
    error,
    success,
  };
}

/**
 * Hook for contact form submission
 * @returns {Object} { submit, loading, error, success }
 */
export function useContactForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const submit = async (contactData) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);
      
      const result = await dataService.submitContactForm(contactData);
      setSuccess(true);
      return result;
    } catch (err) {
      setError(err.message || 'Form submission failed');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    submit,
    loading,
    error,
    success,
  };
}

/**
 * Hook to get current data service mode
 * @returns {Object} { mode, isProtoMode }
 */
export function useDataMode() {
  const mode = dataService.getMode();
  const isProtoMode = dataService.isProtoMode();
  
  return {
    mode,
    isProtoMode,
  };
}