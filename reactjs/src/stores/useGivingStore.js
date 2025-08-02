import { create } from "zustand";
import { dataService } from "@/services/dataService";

const useGivingStore = create((set, get) => ({
  // State variables for JSON response objects
  impactAreas: [],
  waysToGive: [],
  donationPortalUrl: "",
  isLoading: false,
  error: null,

  // Fetch all data
  fetchAllData: async () => {
    set({ isLoading: true, error: null });

    try {
      // Note: Using mock data as giving data is not yet implemented in dataService
      const data = {
        impact_areas: [],
        ways_to_give: [],
        donation_portal_url: ""
      };

      set({
        impactAreas: Array.isArray(data.impact_areas) ? data.impact_areas : [],
        waysToGive: Array.isArray(data.ways_to_give) ? data.ways_to_give : [],
        donationPortalUrl:
          typeof data.donation_portal_url === "string"
            ? data.donation_portal_url
            : "",
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
  setImpactAreas: (areas) =>
    set({ impactAreas: Array.isArray(areas) ? areas : [] }),
  setWaysToGive: (ways) => set({ waysToGive: Array.isArray(ways) ? ways : [] }),
  setDonationPortalUrl: (url) =>
    set({ donationPortalUrl: typeof url === "string" ? url : "" }),

  // Utility methods
  clearAllData: () => {
    set({
      impactAreas: [],
      waysToGive: [],
      donationPortalUrl: "",
      error: null,
    });
  },

  clearError: () => {
    set({ error: null });
  },

  // Getters for computed values
  getImpactAreaByTitle: (title) => {
    const { impactAreas } = get();
    return impactAreas.find(
      (area) => area.title.toLowerCase() === title.toLowerCase()
    );
  },

  getWayToGiveByTitle: (title) => {
    const { waysToGive } = get();
    return waysToGive.find(
      (way) => way.title.toLowerCase() === title.toLowerCase()
    );
  },
}));

export default useGivingStore;
