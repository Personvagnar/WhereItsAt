import { create } from "zustand";

const useConcertStore = create((set) => ({
  cart: {},

  // Add a ticket to the cart
  addTicket: (eventId) =>
    set((state) => {
      const currentQty = state.cart[eventId] || 0;
      return {
        cart: {
          ...state.cart,
          [eventId]: currentQty + 1,
        },
      };
    }),

  // Remove a ticket from the cart
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

  // Get ticket count
  getTicketCount: (eventId) => (state) => state.cart[eventId] || 0,

  // Optional: clear cart
  clearCart: () => set({ cart: {} }),
}));

export default useConcertStore;
