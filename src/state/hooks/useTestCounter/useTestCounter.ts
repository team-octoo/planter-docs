import create from 'zustand'
import { compare } from '../../../utils/vendors/zustand/algorythms';

interface UseTestCounter {
    count: number;
    
    setToOne: () => void;
    clearCount: () => void;
    increase: () => void;
}

const useTestCounter = create<UseTestCounter>((set) => ({
    count: 0,
    setToOne: () => set((state) => ({ count: 1 })),
    clearCount: () => set((state) => ({ count: 0 })),
    increase: () => set((state) => ({ ...state, count: state.count + 1 }))
}))

export default useTestCounter;