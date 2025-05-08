import { create } from "zustand";

const useConcertStore = create((set) => ({
  cart: {},
  events: [],
  isLoading: true,
  error: null,

  setEvents: (events) => set({ events }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),
  clearCart: () => set({ cart: {} }),
  clearEvents: () => set({ events: [] }),

  fetchEvents: async () => {
    
    set({ isLoading: true, error: null });
    try {
      const response = await fetch('https://santosnr6.github.io/Data/events.json');
      if (!response.ok) {
        throw new Error ('Failed APi fetch');
      }
      const result = await response.json();

      if (result?.events && Array.isArray(result.events)) {
        set({ events: result.events });
      } else {
        set({ error: "Invalid API"});
      }
    } catch (err) {
      set({ error: err.message });
    } finally {
      set({ isLoading: false });
    }
  },

  addTicket: (eventId) =>
    set((state) => {
      const currentQty = state.cart[eventId] || 0;
      console.log(currentQty);
      return {
        cart: {
          ...state.cart,
          [eventId]: currentQty + 1,
        },
      };
    }),

  removeTicket: (eventId) =>
    set((state) => {
      const currentQty = state.cart[eventId] || 0;
      if (currentQty <= 1) {
        const { [eventId]: _, ...rest } = state.cart;
        return { cart: rest };
      } else {
        return {
          cart: {
            ...state.cart,
            [eventId]: currentQty - 1,
          },
        };
      }
    }),

  getTicketCount: (eventId) => (state) => state.cart[eventId] || 0,

}));

export default useConcertStore;
