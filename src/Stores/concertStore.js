import { create } from "zustand";

const useConcertStore = create((set) => ({
    concerts: [],
    cart: {},
    setConcerts: (data) => set ({ concerts: data}),

    addTicket: (id) =>
        set((state) => ({
            cart: {
                ...state.cart,
            [id]: (state.cart[id] || 0) + 1,
            },
        })),

    removeTicket: (id) =>
        set((state) => {
            const current = state.cart[id] || 0;
            if (current <= 1) {
                const { [id]: _, ...rest} = state.cart;
                return { cart: rest};
            }
        return {
            cart: {
                ...state.cart,
                [id]: current -1,
            },
            };
        }),
}));

export default useConcertStore;