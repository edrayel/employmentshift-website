import { create } from "zustand";
import { dataService } from "@/services/dataService";

const useCampusStore = create((set, get) => ({
  // State variables for JSON response objects
  studentOrganizations: [],
  housingOptions: [],
  diningServices: [],
  recreationFacilities: [],
  supportServices: [],
  campusTraditions: [],

  // Loading state
  isLoading: false,

  // Error state
  error: null,

  // Fetch all data
  fetchAllData: async () => {
    set({ isLoading: true, error: null });

    try {
      // Note: Using mock data as campus life data is not yet implemented in dataService
      const data = {
        student_organizations: [],
        housing_options: [],
        dining_services: [],
        recreation_facilities: [],
        support_services: [],
        campus_traditions: []
      };

      set({
        studentOrganizations: data.student_organizations || [],
        housingOptions: data.housing_options || [],
        diningServices: data.dining_services || [],
        recreationFacilities: data.recreation_facilities || [],
        supportServices: data.support_services || [],
        campusTraditions: data.campus_traditions || [],
        isLoading: false,
        error: null,
      });

      return data;
    } catch (error) {
      set({
        isLoading: false,
        error: error.message,
      });
      throw error;
    }
  },

  // Manual setters for individual sections
  setStudentOrganizations: (organizations) =>
    set({ studentOrganizations: organizations }),
  setHousingOptions: (housing) => set({ housingOptions: housing }),
  setDiningServices: (dining) => set({ diningServices: dining }),
  setRecreationFacilities: (facilities) =>
    set({ recreationFacilities: facilities }),
  setSupportServices: (services) => set({ supportServices: services }),
  setCampusTraditions: (traditions) => set({ campusTraditions: traditions }),

  // Utility methods
  clearAllData: () => {
    set({
      studentOrganizations: [],
      housingOptions: [],
      diningServices: [],
      recreationFacilities: [],
      supportServices: [],
      campusTraditions: [],
      error: null,
    });
  },

  clearError: () => {
    set({ error: null });
  },

  // Getters for computed values
  getAvailableHousingOptions: () => {
    const { housingOptions } = get();
    return housingOptions.filter((housing) => housing.available);
  },

  getHousingByType: (type) => {
    const { housingOptions } = get();
    return housingOptions.filter(
      (housing) => housing.type.toLowerCase() === type.toLowerCase()
    );
  },

  getHousingByName: (name) => {
    const { housingOptions } = get();
    return housingOptions.find(
      (housing) => housing.name.toLowerCase() === name.toLowerCase()
    );
  },
}));

export default useCampusStore;
