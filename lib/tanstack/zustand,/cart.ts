import { CartItem } from '@/type';

import {persist, createJSONStorage} from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';


type CartStore = {
    items: CartItem[];
    additem: (item: CartItem) => void;
    removeItem: (id: number) => void;
    clear: () => void;
}

export const useCartStore = create<CartStore>()(
persist((set) => ({
    items: [],
    additem: (item) => 
        set((state) => {
            const existingItem = state.items.find((i) => i.id === item.id);
            if (existingItem) { 
                return { items: state.items.map((i) =>
                       ( i.id === item.id ? { ...i, qty: i.qty + 1 } : i )) };
                }
                return { items: [...state.items, { ...item, qty: 1 }] };
            }),
    removeItem: (id: number) => set((state) => {
        const existingItem = state.items.find((i) => i.id === id);
        if (existingItem && existingItem.qty > 1) {
            return { items: state.items.map((i) => (i.id === id ? { ...i, qty: i.qty - 1 } : i)) };
        }
        return { items: state.items.filter((i) => i.id !== id) };
    }),
    clear: () => {},
}),{name:'cart', storage: createJSONStorage(() => AsyncStorage),}));
