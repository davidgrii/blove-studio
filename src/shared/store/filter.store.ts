import { create } from 'zustand'

interface IFilterStore {
  selectedCategory: string
  setSelectedCategory: (category: string) => void
}

export const useFilterStore = create<IFilterStore>((set) => ({
  selectedCategory: 'All projects',
  setSelectedCategory: (category) => set({ selectedCategory: category })
}))
