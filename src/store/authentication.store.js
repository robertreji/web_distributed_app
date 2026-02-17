import { create } from 'zustand'

const useAuthenticate = create((set) => ({
  isAuthenticated: false,

  authenticate: () => 
    set({ isAuthenticated: true }),

  unAuthenticate: () => 
    set({ isAuthenticated: false }),
}))

export { useAuthenticate }