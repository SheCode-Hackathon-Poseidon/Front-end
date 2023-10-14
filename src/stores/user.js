import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

let store = (set, get) => ({
  user: null,
  token: null,
  getUser: () => get().user,
  setDataUser: (data) => {
    set((state) => ({
      ...state,
      user: data.user,
      token: data.token,
    }))
  },
  logout: async () => {
    set((state) => ({
      ...state,
      user: null,
      token: null,
    }))
  },
})

store = devtools(store)
store = persist(store, { name: 'user' })
export default create(store)
